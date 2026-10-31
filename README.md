# 🍳 Gustora AI - Smart Cooking Guidance Website

**Gustora AI** is an intelligent, modern, responsive culinary guidance platform. Designed for food enthusiasts and everyday home cooks, it combines recipe discovery, leftover ingredient matching, multimodal dish scanning, hands-free voice-assisted cooking, real-time recipe customization, and accurate nutritional analysis into a sleek, premium experience.

---

## 🌟 Key Features & Modules

### 1. 🏠 Home Page & Culinary Discovery
- **Website Name & Branding**: Gustora AI with warm amber culinary styling and glowing chef toque iconography.
- **Search Bar**: *"What do you want to cook?"* with real-time autocompletion, category pills, and instant card updates.
- **Popular Dishes Showcase**: Highlights community favorites with rating badges, calorie counts, prep/cook timings, and spice indicators.
- **Interactive Food Categories**: South Indian, North Indian, Chinese, Italian, Snacks, and Desserts.
- **Quick CTA**: Direct jump button: *"🥕 What ingredients do you have?"*.

---

### 2. 🔍 Dish Search & Comprehensive Dish View
- **Multi-Facet Filters**: Filter dishes dynamically by cuisine, dietary preference (Vegetarian / Non-Vegetarian), spice level (Mild, Medium, Hot, Fiery), and maximum cooking time slider.
- **Detailed Recipe Modal**:
  - High-resolution dish photography.
  - Complete list of ingredients with quantities and units.
  - Preparation and cooking timings.
  - Difficulty rating (Easy, Medium, Hard).
  - Step-by-step cooking instructions with checkboxes to track progress.

---

### 3. 🥕 Ingredient-Based Recipe Finder (Main Feature)
- **Pantry Input**: Type ingredients (e.g. `tomato, onion, rice, egg`) or click quick-add pantry staple chips.
- **Pantry Matching Engine**:
  - Calculates matching percentages (`100% Match`, `80% Match`, etc.).
  - Separates ingredients into **You Have (In Pantry)** vs **Missing (Need to buy)**.
  - **1-Click Add Missing**: Adds missing items straight into your shopping checklist.
- **🤖 AI Custom Recipe Generator**:
  - Enter arbitrary ingredient combos and click **"AI Craft Custom Recipe"**.
  - Generates bespoke gourmet recipes (such as *"Golden Egg & Caramelized Tomato Spiced Rice"*) with custom steps, nutrition, timings, and prep instructions.

---

### 4. 📸 AI Food & Dish Scanner
- **Computer Vision Interface**:
  - Drag-and-drop or upload photos of any food plate.
  - Live camera snapshot mode via WebRTC (`getUserMedia`).
  - Interactive sample gallery with presets (Chicken Biryani, Masala Dosa, Paneer Butter Masala, Pasta).
- **Scanning Radar Simulation**:
  - High-tech scanning bar animation analyzing food geometry, color channels, and spice textures.
  - Displays **AI Confidence Score** (e.g. `98.7%`), cuisine origin, detected key ingredients, and 1-click recipe launch.

---

### 5. 🤖 AI Cooking Assistant (Chef Gustora Chatbot)
- **Floating Kitchen Assistant**: Accessible anytime via the floating button or top navigation.
- **Natural Language Culinary Reasoning**:
  - Answers substitutions: *"I don't have curd. What can I use instead?"* (Provides Greek yogurt, lemon juice + milk, cashew cream, and explains flavor impact).
  - Answers kitchen emergency fixes: *"My curry is too salty, how to fix it?"*, *"Too spicy?"*, *"How to make dosa extra crispy?"*.
- **Speech Synthesis**: Click **"🔊 Listen"** on any response to have Chef Gustora speak the tips aloud.
- **Optional Cloud AI Model**: Allows entering an optional Google Gemini API key for live multimodal cloud AI, while providing a rich built-in offline culinary knowledge engine.

---

### 6. 🎙️ Voice Cooking Mode (Hands-Free Web Speech)
- **High-Contrast Distraction-Free UI**: Designed for kitchen counters when hands are wet or covered in flour.
- **Web Speech Recognition**:
  - *"Next step"* / *"Next"* ➔ Advances to the next cooking step and reads it aloud.
  - *"Previous step"* / *"Back"* ➔ Returns to previous step.
  - *"Repeat"* / *"Read again"* ➔ Re-reads the current instruction.
  - *"Timer 5 minutes"* ➔ Starts a countdown timer with audio chime alarm.
  - *"Exit"* / *"Done"* ➔ Exits voice mode and logs recipe to cooking history.
- **Keyboard Fallback**: Press <kbd>Spacebar</kbd> or <kbd>→</kbd> for hands-free foot-pedal simulation.

