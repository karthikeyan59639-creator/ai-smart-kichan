/**
 * Gustora AI - Authentication & User Profile Management
 * Handles Login, Registration / Create Profile, Profile Customization,
 * Avatars, Cooking Ranks, Dietary Preferences, and Local Storage Sync.
 */

class AuthManager {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("gustora_auth_user") || "null");
    this.selectedAvatar = "👨‍🍳";
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.setupDomEvents();
      this.renderHeaderAuth();
      this.renderHubProfileCard();
    });
  }

  // --- Header Navigation Auth Status ---
  renderHeaderAuth() {
    const container = document.getElementById("navAuthContainer");
    if (!container) return;

    if (this.currentUser) {
      container.innerHTML = `
        <div class="user-nav-chip" id="userNavProfileBtn" title="View Chef Profile" onclick="authManager.openProfileModal()">
          <span class="user-chip-avatar">${this.currentUser.avatar || "👨‍🍳"}</span>
          <span class="user-chip-name">${this.escapeHTML(this.currentUser.name)}</span>
          <span class="user-chip-rank">${this.getSkillBadge(this.currentUser.skill)}</span>
        </div>
      `;
    } else {
      const loginText = window.i18n ? window.i18n.get("nav_login") : "🔑 Login / Sign Up";
      container.innerHTML = `
        <button class="btn btn-secondary btn-sm" id="headerLoginBtn" onclick="authManager.openAuthModal('login')">
          ${loginText}
        </button>
      `;
    }
  }

  // --- Hub Profile Card in My Kitchen Section ---
  renderHubProfileCard() {
    const hubContainer = document.getElementById("hubProfileCardContainer");
    if (!hubContainer) return;

    const t = (k) => (window.i18n ? window.i18n.get(k) : k);

    if (this.currentUser) {
      const favsCount = (window.app && window.app.favorites) ? window.app.favorites.length : 0;
      const cookedCount = (window.app && window.app.history) ? window.app.history.length : 0;
      const customCount = (window.app && window.app.customRecipes) ? window.app.customRecipes.length : 0;

      hubContainer.innerHTML = `
        <div class="chef-profile-banner">
          <div class="profile-banner-left">
            <div class="profile-avatar-large">${this.currentUser.avatar || "👨‍🍳"}</div>
            <div>
              <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
                <h3 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 800; margin: 0;">
                  ${this.escapeHTML(this.currentUser.name)}
                </h3>
                <span class="skill-tag">${this.getSkillLabel(this.currentUser.skill)}</span>
                <span class="diet-tag">${this.getDietLabel(this.currentUser.diet)}</span>
              </div>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.25rem;">
                ${this.escapeHTML(this.currentUser.bio || "Culinary Explorer & Home Chef")}
              </p>
              <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 0.25rem;">
                📧 ${this.escapeHTML(this.currentUser.email)} • Joined ${this.currentUser.joinedDate || "Recently"}
              </div>
            </div>
          </div>

          <div class="profile-banner-stats">
            <div class="pstat-item">
              <span class="pstat-num">${cookedCount}</span>
              <span class="pstat-label">${t("profile_stat_cooked")}</span>
            </div>
            <div class="pstat-item">
              <span class="pstat-num">${favsCount}</span>
              <span class="pstat-label">${t("profile_stat_favs")}</span>
            </div>
            <div class="pstat-item">
              <span class="pstat-num">${customCount}</span>
              <span class="pstat-label">${t("profile_stat_custom")}</span>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button class="btn btn-secondary btn-sm" onclick="authManager.openProfileModal()">
                ${t("profile_edit_btn")}
              </button>
              <button class="btn-icon" title="Logout" onclick="authManager.logout()" style="width: 36px; height: 36px; font-size: 0.95rem;">
                🚪
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      hubContainer.innerHTML = `
        <div class="guest-profile-banner">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="font-size: 2.4rem;">👨‍🍳</div>
            <div>
              <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; margin-bottom: 0.25rem;">
                ${t("auth_welcome_back")}
              </h4>
              <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0;">
                ${t("auth_login_desc")}
              </p>
            </div>
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" onclick="authManager.openAuthModal('signup')">
              ${t("auth_tab_signup")}
            </button>
            <button class="btn btn-secondary btn-sm" onclick="authManager.openAuthModal('login')">
              ${t("auth_tab_login")}
            </button>
          </div>
        </div>
      `;
    }
  }

  // --- Modal Openers ---
  openAuthModal(initialTab = "login") {
    const modal = document.getElementById("authModal");
    if (!modal) return;
    modal.classList.add("open");
    this.switchAuthTab(initialTab);
  }

  closeAuthModal() {
    const modal = document.getElementById("authModal");
    if (modal) modal.classList.remove("open");
  }

  openProfileModal() {
    if (!this.currentUser) {
      this.openAuthModal("login");
      return;
    }
    const modal = document.getElementById("profileModal");
    if (!modal) return;
    this.populateProfileModalData();
    modal.classList.add("open");
  }

  closeProfileModal() {
    const modal = document.getElementById("profileModal");
    if (modal) modal.classList.remove("open");
  }

  switchAuthTab(tab) {
    const loginContent = document.getElementById("authLoginTabContent");
    const signupContent = document.getElementById("authSignupTabContent");
    const tabLoginBtn = document.getElementById("tabBtnLogin");
    const tabSignupBtn = document.getElementById("tabBtnSignup");

    if (tab === "signup") {
      if (loginContent) loginContent.style.display = "none";
      if (signupContent) signupContent.style.display = "block";
      if (tabLoginBtn) tabLoginBtn.classList.remove("active");
      if (tabSignupBtn) tabSignupBtn.classList.add("active");
    } else {
      if (loginContent) loginContent.style.display = "block";
      if (signupContent) signupContent.style.display = "none";
      if (tabLoginBtn) tabLoginBtn.classList.add("active");
      if (tabSignupBtn) tabSignupBtn.classList.remove("active");
    }
  }

  // --- DOM Setup & Form Listeners ---
  setupDomEvents() {
    // Auth Modal Close
    const closeBtn = document.getElementById("authModalClose");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeAuthModal());

    const profileCloseBtn = document.getElementById("profileModalClose");
    if (profileCloseBtn) profileCloseBtn.addEventListener("click", () => this.closeProfileModal());

    // Tab buttons
    const tabLogin = document.getElementById("tabBtnLogin");
    const tabSignup = document.getElementById("tabBtnSignup");
    if (tabLogin) tabLogin.addEventListener("click", () => this.switchAuthTab("login"));
    if (tabSignup) tabSignup.addEventListener("click", () => this.switchAuthTab("signup"));

    // Avatar Selection Buttons
    document.querySelectorAll(".avatar-select-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".avatar-select-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        this.selectedAvatar = btn.dataset.avatar || "👨‍🍳";
      });
    });

    // Login Form Submit
    const loginForm = document.getElementById("authLoginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        this.handleLogin(email, password);
      });
    }

    // Quick Demo Account Login
    const demoBtn = document.getElementById("demoAccountBtn");
    if (demoBtn) {
      demoBtn.addEventListener("click", () => {
        this.handleLogin("karthi.chef@gustora.ai", "demo123", true);
      });
    }

    // Signup / Create Profile Form Submit
    const signupForm = document.getElementById("authSignupForm");
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const skill = document.getElementById("signupSkill").value;
        const diet = document.getElementById("signupDiet").value;
        const cuisine = document.getElementById("signupCuisine").value;
        const bio = document.getElementById("signupBio").value.trim();

        if (!name || !email) {
          alert("Please fill in your name and email.");
          return;
        }

        this.handleSignup({
          name,
          email,
          skill,
          diet,
          cuisine,
          avatar: this.selectedAvatar || "👨‍🍳",
          bio: bio || "Passionate home chef discovering new flavors with Gustora AI."
        });
      });
    }

    // Profile Edit Form Submit
    const profileEditForm = document.getElementById("profileEditForm");
    if (profileEditForm) {
      profileEditForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("editProfileName").value.trim();
        const skill = document.getElementById("editProfileSkill").value;
        const diet = document.getElementById("editProfileDiet").value;
        const cuisine = document.getElementById("editProfileCuisine").value;
        const bio = document.getElementById("editProfileBio").value.trim();

        this.updateProfile({ name, skill, diet, cuisine, bio });
      });
    }
  }

  // --- Auth Handlers ---
  handleLogin(email, password, isDemo = false) {
    let user;
    const existing = JSON.parse(localStorage.getItem("gustora_registered_users") || "[]");
    const matched = existing.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (matched) {
      user = matched;
    } else if (isDemo || email.includes("karthi") || email.includes("chef")) {
      user = {
        id: "user-karthi",
        name: "Karthi Selvam",
        email: email || "karthi.chef@gustora.ai",
        skill: "master",
        diet: "all",
        cuisine: "south_indian",
        avatar: "👨‍🍳",
        bio: "Passionate about authentic South Indian culinary heritage, crispy dosas, and spicy dum biryani.",
        joinedDate: "October 2026"
      };
    } else {
      user = {
        id: "user-" + Date.now(),
        name: email.split("@")[0],
        email: email,
        skill: "intermediate",
        diet: "all",
        cuisine: "south_indian",
        avatar: "🧑‍🍳",
        bio: "Exploring smart cooking techniques with Gustora AI.",
        joinedDate: "October 2026"
      };
    }

    this.setCurrentUser(user);
    this.closeAuthModal();

    const t = (k) => (window.i18n ? window.i18n.get(k) : k);
    if (window.app && window.app.showToast) {
      window.app.showToast(`${t("logged_in_toast")} ${user.name}! 🌟`);
    }
  }

  handleSignup(data) {
    const user = {
      id: "user-" + Date.now(),
      name: data.name,
      email: data.email,
      skill: data.skill || "intermediate",
      diet: data.diet || "all",
      cuisine: data.cuisine || "south_indian",
      avatar: data.avatar || "👨‍🍳",
      bio: data.bio || "",
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };

    // Save to registered pool
    const registered = JSON.parse(localStorage.getItem("gustora_registered_users") || "[]");
    registered.push(user);
    localStorage.setItem("gustora_registered_users", JSON.stringify(registered));

    this.setCurrentUser(user);
    this.closeAuthModal();

    const t = (k) => (window.i18n ? window.i18n.get(k) : k);
    if (window.app && window.app.showToast) {
      window.app.showToast(`${t("profile_created_toast")} ${user.name}! 🚀`);
    }
  }

  setCurrentUser(user) {
    this.currentUser = user;
    localStorage.setItem("gustora_auth_user", JSON.stringify(user));
    this.renderHeaderAuth();
    this.renderHubProfileCard();
  }

  updateProfile(updates) {
    if (!this.currentUser) return;
    this.currentUser = { ...this.currentUser, ...updates };
    localStorage.setItem("gustora_auth_user", JSON.stringify(this.currentUser));
    this.renderHeaderAuth();
    this.renderHubProfileCard();
    this.closeProfileModal();

    if (window.app && window.app.showToast) {
      window.app.showToast("Chef Profile updated successfully! 🥗");
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("gustora_auth_user");
    this.renderHeaderAuth();
    this.renderHubProfileCard();
    this.closeProfileModal();

    const t = (k) => (window.i18n ? window.i18n.get(k) : k);
    if (window.app && window.app.showToast) {
      window.app.showToast(t("logged_out_toast"));
    }
  }

  populateProfileModalData() {
    if (!this.currentUser) return;
    const u = this.currentUser;

    // Header in modal
    const avatarEl = document.getElementById("profileModalAvatar");
    const nameEl = document.getElementById("profileModalName");
    const emailEl = document.getElementById("profileModalEmail");
    const rankEl = document.getElementById("profileModalRank");

    if (avatarEl) avatarEl.textContent = u.avatar || "👨‍🍳";
    if (nameEl) nameEl.textContent = u.name;
    if (emailEl) emailEl.textContent = u.email;
    if (rankEl) rankEl.textContent = this.getSkillLabel(u.skill);

    // Edit fields
    const nameInput = document.getElementById("editProfileName");
    const skillInput = document.getElementById("editProfileSkill");
    const dietInput = document.getElementById("editProfileDiet");
    const cuisineInput = document.getElementById("editProfileCuisine");
    const bioInput = document.getElementById("editProfileBio");

    if (nameInput) nameInput.value = u.name;
    if (skillInput) skillInput.value = u.skill;
    if (dietInput) dietInput.value = u.diet;
    if (cuisineInput) cuisineInput.value = u.cuisine;
    if (bioInput) bioInput.value = u.bio || "";
  }

  // Helpers
  getSkillBadge(skill) {
    if (skill === "master") return "👑 Master";
    if (skill === "beginner") return "🌱 Beginner";
    return "🍳 Home Cook";
  }

  getSkillLabel(skill) {
    if (window.i18n) {
      const trans = window.i18n.get("auth_skill_" + skill);
      if (trans && trans !== ("auth_skill_" + skill)) {
        return trans.split("(")[0].trim();
      }
    }
    if (skill === "master") return "👑 Master Chef";
    if (skill === "beginner") return "🌱 Beginner Cook";
    return "🍳 Home Chef";
  }

  getDietLabel(diet) {
    if (window.i18n) {
      const trans = window.i18n.get("auth_diet_" + diet);
      if (trans && trans !== ("auth_diet_" + diet)) {
        return trans.split("(")[0].trim();
      }
    }
    if (diet === "veg") return "🟢 Pure Vegetarian";
    if (diet === "nonveg") return "🔴 Non-Vegetarian";
    if (diet === "vegan") return "🌱 Vegan";
    if (diet === "keto") return "🥑 Keto";
    return "🥗 Flexible Diet";
  }

  escapeHTML(str) {
    if (!str) return "";
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
}

// Global instance
const authManager = new AuthManager();
window.authManager = authManager;
