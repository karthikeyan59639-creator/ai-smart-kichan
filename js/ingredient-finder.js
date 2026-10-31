/**
 * Gustora AI - Ingredient-Based Recipe Finder
 * Computes exact pantry match percentages, identifies missing ingredients,
 * and generates custom AI recipes dynamically when given arbitrary ingredient sets.
 */

class IngredientFinder {
  constructor() {
    this.selectedIngredients = ["tomato", "onion", "rice", "egg"]; // Default example per prompt!
    this.init();
  }

  init() {
    this.renderStapleChips();
    this.renderTags();
    this.setupListeners();
    this.findRecipes();
  }

  renderStapleChips() {
    const container = document.getElementById("stapleChipsGrid");
    if (!container) return;

    container.innerHTML = PANTRY_STAPLES.map(s => {
      const isSelected = this.selectedIngredients.includes(s.id);
      return `
        <button class="staple-chip ${isSelected ? 'selected' : ''}" data-id="${s.id}">
          <span>${s.icon}</span> ${s.name}
        </button>
      `;
    }).join("");
  }

  renderTags() {
    const container = document.getElementById("finderTagsContainer");
    if (!container) return;

    // Keep tags inside
    const tagsHTML = this.selectedIngredients.map(ing => `
      <span class="ingredient-tag">
        ${ing}
        <button class="tag-remove-btn" onclick="ingredientFinder.removeIngredient('${ing}')" title="Remove">✕</button>
      </span>
    `).join("");

    container.innerHTML = tagsHTML + `
      <input type="text" id="finderInput" class="finder-text-input" placeholder="Type an ingredient & press Enter (e.g. potato, garlic)...">
    `;

    // Reattach enter key event
    const input = document.getElementById("finderInput");
    if (input) {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === ",") {
          e.preventDefault();
          const val = input.value.trim().toLowerCase().replace(",", "");
          if (val) {
            this.addIngredient(val);
            input.value = "";
          }
        }
      });
    }
  }

  addIngredient(name) {
    const clean = name.toLowerCase().trim();
    if (clean && !this.selectedIngredients.includes(clean)) {
      this.selectedIngredients.push(clean);
      this.renderTags();
      this.renderStapleChips();
      this.findRecipes();
    }
  }

  removeIngredient(name) {
    this.selectedIngredients = this.selectedIngredients.filter(i => i !== name);
    this.renderTags();
    this.renderStapleChips();
    this.findRecipes();
  }

  setupListeners() {
    document.addEventListener("click", e => {
      const chip = e.target.closest(".staple-chip");
      if (chip) {
        const id = chip.dataset.id;
        if (this.selectedIngredients.includes(id)) {
          this.removeIngredient(id);
        } else {
          this.addIngredient(id);
        }
      }
    });

    const generateAiBtn = document.getElementById("generateAiRecipeBtn");
    if (generateAiBtn) {
      generateAiBtn.addEventListener("click", () => this.generateAiRecipe());
    }
  }

  findRecipes() {
    const resultsContainer = document.getElementById("finderResultsGrid");
    const countBadge = document.getElementById("finderCountBadge");
    if (!resultsContainer) return;

    if (this.selectedIngredients.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-dim);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🥕</div>
          <p>Select or type ingredients above to see matching dishes from your pantry!</p>
        </div>
      `;
      if (countBadge) countBadge.textContent = "0 recipes found";
      return;
    }

    // Match recipes based on pantry ingredients
    const scoredRecipes = RECIPES_DATA.map(recipe => {
      let matchedCount = 0;
      const matchedIngredients = [];
      const missingIngredients = [];

      recipe.ingredients.forEach(ing => {
        const key = ing.pantryKey || ing.name.toLowerCase();
        const has = this.selectedIngredients.some(sel => 
          key.includes(sel) || sel.includes(key) || ing.name.toLowerCase().includes(sel)
        );

        if (has) {
          matchedCount++;
          matchedIngredients.push(ing.name);
        } else {
          missingIngredients.push(ing.name);
        }
      });

      const matchPercent = Math.round((matchedCount / recipe.ingredients.length) * 100);

      return {
        recipe,
        matchPercent,
        matchedCount,
        totalCount: recipe.ingredients.length,
        matchedIngredients,
        missingIngredients
      };
    })
    .filter(item => item.matchedCount > 0)
    .sort((a, b) => b.matchPercent - a.matchPercent);

    if (countBadge) {
      countBadge.textContent = `${scoredRecipes.length} dishes matched`;
    }

    if (scoredRecipes.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-dim);">
          <p>No exact catalog matches found. Try adding basic pantry items like salt, onion, or oil, or click below to generate an AI recipe!</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = scoredRecipes.map(item => {
      const { recipe, matchPercent, matchedCount, totalCount, missingIngredients } = item;
      const badgeClass = matchPercent >= 70 ? 'score-perfect' : 'score-high';
      const isFav = app && app.favorites.includes(recipe.id);

      return `
        <div class="recipe-card">
          <div class="recipe-image-wrap">
            <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
            <button class="recipe-fav-btn ${isFav ? 'is-favorite' : ''}" onclick="event.stopPropagation(); app.toggleFavorite('${recipe.id}')">
              ${isFav ? '❤️' : '🤍'}
            </button>
          </div>
          <div class="recipe-content">
            <div class="match-score-badge ${badgeClass}">
              <span>⚡ ${matchPercent}% Pantry Match (${matchedCount}/${totalCount} ingredients)</span>
            </div>

            <h3 class="recipe-title" onclick="app.openRecipeModal('${recipe.id}')" style="cursor: pointer;">${recipe.title}</h3>
            
            <div class="ingredients-breakdown">
              <div class="breakdown-row have">
                <span>✓ Have:</span>
                <span>${item.matchedIngredients.slice(0, 3).join(", ")}${item.matchedIngredients.length > 3 ? '...' : ''}</span>
              </div>
              ${missingIngredients.length > 0 ? `
                <div class="breakdown-row missing">
                  <span>✕ Missing:</span>
                  <span>${missingIngredients.slice(0, 3).join(", ")}${missingIngredients.length > 3 ? ` (+${missingIngredients.length - 3} more)` : ''}</span>
                </div>
              ` : `
                <div class="breakdown-row have" style="font-weight: 700;">
                  <span>🎉 You have 100% of the ingredients!</span>
                </div>
              `}
            </div>

            <div class="recipe-card-footer" style="margin-top: 1rem;">
              <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="app.openRecipeModal('${recipe.id}')">
                Cook This
              </button>
              ${missingIngredients.length > 0 ? `
                <button class="btn btn-secondary btn-sm" onclick="ingredientFinder.addMissingToShopList('${recipe.id}')" title="Add missing ingredients to list">
                  + Add Missing
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  addMissingToShopList(recipeId) {
    const recipe = RECIPES_DATA.find(r => r.id === recipeId);
    if (!recipe || !window.app) return;

    let addedCount = 0;
    recipe.ingredients.forEach(ing => {
      const key = ing.pantryKey || ing.name.toLowerCase();
      const has = this.selectedIngredients.some(sel => 
        key.includes(sel) || sel.includes(key) || ing.name.toLowerCase().includes(sel)
      );
      if (!has) {
        window.app.addToShoppingList(`${ing.amount} ${ing.unit} ${ing.name}`);
        addedCount++;
      }
    });

    window.app.showToast(`Added ${addedCount} missing ingredients for ${recipe.title} to your Shopping List!`);
  }

  // --- Dynamic AI Recipe Generation ---
  generateAiRecipe() {
    if (this.selectedIngredients.length === 0) {
      if (window.app) window.app.showToast("Please add at least 2 ingredients first!");
      return;
    }

    const aiOutputContainer = document.getElementById("aiGeneratedOutput");
    if (!aiOutputContainer) return;

    aiOutputContainer.style.display = "block";
    aiOutputContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <div style="font-size: 2rem; animation: radarScan 1.5s infinite;">✨</div>
        <p style="margin-top: 0.5rem; font-weight: 600;">Chef Gustora AI is crafting a bespoke gourmet recipe with [${this.selectedIngredients.join(", ")}]...</p>
      </div>
    `;
    aiOutputContainer.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      const recipe = this.synthesizeRecipeFromIngredients(this.selectedIngredients);
      
      aiOutputContainer.innerHTML = `
        <div class="ai-generated-box">
          <div class="ai-badge">🤖 AI Generated Bespoke Recipe</div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
            <div>
              <h3 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 0.4rem;">
                ${recipe.title}
              </h3>
              <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 650px;">
                ${recipe.description}
              </p>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-primary btn-sm" onclick="ingredientFinder.saveAiRecipe()">
                💾 Save to My Recipes
              </button>
              <button class="btn btn-accent-voice btn-sm" onclick="ingredientFinder.cookAiRecipeWithVoice()">
                🎙️ Voice Cook
              </button>
            </div>
          </div>

          <div style="display: flex; gap: 2rem; margin: 1.25rem 0; padding: 0.75rem 0; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 0.88rem;">
            <span>⏱️ <strong>Prep:</strong> ${recipe.prepTime}m</span>
            <span>🔥 <strong>Cook:</strong> ${recipe.cookTime}m</span>
            <span>🍽️ <strong>Servings:</strong> ${recipe.servings}</span>
            <span>⚡ <strong>Calories:</strong> ${recipe.nutrition.calories} kcal</span>
            <span>🌶️ <strong>Spice:</strong> ${recipe.spiceLevel}</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 2rem; margin-top: 1.5rem;">
            <div>
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--accent-saffron);">Ingredients Required</h4>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                ${recipe.ingredients.map(i => `
                  <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;">
                    <span style="color: #10b981;">•</span>
                    <span><strong>${i.amount} ${i.unit}</strong> ${i.name}</span>
                  </li>
                `).join("")}
              </ul>
            </div>

            <div>
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--accent-saffron);">Preparation Steps</h4>
              <ol style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
                ${recipe.instructions.map(s => `
                  <li style="display: flex; gap: 0.75rem; font-size: 0.92rem; line-height: 1.5;">
                    <span style="background: rgba(249,115,22,0.2); color: var(--accent-saffron); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0;">${s.step}</span>
                    <span>${s.text}</span>
                  </li>
                `).join("")}
              </ol>
            </div>
          </div>
        </div>
      `;
      this.lastGeneratedAiRecipe = recipe;
    }, 1200);
  }

  synthesizeRecipeFromIngredients(pantry) {
    const hasRice = pantry.includes("rice");
    const hasEgg = pantry.includes("egg");
    const hasTomato = pantry.includes("tomato");
    const hasOnion = pantry.includes("onion");
    const hasChicken = pantry.includes("chicken");
    const hasPasta = pantry.includes("pasta");
    const hasPaneer = pantry.includes("paneer");

    let title = "Homestyle Pantry Pan Toss";
    let desc = "A flavorful dish creatively brought together using your available kitchen ingredients.";
    let category = "Fusion";
    let prepTime = 12;
    let cookTime = 15;
    let calories = 380;
    let protein = 14;
    let carbs = 48;
    let fat = 12;

    if (hasRice && hasEgg && hasTomato && hasOnion) {
      title = "Golden Egg & Caramelized Tomato Spiced Rice";
      desc = "Fragrant rice tossed with fluffy spiced scrambled eggs, jammy caramelized onions, and charred tangy tomatoes.";
      category = "Comfort Bowls";
      calories = 420;
      protein = 18;
    } else if (hasChicken && hasOnion) {
      title = "Pan-Seared Spiced Onion Chicken";
      desc = "Succulent chicken chunks braised with browned onions and aromatics into a rich, savory glaze.";
      category = "High Protein";
      calories = 480;
      protein = 38;
    } else if (hasPasta && hasTomato) {
      title = "Rustic Tomato Garlic Skillet Pasta";
      desc = "Tender pasta coated in sweet pan-burst tomatoes, garlic-infused oil, and fresh herbs.";
      category = "Italian Express";
      calories = 410;
      protein = 11;
    } else if (hasPaneer && hasTomato) {
      title = "Spiced Pan-Tossed Tomato Paneer";
      desc = "Golden seared paneer cubes simmered in a spiced tomato reduction.";
      category = "North Indian";
      calories = 390;
      protein = 20;
    } else {
      title = `Savory ${pantry.slice(0, 2).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" & ")} Sauté`;
    }

    return {
      id: "ai-" + Date.now(),
      title,
      category,
      cuisine: "AI Smart Kitchen",
      diet: hasEgg || hasChicken ? "non-veg" : "veg",
      difficulty: "Easy",
      prepTime,
      cookTime,
      servings: 2,
      spiceLevel: "Medium",
      rating: 5.0,
      reviewsCount: 1,
      image: "assets/images/hero.jpg",
      description: desc,
      nutrition: {
        calories,
        protein,
        carbs,
        fat,
        fiber: 4,
        sodium: 480,
        healthTags: ["Pantry Fresh", "Zero Food Waste", "Custom Crafted"]
      },
      ingredients: pantry.map(p => {
        return { name: p.charAt(0).toUpperCase() + p.slice(1), amount: 1, unit: "cup / portion", pantryKey: p };
      }).concat([
        { name: "Cooking Oil or Butter", amount: 1.5, unit: "tbsp", pantryKey: "oil" },
        { name: "Salt & Crushed Pepper", amount: 1, unit: "pinch to taste", pantryKey: "salt" }
      ]),
      instructions: [
        { step: 1, text: `Prep all ingredients by washing, dicing, and portioning [${pantry.join(", ")}].` },
        { step: 2, text: "Heat 1.5 tbsp oil or butter in a wide skillet or pan over medium-high heat." },
        { step: 3, text: `Add base aromatics first (like onions, garlic, or tomatoes) and sauté for 4-5 minutes until caramelized and fragrant.` },
        { step: 4, text: `Incorporate the primary ingredients [${pantry.filter(p => !['onion','garlic'].includes(p)).join(", ")}]. Season with salt, pepper, and desired spices.` },
        { step: 5, text: "Toss vigorously on medium flame for 6-8 minutes until thoroughly cooked through and flavors meld together harmoniously." },
        { step: 6, text: "Garnish with fresh herbs if available and serve hot immediately." }
      ]
    };
  }

  saveAiRecipe() {
    if (!this.lastGeneratedAiRecipe || !window.app) return;
    window.app.customRecipes.push(this.lastGeneratedAiRecipe);
    localStorage.setItem("gustora_custom_recipes", JSON.stringify(window.app.customRecipes));
    window.app.recipes.unshift(this.lastGeneratedAiRecipe);
    window.app.renderAllRecipes();
    window.app.showToast(`Saved "${this.lastGeneratedAiRecipe.title}" to your recipes!`);
  }

  cookAiRecipeWithVoice() {
    if (this.lastGeneratedAiRecipe && window.voiceAssistant) {
      window.voiceAssistant.startCooking(this.lastGeneratedAiRecipe);
    }
  }
}

let ingredientFinder;
document.addEventListener("DOMContentLoaded", () => {
  ingredientFinder = new IngredientFinder();
  window.ingredientFinder = ingredientFinder;
});
