// StoryCraft Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const AppState = {
    activeTab: 'today',
    selectedDay: 1,
    activePhase: 1, // 1: Concept, 2: Anatomy, 3: Guided, 4: Voice
    timerRemaining: 600, // 10 minutes in seconds
    timerInterval: null,
    isTimerRunning: false,
    recorder: null,
    recordedAudioUrl: null,
    builderFramework: 'abt',
    vaultFilter: 'all',
    vaultSearchQuery: '',
    rubricScores: { hook: 4, structure: 4, conciseness: 4, landing: 4 },
    gymPrompt: null,
    gymTimer: null,
    gymSeconds: 0,
    gymState: 'idle' // idle, prep, recording, done
  };

  // Initialize Settings & Themes
  const settings = StoryStorage.getSettings();
  document.documentElement.setAttribute('data-theme', settings.theme || 'dark');
  SoundFX.enabled = settings.sound !== false;

  // Initialize Voice Recorder instance
  AppState.recorder = new VoiceRecorder({
    onTick: (sec) => {
      const el = document.getElementById('rec-time-display');
      if (el) el.textContent = AppState.recorder.formatTime(sec);
    },
    onFinish: (url, blob, totalSec) => {
      AppState.recordedAudioUrl = url;
      showAudioPreview(url, totalSec);
    }
  });

  // Load Initial Day from Storage
  AppState.selectedDay = StoryStorage.getCurrentDay();
  updateTopStreak();

  // Navigation Setup
  setupNavigation();

  // Render Initial Views
  renderTodayView();
  renderPathView();
  renderFrameworksView();
  initBuilderView();
  renderVaultView();
  initGymView();
  initSettingsView();

  // ----------------------------------------------------
  // NAVIGATION & TAB SWITCHING
  // ----------------------------------------------------
  function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.dataset.tab;
        switchTab(tab);
        SoundFX.tap();
      });
    });

    // Theme toggle button in top bar
    const themeToggle = document.getElementById('theme-toggle-btn');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        const s = StoryStorage.getSettings();
        s.theme = next;
        StoryStorage.saveSettings(s);
        themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
        SoundFX.tap();
      });
      themeToggle.textContent = (settings.theme || 'dark') === 'dark' ? '🌙' : '☀️';
    }
  }

  function switchTab(tabId) {
    AppState.activeTab = tabId;
    document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    const targetView = document.getElementById(`tab-${tabId}`);
    const targetNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);

    if (targetView) targetView.classList.add('active');
    if (targetNav) targetNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tabId === 'today') renderTodayView();
    else if (tabId === 'path') renderPathView();
    else if (tabId === 'vault') renderVaultView();
  }

  function updateTopStreak() {
    const streak = StoryStorage.getStreak();
    const el = document.getElementById('streak-count-top');
    if (el) el.textContent = streak;
  }

  // ----------------------------------------------------
  // TODAY TAB (10-MINUTE DAILY SESSION)
  // ----------------------------------------------------
  function renderTodayView() {
    const day = AppState.selectedDay;
    const lesson = StoryCurriculum.find(l => l.day === day) || StoryCurriculum[0];
    const isCompleted = StoryStorage.isDayCompleted(day);

    document.getElementById('today-day-badge').textContent = `Day ${lesson.day} of 30 • Week ${lesson.week}`;
    document.getElementById('today-title').textContent = lesson.title;
    document.getElementById('today-subtitle').textContent = lesson.subtitle;

    // Phase 1: Concept
    document.getElementById('concept-spark').textContent = lesson.concept.spark;
    document.getElementById('concept-rule').textContent = lesson.concept.rule;
    document.getElementById('concept-mindset').textContent = `💡 Mindset: "${lesson.concept.mindset}"`;

    // Phase 2: Anatomy
    document.getElementById('bad-example-title').textContent = lesson.anatomy.bad.title;
    document.getElementById('bad-example-text').textContent = lesson.anatomy.bad.text;
    document.getElementById('good-example-title').textContent = lesson.anatomy.good.title;
    document.getElementById('good-example-text').textContent = lesson.anatomy.good.text;

    // Phase 3: Guided Scaffold
    document.getElementById('scaffold-prompt-title').textContent = lesson.exercise.prompt;
    const scaffoldContainer = document.getElementById('scaffold-fields-container');
    scaffoldContainer.innerHTML = '';

    // Load saved draft if any
    const savedNote = StoryStorage.getDayNote(day) || {};

    lesson.exercise.scaffold.forEach((field, idx) => {
      const fieldId = `day_${day}_field_${idx}`;
      const savedVal = savedNote[fieldId] || '';
      const div = document.createElement('div');
      div.className = 'input-group';
      div.innerHTML = `
        <label class="input-label">${field.label}</label>
        <textarea id="${fieldId}" class="text-area scaffold-input" placeholder="${field.placeholder}">${savedVal}</textarea>
      `;
      scaffoldContainer.appendChild(div);

      const textarea = div.querySelector('textarea');
      textarea.addEventListener('input', () => {
        savedNote[fieldId] = textarea.value;
        StoryStorage.saveDayNote(day, savedNote);
        updatePrompterPreview();
      });
    });

    // Phase 4: Voice & Recording
    document.getElementById('voice-prompt-text').textContent = lesson.voicePrompt;
    updatePrompterPreview();

    // Reset voice recorder state
    resetVoiceRecorderUi();

    // Setup Stepper Nav
    setupPhaseStepper();

    // Check completed state
    const markDoneBtn = document.getElementById('btn-complete-day');
    if (markDoneBtn) {
      if (isCompleted) {
        markDoneBtn.textContent = '✓ Day Completed (Review Again)';
        markDoneBtn.classList.remove('btn-primary');
        markDoneBtn.classList.add('btn-secondary');
      } else {
        markDoneBtn.textContent = '🏆 Mark Day Complete & Save to Vault';
        markDoneBtn.classList.remove('btn-secondary');
        markDoneBtn.classList.add('btn-primary');
      }
    }
  }

  function setupPhaseStepper() {
    const steps = document.querySelectorAll('.stepper-nav .step-item');
    steps.forEach(step => {
      step.addEventListener('click', () => {
        const phaseNum = parseInt(step.dataset.phase, 10);
        goToPhase(phaseNum);
        SoundFX.tap();
      });
    });

    // Next Phase Buttons
    document.getElementById('btn-phase-1-next')?.addEventListener('click', () => goToPhase(2));
    document.getElementById('btn-phase-2-next')?.addEventListener('click', () => goToPhase(3));
    document.getElementById('btn-phase-3-next')?.addEventListener('click', () => {
      updatePrompterPreview();
      goToPhase(4);
    });
  }

  function goToPhase(phaseNum) {
    AppState.activePhase = phaseNum;
    document.querySelectorAll('.stepper-nav .step-item').forEach(s => {
      const p = parseInt(s.dataset.phase, 10);
      s.classList.toggle('active', p === phaseNum);
    });
    document.querySelectorAll('.phase-panel').forEach(panel => {
      const p = parseInt(panel.dataset.phase, 10);
      panel.classList.toggle('active', p === phaseNum);
    });

    if (phaseNum === 4) {
      updatePrompterPreview();
    }
  }

  function updatePrompterPreview() {
    const day = AppState.selectedDay;
    const lesson = StoryCurriculum.find(l => l.day === day) || StoryCurriculum[0];
    const savedNote = StoryStorage.getDayNote(day) || {};

    let fullStory = '';
    lesson.exercise.scaffold.forEach((field, idx) => {
      const val = savedNote[`day_${day}_field_${idx}`];
      if (val && val.trim()) {
        fullStory += `${field.label.split(':')[0]}: ${val.trim()}\n\n`;
      }
    });

    const prompter = document.getElementById('voice-prompter-text');
    const wordCountEl = document.getElementById('prompter-word-count');
    const estTimeEl = document.getElementById('prompter-est-time');

    if (!fullStory.trim()) {
      prompter.innerHTML = '<em>Your story draft from Phase 3 will appear here as your teleprompter cue sheet...</em>';
      if (wordCountEl) wordCountEl.textContent = '0 words';
      if (estTimeEl) estTimeEl.textContent = '~0s';
    } else {
      prompter.textContent = fullStory;
      const words = fullStory.trim().split(/\s+/).filter(w => w.length > 0).length;
      const pace = (settings.speakingPaceWpm || 130);
      const estSec = Math.round((words / pace) * 60);
      if (wordCountEl) wordCountEl.textContent = `${words} words`;
      if (estTimeEl) estTimeEl.textContent = `~${estSec} sec`;
    }
  }

  // 10-Minute Countdown Timer
  const timerToggleBtn = document.getElementById('btn-timer-toggle');
  const timerResetBtn = document.getElementById('btn-timer-reset');
  const timerClockEl = document.getElementById('timer-clock');

  function updateTimerDisplay() {
    const m = Math.floor(AppState.timerRemaining / 60);
    const s = AppState.timerRemaining % 60;
    if (timerClockEl) {
      timerClockEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
  }

  if (timerToggleBtn) {
    timerToggleBtn.addEventListener('click', () => {
      if (AppState.isTimerRunning) {
        clearInterval(AppState.timerInterval);
        AppState.isTimerRunning = false;
        timerToggleBtn.innerHTML = '▶ Start 10m';
        timerToggleBtn.classList.remove('paused');
      } else {
        SoundFX.chime();
        AppState.isTimerRunning = true;
        timerToggleBtn.innerHTML = '⏸ Pause';
        timerToggleBtn.classList.add('paused');

        AppState.timerInterval = setInterval(() => {
          if (AppState.timerRemaining > 0) {
            AppState.timerRemaining--;
            updateTimerDisplay();
            if (AppState.timerRemaining === 30) {
              SoundFX.tick();
            }
          } else {
            clearInterval(AppState.timerInterval);
            AppState.isTimerRunning = false;
            timerToggleBtn.innerHTML = '▶ Restart';
            timerToggleBtn.classList.remove('paused');
            SoundFX.fanfare();
            alert('🎉 10 Minutes completed! Amazing work on your daily storytelling session.');
          }
        }, 1000);
      }
    });
  }

  if (timerResetBtn) {
    timerResetBtn.addEventListener('click', () => {
      clearInterval(AppState.timerInterval);
      AppState.isTimerRunning = false;
      AppState.timerRemaining = 600;
      updateTimerDisplay();
      if (timerToggleBtn) {
        timerToggleBtn.innerHTML = '▶ Start 10m';
        timerToggleBtn.classList.remove('paused');
      }
      SoundFX.tap();
    });
  }

  // Voice Recording UI
  const recBtn = document.getElementById('btn-mic-toggle');
  const recStatus = document.getElementById('rec-status-text');

  function resetVoiceRecorderUi() {
    if (recBtn) recBtn.classList.remove('recording');
    if (recStatus) recStatus.textContent = 'Tap to start voice practice';
    const preview = document.getElementById('audio-preview-container');
    if (preview) preview.innerHTML = '';
  }

  if (recBtn) {
    recBtn.addEventListener('click', async () => {
      if (!AppState.recorder.isRecording) {
        const ok = await AppState.recorder.start();
        if (ok) {
          recBtn.classList.add('recording');
          if (recStatus) recStatus.textContent = '🎙️ Recording... speak your story!';
          SoundFX.playTone(600, 'sine', 0.1);
        }
      } else {
        AppState.recorder.stop();
        recBtn.classList.remove('recording');
        if (recStatus) recStatus.textContent = '✓ Recording finished! Listen below.';
        SoundFX.playTone(400, 'sine', 0.1);
      }
    });
  }

  function showAudioPreview(url, totalSec) {
    const preview = document.getElementById('audio-preview-container');
    if (!preview) return;
    if (url) {
      preview.innerHTML = `
        <audio controls src="${url}" style="width:100%; margin-top:10px;"></audio>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">Practice duration: ${totalSec}s</p>
      `;
    } else {
      preview.innerHTML = `
        <p style="font-size:0.85rem; color:var(--success); margin-top:10px;">✓ Spoken practice recorded (${totalSec}s)</p>
      `;
    }
  }

  // Self Evaluation Rubric stars
  document.querySelectorAll('.star-rating').forEach(group => {
    const category = group.dataset.category;
    const stars = group.querySelectorAll('.star-btn');
    stars.forEach(btn => {
      btn.addEventListener('click', () => {
        const score = parseInt(btn.dataset.score, 10);
        AppState.rubricScores[category] = score;
        stars.forEach(s => {
          const sc = parseInt(s.dataset.score, 10);
          s.classList.toggle('active', sc <= score);
        });
        SoundFX.tap();
      });
    });
  });

  // Mark Day Complete & Save
  document.getElementById('btn-complete-day')?.addEventListener('click', () => {
    const day = AppState.selectedDay;
    const lesson = StoryCurriculum.find(l => l.day === day);

    // Save story to Story Vault
    const savedNote = StoryStorage.getDayNote(day) || {};
    let beats = [];
    let fullText = '';

    lesson.exercise.scaffold.forEach((field, idx) => {
      const val = savedNote[`day_${day}_field_${idx}`] || '';
      if (val.trim()) {
        beats.push({ name: field.label.split(':')[0], text: val.trim() });
        fullText += val.trim() + ' ';
      }
    });

    if (beats.length > 0) {
      StoryStorage.saveStory({
        title: `Day ${day}: ${lesson.title}`,
        framework: lesson.frameworkId.toUpperCase(),
        category: lesson.week <= 2 ? 'Work & Presentation' : 'Social & Banter',
        tags: [`day-${day}`, `week-${lesson.week}`, lesson.frameworkId],
        beats: beats,
        takeaway: lesson.concept.spark
      });
    }

    StoryStorage.markDayCompleted(day, 10);
    updateTopStreak();
    SoundFX.fanfare();

    // Show celebration modal
    showCelebrationModal(day);
  });

  function showCelebrationModal(day) {
    const modal = document.getElementById('celebrate-modal');
    if (!modal) return;
    document.getElementById('celebrate-day-num').textContent = day;
    document.getElementById('celebrate-streak-num').textContent = StoryStorage.getStreak();
    modal.classList.add('active');
  }

  document.getElementById('btn-celebrate-continue')?.addEventListener('click', () => {
    document.getElementById('celebrate-modal')?.classList.remove('active');
    renderTodayView();
    renderPathView();
    switchTab('path');
  });

  // ----------------------------------------------------
  // PATH / 30-DAY ROADMAP TAB
  // ----------------------------------------------------
  function renderPathView() {
    const container = document.getElementById('path-weeks-container');
    if (!container) return;
    container.innerHTML = '';

    const completedDays = StoryStorage.getCompletedDays();
    const currentDay = StoryStorage.getCurrentDay();

    // Render Progress Bar
    const progressPct = Math.round((completedDays.length / 30) * 100);
    document.getElementById('path-progress-bar').style.width = `${progressPct}%`;
    document.getElementById('path-progress-text').textContent = `${completedDays.length} of 30 Days Completed (${progressPct}%)`;

    // Group into 4 weeks
    for (let w = 1; w <= 4; w++) {
      const weekLessons = StoryCurriculum.filter(l => l.week === w);
      const weekTitle = weekLessons[0].weekTitle;

      const weekHeader = document.createElement('div');
      weekHeader.className = 'week-header';
      weekHeader.innerHTML = `
        <span>Week ${w}: ${weekTitle}</span>
        <span class="week-badge">Days ${weekLessons[0].day}–${weekLessons[weekLessons.length - 1].day}</span>
      `;
      container.appendChild(weekHeader);

      const listDiv = document.createElement('div');
      listDiv.className = 'lesson-list';

      weekLessons.forEach(l => {
        const isDone = completedDays.includes(l.day);
        const isToday = l.day === currentDay;

        const card = document.createElement('div');
        card.className = `lesson-card ${isToday ? 'active-today' : ''} ${isDone ? 'completed' : ''}`;
        card.innerHTML = `
          <div class="lesson-left">
            <div class="day-badge">${isDone ? '✓' : l.day}</div>
            <div class="lesson-title-box">
              <span class="lesson-title-text">${l.title}</span>
              <span class="lesson-sub-text">${l.subtitle}</span>
            </div>
          </div>
          <span style="font-size:0.8rem; color:${isDone ? 'var(--success)' : (isToday ? 'var(--accent-light)' : 'var(--text-muted)')}; font-weight:700;">
            ${isDone ? 'Done' : (isToday ? 'Today' : 'Start')} →
          </span>
        `;

        card.addEventListener('click', () => {
          AppState.selectedDay = l.day;
          renderTodayView();
          switchTab('today');
          SoundFX.tap();
        });

        listDiv.appendChild(card);
      });

      container.appendChild(listDiv);
    }
  }

  // ----------------------------------------------------
  // FRAMEWORKS TAB
  // ----------------------------------------------------
  function renderFrameworksView() {
    const grid = document.getElementById('frameworks-grid');
    if (!grid) return;
    grid.innerHTML = '';

    StoryFrameworks.forEach(fw => {
      const card = document.createElement('div');
      card.className = 'framework-card';

      let beatsHtml = fw.beats.map(b => `
        <div class="beat-item">
          <span class="beat-tag">${b.title.split(' ')[0]}</span>
          <span>${b.prompt}</span>
        </div>
      `).join('');

      card.innerHTML = `
        <div class="framework-top">
          <div class="framework-icon-title">
            <span class="framework-icon">${fw.icon}</span>
            <div>
              <h3 class="framework-name">${fw.name}</h3>
              <p style="font-size:0.82rem; color:var(--text-secondary);">${fw.tagline}</p>
            </div>
          </div>
        </div>
        <div class="framework-meta">
          <span class="meta-chip">🎯 ${fw.bestFor}</span>
          <span class="meta-chip">⚡ ${fw.difficulty}</span>
        </div>
        <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:8px;">${fw.whyItWorks}</p>
        <div class="beat-list">${beatsHtml}</div>
        <div style="background:var(--bg-card); padding:10px 12px; border-radius:var(--radius-sm); font-size:0.85rem; margin-bottom:12px;">
          <strong style="color:var(--accent-light);">Real Example:</strong>
          <p style="color:var(--text-secondary); margin-top:4px;">"${fw.example.sample}"</p>
        </div>
        <button class="btn btn-secondary btn-block btn-open-builder" data-fw="${fw.id}">
          ✍️ Craft Story with ${fw.name.split(' ')[0]}
        </button>
      `;

      card.querySelector('.btn-open-builder').addEventListener('click', () => {
        loadFrameworkIntoBuilder(fw.id);
        switchTab('builder');
        SoundFX.tap();
      });

      grid.appendChild(card);
    });
  }

  // ----------------------------------------------------
  // STORY BUILDER STUDIO TAB
  // ----------------------------------------------------
  function initBuilderView() {
    const select = document.getElementById('builder-fw-select');
    if (!select) return;
    select.innerHTML = '';

    StoryFrameworks.forEach(fw => {
      const opt = document.createElement('option');
      opt.value = fw.id;
      opt.textContent = `${fw.icon} ${fw.name}`;
      select.appendChild(opt);
    });

    select.addEventListener('change', () => {
      AppState.builderFramework = select.value;
      renderBuilderBeats();
      SoundFX.tap();
    });

    renderBuilderBeats();

    // Save to Vault
    document.getElementById('btn-builder-save-vault')?.addEventListener('click', () => {
      const title = document.getElementById('builder-story-title').value.trim() || 'Untitled Story';
      const cat = document.getElementById('builder-category-select').value;
      const fw = StoryFrameworks.find(f => f.id === AppState.builderFramework);

      const beatInputs = document.querySelectorAll('.builder-beat-input');
      const beats = [];
      beatInputs.forEach(input => {
        const text = input.value.trim();
        if (text) {
          beats.push({ name: input.dataset.beatName, text: text });
        }
      });

      if (beats.length === 0) {
        alert('Please write at least one beat before saving!');
        return;
      }

      StoryStorage.saveStory({
        title: title,
        framework: fw ? fw.name.split(' ')[0] : 'CUSTOM',
        category: cat,
        tags: [cat.toLowerCase(), fw ? fw.id : 'custom'],
        beats: beats,
        takeaway: document.getElementById('builder-takeaway-input')?.value.trim() || ''
      });

      SoundFX.chime();
      alert('✓ Story successfully saved to your Story Vault!');
      switchTab('vault');
    });

    // Test in Prompter
    document.getElementById('btn-builder-test-voice')?.addEventListener('click', () => {
      const beatInputs = document.querySelectorAll('.builder-beat-input');
      let combined = '';
      beatInputs.forEach(input => {
        const text = input.value.trim();
        if (text) {
          combined += `${input.dataset.beatName}: ${text}\n\n`;
        }
      });

      if (!combined.trim()) {
        alert('Please write some content first to test in the prompter!');
        return;
      }

      // Open in test modal
      openPrompterModal('Story Builder Practice', combined);
    });
  }

  function loadFrameworkIntoBuilder(fwId) {
    AppState.builderFramework = fwId;
    const select = document.getElementById('builder-fw-select');
    if (select) select.value = fwId;
    renderBuilderBeats();
  }

  function renderBuilderBeats() {
    const container = document.getElementById('builder-beats-container');
    if (!container) return;
    container.innerHTML = '';

    const fw = StoryFrameworks.find(f => f.id === AppState.builderFramework) || StoryFrameworks[0];
    document.getElementById('builder-fw-desc').textContent = fw.tagline;

    fw.beats.forEach((b, idx) => {
      const div = document.createElement('div');
      div.className = 'input-group';
      div.innerHTML = `
        <label class="input-label">${b.title}</label>
        <p class="input-hint">💡 ${b.guide}</p>
        <textarea class="text-area builder-beat-input" data-beat-name="${b.title}" placeholder="${b.placeholder}"></textarea>
      `;
      container.appendChild(div);

      div.querySelector('textarea').addEventListener('input', updateBuilderStats);
    });

    updateBuilderStats();
  }

  function updateBuilderStats() {
    const inputs = document.querySelectorAll('.builder-beat-input');
    let totalText = '';
    inputs.forEach(i => totalText += i.value + ' ');

    const words = totalText.trim().split(/\s+/).filter(w => w.length > 0).length;
    const pace = (settings.speakingPaceWpm || 130);
    const estSec = Math.round((words / pace) * 60);

    const statWord = document.getElementById('builder-word-count');
    const statTime = document.getElementById('builder-time-count');
    if (statWord) statWord.textContent = `${words} words`;
    if (statTime) statTime.textContent = `~${estSec}s speaking time`;
  }

  // ----------------------------------------------------
  // STORY VAULT TAB
  // ----------------------------------------------------
  function renderVaultView() {
    const list = document.getElementById('vault-stories-list');
    if (!list) return;
    list.innerHTML = '';

    const stories = StoryStorage.getStories();
    const query = AppState.vaultSearchQuery.toLowerCase();
    const filter = AppState.vaultFilter;

    const filtered = stories.filter(s => {
      const matchFilter = (filter === 'all' || s.category.toLowerCase().includes(filter));
      const matchQuery = (
        !query ||
        s.title.toLowerCase().includes(query) ||
        (s.framework && s.framework.toLowerCase().includes(query)) ||
        (s.beats && s.beats.some(b => b.text.toLowerCase().includes(query)))
      );
      return matchFilter && matchQuery;
    });

    // Setup Category Chips
    document.querySelectorAll('.filter-chips .chip-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
      btn.onclick = () => {
        AppState.vaultFilter = btn.dataset.filter;
        renderVaultView();
        SoundFX.tap();
      };
    });

    // Search bar
    const searchInput = document.getElementById('vault-search-input');
    if (searchInput) {
      searchInput.oninput = () => {
        AppState.vaultSearchQuery = searchInput.value;
        renderVaultView();
      };
    }

    if (filtered.length === 0) {
      list.innerHTML = `
        <div class="card" style="text-align:center; padding:32px 16px; color:var(--text-muted);">
          <p style="font-size:2rem; margin-bottom:8px;">📭</p>
          <p style="font-weight:700;">No stories found in this category.</p>
          <p style="font-size:0.85rem; margin-top:4px;">Craft a new story in the Builder or complete a daily lesson!</p>
        </div>
      `;
      return;
    }

    filtered.forEach(story => {
      const item = document.createElement('div');
      item.className = 'story-item';

      let fullText = (story.beats || []).map(b => `${b.name}: ${b.text}`).join(' ');
      const words = fullText.split(/\s+/).filter(w => w.length > 0).length;
      const estSec = Math.round((words / 130) * 60);

      item.innerHTML = `
        <div class="story-header">
          <div>
            <span class="meta-chip" style="color:var(--accent-light); margin-bottom:4px;">${story.framework || 'STORY'} • ${story.category}</span>
            <h4 class="story-title">${story.title}</h4>
          </div>
          <span class="story-time-chip">⏱️ ~${estSec}s</span>
        </div>
        <p class="story-preview-text">${fullText}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
          <button class="btn btn-secondary btn-prompter-view" style="padding:4px 12px; font-size:0.82rem;">
            🎙️ Practice Spoken
          </button>
          <button class="btn btn-secondary btn-delete-story" style="padding:4px 10px; font-size:0.82rem; color:var(--danger);">
            🗑️
          </button>
        </div>
      `;

      item.querySelector('.btn-prompter-view').addEventListener('click', (e) => {
        e.stopPropagation();
        openPrompterModal(story.title, (story.beats || []).map(b => `${b.name}: ${b.text}`).join('\n\n'));
      });

      item.querySelector('.btn-delete-story').addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Delete "${story.title}"?`)) {
          StoryStorage.deleteStory(story.id);
          renderVaultView();
          SoundFX.tap();
        }
      });

      item.addEventListener('click', () => {
        openStoryDetailModal(story);
      });

      list.appendChild(item);
    });
  }

  function openStoryDetailModal(story) {
    const modal = document.getElementById('story-detail-modal');
    if (!modal) return;
    document.getElementById('modal-story-title').textContent = story.title;
    document.getElementById('modal-story-meta').textContent = `${story.framework || 'STORY'} • ${story.category}`;

    const beatsContainer = document.getElementById('modal-story-beats');
    beatsContainer.innerHTML = '';
    (story.beats || []).forEach(b => {
      const p = document.createElement('div');
      p.style.marginBottom = '12px';
      p.innerHTML = `<strong style="color:var(--accent-light); display:block; margin-bottom:2px;">${b.name}</strong><p style="color:var(--text-secondary);">${b.text}</p>`;
      beatsContainer.appendChild(p);
    });

    if (story.takeaway) {
      const tw = document.createElement('div');
      tw.className = 'callout callout-rule';
      tw.innerHTML = `<strong>Takeaway:</strong> ${story.takeaway}`;
      beatsContainer.appendChild(tw);
    }

    modal.classList.add('active');
  }

  document.getElementById('btn-close-story-modal')?.addEventListener('click', () => {
    document.getElementById('story-detail-modal')?.classList.remove('active');
  });

  // Teleprompter / Practice Modal
  function openPrompterModal(title, text) {
    const modal = document.getElementById('prompter-modal');
    if (!modal) return;
    document.getElementById('prompter-modal-title').textContent = title;
    document.getElementById('prompter-modal-content').textContent = text;
    modal.classList.add('active');
  }

  document.getElementById('btn-close-prompter-modal')?.addEventListener('click', () => {
    document.getElementById('prompter-modal')?.classList.remove('active');
  });

  // ----------------------------------------------------
  // IMPROMPTU GYM TAB
  // ----------------------------------------------------
  function initGymView() {
    shuffleGymPrompt();

    document.getElementById('btn-gym-shuffle')?.addEventListener('click', () => {
      shuffleGymPrompt();
      SoundFX.tap();
    });

    const gymTimerBtn = document.getElementById('btn-gym-start');
    if (gymTimerBtn) {
      gymTimerBtn.addEventListener('click', () => {
        handleGymTimerToggle();
      });
    }
  }

  function shuffleGymPrompt() {
    const p = StoryPrompts[Math.floor(Math.random() * StoryPrompts.length)];
    const c = ImpromptuConstraints[Math.floor(Math.random() * ImpromptuConstraints.length)];
    AppState.gymPrompt = p;

    document.getElementById('gym-prompt-category').textContent = `Category: ${p.category.toUpperCase()}`;
    document.getElementById('gym-prompt-body').textContent = p.prompt;
    document.getElementById('gym-constraint-text').textContent = c;
    resetGymTimer();
  }

  function resetGymTimer() {
    clearInterval(AppState.gymTimer);
    AppState.gymState = 'idle';
    AppState.gymSeconds = 0;
    document.getElementById('gym-clock-display').textContent = '00:00';
    document.getElementById('gym-timer-status').textContent = 'Ready for Spontaneous Workout';
    const btn = document.getElementById('btn-gym-start');
    if (btn) btn.textContent = '🚀 Start 30s Prep';
  }

  function handleGymTimerToggle() {
    const btn = document.getElementById('btn-gym-start');
    const clock = document.getElementById('gym-clock-display');
    const status = document.getElementById('gym-timer-status');

    if (AppState.gymState === 'idle') {
      // Start 30s prep
      AppState.gymState = 'prep';
      AppState.gymSeconds = 30;
      status.textContent = '🧠 30 Seconds Prep: Structure your Hook and ABT...';
      btn.textContent = '⏹ Cancel';
      SoundFX.chime();

      AppState.gymTimer = setInterval(() => {
        AppState.gymSeconds--;
        clock.textContent = `00:${AppState.gymSeconds.toString().padStart(2, '0')}`;
        if (AppState.gymSeconds <= 3 && AppState.gymSeconds > 0) SoundFX.tick();
        if (AppState.gymSeconds <= 0) {
          clearInterval(AppState.gymTimer);
          startGymSpeaking();
        }
      }, 1000);
    } else if (AppState.gymState === 'prep' || AppState.gymState === 'recording') {
      resetGymTimer();
      SoundFX.tap();
    }
  }

  function startGymSpeaking() {
    AppState.gymState = 'recording';
    AppState.gymSeconds = 120; // 2 minutes speaking
    const btn = document.getElementById('btn-gym-start');
    const clock = document.getElementById('gym-clock-display');
    const status = document.getElementById('gym-timer-status');

    status.textContent = '🎙️ SPEAK NOW! Deliver your story without filler words!';
    btn.textContent = '⏹ Finish Run';
    SoundFX.playTone(800, 'sine', 0.2);

    AppState.gymTimer = setInterval(() => {
      AppState.gymSeconds--;
      const m = Math.floor(AppState.gymSeconds / 60);
      const s = AppState.gymSeconds % 60;
      clock.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      if (AppState.gymSeconds <= 10 && AppState.gymSeconds > 0) SoundFX.tick();
      if (AppState.gymSeconds <= 0) {
        clearInterval(AppState.gymTimer);
        SoundFX.fanfare();
        status.textContent = '🎉 Awesome run! How did you stick the landing?';
        btn.textContent = '🔄 Another Challenge';
        AppState.gymState = 'idle';
      }
    }, 1000);
  }

  // ----------------------------------------------------
  // SETTINGS & STATS TAB
  // ----------------------------------------------------
  function initSettingsView() {
    updateSettingsStats();

    // Export Data Button
    document.getElementById('btn-export-data')?.addEventListener('click', () => {
      const json = StoryStorage.exportAllData();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `StoryCraft_Backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      SoundFX.chime();
    });

    // Import Data Button
    const fileInput = document.getElementById('import-file-input');
    document.getElementById('btn-import-data')?.addEventListener('click', () => {
      fileInput?.click();
    });

    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const ok = StoryStorage.importData(event.target.result);
        if (ok) {
          alert('✓ Data successfully imported!');
          location.reload();
        } else {
          alert('Failed to import data. Please check the JSON file.');
        }
      };
      reader.readAsText(file);
    });

    // Reset Progress
    document.getElementById('btn-reset-data')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset your curriculum progress? Your Story Vault stories will be kept.')) {
        StoryStorage.resetAllProgress();
        alert('Progress reset to Day 1.');
        location.reload();
      }
    });

    // Audio SFX Toggle
    const soundToggle = document.getElementById('settings-sound-toggle');
    if (soundToggle) {
      soundToggle.checked = settings.sound !== false;
      soundToggle.addEventListener('change', () => {
        const s = StoryStorage.getSettings();
        s.sound = soundToggle.checked;
        StoryStorage.saveSettings(s);
        SoundFX.enabled = s.sound;
        if (s.sound) SoundFX.chime();
      });
    }
  }

  function updateSettingsStats() {
    const completed = StoryStorage.getCompletedDays();
    const streak = StoryStorage.getStreak();
    const mins = StoryStorage.getTotalMinutes();
    const stories = StoryStorage.getStories();

    document.getElementById('stat-streak')?.replaceChildren(document.createTextNode(`${streak} Days`));
    document.getElementById('stat-completed-days')?.replaceChildren(document.createTextNode(`${completed.length} / 30`));
    document.getElementById('stat-total-mins')?.replaceChildren(document.createTextNode(`${mins} Mins`));
    document.getElementById('stat-vault-count')?.replaceChildren(document.createTextNode(`${stories.length} Stories`));
  }
});
