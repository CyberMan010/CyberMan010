// Audio Engine: Web Audio API synthesizers and Voice Recorder
const SoundFX = {
  ctx: null,
  enabled: true,

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  playTone(freq, type, duration, gainVal = 0.15) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio tone error:', e);
    }
  },

  chime() {
    this.init();
    if (!this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.12, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 1.2);
    });
  },

  tick() {
    this.playTone(880, 'triangle', 0.05, 0.05);
  },

  fanfare() {
    this.init();
    if (!this.ctx || !this.enabled) return;
    const notes = [
      { f: 523.25, d: 0.15, t: 0 },
      { f: 659.25, d: 0.15, t: 0.14 },
      { f: 783.99, d: 0.18, t: 0.28 },
      { f: 1046.50, d: 0.5, t: 0.44 }
    ];
    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, this.ctx.currentTime + n.t);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + n.t);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + n.t + n.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + n.t);
      osc.stop(this.ctx.currentTime + n.t + n.d);
    });
  },

  tap() {
    this.playTone(400, 'sine', 0.03, 0.04);
  }
};

// Voice Practice Recorder
class VoiceRecorder {
  constructor(options = {}) {
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.audioBlob = null;
    this.audioUrl = null;
    this.isRecording = false;
    this.timerInterval = null;
    this.seconds = 0;
    this.onTick = options.onTick || null;
    this.onFinish = options.onFinish || null;
  }

  async start() {
    this.audioChunks = [];
    this.audioBlob = null;
    if (this.audioUrl) {
      URL.revokeObjectURL(this.audioUrl);
      this.audioUrl = null;
    }

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };
        this.mediaRecorder.onstop = () => {
          stream.getTracks().forEach(track => track.stop());
          this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
          this.audioUrl = URL.createObjectURL(this.audioBlob);
          if (this.onFinish) {
            this.onFinish(this.audioUrl, this.audioBlob, this.seconds);
          }
        };
        this.mediaRecorder.start();
      } else {
        // Fallback simulated timer recorder
        this.mediaRecorder = null;
      }
    } catch (err) {
      console.warn('Microphone permission or support issue:', err);
      // Fallback: still run timer for speaking practice even without hardware mic permission
      this.mediaRecorder = null;
    }

    this.isRecording = true;
    this.seconds = 0;
    if (this.onTick) this.onTick(this.seconds);

    this.timerInterval = setInterval(() => {
      this.seconds++;
      if (this.onTick) this.onTick(this.seconds);
    }, 1000);

    return true;
  }

  stop() {
    if (!this.isRecording) return;
    this.isRecording = false;
    clearInterval(this.timerInterval);

    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    } else {
      if (this.onFinish) {
        this.onFinish(null, null, this.seconds);
      }
    }
  }

  formatTime(totalSec) {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}

window.SoundFX = SoundFX;
window.VoiceRecorder = VoiceRecorder;