---

### 7. 🌶️ Recipe Customizer & Dynamic Servings Scaler
- **Dynamic Servings Scaler**: Click `−` or `+` to adjust servings (e.g., 2 to 4 servings). Ingredient amounts, units, and calorie calculations recalculate in real-time!
- **Spice Level Selector**: Mild 🫑, Medium 🌶️, Hot 🔥, Fiery 🌋.
- **Dietary Switch**: Seamlessly toggle Vegetarian vs. Non-Vegetarian protein alternatives.

---

### 8. 🍎 Genuine Nutrition Information
- **Accurate Nutritional Data**: Calibrated using USDA National Nutrient Database & ICMR-NIN Food Composition Tables.
- **Macro Split Breakdown**:
  - Calories (kcal)
  - Protein (g)
  - Carbohydrates (g)
  - Fat (g)
  - Dietary Fiber (g)
  - Sodium (mg)
- **Health & Wellness Badges**: High Protein, Fermented Goodness, Heart Friendly, Low Calorie.

---

### 9. 🌎 Food Categories Catalog
- **South Indian**: Crispy Masala Dosa, Steaming Idli & Sambar, Semiya Payasam, Tomato Thokku.
- **North Indian**: Royal Dum Chicken Biryani, Velvety Paneer Butter Masala, Samosas.
- **Chinese / Asian**: Wok-Tossed Hakka Noodles, Vegetable Fried Rice.
- **Italian**: Classic Penne all'Arrabbiata Pasta.
- **Snacks**: Crispy Punjabi Samosas, Street Style Spicy Egg Bhurji Toast.
- **Desserts**: Shahi Royal Gulab Jamun, Cardamom Saffron Payasam.

---

### 10. 👤 Personal Kitchen Hub
- **Saved Favorites**: One-click heart icon to save recipes to `localStorage`.
- **Custom Recipe Creator**: Form builder to publish family recipes with ingredients, timings, and instructions.
- **Cooking History**: Automatic logging of cooked dishes with timestamps.
- **Interactive Shopping List**:
  - Add missing items from any recipe or type custom grocery entries.
  - Check off items while shopping in the store.
  - One-click **📋 Copy** to share grocery lists via WhatsApp or SMS.

---

## 🚀 How to Run Locally

### Option 1: Quick Browser Run (Zero Installation)
Simply open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari):
```bash
# On Windows PowerShell
Start-Process "index.html"
```

### Option 2: Local HTTP Server (Recommended)
```bash
# Using Python
py -m http.server 8080
# Or python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### Option 3: Python FastAPI Backend (Full-Stack Mode)
```bash
cd backend
pip install -r requirements.txt
python app.py
```
API Documentation will be live at: [http://localhost:8000/docs](http://localhost:8000/docs).

---

## 📁 File Structure

```text
cooking recipie web/
├── index.html                 # Main Single Page Application
├── README.md                  # Comprehensive Documentation
├── css/
│   └── style.css              # Custom Culinary Design System & Animations
├── js/
│   ├── recipes-data.js        # Curated Recipe Database & Nutrition
│   ├── app.js                 # App Controller, Search, Filters, Scaler, Hub
│   ├── ingredient-finder.js   # Pantry Matcher & Dynamic AI Recipe Engine
│   ├── scanner.js             # Computer Vision Dish Scanner & Radar Simulation
│   ├── voice-mode.js          # Web Speech Hands-Free Voice Assistant & Timer
│   └── ai-assistant.js        # Chef Gustora AI Chatbot & Knowledge Base
├── assets/
│   └── images/                # Studio Food Photography Assets
│       ├── hero.jpg
│       ├── chicken_biryani.jpg
│       ├── masala_dosa.jpg
│       ├── paneer_butter_masala.jpg
│       ├── italian_pasta.jpg
│       ├── hakka_noodles.jpg
│       ├── samosas.jpg
│       ├── gulab_jamun.jpg
│       ├── idli_sambar.jpg
│       ├── fried_rice.jpg
│       └── payasam.jpg
└── backend/
    ├── app.py                 # FastAPI REST API Endpoints
    └── requirements.txt       # Python Dependencies
```

---

## 🛡️ Technologies Used
- **Frontend**: HTML5, Vanilla CSS3 (Custom CSS Variables, Glassmorphism, Responsive Grid), Modern JavaScript (ES6+ Classes).
- **APIs**: Web Speech Recognition API, Web Speech Synthesis API, Web Audio API, WebRTC MediaDevices.
- **Backend (Optional)**: Python 3.10+, FastAPI, Uvicorn.
- **Storage**: Browser LocalStorage for persistent shopping lists, favorites, and history.
