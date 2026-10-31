/**
 * Gustora AI - Smart AI Cooking Assistant Chatbot
 * Handles culinary inquiries, smart ingredient substitutions with flavor impact explanations,
 * kitchen emergency fixes, and optional live Gemini / OpenAI API key integration.
 */

class AiCookingAssistant {
  constructor() {
    this.messages = [];
    this.isOpen = false;
    this.apiKey = localStorage.getItem("gustora_gemini_key") || "";
    this.init();
  }

  init() {
    this.setupListeners();
    this.appendInitialGreeting();
  }

  setupListeners() {
    const toggleBtn = document.getElementById("aiToggleBtn");
    const closeBtn = document.getElementById("aiCloseBtn");
    const drawer = document.getElementById("aiDrawer");
    const chatForm = document.getElementById("aiChatForm");
    const chatInput = document.getElementById("aiChatInput");
    const promptChips = document.querySelectorAll(".ai-prompt-chip");
    const apiKeyBtn = document.getElementById("aiSettingsBtn");

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => this.toggleDrawer());
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeDrawer());
    }

    if (chatForm && chatInput) {
      chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (text) {
          this.handleUserMessage(text);
          chatInput.value = "";
        }
      });
    }

    promptChips.forEach(chip => {
      chip.addEventListener("click", () => {
        const query = chip.dataset.query;
        if (query) {
          if (!this.isOpen) this.openDrawer();
          this.handleUserMessage(query);
        }
      });
    });

    if (apiKeyBtn) {
      apiKeyBtn.addEventListener("click", () => this.promptApiKey());
    }
  }

  promptApiKey() {
    const existing = this.apiKey ? " (configured)" : "";
    const key = prompt("Enter your Google Gemini API Key for live multimodal cloud intelligence, or leave blank to use the built-in culinary engine:", this.apiKey);
    if (key !== null) {
      this.apiKey = key.trim();
      localStorage.setItem("gustora_gemini_key", this.apiKey);
      if (window.app) {
        window.app.showToast(this.apiKey ? "Gemini API Key saved!" : "Using built-in Culinary Engine.");
      }
    }
  }

  toggleDrawer() {
    if (this.isOpen) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  }

  openDrawer() {
    const drawer = document.getElementById("aiDrawer");
    if (drawer) {
      drawer.classList.add("open");
      this.isOpen = true;
      const input = document.getElementById("aiChatInput");
      if (input) setTimeout(() => input.focus(), 200);
    }
  }

  closeDrawer() {
    const drawer = document.getElementById("aiDrawer");
    if (drawer) {
      drawer.classList.remove("open");
      this.isOpen = false;
    }
  }

  appendInitialGreeting() {
    const greeting = "Hello Chef! 👨‍🍳 I'm Gustora AI, your smart cooking guidance assistant. Ask me anything like:\n\n• \"I don't have curd. What can I use instead?\"\n• \"My curry is too salty, how to fix it?\"\n• \"How to make dosa extra crispy?\"\n• Or ask for healthy substitutions and cooking timers!";
    this.addBotMessage(greeting);
  }

  handleUserMessage(text) {
    this.addUserMessage(text);
    this.showTypingIndicator();

    if (this.apiKey) {
      // Call Gemini API if user configured key
      this.callGeminiAPI(text);
    } else {
      // Use built-in intelligent culinary knowledge engine
      setTimeout(() => {
        const answer = this.generateSmartResponse(text);
        this.hideTypingIndicator();
        this.addBotMessage(answer);
      }, 700);
    }
  }

  addUserMessage(text) {
    const container = document.getElementById("aiMessagesContainer");
    if (!container) return;

    const msgEl = document.createElement("div");
    msgEl.className = "ai-msg user";
    msgEl.textContent = text;
    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
  }

  addBotMessage(text) {
    const container = document.getElementById("aiMessagesContainer");
    if (!container) return;

    const msgEl = document.createElement("div");
    msgEl.className = "ai-msg bot";

    // Format newlines and markdown-like bold
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    msgEl.innerHTML = `
      <div>${formatted}</div>
      <div style="display: flex; gap: 0.5rem; margin-top: 0.6rem; align-items: center;">
        <button class="chip-btn" style="padding: 2px 8px; font-size: 0.72rem;" onclick="aiAssistant.speakText(this)">
          🔊 Listen
        </button>
      </div>
    `;

    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
  }

  speakText(btn) {
    const text = btn.closest(".ai-msg").querySelector("div").textContent;
    if (window.voiceAssistant) {
      window.voiceAssistant.speak(text);
    }
  }

  showTypingIndicator() {
    const container = document.getElementById("aiMessagesContainer");
    if (!container) return;

    const ind = document.createElement("div");
    ind.id = "aiTypingIndicator";
    ind.className = "ai-msg bot";
    ind.innerHTML = `<span style="font-style: italic; color: var(--text-dim);">Chef Gustora is thinking... 🍳</span>`;
    container.appendChild(ind);
    container.scrollTop = container.scrollHeight;
  }

  hideTypingIndicator() {
    const ind = document.getElementById("aiTypingIndicator");
    if (ind) ind.remove();
  }

  generateSmartResponse(query) {
    const q = query.toLowerCase();

    // 1. Curd / Yogurt Substitution (Explicitly listed in prompt)
    if (q.includes("curd") || q.includes("yogurt") || q.includes("dahi")) {
      return "**Substitutions for Curd (Yogurt):**\n\n" +
        "1. **Plain Greek Yogurt (1:1 Ratio)**: The closest match in acidity, thickness, and creaminess. Perfect for biryani marinades and makhani gravies.\n" +
        "2. **Lemon Juice + Fresh Milk**: Mix 1 tablespoon of lemon juice or vinegar into 1 cup of milk; let rest 5 minutes. Creates a quick buttermilk that tenderizes meat identically.\n" +
        "3. **Cashew Cream (Vegan Alternative)**: Blend 15 soaked cashews with 4 tbsp water and 1 tsp lemon juice. Adds royal richness to curries without dairy.\n" +
        "4. **Sour Cream**: Excellent in gravies and baked dishes, though slightly richer in milk fat.\n\n" +
        "*Culinary Impact:* If using lemon-milk, reduce any other added citrus so your curry doesn't turn overly sour!";
    }

    // 2. Salt fix
    if (q.includes("salt") || q.includes("salty")) {
      return "**How to Fix an Over-Salted Dish:**\n\n" +
        "1. **The Raw Potato Sponge Trick**: Peel and cut 1 large raw potato into chunks; drop it into your simmering curry for 10-12 minutes. The potato's starch absorbs excess sodium like magic! Discard before serving.\n" +
        "2. **Add Fresh Dairy**: Stir in 2-3 tablespoons of fresh heavy cream, plain yogurt, or unsalted butter. Fats buffer sodium perception.\n" +
        "3. **Acid Balance**: Squeeze half a fresh lemon. Acidity distracts your tongue's salt receptors.\n" +
        "4. **Add Kneaded Dough Balls**: In North Indian cuisine, dropping 2-3 small balls of wheat atta dough into boiling dal/gravy absorbs excess salt quickly.";
    }

    // 3. Spicy fix
    if (q.includes("spicy") || q.includes("too hot") || q.includes("chili")) {
      return "**How to Cool Down an Overly Spicy Dish:**\n\n" +
        "1. **Dairy/Coconut Milk**: Capsaicin is fat-soluble. Adding yogurt, coconut milk, or cream dissolves the heat molecules.\n" +
        "2. **Sweet Balance**: Stir in 1 teaspoon of honey, jaggery, or sugar to round out sharp fiery notes.\n" +
        "3. **Nut Butters or Cashew Paste**: 1 tablespoon of cashew or peanut butter mellows chili heat while thickening the sauce.";
    }

    // 4. Crispy Dosa Tip
    if (q.includes("dosa") || q.includes("crisp")) {
      return "**Chef's Secrets for Extra Crispy Golden Dosa:**\n\n" +
        "1. **Chana Dal in the Batter**: Add 2 tablespoons of soaked chana dal (bengal gram) when grinding urad dal for an ultra-crisp golden sheen.\n" +
        "2. **Poha (Flattened Rice)**: Adding 1/4 cup soaked poha creates the classic light honeycomb texture.\n" +
        "3. **Tawa Temperature**: Sprinkle cold water droplets onto your cast-iron tawa and wipe clean with an oil-soaked onion half before spreading each dosa.";
    }

    // 5. Biryani Dum Tips
    if (q.includes("biryani") || q.includes("dum")) {
      return "**Mastering Biryani 'Dum' Slow Cooking:**\n\n" +
        "1. **Parboiling Rice**: Cook basmati rice to only 70% (it should break into 3 pieces when pressed between fingers, not turn mushy).\n" +
        "2. **Heavy Base / Tawa Diffuser**: Place your biryani pot on top of a flat iron tawa so the direct flames don't scorch the bottom layer.\n" +
        "3. **Foil Seal**: Use heavy-duty aluminum foil under the lid to trap every ounce of aromatic saffron steam.";
    }

    // 6. Egg Substitutions
    if (q.includes("egg") || q.includes("eggs")) {
      return "**Best Substitutes for Eggs in Cooking & Baking:**\n\n" +
        "• **Baking Cakes/Muffins**: 1/4 cup unsweetened applesauce or mashed ripe banana per egg.\n" +
        "• **Savory Binding (Cutlets/Patties)**: 1 tablespoon flaxseed meal mixed with 3 tablespoons water (rest 5 mins) or 2 tbsp cornstarch slurry.\n" +
        "• **Fritters & Scrambles**: Chickpea flour (besan) with water and a pinch of turmeric.";
    }

    // 7. General Cooking Query
    return `**Chef Gustora's Culinary Recommendation:**\n\n` +
      `Great question regarding "${query}"! When cooking, balance the four core pillars: **Salt, Fat, Acid, and Heat**.\n\n` +
      `• Need to check step-by-step instructions? Search for any dish in the search bar above.\n` +
      `• Have random ingredients? Head to the **🥕 Ingredient Finder** tab.\n` +
      `• Looking for substitutions or precise measurements? Let me know which ingredient you'd like to replace!`;
  }

  async callGeminiAPI(promptText) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;
      const payload = {
        contents: [{
          parts: [{
            text: `You are Gustora AI, a world-class culinary chef assistant. Answer the user's cooking question clearly, practically, and concisely with ingredient amounts, flavor impact, and actionable cooking tips.\n\nUser Question: ${promptText}`
          }]
        }]
      };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      this.hideTypingIndicator();

      if (data.candidates && data.candidates[0].content.parts[0].text) {
        this.addBotMessage(data.candidates[0].content.parts[0].text);
      } else {
        this.addBotMessage(this.generateSmartResponse(promptText));
      }
    } catch (err) {
      console.warn("Gemini API call failed, falling back to local engine:", err);
      this.hideTypingIndicator();
      this.addBotMessage(this.generateSmartResponse(promptText));
    }
  }
}

let aiAssistant;
document.addEventListener("DOMContentLoaded", () => {
  aiAssistant = new AiCookingAssistant();
  window.aiAssistant = aiAssistant;
});
