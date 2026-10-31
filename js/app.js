/**
 * Gustora AI - Main Application Controller
 * Handles Navigation, Search, Filter by Category/Diet/Time, Dynamic Modals,
 * Serving Scaler, Favorites, Shopping List, and Custom Recipe Creator.
 */

class CookingApp {
  constructor() {
    this.recipes = [...RECIPES_DATA];
    this.currentRecipe = null;
    this.currentServings = 4;
    this.activeCategory = "all";
    this.activeDiet = "all";
    this.activeMaxTime = 120;
    this.activeSpice = "all";

    // User State from LocalStorage
    this.favorites = JSON.parse(localStorage.getItem("gustora_favorites") || "[]");
    this.history = JSON.parse(localStorage.getItem("gustora_history") || "[]");
    this.shoppingList = JSON.parse(localStorage.getItem("gustora_shopping_list") || "[]");
    this.customRecipes = JSON.parse(localStorage.getItem("gustora_custom_recipes") || "[]");

    // Merge custom recipes
    if (this.customRecipes.length > 0) {
      this.recipes = [...this.customRecipes, ...this.recipes];
    }

    this.init();
  }

  init() {
    this.renderCategories();
    this.renderPopularRecipes();
    this.renderAllRecipes();
    this.setupEventListeners();
    this.updateShoppingBadge();
    this.updateFavoritesCount();
    this.renderShoppingList();
    this.renderFavoritesGrid();
    this.renderHistoryList();
  }

