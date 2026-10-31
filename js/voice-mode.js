/**
 * Gustora AI - Voice Cooking Mode
 * Hands-free step-by-step guidance utilizing Web Speech Recognition (voice commands)
 * and Speech Synthesis (reading instructions aloud).
 */

class VoiceAssistant {
  constructor() {
    this.currentRecipe = null;
    this.currentStepIndex = 0;
    this.isListening = false;
    this.recognition = null;
    this.synth = window.speechSynthesis;
    this.timerInterval = null;
    this.remainingSeconds = 0;

    this.initSpeechRecognition();
    this.setupListeners();
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = false;
      this.recognition.lang = "en-US";

      this.recognition.onresult = (event) => {
        const lastResultIndex = event.results.length - 1;
        const transcript = event.results[lastResultIndex][0].transcript.trim().toLowerCase();
        this.handleVoiceCommand(transcript);
      };

      this.recognition.onerror = (event) => {
        console.warn("Voice recognition error:", event.error);
        if (event.error === "not-allowed") {
          this.updateListeningUI(false, "Microphone permission denied");
        }
      };

      this.recognition.onend = () => {
        // Auto-restart if modal is still active
        const modal = document.getElementById("voiceCookingModal");
        if (modal && modal.classList.contains("active") && this.isListening) {
          try {
            this.recognition.start();
          } catch (e) {
            // Already active or error
          }
        }
      };
    } else {
      console.warn("Web Speech Recognition API is not supported in this browser.");
    }
  }

  setupListeners() {
    const nextBtn = document.getElementById("voiceNextBtn");
    const prevBtn = document.getElementById("voicePrevBtn");
    const repeatBtn = document.getElementById("voiceRepeatBtn");
    const exitBtn = document.getElementById("voiceExitBtn");
    const timerBtn = document.getElementById("voiceQuickTimerBtn");

    if (nextBtn) nextBtn.addEventListener("click", () => this.nextStep());
    if (prevBtn) prevBtn.addEventListener("click", () => this.prevStep());
    if (repeatBtn) repeatBtn.addEventListener("click", () => this.readCurrentStep());
    if (exitBtn) exitBtn.addEventListener("click", () => this.stopCooking());
    if (timerBtn) timerBtn.addEventListener("click", () => this.startTimer(5 * 60)); // 5 min quick timer

    // Keyboard shortcuts for hands-free or foot-pedal simulation
    window.addEventListener("keydown", (e) => {
      const modal = document.getElementById("voiceCookingModal");
      if (!modal || !modal.classList.contains("active")) return;

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        this.nextStep();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.prevStep();
      } else if (e.key === "r" || e.key === "R") {
        this.readCurrentStep();
      } else if (e.key === "Escape") {
        this.stopCooking();
      }
    });
  }

  startCooking(recipe) {
    if (!recipe || !recipe.instructions || recipe.instructions.length === 0) return;

    this.currentRecipe = recipe;
    this.currentStepIndex = 0;

    const modal = document.getElementById("voiceCookingModal");
    if (modal) {
      modal.classList.add("active");
    }

    const titleEl = document.getElementById("voiceRecipeTitle");
    if (titleEl) titleEl.textContent = recipe.title;

    this.startListening();
    this.renderStep();

    // Welcome speech
    const welcome = `Welcome to Voice Cooking Mode for ${recipe.title}. Say "next step", "previous step", or "repeat" anytime. Starting with step 1.`;
    this.speak(welcome, () => {
      this.readCurrentStep();
    });
  }

  stopCooking() {
    this.stopListening();
    this.stopSpeaking();
    this.stopTimer();

    const modal = document.getElementById("voiceCookingModal");
    if (modal) {
      modal.classList.remove("active");
    }

    if (window.app && this.currentRecipe) {
      window.app.showToast(`Great job cooking ${this.currentRecipe.title}!`);
    }
  }

  renderStep() {
    if (!this.currentRecipe) return;

    const totalSteps = this.currentRecipe.instructions.length;
    const step = this.currentRecipe.instructions[this.currentStepIndex];

    const counter = document.getElementById("voiceStepCounter");
    const instruction = document.getElementById("voiceStepInstruction");
    const progressFill = document.getElementById("voiceProgressFill");

    if (counter) counter.textContent = `Step ${step.step} of ${totalSteps}`;
    if (instruction) instruction.textContent = step.text;

    if (progressFill) {
      const pct = Math.round(((this.currentStepIndex + 1) / totalSteps) * 100);
      progressFill.style.width = `${pct}%`;
    }
  }

  nextStep() {
    if (!this.currentRecipe) return;

    if (this.currentStepIndex < this.currentRecipe.instructions.length - 1) {
      this.currentStepIndex++;
      this.renderStep();
      this.readCurrentStep();
    } else {
      this.speak("Congratulations! You have completed all cooking steps. Enjoy your delicious dish!");
    }
  }

  prevStep() {
    if (!this.currentRecipe) return;

    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.renderStep();
      this.readCurrentStep();
    } else {
      this.speak("You are already on the first step.");
    }
  }

  readCurrentStep() {
    if (!this.currentRecipe) return;
    const step = this.currentRecipe.instructions[this.currentStepIndex];
    const textToRead = `Step ${step.step}. ${step.text}`;
    this.speak(textToRead);
  }

  handleVoiceCommand(transcript) {
    const feedbackEl = document.getElementById("voiceCommandFeedback");
    if (feedbackEl) {
      feedbackEl.textContent = `Heard: "${transcript}"`;
    }

    if (transcript.includes("next") || transcript.includes("forward")) {
      this.nextStep();
    } else if (transcript.includes("previous") || transcript.includes("back") || transcript.includes("prev")) {
      this.prevStep();
    } else if (transcript.includes("repeat") || transcript.includes("again") || transcript.includes("what")) {
      this.readCurrentStep();
    } else if (transcript.includes("timer") || transcript.includes("minute")) {
      // Check if user specified minutes (e.g., "timer 5 minutes", "timer 10 minutes")
      const match = transcript.match(/\d+/);
      const minutes = match ? parseInt(match[0]) : 5;
      this.startTimer(minutes * 60);
      this.speak(`Setting kitchen timer for ${minutes} minutes.`);
    } else if (transcript.includes("stop") || transcript.includes("pause")) {
      this.stopSpeaking();
    } else if (transcript.includes("exit") || transcript.includes("done") || transcript.includes("finish") || transcript.includes("quit")) {
      this.stopCooking();
    }
  }

  startListening() {
    if (this.recognition) {
      try {
        this.recognition.start();
        this.isListening = true;
        this.updateListeningUI(true, "Listening for commands ('Next', 'Back', 'Repeat', 'Timer')...");
      } catch (e) {
        console.warn("Recognition already started");
      }
    } else {
      this.updateListeningUI(false, "Voice recognition not supported (Use buttons or Spacebar)");
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
        this.isListening = false;
        this.updateListeningUI(false, "Microphone paused");
      } catch (e) {
        // Ignored
      }
    }
  }

  updateListeningUI(active, text) {
    const indicator = document.getElementById("voiceListeningIndicator");
    const label = document.getElementById("voiceListeningText");
    const pulseDot = document.getElementById("voicePulseDot");

    if (label) label.textContent = text;
    if (pulseDot) {
      pulseDot.style.display = active ? "block" : "none";
    }
  }

  speak(text, onEndCallback) {
    if (!this.synth) return;

    this.synth.cancel(); // Stop any pending speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    // Pick a natural English voice if available
    const voices = this.synth.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha")));
    if (naturalVoice) utterance.voice = naturalVoice;

    if (onEndCallback) {
      utterance.onend = onEndCallback;
    }

    this.synth.speak(utterance);
  }

  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  startTimer(seconds) {
    this.stopTimer();
    this.remainingSeconds = seconds;
    const timerBox = document.getElementById("voiceTimerBox");
    const timerDisplay = document.getElementById("voiceTimerDisplay");

    if (timerBox) timerBox.style.display = "inline-flex";

    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      this.updateTimerDisplay();

      if (this.remainingSeconds <= 0) {
        this.stopTimer();
        this.playTimerAlarm();
        this.speak("Timer finished! Please check your dish.");
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timerDisplay = document.getElementById("voiceTimerDisplay");
    if (!timerDisplay) return;

    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    const timerBox = document.getElementById("voiceTimerBox");
    if (timerBox && this.remainingSeconds <= 0) {
      timerBox.style.display = "none";
    }
  }

  playTimerAlarm() {
    // Audio beep using Web Audio API
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {
      console.warn("Audio alarm error:", e);
    }
  }
}

let voiceAssistant;
document.addEventListener("DOMContentLoaded", () => {
  voiceAssistant = new VoiceAssistant();
  window.voiceAssistant = voiceAssistant;
});
