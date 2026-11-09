// Offline Storage Engine for StoryCraft
const StorageKey = {
  CURRENT_DAY: 'storycraft_current_day',
  COMPLETED_DAYS: 'storycraft_completed_days',
  STREAK_COUNT: 'storycraft_streak_count',
  LAST_COMPLETED_DATE: 'storycraft_last_completed_date',
  TOTAL_MINUTES: 'storycraft_total_minutes',
  STORIES: 'storycraft_vault_stories',
  SETTINGS: 'storycraft_user_settings',
  NOTES: 'storycraft_daily_notes'
};

const DefaultStories = [
  {
    id: 'sample-1',
    title: 'The 3:00 AM Production Outage',
    framework: 'SCQA',
    category: 'Work & Presentation',
    tags: ['work', 'crisis', 'leadership', 'scqa'],
    createdAt: '2026-11-01T10:00:00Z',
    durationSec: 85,
    beats: [
      { name: 'Situation', text: 'Last November, our e-commerce platform was handling record Black Friday traffic with 150,000 active shoppers.' },
      { name: 'Complication', text: 'At exactly 3:14 AM, our primary database crashed silently, freezing checkouts and causing $8,000 in lost revenue every single minute.' },
      { name: 'Question', text: 'How could we safely restore data integrity without wiping pending customer transactions?' },
      { name: 'Answer', text: 'We bypassed the replica lag by routing critical checkout writes to an in-memory Redis failover queue, recovering full service within 7 minutes and securing 99.4% of transactions.' }
    ],
    takeaway: 'Under crisis, speed matters, but having an isolated failover channel matters more than trying to fix the primary immediately.'
  },
  {
    id: 'sample-2',
    title: 'The Coffee Shop Language Trap',
    framework: '3-Beat Spine',
    category: 'Social & Casual',
    tags: ['social', 'humor', 'travel', 'hook-body-landing'],
    createdAt: '2026-11-03T15:30:00Z',
    durationSec: 65,
    beats: [
      { name: 'The Hook', text: 'I once accidentally ordered fifty cups of espresso in Rome because I mispronounced one vowel.' },
      { name: 'The Struggle', text: 'I stood confidently at the counter, trying to show off my high-school Italian. The barista raised his eyebrows, paused, and started furiously lining up tiny porcelain cups across the entire glass counter. When I realized my mistake, my pride made me refuse to back down.' },
      { name: 'The Landing', text: 'I ended up sharing espresso shots with half the tourists on the Piazza. The moral? Confidence gets you into ridiculous jams, but laughter gets you out of them.' }
    ],
    takeaway: 'Vulnerability and laughing at yourself builds instant rapport in any conversation.'
  },
  {
    id: 'sample-3',
    title: 'Why I Rejected the Safe Promotion',
    framework: 'STAR-L',
    category: 'Career & Pitch',
    tags: ['career', 'interview', 'star-l', 'values'],
    createdAt: '2026-11-05T09:15:00Z',
    durationSec: 90,
    beats: [
      { name: 'Situation', text: 'Three years into my corporate role, I was offered a comfortable promotion with a 25% pay bump to manage existing client maintenance.' },
      { name: 'Task', text: 'I had to decide between predictable comfort and taking on an unproven greenfield R&D initiative.' },
      { name: 'Action', text: 'I politely declined the safe ladder and pitched management to lead the new prototype team with half the budget but full creative ownership.' },
      { name: 'Result', text: 'Over the next 18 months, that small prototype evolved into the company’s fastest-growing SaaS revenue driver.' },
      { name: 'Learning', text: 'Comfort is the silent enemy of exponential growth. When given the choice, bet on learning velocity over prestige.' }
    ],
    takeaway: 'Never optimize for title over ownership.'
  }
];