  // --- Category Render ---
  renderCategories() {
    const container = document.getElementById("categoriesContainer");
    if (!container) return;

    let html = `
      <div class="category-card ${this.activeCategory === 'all' ? 'active' : ''}" data-category="all">
        <div class="category-icon">✨</div>
        <h4 class="category-name">All Cuisines</h4>
        <p class="category-count">${this.recipes.length} Dishes</p>
        <p class="category-examples">Explore everything</p>
      </div>
    `;

    FOOD_CATEGORIES.forEach(cat => {
      const isSelected = this.activeCategory.toLowerCase() === cat.name.toLowerCase();
      html += `
        <div class="category-card ${isSelected ? 'active' : ''}" data-category="${cat.name}">
          <div class="category-icon">${cat.icon}</div>
          <h4 class="category-name">${cat.name}</h4>
          <p class="category-count">${cat.count} Dishes</p>
          <p class="category-examples">${cat.examples}</p>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // --- Popular Recipes Render ---
  renderPopularRecipes() {
    const container = document.getElementById("popularGrid");
    if (!container) return;

    // Pick top 3 rated recipes
    const popular = [...this.recipes].sort((a, b) => b.rating - a.rating).slice(0, 3);
    container.innerHTML = popular.map(r => this.generateRecipeCardHTML(r)).join("");
  }

  // --- Main Recipes Render with Filtering ---
  renderAllRecipes() {
    const container = document.getElementById("recipesGrid");
    const countLabel = document.getElementById("resultsCount");
    if (!container) return;

    let filtered = this.recipes.filter(r => {
      // Category filter
      if (this.activeCategory !== "all" && r.category.toLowerCase() !== this.activeCategory.toLowerCase()) {
        return false;
      }
      // Diet filter
      if (this.activeDiet !== "all" && r.diet !== this.activeDiet) {
        return false;
      }
      // Max cook time filter
      if (r.prepTime + r.cookTime > this.activeMaxTime) {
        return false;
      }
      // Spice level filter
      if (this.activeSpice !== "all" && r.spiceLevel.toLowerCase() !== this.activeSpice.toLowerCase()) {
        return false;
      }
      return true;
    });

    if (countLabel) {
      countLabel.textContent = `Showing ${filtered.length} recipe${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">🍲</div>
          <h3 style="font-size: 1.5rem; font-family: var(--font-display); margin-bottom: 0.5rem;">No recipes match your filters</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try relaxing your spice level, cooking time, or dietary preferences.</p>
          <button class="btn btn-primary" onclick="app.resetFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(r => this.generateRecipeCardHTML(r)).join("");
  }

  generateRecipeCardHTML(recipe) {
    const isFav = this.favorites.includes(recipe.id);
    const totalTime = recipe.prepTime + recipe.cookTime;
    const dietBadge = recipe.diet === "veg" 
      ? `<span class="recipe-badge-diet badge-veg">🌿 Veg</span>`
      : `<span class="recipe-badge-diet badge-non-veg">🍗 Non-Veg</span>`;

    return `
      <div class="recipe-card" data-id="${recipe.id}">
        <div class="recipe-image-wrap">
          <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" onerror="this.src='assets/images/hero.jpg'">
          ${dietBadge}
          <button class="recipe-fav-btn ${isFav ? 'is-favorite' : ''}" onclick="event.stopPropagation(); app.toggleFavorite('${recipe.id}')" title="${isFav ? 'Remove from favorites' : 'Save to favorites'}">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="recipe-content">
          <div class="recipe-meta-row">
            <span class="recipe-category-tag">${recipe.category}</span>
            <span class="recipe-rating">⭐ ${recipe.rating} <span style="color: var(--text-dim); font-size: 0.75rem;">(${recipe.reviewsCount})</span></span>
          </div>
          <h3 class="recipe-title" onclick="app.openRecipeModal('${recipe.id}')" style="cursor: pointer;">${recipe.title}</h3>
          <p class="recipe-desc">${recipe.description}</p>
          
          <div class="recipe-stats">
            <div class="recipe-stat-item">
              <span class="stat-label">Prep</span>
              <span class="stat-val">${recipe.prepTime}m</span>
            </div>
            <div class="recipe-stat-item">
              <span class="stat-label">Cook</span>
              <span class="stat-val">${recipe.cookTime}m</span>
            </div>
            <div class="recipe-stat-item">
              <span class="stat-label">Total</span>
              <span class="stat-val">${totalTime}m</span>
            </div>
            <div class="recipe-stat-item">
              <span class="stat-label">Calories</span>
              <span class="stat-val">${recipe.nutrition.calories} kcal</span>
            </div>
          </div>

          <div class="recipe-card-footer">
            <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="app.openRecipeModal('${recipe.id}')">
              📖 View Recipe
            </button>
            <button class="btn btn-secondary btn-sm" onclick="app.startVoiceCookingForId('${recipe.id}')" title="Cook with Voice Mode">
              🎙️ Voice
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --- Search Bar Handler ---
  handleSearch(query) {
    const clean = query.trim().toLowerCase();
    if (!clean) {
      this.renderAllRecipes();
      return;
    }

    const matched = this.recipes.filter(r => {
      const inTitle = r.title.toLowerCase().includes(clean);
      const inCategory = r.category.toLowerCase().includes(clean);
      const inTags = r.tags && r.tags.some(t => t.toLowerCase().includes(clean));
      const inIngredients = r.ingredients && r.ingredients.some(i => i.name.toLowerCase().includes(clean));
      return inTitle || inCategory || inTags || inIngredients;
    });

    const container = document.getElementById("recipesGrid");
    const countLabel = document.getElementById("resultsCount");
    if (countLabel) countLabel.textContent = `Found ${matched.length} dish${matched.length === 1 ? '' : 'es'} for "${query}"`;

    if (matched.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.5rem; font-family: var(--font-display); margin-bottom: 0.5rem;">No dishes found matching "${query}"</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try searching for "Biryani", "Dosa", "Pasta", "Paneer", or ingredients like "Chicken" or "Rice".</p>
          <button class="btn btn-primary" onclick="document.getElementById('mainSearchInput').value=''; app.renderAllRecipes();">Show All Dishes</button>
        </div>
      `;
      return;
    }

    container.innerHTML = matched.map(r => this.generateRecipeCardHTML(r)).join("");
  }

  // --- Modal Open & Dynamic Recipe Scaler ---
  openRecipeModal(recipeId) {
    const recipe = this.recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    this.currentRecipe = recipe;
    this.currentServings = recipe.servings;

    // Log to cooking history
    this.addToHistory(recipe);

    const modal = document.getElementById("recipeModal");
    if (!modal) return;

    this.renderModalContent(recipe);
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  closeRecipeModal() {
    const modal = document.getElementById("recipeModal");
    if (modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "auto";
    }
  }

  renderModalContent(recipe) {
    const modalCover = document.getElementById("modalHeroImg");
    const modalTitle = document.getElementById("modalRecipeTitle");
    const modalCategory = document.getElementById("modalCategory");
    const modalDesc = document.getElementById("modalDesc");
    const modalRating = document.getElementById("modalRating");
    const modalPrepTime = document.getElementById("modalPrepTime");
    const modalCookTime = document.getElementById("modalCookTime");
    const modalDifficulty = document.getElementById("modalDifficulty");
    const modalSpice = document.getElementById("modalSpice");

    if (modalCover) modalCover.src = recipe.image;
    if (modalTitle) modalTitle.textContent = recipe.title;
    if (modalCategory) modalCategory.textContent = `${recipe.category} • ${recipe.cuisine}`;
    if (modalDesc) modalDesc.textContent = recipe.description;
    if (modalRating) modalRating.textContent = `⭐ ${recipe.rating} (${recipe.reviewsCount} reviews)`;
    if (modalPrepTime) modalPrepTime.textContent = `${recipe.prepTime} mins`;
    if (modalCookTime) modalCookTime.textContent = `${recipe.cookTime} mins`;
    if (modalDifficulty) modalDifficulty.textContent = recipe.difficulty;
    if (modalSpice) modalSpice.textContent = recipe.spiceLevel;

    // Update Servings & Ingredients
    this.updateScaledIngredients();

    // Render Steps
    this.renderInstructions(recipe.instructions);

    // Render Nutrition
    this.renderNutritionFacts(recipe.nutrition);

    // Setup Customize Tab inputs
    this.setupCustomizeForm(recipe);
  }

  adjustServings(delta) {
    const newServings = this.currentServings + delta;
    if (newServings >= 1 && newServings <= 16) {
      this.currentServings = newServings;
      this.updateScaledIngredients();
    }
  }

  updateScaledIngredients() {
    const servingsDisplay = document.getElementById("modalServingNum");
    if (servingsDisplay) servingsDisplay.textContent = this.currentServings;

    const container = document.getElementById("modalIngredientsList");
    if (!container || !this.currentRecipe) return;

    const baseServings = this.currentRecipe.servings || 4;
    const ratio = this.currentServings / baseServings;

    container.innerHTML = this.currentRecipe.ingredients.map((ing, idx) => {
      const scaledAmount = (ing.amount * ratio).toFixed(ing.amount % 1 === 0 && ratio % 1 === 0 ? 0 : 1);
      return `
        <label class="ingredient-item-row" for="ing_${idx}">
          <input type="checkbox" class="custom-checkbox" id="ing_${idx}">
          <span style="flex: 1; font-weight: 500; font-size: 0.92rem;">
            <strong>${scaledAmount} ${ing.unit}</strong> ${ing.name}
          </span>
          <button class="btn btn-secondary btn-sm" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" 
            onclick="event.preventDefault(); app.addToShoppingList('${scaledAmount} ${ing.unit} ${ing.name}')" title="Add to shopping list">
            + List
          </button>
        </label>
      `;
    }).join("");
  }

  renderInstructions(steps) {
    const container = document.getElementById("modalStepsList");
    if (!container) return;

    container.innerHTML = steps.map(s => `
      <div class="instruction-step-card">
        <div class="step-number-circle">${s.step}</div>
        <div style="flex: 1;">
          <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--accent-saffron);">Step ${s.step}</h5>
          <p style="font-size: 0.98rem; line-height: 1.6; color: var(--text-main);">${s.text}</p>
        </div>
      </div>
    `).join("");
  }

  renderNutritionFacts(nutri) {
    const cals = document.getElementById("nutriCalories");
    const protein = document.getElementById("nutriProtein");
    const carbs = document.getElementById("nutriCarbs");
    const fat = document.getElementById("nutriFat");
    const fiber = document.getElementById("nutriFiber");
    const sodium = document.getElementById("nutriSodium");

    const ratio = this.currentServings / (this.currentRecipe ? this.currentRecipe.servings : 4);
    const scaledCals = Math.round(nutri.calories * ratio);
    const scaledProtein = Math.round(nutri.protein * ratio);
    const scaledCarbs = Math.round(nutri.carbs * ratio);
    const scaledFat = Math.round(nutri.fat * ratio);

    if (cals) cals.textContent = `${scaledCals} kcal`;
    if (protein) protein.textContent = `${scaledProtein}g`;
    if (carbs) carbs.textContent = `${scaledCarbs}g`;
    if (fat) fat.textContent = `${scaledFat}g`;
    if (fiber) fiber.textContent = `${(nutri.fiber * ratio).toFixed(1)}g`;
    if (sodium) sodium.textContent = `${Math.round(nutri.sodium * ratio)}mg`;

    // Health tags
    const tagsContainer = document.getElementById("nutriHealthTags");
    if (tagsContainer && nutri.healthTags) {
      tagsContainer.innerHTML = nutri.healthTags.map(t => `
        <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600;">
          ✓ ${t}
        </span>
      `).join("");
    }
  }

  setupCustomizeForm(recipe) {
    const spiceSelect = document.getElementById("customSpiceSelect");
    const dietSelect = document.getElementById("customDietSelect");
    if (spiceSelect) spiceSelect.value = recipe.spiceLevel.toLowerCase();
    if (dietSelect) dietSelect.value = recipe.diet;
  }

  applyCustomization() {
    const spice = document.getElementById("customSpiceSelect").value;
    const diet = document.getElementById("customDietSelect").value;

    const modalSpice = document.getElementById("modalSpice");
    if (modalSpice) modalSpice.textContent = spice.toUpperCase();

    // Show feedback toast
    this.showToast(`Recipe adapted: Spice level updated to ${spice}, Diet: ${diet}!`);
  }

  addAllIngredientsToShoppingList() {
    if (!this.currentRecipe) return;
    const ratio = this.currentServings / this.currentRecipe.servings;
    this.currentRecipe.ingredients.forEach(ing => {
      const scaledAmount = (ing.amount * ratio).toFixed(1);
      this.addToShoppingList(`${scaledAmount} ${ing.unit} ${ing.name}`);
    });
    this.showToast(`All ${this.currentRecipe.ingredients.length} ingredients added to your Shopping List!`);
  }

  // --- Favorites System ---
  toggleFavorite(recipeId) {
    const idx = this.favorites.indexOf(recipeId);
    if (idx === -1) {
      this.favorites.push(recipeId);
      this.showToast("Saved to your Favorites!");
    } else {
      this.favorites.splice(idx, 1);
      this.showToast("Removed from Favorites.");
    }
    localStorage.setItem("gustora_favorites", JSON.stringify(this.favorites));
    this.updateFavoritesCount();
    this.renderAllRecipes();
    this.renderPopularRecipes();
    this.renderFavoritesGrid();
    if (window.authManager) window.authManager.renderHubProfileCard();
  }

  updateFavoritesCount() {
    const badge = document.getElementById("favCountBadge");
    if (badge) badge.textContent = this.favorites.length;
  }

  renderFavoritesGrid() {
    const container = document.getElementById("userFavoritesGrid");
    if (!container) return;

    const favRecipes = this.recipes.filter(r => this.favorites.includes(r.id));
    if (favRecipes.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; color: var(--text-dim);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🤍</div>
          <p>No favorite recipes saved yet. Click the heart icon on any recipe to save it here!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = favRecipes.map(r => this.generateRecipeCardHTML(r)).join("");
  }

  // --- Cooking History System ---
  addToHistory(recipe) {
    const item = {
      id: recipe.id,
      title: recipe.title,
      category: recipe.category,
      time: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
    // Avoid duplicate at top
    this.history = [item, ...this.history.filter(h => h.id !== recipe.id)].slice(0, 10);
    localStorage.setItem("gustora_history", JSON.stringify(this.history));
    this.renderHistoryList();
    if (window.authManager) window.authManager.renderHubProfileCard();
  }

  renderHistoryList() {
    const container = document.getElementById("cookingHistoryList");
    if (!container) return;

    if (this.history.length === 0) {
      container.innerHTML = `<p style="color: var(--text-dim); text-align: center; padding: 1.5rem;">No recently viewed recipes yet.</p>`;
      return;
    }

    container.innerHTML = this.history.map(h => `
      <div class="shopping-item-row" style="cursor: pointer;" onclick="app.openRecipeModal('${h.id}')">
        <div>
          <h5 style="font-size: 0.92rem; font-weight: 600; color: var(--text-main);">${h.title}</h5>
          <span style="font-size: 0.75rem; color: var(--text-dim);">${h.category} • Viewed ${h.time}</span>
        </div>
        <button class="btn btn-secondary btn-sm" style="padding: 0.25rem 0.6rem; font-size: 0.78rem;">Cook Again</button>
      </div>
    `).join("");
  }

  // --- Shopping List System ---
  addToShoppingList(itemText) {
    if (!itemText.trim()) return;
    const item = {
      id: "shop_" + Date.now() + Math.random().toString(36).substr(2, 4),
      text: itemText.trim(),
      checked: false
    };
    this.shoppingList.push(item);
    localStorage.setItem("gustora_shopping_list", JSON.stringify(this.shoppingList));
    this.updateShoppingBadge();
    this.renderShoppingList();
    this.showToast(`Added "${itemText}" to Shopping List`);
  }

  toggleShoppingItem(id) {
    const item = this.shoppingList.find(i => i.id === id);
    if (item) {
      item.checked = !item.checked;
      localStorage.setItem("gustora_shopping_list", JSON.stringify(this.shoppingList));
      this.renderShoppingList();
    }
  }

  removeShoppingItem(id) {
    this.shoppingList = this.shoppingList.filter(i => i.id !== id);
    localStorage.setItem("gustora_shopping_list", JSON.stringify(this.shoppingList));
    this.updateShoppingBadge();
    this.renderShoppingList();
  }

  clearCheckedShopping() {
    this.shoppingList = this.shoppingList.filter(i => !i.checked);
    localStorage.setItem("gustora_shopping_list", JSON.stringify(this.shoppingList));
    this.updateShoppingBadge();
    this.renderShoppingList();
    this.showToast("Cleared completed items.");
  }

  copyShoppingList() {
    if (this.shoppingList.length === 0) {
      this.showToast("Shopping list is empty.");
      return;
    }
    const text = "🛒 Gustora AI Shopping List:\n" + this.shoppingList.map(i => `${i.checked ? '✓' : '•'} ${i.text}`).join("\n");
    navigator.clipboard.writeText(text);
    this.showToast("Shopping list copied to clipboard!");
  }

  updateShoppingBadge() {
    const badge = document.getElementById("shoppingCountBadge");
    const count = this.shoppingList.filter(i => !i.checked).length;
    if (badge) badge.textContent = count;
  }

  renderShoppingList() {
    const container = document.getElementById("shoppingListItems");
    if (!container) return;

    if (this.shoppingList.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-dim);">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🛒</div>
          <p>Your shopping list is clear! Add items from any recipe or type custom ingredients below.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.shoppingList.map(item => `
      <div class="shopping-item-row">
        <label style="display: flex; align-items: center; gap: 0.75rem; flex: 1; cursor: pointer;">
          <input type="checkbox" class="custom-checkbox" ${item.checked ? 'checked' : ''} onchange="app.toggleShoppingItem('${item.id}')">
          <span class="shopping-item-name ${item.checked ? 'checked' : ''}">${item.text}</span>
        </label>
        <button class="tag-remove-btn" onclick="app.removeShoppingItem('${item.id}')" title="Delete item">✕</button>
      </div>
    `).join("");
  }

  // --- Custom User Recipe Creator ---
  createCustomRecipe(formData) {
    const newRecipe = {
      id: "custom-" + Date.now(),
      title: formData.title,
      category: formData.category,
      cuisine: formData.cuisine || "Homestyle",
      diet: formData.diet,
      difficulty: formData.difficulty,
      prepTime: parseInt(formData.prepTime) || 15,
      cookTime: parseInt(formData.cookTime) || 20,
      servings: parseInt(formData.servings) || 2,
      spiceLevel: formData.spiceLevel || "Medium",
      rating: 5.0,
      reviewsCount: 1,
      image: formData.image || "assets/images/hero.jpg",
      tags: ["custom", formData.category.toLowerCase()],
      description: formData.description,
      nutrition: {
        calories: parseInt(formData.calories) || 350,
        protein: parseInt(formData.protein) || 15,
        carbs: parseInt(formData.carbs) || 45,
        fat: parseInt(formData.fat) || 12,
        fiber: 3,
        sodium: 450,
        healthTags: ["User Created", "Homestyle Fresh"]
      },
      ingredients: formData.ingredients.split("\n").filter(l => l.trim()).map(line => {
        return { name: line.trim(), amount: 1, unit: "serving", pantryKey: line.toLowerCase() };
      }),
      instructions: formData.instructions.split("\n").filter(l => l.trim()).map((line, idx) => {
        return { step: idx + 1, text: line.trim() };
      })
    };

    this.customRecipes.push(newRecipe);
    localStorage.setItem("gustora_custom_recipes", JSON.stringify(this.customRecipes));
    this.recipes.unshift(newRecipe);
    this.renderAllRecipes();
    if (window.authManager) window.authManager.renderHubProfileCard();
    this.showToast(`Custom recipe "${newRecipe.title}" published!`);
  }

  // --- Voice Mode Trigger Helper ---
  startVoiceCookingForId(recipeId) {
    const recipe = this.recipes.find(r => r.id === recipeId);
    if (recipe && window.voiceAssistant) {
      this.closeRecipeModal();
      window.voiceAssistant.startCooking(recipe);
    }
  }

  resetFilters() {
    this.activeCategory = "all";
    this.activeDiet = "all";
    this.activeSpice = "all";
    this.activeMaxTime = 120;

    const catCards = document.querySelectorAll(".category-card");
    catCards.forEach(c => c.classList.remove("active"));
    const firstCat = document.querySelector(".category-card[data-category='all']");
    if (firstCat) firstCat.classList.add("active");

    const dietSelect = document.getElementById("dietFilter");
    if (dietSelect) dietSelect.value = "all";
    const spiceSelect = document.getElementById("spiceFilter");
    if (spiceSelect) spiceSelect.value = "all";
    const timeRange = document.getElementById("timeRange");
    if (timeRange) timeRange.value = 120;
    const timeLabel = document.getElementById("timeRangeVal");
    if (timeLabel) timeLabel.textContent = "120m";

    this.renderAllRecipes();
  }

  showToast(message) {
    let toast = document.getElementById("appToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "appToast";
      toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: #111827;
        color: #ffffff;
        border: 1px solid var(--accent-saffron);
        padding: 0.85rem 1.75rem;
        border-radius: 9999px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        font-weight: 600;
        font-size: 0.95rem;
        z-index: 3000;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
        opacity: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✨</span> ${message}`;
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";

    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(100px)";
    }, 2800);
  }

  setupEventListeners() {
    // Category click
    document.addEventListener("click", e => {
      const catCard = e.target.closest(".category-card");
      if (catCard) {
        document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
        catCard.classList.add("active");
        this.activeCategory = catCard.dataset.category;
        this.renderAllRecipes();
        // Scroll smoothly to recipes grid
        const recipesSec = document.getElementById("recipesSection");
        if (recipesSec) recipesSec.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Main search input
    const searchInput = document.getElementById("mainSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.handleSearch(e.target.value);
      });
    }

    // Modal close
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", () => this.closeRecipeModal());
    }
    const modalBackdrop = document.getElementById("recipeModal");
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) this.closeRecipeModal();
      });
    }

    // Modal Tabs
    const tabBtns = document.querySelectorAll(".modal-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tab = btn.dataset.tab;
        document.querySelectorAll(".modal-tab-content").forEach(c => c.style.display = "none");
        const target = document.getElementById(`modalTab_${tab}`);
        if (target) target.style.display = "block";
      });
    });

    // Theme toggle
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        themeBtn.textContent = newTheme === "light" ? "🌙" : "☀️";
        localStorage.setItem("gustora_theme", newTheme);
      });
    }

    // Restore saved theme
    const savedTheme = localStorage.getItem("gustora_theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
      if (themeBtn) themeBtn.textContent = savedTheme === "light" ? "🌙" : "☀️";
    }
  }
}

/**
 * Left-Side Full-Height Navigation Manager (IDE / ChatGPT Style)
 * Controls desktop sidebar collapse, mobile slide drawer, smooth scroll & scrollspy
 */
class LeftSidebarManager {
  constructor() {
    this.sidebar = document.getElementById("appLeftSidebar");
    this.backdrop = document.getElementById("sidebarBackdrop");
    this.sections = [
      { id: "home", target: "home" },
      { id: "recipesSection", target: "recipesSection" },
      { id: "ingredientFinderSection", target: "ingredientFinderSection" },
      { id: "scannerSection", target: "scannerSection" },
      { id: "categoriesSection", target: "categoriesSection" },
      { id: "userHubSection", target: "userHubSection" }
    ];
    this.init();
  }

  init() {
    this.setupToggles();
    this.setupNavigation();
    this.setupScrollSpy();
    this.restoreState();
  }

  setupToggles() {
    const headerToggle = document.getElementById("sidebarToggleBtn");
    const collapseBtn = document.getElementById("sidebarCollapseBtn");

    const toggleSidebar = () => {
      if (window.innerWidth <= 1024) {
        // Mobile / Tablet overlay mode
        const isOpen = this.sidebar ? this.sidebar.classList.toggle("open") : false;
        if (this.backdrop) this.backdrop.classList.toggle("open", isOpen);
      } else {
        // Desktop collapse mode
        document.body.classList.toggle("sidebar-collapsed");
        const isCollapsed = document.body.classList.contains("sidebar-collapsed");
        localStorage.setItem("gustora_sidebar_collapsed", isCollapsed ? "true" : "false");
      }
    };

    if (headerToggle) headerToggle.addEventListener("click", toggleSidebar);
    if (collapseBtn) collapseBtn.addEventListener("click", toggleSidebar);

    if (this.backdrop) {
      this.backdrop.addEventListener("click", () => this.closeMobile());
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && window.innerWidth <= 1024) {
        this.closeMobile();
      }
    });
  }

  setupNavigation() {
    const navItems = document.querySelectorAll(".sidebar-nav-item");
    navItems.forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = item.getAttribute("data-target") || (item.getAttribute("href") || "").replace("#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
          this.setActive(targetId);
        }
        if (window.innerWidth <= 1024) {
          this.closeMobile();
        }
      });
    });
  }

  setupScrollSpy() {
    const sectionEls = this.sections.map(s => document.getElementById(s.id)).filter(Boolean);

    const onScroll = () => {
      const scrollPos = window.scrollY + 220;
      let activeSectionId = this.sections[0].id;

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const sec = sectionEls[i];
        if (sec && sec.offsetTop <= scrollPos) {
          activeSectionId = sec.id;
          break;
        }
      }

      this.setActive(activeSectionId);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  setActive(targetId) {
    document.querySelectorAll(".sidebar-nav-item").forEach(item => {
      const target = item.getAttribute("data-target");
      item.classList.toggle("active", target === targetId);
    });
  }

  closeMobile() {
    if (this.sidebar) this.sidebar.classList.remove("open");
    if (this.backdrop) this.backdrop.classList.remove("open");
  }

  restoreState() {
    if (window.innerWidth > 1024) {
      const isCollapsed = localStorage.getItem("gustora_sidebar_collapsed") === "true";
      if (isCollapsed) {
        document.body.classList.add("sidebar-collapsed");
      }
    }
  }
}

// Initialize on DOM Ready
let app;
let sidebarManager;
document.addEventListener("DOMContentLoaded", () => {
  app = new CookingApp();
  window.app = app;

  sidebarManager = new LeftSidebarManager();
  window.sidebarManager = sidebarManager;
  window.leftNavManager = sidebarManager; // Backward compatibility
  window.rightNavManager = sidebarManager;
});