const StoryStorage = {
  getCurrentDay() {
    const day = localStorage.getItem(StorageKey.CURRENT_DAY);
    return day ? parseInt(day, 10) : 1;
  },

  setCurrentDay(day) {
    localStorage.setItem(StorageKey.CURRENT_DAY, day.toString());
  },

  getCompletedDays() {
    const raw = localStorage.getItem(StorageKey.COMPLETED_DAYS);
    return raw ? JSON.parse(raw) : [];
  },

  isDayCompleted(day) {
    const completed = this.getCompletedDays();
    return completed.includes(day);
  },

  markDayCompleted(day, minutesSpent = 10) {
    const completed = this.getCompletedDays();
    if (!completed.includes(day)) {
      completed.push(day);
      localStorage.setItem(StorageKey.COMPLETED_DAYS, JSON.stringify(completed));
    }

    // Update streak
    this.updateStreak();

    // Update total practice minutes
    const currentMins = this.getTotalMinutes();
    localStorage.setItem(StorageKey.TOTAL_MINUTES, (currentMins + minutesSpent).toString());

    // Advance current day if we just completed current
    const current = this.getCurrentDay();
    if (day >= current && day < 30) {
      this.setCurrentDay(day + 1);
    }
  },

  updateStreak() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const lastDate = localStorage.getItem(StorageKey.LAST_COMPLETED_DATE);
    let streak = parseInt(localStorage.getItem(StorageKey.STREAK_COUNT) || '0', 10);

    if (!lastDate) {
      streak = 1;
    } else {
      const last = new Date(lastDate);
      const today = new Date(todayStr);
      const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        streak += 1;
      } else if (diffDays === 0) {
        // already counted today
        if (streak === 0) streak = 1;
      } else {
        // missed a day
        streak = 1;
      }
    }

    localStorage.setItem(StorageKey.LAST_COMPLETED_DATE, todayStr);
    localStorage.setItem(StorageKey.STREAK_COUNT, streak.toString());
    return streak;
  },

  getStreak() {
    const lastDate = localStorage.getItem(StorageKey.LAST_COMPLETED_DATE);
    const streak = parseInt(localStorage.getItem(StorageKey.STREAK_COUNT) || '0', 10);
    if (!lastDate) return 0;

    const todayStr = new Date().toISOString().slice(0, 10);
    const last = new Date(lastDate);
    const today = new Date(todayStr);
    const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      return 0; // streak broken
    }
    return streak;
  },

  getTotalMinutes() {
    const mins = localStorage.getItem(StorageKey.TOTAL_MINUTES);
    return mins ? parseInt(mins, 10) : 0;
  },

  // Story Vault CRUD
  getStories() {
    const raw = localStorage.getItem(StorageKey.STORIES);
    if (!raw) {
      localStorage.setItem(StorageKey.STORIES, JSON.stringify(DefaultStories));
      return [...DefaultStories];
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return [...DefaultStories];
    }
  },

  saveStory(story) {
    const stories = this.getStories();
    if (!story.id) {
      story.id = 'story_' + Date.now();
      story.createdAt = new Date().toISOString();
      stories.unshift(story);
    } else {
      const idx = stories.findIndex(s => s.id === story.id);
      if (idx !== -1) {
        story.updatedAt = new Date().toISOString();
        stories[idx] = story;
      } else {
        story.createdAt = new Date().toISOString();
        stories.unshift(story);
      }
    }
    localStorage.setItem(StorageKey.STORIES, JSON.stringify(stories));
    return story;
  },

  deleteStory(id) {
    let stories = this.getStories();
    stories = stories.filter(s => s.id !== id);
    localStorage.setItem(StorageKey.STORIES, JSON.stringify(stories));
  },

  getStoryById(id) {
    const stories = this.getStories();
    return stories.find(s => s.id === id) || null;
  },

  // Daily note drafts
  getDayNote(day) {
    const notes = JSON.parse(localStorage.getItem(StorageKey.NOTES) || '{}');
    return notes[day] || null;
  },

  saveDayNote(day, data) {
    const notes = JSON.parse(localStorage.getItem(StorageKey.NOTES) || '{}');
    notes[day] = data;
    localStorage.setItem(StorageKey.NOTES, JSON.stringify(notes));
  },

  // Settings
  getSettings() {
    const raw = localStorage.getItem(StorageKey.SETTINGS);
    const defaults = {
      theme: 'dark',
      sound: true,
      speakingPaceWpm: 130,
      dailyReminderTime: '08:30'
    };
    if (!raw) return defaults;
    return Object.assign(defaults, JSON.parse(raw));
  },

  saveSettings(settings) {
    localStorage.setItem(StorageKey.SETTINGS, JSON.stringify(settings));
  },

  // Export / Import
  exportAllData() {
    const data = {
      app: 'StoryCraft',
      version: '1.0',
      exportedAt: new Date().toISOString(),
      currentDay: this.getCurrentDay(),
      completedDays: this.getCompletedDays(),
      streak: this.getStreak(),
      totalMinutes: this.getTotalMinutes(),
      stories: this.getStories(),
      notes: JSON.parse(localStorage.getItem(StorageKey.NOTES) || '{}'),
      settings: this.getSettings()
    };
    return JSON.stringify(data, null, 2);
  },

  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.app !== 'StoryCraft') {
        throw new Error('Invalid StoryCraft data format.');
      }
      if (data.currentDay) this.setCurrentDay(data.currentDay);
      if (data.completedDays) localStorage.setItem(StorageKey.COMPLETED_DAYS, JSON.stringify(data.completedDays));
      if (data.stories) localStorage.setItem(StorageKey.STORIES, JSON.stringify(data.stories));
      if (data.notes) localStorage.setItem(StorageKey.NOTES, JSON.stringify(data.notes));
      if (data.totalMinutes) localStorage.setItem(StorageKey.TOTAL_MINUTES, data.totalMinutes.toString());
      if (data.settings) this.saveSettings(data.settings);
      return true;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  },

  resetAllProgress() {
    localStorage.removeItem(StorageKey.CURRENT_DAY);
    localStorage.removeItem(StorageKey.COMPLETED_DAYS);
    localStorage.removeItem(StorageKey.STREAK_COUNT);
    localStorage.removeItem(StorageKey.LAST_COMPLETED_DATE);
    localStorage.removeItem(StorageKey.TOTAL_MINUTES);
    localStorage.removeItem(StorageKey.NOTES);
    // restore sample stories
    localStorage.setItem(StorageKey.STORIES, JSON.stringify(DefaultStories));
  }
};

window.StoryStorage = StoryStorage;
