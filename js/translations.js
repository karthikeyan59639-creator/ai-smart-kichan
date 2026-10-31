/**
 * Gustora AI - Internationalization & Multilingual System
 * Full Support for 8 Languages:
 * 1. English (en)
 * 2. Tamil (ta) - தமிழ்
 * 3. Hindi (hi) - हिन्दी
 * 4. Telugu (te) - తెలుగు
 * 5. Malayalam (ml) - മലയാളം
 * 6. Kannada (kn) - ಕನ್ನಡ
 * 7. Bengali (bn) - বাংলা
 * 8. Marathi (mr) - मराठी
 */

const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", sub: "English", flag: "🌐" },
  { code: "ta", label: "தமிழ்", sub: "Tamil", flag: "🇮🇳" },
  { code: "hi", label: "हिन्दी", sub: "Hindi", flag: "🇮🇳" },
  { code: "te", label: "తెలుగు", sub: "Telugu", flag: "🇮🇳" },
  { code: "ml", label: "മലയാളം", sub: "Malayalam", flag: "🇮🇳" },
  { code: "kn", label: "ಕನ್ನಡ", sub: "Kannada", flag: "🇮🇳" },
  { code: "bn", label: "বাংলা", sub: "Bengali", flag: "🇮🇳" },
  { code: "mr", label: "मराठी", sub: "Marathi", flag: "🇮🇳" }
];

const TRANSLATIONS = {
  en: {
    // Brand & Tagline
    brand_sub: "Smart Kitchen",
    hero_badge: "✨ AI-Powered Culinary Intelligence",
    hero_title_prefix: "Karthi",
    hero_title_highlight: "Smarter with Real-Time AI Guidance",
    hero_subtitle: "Discover authentic recipes, find dishes by leftover ingredients in your pantry, scan meals with computer vision, cook hands-free with voice guidance, and track genuine nutrition.",
    hero_cta_pantry: "🥕 What ingredients do you have?",
    hero_cta_scan: "📸 Scan a Dish",
    search_placeholder: "What do you want to cook today? (e.g., Biryani, Dosa, Salad, Pasta)...",

    // Navigation
    nav_home: "🏠 Home",
    nav_recipes: "🔍 Dish Search",
    nav_finder: "🥕 Ingredient Finder",
    nav_scanner: "📸 Dish Scanner",
    nav_categories: "🌎 Cuisines",
    nav_user_hub: "👤 My Kitchen",
    nav_ai_chef: "🤖 AI Chef",
    nav_login: "🔑 Login / Sign Up",
    nav_profile: "👤 Profile",
    nav_logout: "🚪 Logout",
    nav_menu: "Menu",
    nav_clean_home: "Home",
    nav_clean_recipes: "Dish Search",
    nav_clean_finder: "Ingredient Finder",
    nav_clean_scanner: "Dish Scanner",
    nav_clean_categories: "Cuisines",
    nav_clean_user_hub: "My Kitchen",
    sidebar_new_recipe: "New Recipe",
    sidebar_recent_dishes: "Featured Dishes",

    // Quick Bar Features
    feat_pantry_title: "Pantry Matcher",
    feat_pantry_desc: "Type ingredients to find dishes",
    feat_scanner_title: "Dish Scanner",
    feat_scanner_desc: "Snap photo to identify & cook",
    feat_voice_title: "Voice Cooking",
    feat_voice_desc: "Hands-free step-by-step guidance",
    feat_nutrition_title: "Real Nutrition",
    feat_nutrition_desc: "USDA & NIN verified macro facts",

    // Popular Section
    popular_section_tag: "Curated Recommendations",
    popular_section_title: "🔥 Signature & Popular Dishes",
    popular_section_desc: "Top-rated recipes loved by our culinary community with verified macros.",

    // Dish Search & Filters
    filter_section_tag: "Global Recipe Catalog",
    filter_section_title: "🔍 Explore All Recipes",
    filter_section_desc: "Search and filter through authentic recipes with instant dietary & cook time controls.",
    filter_diet_all: "🥗 All Diets",
    filter_diet_veg: "🟢 Pure Vegetarian",
    filter_diet_nonveg: "🔴 Non-Vegetarian",
    filter_max_time: "Max Cooking Time:",
    filter_spice_all: "🌶️ Any Spice",
    filter_spice_mild: "🫑 Mild",
    filter_spice_medium: "🌶️ Medium",
    filter_spice_hot: "🔥 Hot",
    filter_spice_fiery: "🌋 Fiery",
    results_found: "recipes found",

    // Ingredient Finder Section
    finder_section_tag: "Zero Food Waste Engine",
    finder_section_title: "🥕 Ingredient-Based Recipe Finder",
    finder_section_desc: "Tell us what ingredients are sitting in your fridge or pantry. Gustora AI matches dishes and generates custom recipes!",
    finder_input_placeholder: "Type ingredients (e.g., tomato, onion, rice, egg, potato)...",
    finder_staples_label: "Or tap quick staples:",
    finder_custom_ai_btn: "✨ AI Craft Custom Recipe",
    finder_matched_header: "Pantry Matched Dishes:",

    // AI Food Scanner Section
    scanner_section_tag: "Computer Vision",
    scanner_section_title: "📸 AI Food & Dish Scanner",
    scanner_section_desc: "Take or upload a photo of any dish — AI identifies it and retrieves the exact recipe, ingredients, and steps.",
    scanner_drop_title: "Drop dish photo here or click to browse",
    scanner_drop_sub: "Supports JPEG, PNG, WebP up to 10MB",
    scanner_upload_btn: "📁 Upload Photo",
    scanner_camera_btn: "📷 Use Camera",
    scanner_preset_title: "Or try scanning these sample dishes:",
    scanner_status_awaiting: "Awaiting image...",
    scanner_confidence_label: "Confidence Score",

    // Cuisines / Categories Section
    cat_section_tag: "Culinary Traditions",
    cat_section_title: "🌎 Authentic Food Categories",
    cat_section_desc: "From South Indian tiffins to Italian pasta, dive into rich culinary cultures.",

    // User Hub Section
    hub_section_tag: "Personal Kitchen",
    hub_section_title: "👤 My Kitchen Hub",
    hub_section_desc: "Manage your shopping list, bookmarked favorites, created recipes, and cooking logs.",
    hub_create_recipe_btn: "➕ Create My Own Recipe",
    hub_shopping_title: "🛒 Shopping / Ingredient List",
    hub_shopping_placeholder: "Add grocery item (e.g. 2 cups Basmati Rice)...",
    hub_history_title: "📜 Cooking History",
    hub_favorites_title: "❤️ Saved Favorite Recipes",

    // Auth & Profile Modal
    auth_tab_login: "🔑 Login",
    auth_tab_signup: "✨ Create Profile",
    auth_welcome_back: "Welcome Back, Chef!",
    auth_login_desc: "Sign in to access your saved recipes, customized meal plans, and cooking badges.",
    auth_email_label: "Email Address",
    auth_email_placeholder: "your.name@example.com",
    auth_password_label: "Password",
    auth_password_placeholder: "••••••••",
    auth_btn_login: "Sign In to Kitchen",
    auth_switch_to_signup: "New to Gustora AI? Create your profile now →",

    auth_create_title: "Create Your Chef Profile",
    auth_create_desc: "Personalize your cooking experience, dietary goals, and unlock AI culinary memory.",
    auth_name_label: "Full Name / Chef Name",
    auth_name_placeholder: "e.g., Karthi Selvam",
    auth_skill_label: "Cooking Skill Level",
    auth_skill_beginner: "🌱 Beginner (Easy 15-min recipes)",
    auth_skill_intermediate: "🍳 Home Cook (Comfortable with spices)",
    auth_skill_master: "👨‍🍳 Master Chef (Complex dum & gourmet)",
    auth_diet_label: "Primary Dietary Preference",
    auth_diet_all: "🥗 Everything (Flexible)",
    auth_diet_veg: "🟢 Pure Vegetarian",
    auth_diet_nonveg: "🔴 Non-Vegetarian Lover",
    auth_diet_vegan: "🌱 100% Plant-Based (Vegan)",
    auth_diet_keto: "🥑 Keto / Low Carb",
    auth_cuisine_label: "Favorite Cuisine",
    auth_cuisine_south_indian: "South Indian (Dosa, Idli, Sambar)",
    auth_cuisine_north_indian: "North Indian (Biryani, Paneer)",
    auth_cuisine_asian: "Asian / Indo-Chinese",
    auth_cuisine_continental: "Italian / Mediterranean",
    auth_avatar_label: "Choose Your Avatar",
    auth_bio_label: "Kitchen Motto / Bio",
    auth_bio_placeholder: "e.g., Cooking authentic South Indian delicacies with love...",
    auth_btn_signup: "✨ Create Profile & Start Cooking",
    auth_switch_to_login: "Already have an account? Sign In →",

    // Profile View Modal
    profile_modal_title: "👤 Chef Profile",
    profile_level_label: "Kitchen Rank:",
    profile_diet_badge: "Diet:",
    profile_cuisine_badge: "Favorite:",
    profile_stat_cooked: "Dishes Cooked",
    profile_stat_favs: "Saved Recipes",
    profile_stat_custom: "Custom Recipes",
    profile_edit_btn: "✏️ Edit Profile",
    profile_logout_btn: "🚪 Sign Out",

    // Recipe Details Modal
    modal_prep_time: "Prep Time",
    modal_cook_time: "Cook Time",
    modal_difficulty: "Difficulty",
    modal_spice_level: "Spice Level",
    modal_tab_ingredients: "🥕 Ingredients & Scaler",
    modal_tab_steps: "👨‍🍳 Step-by-Step Instructions",
    modal_tab_nutrition: "🍎 Nutrition Facts",
    modal_tab_customize: "🌶️ Customize Recipe",
    modal_servings_scaler: "Serving Size Scaler",
    modal_servings_desc: "Ingredient amounts and calories scale automatically.",
    modal_start_voice_btn: "🎙️ Start Voice Cooking",

    // Common
    language_switched_toast: "Language switched to English",
    profile_created_toast: "Profile created successfully! Welcome, ",
    logged_in_toast: "Welcome back, ",
    logged_out_toast: "You have been logged out.",
    recipe_saved_toast: "Recipe added to favorites! ❤️"
  },

  ta: {
    // Brand & Tagline
    brand_sub: "அறிவார்ந்த சமையலறை",
    hero_badge: "✨ AI-ஆற்றல் கொண்ட சமையல் வழிகாட்டி",
    hero_title_prefix: "கார்த்தி",
    hero_title_highlight: "உடனடி AI வழிகாட்டலுடன்",
    hero_subtitle: "பாரம்பரிய உணவு வகைகள், சமையலறை பொருட்கள் கொண்டு சமைக்கும் முறை, AI உணவு ஸ்கேனர், குரல் வழி சமையல் குறிப்புகள் மற்றும் துல்லியமான ஊட்டச்சத்து தகவல்கள்.",
    hero_cta_pantry: "🥕 உங்களிடம் என்ன பொருட்கள் உள்ளன?",
    hero_cta_scan: "📸 உணவை ஸ்கேன் செய்",
    search_placeholder: "இன்று என்ன சமைக்க விரும்புகிறீர்கள்? (எ.கா. பிரியாணி, தோசை, பன்னீர், சாலட்)...",

    // Navigation
    nav_home: "🏠 முகப்பு",
    nav_recipes: "🔍 உணவு தேடல்",
    nav_finder: "🥕 பொருட்கள் தேடல்",
    nav_scanner: "📸 உணவு ஸ்கேனர்",
    nav_categories: "🌎 உணவுகள்",
    nav_user_hub: "👤 எனது சமையலறை",
    nav_ai_chef: "🤖 AI செஃப்",
    nav_login: "🔑 உள்நுழைவு / பதிவு",
    nav_profile: "👤 சுயவிவரம்",
    nav_logout: "🚪 வெளியேறு",
    nav_menu: "பட்டி (Menu)",
    nav_clean_home: "முகப்பு",
    nav_clean_recipes: "உணவு தேடல்",
    nav_clean_finder: "பொருட்கள் தேடல்",
    nav_clean_scanner: "உணவு ஸ்கேனர்",
    nav_clean_categories: "உணவுகள்",
    nav_clean_user_hub: "எனது சமையலறை",
    sidebar_new_recipe: "புதிய செய்முறை",
    sidebar_recent_dishes: "பிரபலமான உணவுகள்",

    // Quick Bar Features
    feat_pantry_title: "பொருட்கள் பொருத்துதல்",
    feat_pantry_desc: "உள்ள பொருட்களை கொண்டு சமைக்க",
    feat_scanner_title: "உணவு ஸ்கேனர்",
    feat_scanner_desc: "படம் பிடித்து செய்முறை அறிய",
    feat_voice_title: "குரல் வழி சமையல்",
    feat_voice_desc: "கை தொடாமல் குரலால் வழிகாட்டல்",
    feat_nutrition_title: "ஊட்டச்சத்து விவரம்",
    feat_nutrition_desc: "USDA & NIN அங்கீகரிக்கப்பட்ட அளவுகள்",

    // Popular Section
    popular_section_tag: "சிறப்பு பரிந்துரைகள்",
    popular_section_title: "🔥 பிரபலமான உணவுகள்",
    popular_section_desc: "எங்கள் சமையல் பிரியர்களால் அதிகம் விரும்பப்பட்ட பாரம்பரிய உணவுகள்.",

    // Dish Search & Filters
    filter_section_tag: "செய்முறை பட்டியல்",
    filter_section_title: "🔍 அனைத்து செய்முறைகளும்",
    filter_section_desc: "சுவையான உணவுகளை உணவு வகை மற்றும் சமைக்கும் நேரம் கொண்டு எளிதாக வடிகட்டவும்.",
    filter_diet_all: "🥗 அனைத்து உணவுகள்",
    filter_diet_veg: "🟢 சைவ உணவுகள்",
    filter_diet_nonveg: "🔴 அசைவ உணவுகள்",
    filter_max_time: "அதிகபட்ச சமையல் நேரம்:",
    filter_spice_all: "🌶️ அனைத்து காரம்",
    filter_spice_mild: "🫑 குறைந்த காரம்",
    filter_spice_medium: "🌶️ மிதமான காரம்",
    filter_spice_hot: "🔥 காரசாரமானது",
    filter_spice_fiery: "🌋 அதீத காரம்",
    results_found: "செய்முறைகள் உள்ளன",

    // Ingredient Finder Section
    finder_section_tag: "உணவு விரயத்தை தவிர்க்க",
    finder_section_title: "🥕 பொருட்கள் வைத்து செய்முறை தேடல்",
    finder_section_desc: "உங்கள் சமையலறையில் உள்ள பொருட்களை உள்ளிடுங்கள். Gustora AI பொருத்தமான உணவு செய்முறைகளை உடனே காட்டும்!",
    finder_input_placeholder: "பொருட்களை உள்ளிடவும் (எ.கா: தக்காளி, வெங்காயம், அரிசி, முட்டை, உருளை)...",
    finder_staples_label: "அல்லது விரைவுப் பொருட்களை தேர்வு செய்க:",
    finder_custom_ai_btn: "✨ AI புதிய செய்முறை உருவாக்கு",
    finder_matched_header: "பொருத்தமான உணவு வகைகள்:",

    // AI Food Scanner Section
    scanner_section_tag: "கணினி பார்வைத் திறன்",
    scanner_section_title: "📸 AI உணவு ஸ்கேனர்",
    scanner_section_desc: "எந்த ஒரு உணவின் புகைப்படத்தையும் பதிவேற்றினால், AI அதை அடையாளம் கண்டு செய்முறையையும் ஊட்டச்சத்தையும் வழங்கும்.",
    scanner_drop_title: "உணவுப் படத்தை இங்கே பதிவேற்றவும் அல்லது தேர்ந்தெடுக்கவும்",
    scanner_drop_sub: "JPEG, PNG, WebP படங்கள் (10MB வரை)",
    scanner_upload_btn: "📁 படம் பதிவேற்று",
    scanner_camera_btn: "📷 கேமராவைப் பயன்படுத்து",
    scanner_preset_title: "அல்லது இந்த மாதிரி உணவுகளை ஸ்கேன் செய்க:",
    scanner_status_awaiting: "படத்திற்காக காத்திருக்கிறது...",
    scanner_confidence_label: "துல்லிய அளவு",

    // Cuisines / Categories Section
    cat_section_tag: "சமையல் பாரம்பரியம்",
    cat_section_title: "🌎 பாரம்பரிய உணவுப் பிரிவுகள்",
    cat_section_desc: "தென்னிந்திய சிற்றுண்டிகள் முதல் இத்தாலிய உணவுகள் வரை பரந்த சுவை அனுபவம்.",

    // User Hub Section
    hub_section_tag: "தனிப்பட்ட சமையலறை",
    hub_section_title: "👤 எனது சமையலறை தளம்",
    hub_section_desc: "உங்கள் மளிகைப் பட்டியல், பிடித்த செய்முறைகள், நீங்கள் உருவாக்கிய உணவுகள் மற்றும் சமையல் குறிப்புகளை நிர்வகியுங்கள்.",
    hub_create_recipe_btn: "➕ சொந்த செய்முறை உருவாக்கு",
    hub_shopping_title: "🛒 மளிகைப் பொருட்கள் பட்டியல்",
    hub_shopping_placeholder: "பொருளைச் சேர்க்க (எ.கா: 2 கப் பாசுமதி அரிசி)...",
    hub_history_title: "📜 சமைத்த வரலாறு",
    hub_favorites_title: "❤️ பிடித்த செய்முறைகள்",

    // Auth & Profile Modal
    auth_tab_login: "🔑 உள்நுழைவு",
    auth_tab_signup: "✨ சுயவிவரம் உருவாக்கு",
    auth_welcome_back: "மீண்டும் வருக, தலைமை சமையல்காரரே!",
    auth_login_desc: "உங்கள் சேமிக்கப்பட்ட செய்முறைகள் மற்றும் சமையல் பேட்ஜ்களை அணுக உள்நுழையவும்.",
    auth_email_label: "மின்னஞ்சல் முகவரி",
    auth_email_placeholder: "your.name@example.com",
    auth_password_label: "கடவுச்சொல்",
    auth_password_placeholder: "••••••••",
    auth_btn_login: "சமையலறையில் உள்நுழை",
    auth_switch_to_signup: "புதியவரா? இப்போது உங்கள் சுயவிவரத்தை உருவாக்குங்கள் →",

    auth_create_title: "உங்கள் சமையல் சுயவிவரம் உருவாக்கு",
    auth_create_desc: "உங்கள் சமையல் விருப்பங்கள், உணவு முறைகளைத் தனிப்பயனாக்குங்கள்.",
    auth_name_label: "முழு பெயர் / செஃப் பெயர்",
    auth_name_placeholder: "எ.கா: கார்த்தி செல்வம்",
    auth_skill_label: "சமையல் திறன் நிலை",
    auth_skill_beginner: "🌱 தொடக்க நிலை (15 நிமிட எளிய உணவுகள்)",
    auth_skill_intermediate: "🍳 குடும்ப சமையலர் (மசாலாக்கள் பழக்கம்)",
    auth_skill_master: "👨‍🍳 மாஸ்டர் செஃப் (பிரியாணி & தனித்துவ உணவுகள்)",
    auth_diet_label: "முதன்மையான உணவு முறை",
    auth_diet_all: "🥗 அனைத்தும் (அனைத்து உணவுகளும்)",
    auth_diet_veg: "🟢 சுத்த சைவ உணவு",
    auth_diet_nonveg: "🔴 அசைவ உணவு பிரியர்",
    auth_diet_vegan: "🌱 தாவர அடிப்படையிலான உணவு (Vegan)",
    auth_diet_keto: "🥑 கீட்டோ / குறைந்த மாவுச்சத்து",
    auth_cuisine_label: "விருப்பமான சமையல் முறை",
    auth_cuisine_south_indian: "தென்னிந்திய உணவுகள் (தோசை, இட்லி, சாம்பார்)",
    auth_cuisine_north_indian: "வட இந்திய உணவுகள் (பிரியாணி, பன்னீர்)",
    auth_cuisine_asian: "ஆசிய / இந்தோ-சைனீஸ்",
    auth_cuisine_continental: "இத்தாலிய / கான்டினென்டல்",
    auth_avatar_label: "சுயவிவர ஐகானைத் தேர்ந்தெடுங்கள்",
    auth_bio_label: "சமையல் குறிக்கோள் / சுயவிவரக் குறிப்பு",
    auth_bio_placeholder: "எ.கா: சுவையான பாரம்பரிய தென்னிந்திய உணவுகளை அன்போடு சமைப்பவர்...",
    auth_btn_signup: "✨ சுயவிவரத்தை உருவாக்கி சமைக்கத் தொடங்கு",
    auth_switch_to_login: "ஏற்கனவே கணக்கு உள்ளதா? உள்நுழைக →",

    // Profile View Modal
    profile_modal_title: "👤 செஃப் சுயவிவரம்",
    profile_level_label: "சமையல் தகுதி:",
    profile_diet_badge: "உணவு முறை:",
    profile_cuisine_badge: "விருப்பம்:",
    profile_stat_cooked: "சமைத்த உணவுகள்",
    profile_stat_favs: "பிடித்த செய்முறைகள்",
    profile_stat_custom: "உருவாக்கிய உணவுகள்",
    profile_edit_btn: "✏️ சுயவிவரத்தை மாற்று",
    profile_logout_btn: "🚪 வெளியேறு",

    // Recipe Details Modal
    modal_prep_time: "தயாரிப்பு நேரம்",
    modal_cook_time: "சமையல் நேரம்",
    modal_difficulty: "சிரம நிலை",
    modal_spice_level: "கார நிலை",
    modal_tab_ingredients: "🥕 பொருட்கள் & அளவுகள்",
    modal_tab_steps: "👨‍🍳 படிமுறை செய்முறை விளக்கம்",
    modal_tab_nutrition: "🍎 ஊட்டச்சத்து அளவுகள்",
    modal_tab_customize: "🌶️ செய்முறையை மாற்று",
    modal_servings_scaler: "பரிமாறும் அளவை மாற்று",
    modal_servings_desc: "நபர்களின் எண்ணிக்கைக்கு ஏற்ப பொருட்களின் அளவுகள் தானாக மாறும்.",
    modal_start_voice_btn: "🎙️ குரல் வழி சமையலைத் தொடங்கு",

    // Common
    language_switched_toast: "மொழி தமிழுக்கு மாற்றப்பட்டது! 🌿",
    profile_created_toast: "சுயவிவரம் வெற்றிகரமாக உருவாக்கப்பட்டது! வருக, ",
    logged_in_toast: "மீண்டும் வருக, ",
    logged_out_toast: "வெற்றிகரமாக வெளியேறினீர்கள்.",
    recipe_saved_toast: "செய்முறை விருப்பங்களில் சேர்க்கப்பட்டது! ❤️"
  },

  hi: {
    // Brand & Tagline
    brand_sub: "स्मार्ट किचन",
    hero_badge: "✨ AI-संचालित पाक कला मार्गदर्शन",
    hero_title_prefix: "कार्ति",
    hero_title_highlight: "रियल-टाइम एआई मार्गदर्शन",
    hero_subtitle: "प्रामाणिक रेसिपी खोजें, घर की बची सामग्री से स्वादिष्ट व्यंजन बनाएं, फोटो से खाना स्कैन करें, बोलकर बिना हाथ लगाए खाना बनाएं और सटीक पोषण जानकारी पाएं।",
    hero_cta_pantry: "🥕 आपके पास क्या सामग्री है?",
    hero_cta_scan: "📸 डिश स्कैन करें",
    search_placeholder: "आज आप क्या पकाना चाहते हैं? (उदा. बिरयानी, डोसा, पनीर, पास्ता)...",

    // Navigation
    nav_home: "🏠 होम",
    nav_recipes: "🔍 रेसिपी खोजें",
    nav_finder: "🥕 सामग्री से खोज",
    nav_scanner: "📸 डिश स्कैनर",
    nav_categories: "🌎 व्यंजन शैलियां",
    nav_user_hub: "👤 मेरी रसोई",
    nav_ai_chef: "🤖 एआई शेफ",
    nav_login: "🔑 लॉगिन / साइन अप",
    nav_profile: "👤 प्रोफाइल",
    nav_logout: "🚪 लॉगआउट",

    // Quick Bar Features
    feat_pantry_title: "सामग्री मैचर",
    feat_pantry_desc: "उपलब्ध सामग्री से डिश खोजें",
    feat_scanner_title: "डिश स्कैनर",
    feat_scanner_desc: "फोटो खींचकर रेसिपी जानें",
    feat_voice_title: "वॉइस कुकिंग",
    feat_voice_desc: "आवाज़ से चरण-दर-चरण मार्गदर्शन",
    feat_nutrition_title: "सटीक पोषण",
    feat_nutrition_desc: "USDA और NIN प्रमाणित पोषक तत्व",

    // Popular Section
    popular_section_tag: "विशेष सिफारिशें",
    popular_section_title: "🔥 लोकप्रिय और पसंदीदा व्यंजन",
    popular_section_desc: "हमारे शेफ समुदाय द्वारा सबसे अधिक पसंद की जाने वाली प्रामाणिक रेसिपी।",

    // Dish Search & Filters
    filter_section_tag: "ग्लोबल रेसिपी कैटलॉग",
    filter_section_title: "🔍 सभी रेसिपी देखें",
    filter_section_desc: "खान-पान की आदतों और पकाने के समय के अनुसार तुरंत फिल्टर करें।",
    filter_diet_all: "🥗 सभी भोजन",
    filter_diet_veg: "🟢 शुद्ध शाकाहारी",
    filter_diet_nonveg: "🔴 मांसाहारी",
    filter_max_time: "अधिकतम समय:",
    filter_spice_all: "🌶️ कोई भी तीखापन",
    filter_spice_mild: "🫑 हल्का",
    filter_spice_medium: "🌶️ मध्यम",
    filter_spice_hot: "🔥 तीखा",
    filter_spice_fiery: "🌋 अत्यधिक तीखा",
    results_found: "रेसिपी मिलीं",

    // Ingredient Finder Section
    finder_section_tag: "अन्न बर्बादी रोको इंजन",
    finder_section_title: "🥕 सामग्री आधारित रेसिपी खोजक",
    finder_section_desc: "बताएं आपके फ्रिज या पैंट्री में क्या सामग्री है। Gustora AI तुरंत बेहतरीन डिश और रेसिपी तैयार करेगा!",
    finder_input_placeholder: "सामग्री लिखें (उदा. टमाटर, प्याज, चावल, अंडा, आलू)...",
    finder_staples_label: "या त्वरित मुख्य सामग्री चुनें:",
    finder_custom_ai_btn: "✨ AI से नई रेसिपी बनाएं",
    finder_matched_header: "सामग्री से मेल खाती डिशें:",

    // AI Food Scanner Section
    scanner_section_tag: "कंप्यूटर विज़न",
    scanner_section_title: "📸 एआई फूड और डिश स्कैनर",
    scanner_section_desc: "किसी भी डिश की फोटो खींचें या अपलोड करें — AI इसे पहचान कर सामग्री और विधि दिखाएगा।",
    scanner_drop_title: "फोटो यहां डालें या ब्राउज़ करने के लिए क्लिक करें",
    scanner_drop_sub: "JPEG, PNG, WebP (10MB तक)",
    scanner_upload_btn: "📁 फोटो अपलोड करें",
    scanner_camera_btn: "📷 कैमरा इस्तेमाल करें",
    scanner_preset_title: "या इन नमूना डिशों को स्कैन करके देखें:",
    scanner_status_awaiting: "फोटो की प्रतीक्षा में...",
    scanner_confidence_label: "सटीकता स्कोर",

    // Cuisines / Categories Section
    cat_section_tag: "पाक परंपराएं",
    cat_section_title: "🌎 प्रामाणिक भोजन श्रेणियां",
    cat_section_desc: "दक्षिण भारतीय टिफिन से लेकर इटैलियन पास्ता तक, हर स्वाद का आनंद लें।",

    // User Hub Section
    hub_section_tag: "व्यक्तिगत रसोई",
    hub_section_title: "👤 मेरा किचन हब",
    hub_section_desc: "खरीदारी सूची, पसंदीदा रेसिपी, अपनी बनाई डिशें और कुकिंग हिस्ट्री प्रबंधित करें।",
    hub_create_recipe_btn: "➕ अपनी खुद की रेसिपी बनाएं",
    hub_shopping_title: "🛒 खरीदारी / सामग्री सूची",
    hub_shopping_placeholder: "सामग्री जोड़ें (उदा. 2 कप बासमती चावल)...",
    hub_history_title: "📜 कुकिंग हिस्ट्री",
    hub_favorites_title: "❤️ सहेजी गई पसंदीदा रेसिपी",

    // Auth & Profile Modal
    auth_tab_login: "🔑 लॉगिन",
    auth_tab_signup: "✨ प्रोफाइल बनाएं",
    auth_welcome_back: "वापसी पर स्वागत है, शेफ!",
    auth_login_desc: "अपनी सहेजी गई रेसिपी और कुकिंग बैज देखने के लिए लॉगिन करें।",
    auth_email_label: "ईमेल पता",
    auth_email_placeholder: "your.name@example.com",
    auth_password_label: "पासवर्ड",
    auth_password_placeholder: "••••••••",
    auth_btn_login: "रसोई में प्रवेश करें",
    auth_switch_to_signup: "नए हैं? अभी अपनी प्रोफाइल बनाएं →",

    auth_create_title: "अपनी शेफ प्रोफाइल बनाएं",
    auth_create_desc: "अपनी पसंद और आहार लक्ष्यों के अनुसार अनुभव को अनुकूलित करें।",
    auth_name_label: "पूरा नाम / शेफ का नाम",
    auth_name_placeholder: "उदा. कार्ति सेल्वम",
    auth_skill_label: "कुकिंग कौशल स्तर",
    auth_skill_beginner: "🌱 शुरुआत (आसान 15-मिनट रेसिपी)",
    auth_skill_intermediate: "🍳 घरेलू कुक (मसालों में माहिर)",
    auth_skill_master: "👨‍🍳 मास्टर शेफ (दम और विशेष व्यंजन)",
    auth_diet_label: "प्राथमिक आहार वरीयता",
    auth_diet_all: "🥗 सब कुछ (लचीला)",
    auth_diet_veg: "🟢 शुद्ध शाकाहारी",
    auth_diet_nonveg: "🔴 मांसाहारी प्रेमी",
    auth_diet_vegan: "🌱 पूर्ण शाकाहारी (Vegan)",
    auth_diet_keto: "🥑 कीटो / लो कार्ब",
    auth_cuisine_label: "पसंदीदा व्यंजन शैली",
    auth_cuisine_south_indian: "दक्षिण भारतीय (डोसा, इडली, सांबर)",
    auth_cuisine_north_indian: "उत्तर भारतीय (बिरयानी, पनीर)",
    auth_cuisine_asian: "एशियाई / इंडो-चाइनीज",
    auth_cuisine_continental: "इटैलियन / कॉन्टिनेंटल",
    auth_avatar_label: "अपना अवतार चुनें",
    auth_bio_label: "किचन बायो / उद्देश्य",
    auth_bio_placeholder: "उदा. प्यार और मसालों के साथ स्वादिष्ट खाना पकाना...",
    auth_btn_signup: "✨ प्रोफाइल बनाएं और खाना पकाना शुरू करें",
    auth_switch_to_login: "पहले से खाता है? लॉगिन करें →",

    // Profile View Modal
    profile_modal_title: "👤 शेफ प्रोफाइल",
    profile_level_label: "किचन रैंक:",
    profile_diet_badge: "आहार:",
    profile_cuisine_badge: "पसंद:",
    profile_stat_cooked: "पकाए गए व्यंजन",
    profile_stat_favs: "सहेजी गई रेसिपी",
    profile_stat_custom: "अपनी रेसिपी",
    profile_edit_btn: "✏️ प्रोफाइल बदलें",
    profile_logout_btn: "🚪 लॉगआउट",

    // Recipe Details Modal
    modal_prep_time: "तैयारी समय",
    modal_cook_time: "पकाने का समय",
    modal_difficulty: "कठिनाई",
    modal_spice_level: "तीखापन",
    modal_tab_ingredients: "🥕 सामग्री और मात्रा",
    modal_tab_steps: "👨‍🍳 चरण-दर-चरण विधि",
    modal_tab_nutrition: "🍎 पोषण तथ्य",
    modal_tab_customize: "🌶️ रेसिपी बदलें",
    modal_servings_scaler: "सर्विंग साइज़ स्केलर",
    modal_servings_desc: "लोगों की संख्या के अनुसार सामग्री और कैलोरी अपने आप बदल जाती है।",
    modal_start_voice_btn: "🎙️ वॉइस कुकिंग शुरू करें",

    // Common
    language_switched_toast: "भाषा हिन्दी में बदल दी गई! 🌿",
    profile_created_toast: "प्रोफाइल सफलतापूर्वक बनी! स्वागत है, ",
    logged_in_toast: "वापसी पर स्वागत है, ",
    logged_out_toast: "आप लॉगआउट हो चुके हैं।",
    recipe_saved_toast: "रेसिपी पसंदीदा सूची में जोड़ी गई! ❤️"
  },

  te: {
    // Brand & Tagline
    brand_sub: "స్మార్ట్ కిచెన్",
    hero_badge: "✨ AI-ఆధారిత పాకశాస్త్ర మార్గదర్శకత్వం",
    hero_title_prefix: "కార్తి",
    hero_title_highlight: "రియల్-టైమ్ AI గైడెన్స్",
    hero_subtitle: "ప్రామాణిక వంటకాలను కనుగొనండి, మిగిలిన పదార్థాలతో అద్భుతమైన వంటకాలు తయారు చేయండి, ఫోటోల ద్వారా వంటకాలను స్కాన్ చేయండి మరియు వాయిస్ మోడ్‌తో చేతులు తాకకుండా వండండి.",
    hero_cta_pantry: "🥕 మీ వద్ద ఏ పదార్థాలు ఉన్నాయి?",
    hero_cta_scan: "📸 వంటకాన్ని స్కాన్ చేయండి",
    search_placeholder: "ఈరోజు మీరు ఏమి వండాలనుకుంటున్నారు? (ఉదా: బిర్యానీ, దోశ, పనీర్)...",

    // Navigation
    nav_home: "🏠 హోమ్",
    nav_recipes: "🔍 వంటకాల శోధన",
    nav_finder: "🥕 పదార్థాల శోధన",
    nav_scanner: "📸 డిష్ స్కానర్",
    nav_categories: "🌎 వంటకాల రకాలు",
    nav_user_hub: "👤 నా కిచెన్",
    nav_ai_chef: "🤖 AI చెఫ్",
    nav_login: "🔑 లాగిన్ / సైన్ అప్",
    nav_profile: "👤 ప్రొఫైల్",
    nav_logout: "🚪 లాగౌట్",

    // Quick Bar Features
    feat_pantry_title: "పదార్థాల మ్యాచర్",
    feat_pantry_desc: "ఉన్న పదార్థాలతో వంటకాలు కనుగొనండి",
    feat_scanner_title: "డిష్ స్కానర్",
    feat_scanner_desc: "ఫోటోతో వంటకం తయారీ విధానం",
    feat_voice_title: "వాయిస్ కుకింగ్",
    feat_voice_desc: "చేతులు వాడకుండా వాయిస్ గైడెన్స్",
    feat_nutrition_title: "ఖచ్చితమైన పోషకాహారం",
    feat_nutrition_desc: "USDA & NIN ధృవీకరించిన పోషకాలు",

    // Popular Section
    popular_section_tag: "ప్రత్యేక సిఫార్సులు",
    popular_section_title: "🔥 ప్రసిద్ధ వంటకాలు",
    popular_section_desc: "మా చెఫ్ కమ్యూనిటీ ఎంతగానో ఇష్టపడే రుచికరమైన ప్రామాణిక వంటకాలు.",

    // Dish Search & Filters
    filter_section_tag: "వంటకాల కేటలాగ్",
    filter_section_title: "🔍 అన్ని వంటకాలను అన్వేషించండి",
    filter_section_desc: "ఆహార ప్రాధాన్యతలు మరియు వండే సమయం ఆధారంగా సులభంగా ఫిల్టర్ చేయండి.",
    filter_diet_all: "🥗 అన్ని ఆహారాలు",
    filter_diet_veg: "🟢 శుద్ధ శాకాహారం",
    filter_diet_nonveg: "🔴 మాంసాహారం",
    filter_max_time: "గరిష్ట సమయం:",
    filter_spice_all: "🌶️ ఏదైనా కారం",
    filter_spice_mild: "🫑 తక్కువ కారం",
    filter_spice_medium: "🌶️ మధ్యస్థం",
    filter_spice_hot: "🔥 ఎక్కువ కారం",
    filter_spice_fiery: "🌋 అత్యంత ఘాటు",
    results_found: "వంటకాలు లభించాయి",

    // Ingredient Finder Section
    finder_section_tag: "ఆహార వృథా నివారణ ఇంజిన్",
    finder_section_title: "🥕 పదార్థాల ఆధారిత వంటకాల శోధన",
    finder_section_desc: "మీ ఫ్రిజ్ లేదా వంటగదిలో ఉన్న పదార్థాలను నమోదు చేయండి. Gustora AI అనువైన వంటకాలను వెంటనే చూపిస్తుంది!",
    finder_input_placeholder: "పదార్థాలను నమోదు చేయండి (ఉదా: టమోటా, ఉల్లిపాయ, బియ్యం, గుడ్డు, బంగాళాదుంప)...",
    finder_staples_label: "లేదా ముఖ్య పదార్థాలను ఎంచుకోండి:",
    finder_custom_ai_btn: "✨ AI తో కొత్త వంటకాన్ని సృష్టించండి",
    finder_matched_header: "సరిపోలే వంటకాలు:",

    // AI Food Scanner Section
    scanner_section_tag: "కంప్యూటర్ విజన్",
    scanner_section_title: "📸 AI ఫుడ్ & డిష్ స్కానర్",
    scanner_section_desc: "ఏదైనా వంటకం ఫోటోను అప్‌లోడ్ చేయండి — AI దానిని గుర్తించి తయారీ విధానాన్ని అందిస్తుంది.",
    scanner_drop_title: "ఫోటోను ఇక్కడ వేయండి లేదా బ్రౌజ్ చేయండి",
    scanner_drop_sub: "JPEG, PNG, WebP (10MB వరకు)",
    scanner_upload_btn: "📁 ఫోటో అప్‌లోడ్",
    scanner_camera_btn: "📷 కెమెరా ఉపయోగించండి",
    scanner_preset_title: "లేదా ఈ నమూనా వంటకాలను స్కాన్ చేయండి:",
    scanner_status_awaiting: "చిత్రం కోసం వేచి ఉంది...",
    scanner_confidence_label: "ఖచ్చితత్వ స్కోర్",

    // Cuisines / Categories Section
    cat_section_tag: "పాక సంప్రదాయాలు",
    cat_section_title: "🌎 సాంప్రదాయ వంటకాల విభాగాలు",
    cat_section_desc: "దక్షిణ భారత టిఫిన్ల నుండి ఇటాలియన్ పాస్తా వరకు అద్భుతమైన రుచులు.",

    // User Hub Section
    hub_section_tag: "వ్యక్తిగత కిచెన్",
    hub_section_title: "👤 నా కిచెన్ హబ్",
    hub_section_desc: "షాపింగ్ జాబితా, ఇష్టమైన వంటకాలు మరియు వంట చరిత్రను నిర్వహించండి.",
    hub_create_recipe_btn: "➕ సొంత వంటకాన్ని సృష్టించండి",
    hub_shopping_title: "🛒 షాపింగ్ / సరుకుల జాబితా",
    hub_shopping_placeholder: "వస్తువును జోడించండి (ఉదా: 2 కప్పుల బాస్మతి బియ్యం)...",
    hub_history_title: "📜 వండిన చరిత్ర",
    hub_favorites_title: "❤️ ఇష్టమైన వంటకాలు",

    // Auth & Profile Modal
    auth_tab_login: "🔑 లాగిన్",
    auth_tab_signup: "✨ ప్రొఫైల్ సృష్టించండి",
    auth_welcome_back: "తిరిగి స్వాగతం, చెఫ్!",
    auth_login_desc: "మీ సేవ్ చేసిన వంటకాలు మరియు బ్యాడ్జ్‌లను చూడటానికి లాగిన్ అవ్వండి.",
    auth_email_label: "ఈమెయిల్ చిరునామా",
    auth_email_placeholder: "your.name@example.com",
    auth_password_label: "పాస్‌వర్డ్",
    auth_password_placeholder: "••••••••",
    auth_btn_login: "కిచెన్‌లో ప్రవేశించండి",
    auth_switch_to_signup: "కొత్తవారా? ఇప్పుడే ప్రొఫైల్ సృష్టించండి →",

    auth_create_title: "మీ చెఫ్ ప్రొఫైల్ సృష్టించండి",
    auth_create_desc: "మీ ఆహార ప్రాధాన్యతలను వ్యక్తిగతీకరించండి మరియు AI మెమరీని అన్‌లాక్ చేయండి.",
    auth_name_label: "పూర్తి పేరు / చెఫ్ పేరు",
    auth_name_placeholder: "ఉదా: కార్తి సెల్వం",
    auth_skill_label: "వంట నైపుణ్య స్థాయి",
    auth_skill_beginner: "🌱 ప్రారంభ స్థాయి (సులభమైన 15 నిమిషాల వంటకాలు)",
    auth_skill_intermediate: "🍳 హోమ్ కుక్ (మసాలాలలో ప్రావీణ్యం)",
    auth_skill_master: "👨‍🍳 మాస్టర్ చెఫ్ (దమ్ & ప్రత్యేక వంటకాలు)",
    auth_diet_label: "ఆహార ప్రాధాన్యత",
    auth_diet_all: "🥗 అన్నీ (ఫ్లెక్సిబుల్)",
    auth_diet_veg: "🟢 శుద్ధ శాకాహారం",
    auth_diet_nonveg: "🔴 మాంసాహార ప్రియులు",
    auth_diet_vegan: "🌱 మొక్కల ఆధారిత ఆహారం (Vegan)",
    auth_diet_keto: "🥑 కీటో / తక్కువ కార్బ్స్",
    auth_cuisine_label: "ఇష్టమైన వంటకాల శైలి",
    auth_cuisine_south_indian: "దక్షిణ భారత (దోశ, ఇడ్లీ, సాంబార్)",
    auth_cuisine_north_indian: "ఉత్తర భారత (బిర్యానీ, పనీర్)",
    auth_cuisine_asian: "ఆసియన్ / ఇండో-చైనీస్",
    auth_cuisine_continental: "ఇటాలియన్ / కాంటినెంటల్",
    auth_avatar_label: "అవతార్ ఎంచుకోండి",
    auth_bio_label: "కిచెన్ బయో / నినాదం",
    auth_bio_placeholder: "ఉదా: సాంప్రదాయ దక్షిణ భారతీయ రుచులను ప్రేమతో వండడం...",
    auth_btn_signup: "✨ ప్రొఫైల్ సృష్టించి వండటం ప్రారంభించండి",
    auth_switch_to_login: "ఖాతా ఉందా? లాగిన్ అవ్వండి →",

    // Profile View Modal
    profile_modal_title: "👤 చెఫ్ ప్రొఫైల్",
    profile_level_label: "కిచెన్ ర్యాంక్:",
    profile_diet_badge: "ఆహారం:",
    profile_cuisine_badge: "ఇష్టమైనది:",
    profile_stat_cooked: "వండిన వంటకాలు",
    profile_stat_favs: "సేవ్ చేసిన వంటకాలు",
    profile_stat_custom: "సొంత వంటకాలు",
    profile_edit_btn: "✏️ ప్రొఫైల్ సవరించండి",
    profile_logout_btn: "🚪 సైన్ అవుట్",

    // Recipe Details Modal
    modal_prep_time: "సన్నాహక సమయం",
    modal_cook_time: "వండే సమయం",
    modal_difficulty: "క్లిష్టత",
    modal_spice_level: "కారం స్థాయి",
    modal_tab_ingredients: "🥕 పదార్థాలు & పరిమాణం",
    modal_tab_steps: "👨‍🍳 తయారీ విధానం",
    modal_tab_nutrition: "🍎 పోషకాహార వాస్తవాలు",
    modal_tab_customize: "🌶️ వంటకాన్ని మార్చండి",
    modal_servings_scaler: "సర్వింగ్ సైజ్ స్కేలర్",
    modal_servings_desc: "వ్యక్తుల సంఖ్యను బట్టి పదార్థాల పరిమాణం స్వయంచాలకంగా మారుతుంది.",
    modal_start_voice_btn: "🎙️ వాయిస్ కుకింగ్ ప్రారంభించండి",

    // Common
    language_switched_toast: "భాష తెలుగులోకి మార్చబడింది! 🌿",
    profile_created_toast: "ప్రొఫైల్ విజయవంతంగా సృష్టించబడింది! స్వాగతం, ",
    logged_in_toast: "తిరిగి స్వాగతం, ",
    logged_out_toast: "మీరు విజయవంతంగా లాగౌట్ అయ్యారు.",
    recipe_saved_toast: "వంటకం ఇష్టమైన వాటికి జోడించబడింది! ❤️"
  },

  ml: {
    // Brand & Tagline
    brand_sub: "സ്മാർട്ട് അടുക്കള",
    hero_badge: "✨ AI-അധിഷ്ഠിത പാചക മാർഗ്ഗനിർദ്ദേശം",
    hero_title_prefix: "കാർത്തി",
    hero_title_highlight: "തത്സമയ AI മാർഗ്ഗനിർദ്ദേശം",
    hero_subtitle: "ആധികാരിക വിഭവങ്ങൾ കണ്ടെത്തുക, ബാക്കിവന്ന ചേരുവകൾ ഉപയോഗിച്ച് പുതിയ വിഭവങ്ങൾ ഉണ്ടാക്കുക, ഫോട്ടോ ഉപയോഗിച്ച് ഭക്ഷണം സ്കാൻ ചെയ്യുക, ഹാൻഡ്സ്-ഫ്രീ വോയ്‌സ് ഗൈഡൻസ് ആസ്വദിക്കുക.",
    hero_cta_pantry: "🥕 നിങ്ങളുടെ പക്കൽ എന്തെല്ലാം ചേരുവകളുണ്ട്?",
    hero_cta_scan: "📸 വിഭവം സ്കാൻ ചെയ്യുക",
    search_placeholder: "ഇന്ന് നിങ്ങൾ എന്താണ് പാചകം ചെയ്യാൻ ആഗ്രഹിക്കുന്നത്? (ഉദാ: ബിരിയാണി, ദോശ, അപ്പം)...",

    // Navigation
    nav_home: "🏠 ഹോം",
    nav_recipes: "🔍 പാചകക്കുറിപ്പ് തിരയൽ",
    nav_finder: "🥕 ചേരുവകൾ തിരയൽ",
    nav_scanner: "📸 ഡിഷ് സ്കാനർ",
    nav_categories: "🌎 പാചകരീതികൾ",
    nav_user_hub: "👤 എന്റെ അടുക്കള",
    nav_ai_chef: "🤖 AI ഷെഫ്",
    nav_login: "🔑 ലോഗിൻ / സൈൻ അപ്പ്",
    nav_profile: "👤 പ്രൊഫൈൽ",
    nav_logout: "🚪 ലോഗൗട്ട്",

    // Quick Bar Features
    feat_pantry_title: "ചേരുവ പൊരുത്തം",
    feat_pantry_desc: "കയ്യിലുള്ള സാധനങ്ങൾ കൊണ്ട് പാചകം",
    feat_scanner_title: "ഡിഷ് സ്കാനർ",
    feat_scanner_desc: "ഫോട്ടോയിലൂടെ പാചകക്കുറിപ്പ് അറിയാം",
    feat_voice_title: "വോയ്‌സ് പാചകം",
    feat_voice_desc: "ശബ്ദത്തിലൂടെ ഘട്ടം ഘട്ടമായുള്ള വഴികാട്ടി",
    feat_nutrition_title: "യഥാർത്ഥ പോഷകാഹാരം",
    feat_nutrition_desc: "USDA & NIN അംഗീകൃത അളവുകൾ",

    // Popular Section
    popular_section_tag: "പ്രത്യേക ശുപാർശകൾ",
    popular_section_title: "🔥 ജനപ്രിയ രുചികൾ",
    popular_section_desc: "ഞങ്ങളുടെ കമ്മ്യൂണിറ്റി ഏറ്റവുമധികം ഇഷ്ടപ്പെടുന്ന തനത് രുചിക്കൂട്ടുകൾ.",

    // Dish Search & Filters
    filter_section_tag: "വിഭവങ്ങളുടെ പട്ടിക",
    filter_section_title: "🔍 എല്ലാ പാചകക്കുറിപ്പുകളും കാണുക",
    filter_section_desc: "ഭക്ഷണ രീതിയും പാചക സമയവും അനുസരിച്ച് എളുപ്പത്തിൽ ഫിൽട്ടർ ചെയ്യുക.",
    filter_diet_all: "🥗 എല്ലാ ഭക്ഷണവും",
    filter_diet_veg: "🟢 ശുദ്ധ വെജിറ്റേറിയൻ",
    filter_diet_nonveg: "🔴 നോൺ വെജിറ്റേറിയൻ",
    filter_max_time: "പരമാവധി സമയം:",
    filter_spice_all: "🌶️ ഏത് എരിവും",
    filter_spice_mild: "🫑 കുറഞ്ഞ എരിവ്",
    filter_spice_medium: "🌶️ മിതമായ എരിവ്",
    filter_spice_hot: "🔥 നല്ല എരിവ്",
    filter_spice_fiery: "🌋 അതികഠിനമായ എരിവ്",
    results_found: "വിഭവങ്ങൾ കണ്ടെത്തി",

    // Ingredient Finder Section
    finder_section_tag: "ഭക്ഷണ പാഴാക്കൽ തടയാം",
    finder_section_title: "🥕 ചേരുവ അടിസ്ഥാനമാക്കിയുള്ള പാചകക്കുറിപ്പ്",
    finder_section_desc: "നിങ്ങളുടെ അടുക്കളയിലുള്ള ചേരുവകൾ നൽകുക. Gustora AI അനുയോജ്യമായ വിഭവങ്ങൾ കണ്ടെത്തിത്തരും!",
    finder_input_placeholder: "ചേരുവകൾ നൽകുക (ഉദാ: തക്കാളി, ഉള്ളി, അരി, മുട്ട, ഉരുളക്കിഴങ്ങ്)...",
    finder_staples_label: "അല്ലെങ്കിൽ പ്രധാന ചേരുവകൾ തിരഞ്ഞെടുക്കുക:",
    finder_custom_ai_btn: "✨ AI പുതിയ പാചകക്കുറിപ്പ് ഉണ്ടാക്കുക",
    finder_matched_header: "പൊരുത്തപ്പെടുന്ന വിഭവങ്ങൾ:",

    // AI Food Scanner Section
    scanner_section_tag: "കമ്പ്യൂട്ടർ വിഷൻ",
    scanner_section_title: "📸 AI ഫുഡ് & ഡിഷ് സ്കാനർ",
    scanner_section_desc: "ഏതൊരു വിഭവത്തിന്റെയും ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക — AI അത് തിരിച്ചറിഞ്ഞ് ചേരുവകളും പാചകരീതിയും നൽകും.",
    scanner_drop_title: "ഫോട്ടോ ഇവിടെ ഡ്രോപ്പ് ചെയ്യുക അല്ലെങ്കിൽ തിരഞ്ഞെടുക്കുക",
    scanner_drop_sub: "JPEG, PNG, WebP (10MB വരെ)",
    scanner_upload_btn: "📁 ഫോട്ടോ അപ്‌ലോഡ്",
    scanner_camera_btn: "📷 ക്യാമറ ഉപയോഗിക്കുക",
    scanner_preset_title: "അല്ലെങ്കിൽ ഈ മാതൃകാ വിഭവങ്ങൾ സ്കാൻ ചെയ്യുക:",
    scanner_status_awaiting: "ചിത്രത്തിനായി കാത്തിരിക്കുന്നു...",
    scanner_confidence_label: "കൃത്യത സ്കോർ",

    // Cuisines / Categories Section
    cat_section_tag: "പാചക പാരമ്പര്യം",
    cat_section_title: "🌎 പരമ്പരാഗത ഭക്ഷണ വിഭാഗങ്ങൾ",
    cat_section_desc: "കേരളീയ വിഭവങ്ങൾ മുതൽ ഇറ്റാലിയൻ പാസ്ത വരെ വൈവിധ്യമാർന്ന രുചികൾ.",

    // User Hub Section
    hub_section_tag: "വ്യക്തിഗത അടുക്കള",
    hub_section_title: "👤 എന്റെ കിച്ചൻ ഹബ്",
    hub_section_desc: "ഷോപ്പിംഗ് ലിസ്റ്റ്, ഇഷ്ടവിഭവങ്ങൾ, നിങ്ങൾ ഉണ്ടാക്കിയ പാചകക്കുറിപ്പുകൾ എന്നിവ കൈകാര്യം ചെയ്യുക.",
    hub_create_recipe_btn: "➕ സ്വന്തം പാചകക്കുറിപ്പ് ഉണ്ടാക്കുക",
    hub_shopping_title: "🛒 സാധനങ്ങളുടെ ലിസ്റ്റ്",
    hub_shopping_placeholder: "സാധനം ചേർക്കുക (ഉദാ: 2 കപ്പ് ബസുമതി അരി)...",
    hub_history_title: "📜 പാചക ചരിത്രം",
    hub_favorites_title: "❤️ പ്രിയപ്പെട്ട വിഭവങ്ങൾ",

    // Auth & Profile Modal
    auth_tab_login: "🔑 ലോഗിൻ",
    auth_tab_signup: "✨ പ്രൊഫൈൽ ഉണ്ടാക്കുക",
    auth_welcome_back: "വീണ്ടും സ്വാഗതം, ഷെഫ്!",
    auth_login_desc: "സേവ് ചെയ്ത വിഭവങ്ങളും ബാഡ്ജുകളും കാണാൻ ലോഗിൻ ചെയ്യുക.",
    auth_email_label: "ഇമെയിൽ വിലാസം",
    auth_email_placeholder: "your.name@example.com",
    auth_password_label: "പാസ്‌വേഡ്",
    auth_password_placeholder: "••••••••",
    auth_btn_login: "അടുക്കളയിലേക്ക് പ്രവേശിക്കുക",
    auth_switch_to_signup: "പുതിയ ആളാണോ? ഇപ്പോൾ പ്രൊഫൈൽ ഉണ്ടാക്കുക →",

    auth_create_title: "നിങ്ങളുടെ ഷെഫ് പ്രൊഫൈൽ ഉണ്ടാക്കുക",
    auth_create_desc: "നിങ്ങളുടെ ഭക്ഷണ ശീലങ്ങൾക്കനുസരിച്ച് ക്രമീകരിക്കുക.",
    auth_name_label: "പൂർണ്ണമായ പേര് / ഷെഫ് പേര്",
    auth_name_placeholder: "ഉദാ: കാർത്തി സെൽവം",
    auth_skill_label: "പാചക വൈദഗ്ധ്യ നിലവാരം",
    auth_skill_beginner: "🌱 തുടക്കക്കാരൻ (15 മിനിറ്റ് ലളിതമായ വിഭവങ്ങൾ)",
    auth_skill_intermediate: "🍳 വീട്ടിലെ പാചകക്കാരൻ (മസാലകളിൽ പരിചയം)",
    auth_skill_master: "👨‍🍳 മാസ്റ്റർ ഷെഫ് (ദമ്മും പ്രത്യേക വിഭവങ്ങളും)",
    auth_diet_label: "ഭക്ഷണ മുൻഗണന",
    auth_diet_all: "🥗 എല്ലാം (ഫ്ലെക്സിബിൾ)",
    auth_diet_veg: "🟢 ശുദ്ധ വെജിറ്റേറിയൻ",
    auth_diet_nonveg: "🔴 നോൺ വെജിറ്റേറിയൻ",
    auth_diet_vegan: "🌱 സസ്യഭുക്ക് (Vegan)",
    auth_diet_keto: "🥑 കീറ്റോ / കുറഞ്ഞ കാർബോഹൈഡ്രേറ്റ്",
    auth_cuisine_label: "ഇഷ്ടപ്പെട്ട പാചക ശൈലി",
    auth_cuisine_south_indian: "ദക്ഷിണേന്ത്യൻ (ദോശ, ഇഡ്ഡലി, സാമ്പാർ)",
    auth_cuisine_north_indian: "ഉത്തരേന്ത്യൻ (ബിരിയാണി, പനീർ)",
    auth_cuisine_asian: "ഏഷ്യൻ / ഇന്തോ-ചൈനീസ്",
    auth_cuisine_continental: "ഇറ്റാലിയൻ / കോണ്ടിനെന്റൽ",
    auth_avatar_label: "അവതാർ തിരഞ്ഞെടുക്കുക",
    auth_bio_label: "അടുക്കള മുദ്രാവാക്യം / ബയോ",
    auth_bio_placeholder: "ഉദാ: സ്നേഹത്തോടെ തനത് രുചികൾ പാകം ചെയ്യുന്നു...",
    auth_btn_signup: "✨ പ്രൊഫൈൽ ഉണ്ടാക്കി പാചകം തുടങ്ങുക",
    auth_switch_to_login: "അക്കൗണ്ട് ഉണ്ടോ? ലോഗിൻ ചെയ്യുക →",

    // Profile View Modal
    profile_modal_title: "👤 ഷെഫ് പ്രൊഫൈൽ",
    profile_level_label: "കിച്ചൻ റാങ്ക്:",
    profile_diet_badge: "ഭക്ഷണരീതി:",
    profile_cuisine_badge: "ഇഷ്ടം:",
    profile_stat_cooked: "ഉണ്ടാക്കിയ വിഭവങ്ങൾ",
    profile_stat_favs: "സേവ് ചെയ്ത വിഭവങ്ങൾ",
    profile_stat_custom: "സ്വന്തം വിഭവങ്ങൾ",
    profile_edit_btn: "✏️ പ്രൊഫൈൽ മാറ്റുക",
    profile_logout_btn: "🚪 സൈൻ ഔട്ട്",

    // Recipe Details Modal
    modal_prep_time: "തയ്യാറെടുപ്പ് സമയം",
    modal_cook_time: "പാചക സമയം",
    modal_difficulty: "കാഠിന്യം",
    modal_spice_level: "എരിവ് നിലവാരം",
    modal_tab_ingredients: "🥕 ചേരുവകളും അളവും",
    modal_tab_steps: "👨‍🍳 ഘട്ടം ഘട്ടമായുള്ള വിവരണം",
    modal_tab_nutrition: "🍎 പോഷകാഹാര വിവരങ്ങൾ",
    modal_tab_customize: "🌶️ വിഭവം മാറ്റുക",
    modal_servings_scaler: "സെർവിംഗ് സൈസ് സ്കെയിലർ",
    modal_servings_desc: "ആളുകളുടെ എണ്ണത്തിനനുസരിച്ച് അളവുകൾ തനിയെ മാറും.",
    modal_start_voice_btn: "🎙️ വോയ്‌സ് കുക്കിംഗ് ആരംഭിക്കുക",

    // Common
    language_switched_toast: "ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി! 🌿",
    profile_created_toast: "പ്രൊഫൈൽ വിജയകരമായി സൃഷ്ടിച്ചു! സ്വാഗതം, ",
    logged_in_toast: "വീണ്ടും സ്വാഗതം, ",
    logged_out_toast: "നിങ്ങൾ ലോഗൗട്ട് ചെയ്തു.",
    recipe_saved_toast: "വിഭവം പ്രിയപ്പെട്ടവയിലേക്ക് ചേർത്തു! ❤️"
  },

  kn: {
    // Brand & Tagline
    brand_sub: "ಸ್ಮಾರ್ಟ್ ಅಡುಗೆಮನೆ",
    hero_badge: "✨ AI-ಚಾಲಿತ ಪಾಕಶಾಸ್ತ್ರ ಮಾರ್ಗದರ್ಶನ",
    hero_title_prefix: "ಕಾರ್ತಿ",
    hero_title_highlight: "ರಿಯಲ್-ಟೈಮ್ AI ಮಾರ್ಗದರ್ಶನ",
    hero_subtitle: "ಅಧಿಕೃತ ಪಾಕವಿಧಾನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಉಳಿದ ಪದಾರ್ಥಗಳಿಂದ ರುಚಿಕರ ಊಟ ತಯಾರಿಸಿ, ಫೋಟೋಗಳಿಂದ ಆಹಾರ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ಧ್ವನಿ ಮೋಡ್ ಮೂಲಕ ಕೈ ಮುಟ್ಟದೆ ಅಡುಗೆ ಮಾಡಿ.",
    hero_cta_pantry: "🥕 ನಿಮ್ಮಲ್ಲಿ ಯಾವ ಪದಾರ್ಥಗಳಿವೆ?",
    hero_cta_scan: "📸 ತಿನಿಸು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    search_placeholder: "ಇಂದು ನೀವು ಏನು ಅಡುಗೆ ಮಾಡಲು ಬಯಸುತ್ತೀರಿ? (ಉದಾ: ಬಿರಿಯಾನಿ, ದೋಸೆ, ಪನ್ನೀರ್)...",

    // Navigation
    nav_home: "🏠 ಮುಖಪುಟ",
    nav_recipes: "🔍 ಪಾಕವಿಧಾನ ಹುಡುಕಾಟ",
    nav_finder: "🥕 ಪದಾರ್ಥಗಳ ಹುಡುಕಾಟ",
    nav_scanner: "📸 ಡಿಶ್ ಸ್ಕ್ಯಾನರ್",
    nav_categories: "🌎 ಪಾಕಪದ್ಧತಿಗಳು",
    nav_user_hub: "👤 ನನ್ನ ಅಡುಗೆಮನೆ",
    nav_ai_chef: "🤖 AI ಚೆಫ್",
    nav_login: "🔑 ಲಾಗಿನ್ / ಸೈನ್ ಅಪ್",
    nav_profile: "👤 ಪ್ರೊಫೈಲ್",
    nav_logout: "🚪 ಲಾಗೌಟ್",

    // Quick Bar Features
    feat_pantry_title: "ಪದಾರ್ಥಗಳ ಹೊಂದಾಣಿಕೆ",
    feat_pantry_desc: "ಇರುವ ಪದಾರ್ಥಗಳಿಂದ ಅಡುಗೆ ಮಾಡಿ",
    feat_scanner_title: "ಡಿಶ್ ಸ್ಕ್ಯಾನರ್",
    feat_scanner_desc: "ಫೋಟೋ ತೆಗೆದು ಪಾಕವಿಧಾನ ತಿಳಿಯಿರಿ",
    feat_voice_title: "ವಾಯ್ಸ್ ಕುಕಿಂಗ್",
    feat_voice_desc: "ಧ್ವನಿ ಮೂಲಕ ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶನ",
    feat_nutrition_title: "ನಿಖರ ಪೋಷಕಾಂಶ",
    feat_nutrition_desc: "USDA & NIN ದೃಢೀಕೃತ ಪೋಷಕಾಂಶಗಳು",

    // Popular Section
    popular_section_tag: "ವಿಶೇಷ ಶಿಫಾರಸುಗಳು",
    popular_section_title: "🔥 ಜನಪ್ರಿಯ ತಿನಿಸುಗಳು",
    popular_section_desc: "ನಮ್ಮ ಸಮುದಾಯದಿಂದ ಹೆಚ್ಚು ಮೆಚ್ಚುಗೆ ಪಡೆದ ಸಾಂಪ್ರದಾಯಿಕ ಪಾಕವಿಧಾನಗಳು.",

    // Dish Search & Filters
    filter_section_tag: "ಪಾಕವಿಧಾನಗಳ ಕ್ಯಾಟಲಾಗ್",
    filter_section_title: "🔍 ಎಲ್ಲಾ ಪಾಕವಿಧಾನಗಳನ್ನು ನೋಡಿ",
    filter_section_desc: "ಆಹಾರ ಪದ್ಧತಿ ಮತ್ತು ಅಡುಗೆ ಸಮಯದ ಆಧಾರದ ಮೇಲೆ ಸುಲಭವಾಗಿ ಫಿಲ್ಟರ್ ಮಾಡಿ.",
    filter_diet_all: "🥗 ಎಲ್ಲಾ ಆಹಾರ",
    filter_diet_veg: "🟢 ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ",
    filter_diet_nonveg: "🔴 ಮಾಂಸಾಹಾರಿ",
    filter_max_time: "ಗರಿಷ್ಠ ಸಮಯ:",
    filter_spice_all: "🌶️ ಯಾವುದೇ ಖಾರ",
    filter_spice_mild: "🫑 ಕಡಿಮೆ ಖಾರ",
    filter_spice_medium: "🌶️ ಮಧ್ಯಮ",
    filter_spice_hot: "🔥 ಖಾರವಾದ",
    filter_spice_fiery: "🌋 ಅತಿ ಹೆಚ್ಚು ಖಾರ",
    results_found: "ಪಾಕವಿಧಾನಗಳು ಸಿಕ್ಕಿವೆ",

    // Ingredient Finder Section
    finder_section_tag: "ಆಹಾರ ವ್ಯರ್ಥ ತಡೆ ಎಂಜಿನ್",
    finder_section_title: "🥕 ಪದಾರ್ಥ ಆಧಾರಿತ ಪಾಕವಿಧಾನ ಹುಡುಕಾಟ",
    finder_section_desc: "ನಿಮ್ಮ ಫ್ರಿಡ್ಜ್‌ನಲ್ಲಿರುವ ಪದಾರ್ಥಗಳನ್ನು ನಮೂದಿಸಿ. Gustora AI ತಕ್ಷಣವೇ ಹೊಂದಿಕೆಯಾಗುವ ಅಡುಗೆಗಳನ್ನು ತೋರಿಸುತ್ತದೆ!",
    finder_input_placeholder: "ಪದಾರ್ಥಗಳನ್ನು ನಮೂದಿಸಿ (ಉದಾ: ಟೊಮೆಟೊ, ಈರುಳ್ಳಿ, ಅಕ್ಕಿ, ಮೊಟ್ಟೆ, ಆಲೂಗಡ್ಡೆ)...",
    finder_staples_label: "ಅಥವಾ ಮುಖ್ಯ ಪದಾರ್ಥಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    finder_custom_ai_btn: "✨ AI ಹೊಸ ಪಾಕವಿಧಾನ ರಚಿಸಿ",
    finder_matched_header: "ಹೊಂದಾಣಿಕೆಯ ತಿನಿಸುಗಳು:",

    // AI Food Scanner Section
    scanner_section_tag: "ಕಂಪ್ಯೂಟರ್ ವಿಷನ್",
    scanner_section_title: "📸 AI ಆಹಾರ ಮತ್ತು ಡಿಶ್ ಸ್ಕ್ಯಾನರ್",
    scanner_section_desc: "ಯಾವುದೇ ಆಹಾರದ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ — AI ಅದನ್ನು ಗುರುತಿಸಿ ವಿವರವಾದ ವಿಧಾನವನ್ನು ನೀಡುತ್ತದೆ.",
    scanner_drop_title: "ಫೋಟೋ ಇಲ್ಲಿ ಹಾಕಿ ಅಥವಾ ಆಯ್ಕೆ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    scanner_drop_sub: "JPEG, PNG, WebP (10MB ವರೆಗೆ)",
    scanner_upload_btn: "📁 ಫೋಟೋ ಅಪ್‌ಲೋಡ್",
    scanner_camera_btn: "📷 ಕ್ಯಾಮೆರಾ ಬಳಸಿ",
    scanner_preset_title: "ಅಥವಾ ಈ ಮಾದರಿ ತಿನಿಸುಗಳನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ:",
    scanner_status_awaiting: "ಚಿತ್ರಕ್ಕಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ...",
    scanner_confidence_label: "ನಿಖರತೆಯ ಸ್ಕೋರ್",

    // Cuisines / Categories Section
    cat_section_tag: "ಪಾಕ ಸಂಪ್ರದಾಯಗಳು",
    cat_section_title: "🌎 ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ ವಿಭಾಗಗಳು",
    cat_section_desc: "ದಕ್ಷಿಣ ಭಾರತದ ಉಪಾಹಾರದಿಂದ ಇಟಾಲಿಯನ್ ಪಾಸ್ತಾವರೆಗೆ ಅದ್ಭುತ ರುಚಿಗಳು.",

    // User Hub Section
    hub_section_tag: "ವೈಯಕ್ತಿಕ ಅಡುಗೆಮನೆ",
    hub_section_title: "👤 ನನ್ನ ಕಿಚನ್ ಹಬ್",
    hub_section_desc: "ಶಾಪಿಂಗ್ ಪಟ್ಟಿ, ಮೆಚ್ಚಿನ ಪಾಕವಿಧಾನಗಳು ಮತ್ತು ಅಡುಗೆ ಇತಿಹಾಸವನ್ನು ನಿರ್ವಹಿಸಿ.",
    hub_create_recipe_btn: "➕ ಸ್ವಂತ ಪಾಕವಿಧಾನ ರಚಿಸಿ",
    hub_shopping_title: "🛒 ಶಾಪಿಂಗ್ / ಪದಾರ್ಥಗಳ ಪಟ್ಟಿ",
    hub_shopping_placeholder: "ವಸ್ತುವನ್ನು ಸೇರಿಸಿ (ಉದಾ: 2 ಕಪ್ ಬಾಸ್ಮತಿ ಅಕ್ಕಿ)...",
    hub_history_title: "📜 ಅಡುಗೆ ಇತಿಹಾಸ",
    hub_favorites_title: "❤️ ಮೆಚ್ಚಿನ ಪಾಕವಿಧಾನಗಳು",

    // Auth & Profile Modal
    auth_tab_login: "🔑 ಲಾಗಿನ್",
    auth_tab_signup: "✨ ಪ್ರೊಫೈಲ್ ರಚಿಸಿ",
    auth_welcome_back: "ಮತ್ತೆ ಸುಸ್ವಾಗತ, ಚೆಫ್!",
    auth_login_desc: "ಸೇವ್ ಮಾಡಿದ ಪಾಕವಿಧಾನಗಳನ್ನು ನೋಡಲು ಲಾಗಿನ್ ಆಗಿ.",
    auth_email_label: "ಇಮೇಲ್ ವಿಳಾಸ",
    auth_email_placeholder: "your.name@example.com",
    auth_password_label: "ಪಾಸ್‌ವರ್ಡ್",
    auth_password_placeholder: "••••••••",
    auth_btn_login: "ಅಡುಗೆಮನೆಗೆ ಪ್ರವೇಶಿಸಿ",
    auth_switch_to_signup: "ಹೊಸಬರೇ? ಈಗಲೇ ಪ್ರೊಫೈಲ್ ರಚಿಸಿ →",

    auth_create_title: "ನಿಮ್ಮ ಚೆಫ್ ಪ್ರೊಫೈಲ್ ರಚಿಸಿ",
    auth_create_desc: "ನಿಮ್ಮ ಆಹಾರದ ಆದ್ಯತೆಗಳನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ.",
    auth_name_label: "ಪೂರ್ಣ ಹೆಸರು / ಚೆಫ್ ಹೆಸರು",
    auth_name_placeholder: "ಉದಾ: ಕಾರ್ತಿ ಸೆಲ್ವಂ",
    auth_skill_label: "ಅಡುಗೆ ಕೌಶಲ್ಯ ಮಟ್ಟ",
    auth_skill_beginner: "🌱 ಆರಂಭಿಕ (ಸುಲಭ 15 ನಿಮಿಷಗಳ ಅಡುಗೆ)",
    auth_skill_intermediate: "🍳 ಮನೆ ಅಡುಗೆಯವರು (ಮಸಾಲೆಗಳ ಪರಿಚಯ)",
    auth_skill_master: "👨‍🍳 ಮಾಸ್ಟರ್ ಚೆಫ್ (ದಮ್ & ಗೌರ್ಮೆಟ್)",
    auth_diet_label: "ಆಹಾರ ಆದ್ಯತೆ",
    auth_diet_all: "🥗 ಎಲ್ಲವೂ (ಹೊಂದಿಕೊಳ್ಳುವ)",
    auth_diet_veg: "🟢 ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ",
    auth_diet_nonveg: "🔴 ಮಾಂಸಾಹಾರಿ ಪ್ರೇಮಿ",
    auth_diet_vegan: "🌱 ಸಸ್ಯ ಆಧಾರಿತ ಆಹಾರ (Vegan)",
    auth_diet_keto: "🥑 ಕೀಟೋ / ಕಡಿಮೆ ಕಾರ್ಬ್ಸ್",
    auth_cuisine_label: "ಮೆಚ್ಚಿನ ಪಾಕಪದ್ಧತಿ",
    auth_cuisine_south_indian: "ದಕ್ಷಿಣ ಭಾರತೀಯ (ದೋಸೆ, ಇಡ್ಲಿ, ಸಾಂಬಾರ್)",
    auth_cuisine_north_indian: "ಉತ್ತರ ಭಾರತೀಯ (ಬಿರಿಯಾನಿ, ಪನ್ನೀರ್)",
    auth_cuisine_asian: "ಏಷ್ಯನ್ / ಇಂಡೋ-ಚೈನೀಸ್",
    auth_cuisine_continental: "ಇಟಾಲಿಯನ್ / ಕಾಂಟಿನೆಂಟಲ್",
    auth_avatar_label: "ಅವತಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    auth_bio_label: "ಅಡುಗೆ ಧ್ಯೇಯ / ಬಯೋ",
    auth_bio_placeholder: "ಉದಾ: ಪ್ರೀತಿಯಿಂದ ಸಾಂಪ್ರದಾಯಿಕ ಅಡುಗೆ ಮಾಡುವುದು...",
    auth_btn_signup: "✨ ಪ್ರೊಫೈಲ್ ರಚಿಸಿ ಅಡುಗೆ ಪ್ರಾರಂಭಿಸಿ",
    auth_switch_to_login: "ಖಾತೆ ಇದೆಯೇ? ಲಾಗಿನ್ ಆಗಿ →",

    // Profile View Modal
    profile_modal_title: "👤 ಚೆಫ್ ಪ್ರೊಫೈಲ್",
    profile_level_label: "ಕಿಚನ್ ಶ್ರೇಣಿ:",
    profile_diet_badge: "ಆಹಾರ:",
    profile_cuisine_badge: "ಮೆಚ್ಚಿನದು:",
    profile_stat_cooked: "ಮಾಡಿದ ಅಡುಗೆಗಳು",
    profile_stat_favs: "ಉಳಿಸಿದ ಪಾಕವಿಧಾನಗಳು",
    profile_stat_custom: "ಸ್ವಂತ ಪಾಕವಿಧಾನಗಳು",
    profile_edit_btn: "✏️ ಪ್ರೊಫೈಲ್ ಬದಲಾಯಿಸಿ",
    profile_logout_btn: "🚪 ಸೈನ್ ಔಟ್",

    // Recipe Details Modal
    modal_prep_time: "ತಯಾರಿ ಸಮಯ",
    modal_cook_time: "ಅಡುಗೆ ಸಮಯ",
    modal_difficulty: "ಕಷ್ಟದ ಮಟ್ಟ",
    modal_spice_level: "ಖಾರದ ಮಟ್ಟ",
    modal_tab_ingredients: "🥕 ಪದಾರ್ಥಗಳು & ಪ್ರಮಾಣ",
    modal_tab_steps: "👨‍🍳 ಹಂತ-ಹಂತದ ವಿಧಾನ",
    modal_tab_nutrition: "🍎 ಪೋಷಕಾಂಶಗಳ ಮಾಹಿತಿ",
    modal_tab_customize: "🌶️ ಪಾಕವಿಧಾನ ಬದಲಾಯಿಸಿ",
    modal_servings_scaler: "ಸರ್ವಿಂಗ್ ಗಾತ್ರ ಸ್ಕೇಲರ್",
    modal_servings_desc: "ಜನರ ಸಂಖ್ಯೆಗೆ ತಕ್ಕಂತೆ ಪದಾರ್ಥಗಳ ಪ್ರಮಾಣ ತಾನಾಗಿಯೇ ಬದಲಾಗುತ್ತದೆ.",
    modal_start_voice_btn: "🎙️ ಧ್ವನಿ ಅಡುಗೆ ಪ್ರಾರಂಭಿಸಿ",

    // Common
    language_switched_toast: "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ! 🌿",
    profile_created_toast: "ಪ್ರೊಫೈಲ್ ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ! ಸುಸ್ವಾಗತ, ",
    logged_in_toast: "ಮತ್ತೆ ಸುಸ್ವಾಗತ, ",
    logged_out_toast: "ನೀವು ಲಾಗೌಟ್ ಆಗಿದ್ದೀರಿ.",
    recipe_saved_toast: "ಪಾಕವಿಧಾನವನ್ನು ಮೆಚ್ಚಿನವುಗಳಿಗೆ ಸೇರಿಸಲಾಗಿದೆ! ❤️"
  },

  bn: {
    // Brand & Tagline
    brand_sub: "স্মার্ট কিচেন",
    hero_badge: "✨ AI-চালিত রন্ধনশিল্পের নির্দেশনা",
    hero_title_prefix: "কার্তি",
    hero_title_highlight: "রিয়েল-টাইম AI গাইডেন্স",
    hero_subtitle: "ঐতিহ্যবাহী রেসিপি আবিষ্কার করুন, উদ্বৃত্ত উপকরণ দিয়ে সুস্বাদু খাবার তৈরি করুন, ফটো স্ক্যান করে রেসিপি জানুন এবং ভয়েস মোডের মাধ্যমে হাত না লাগিয়েই রান্না করুন।",
    hero_cta_pantry: "🥕 আপনার কাছে কি কি উপকরণ আছে?",
    hero_cta_scan: "📸 খাবার স্ক্যান করুন",
    search_placeholder: "আজ আপনি কি রান্না করতে চান? (যেমন: বিরিয়ানি, দোসা, পনির, পাস্তা)...",

    // Navigation
    nav_home: "🏠 হোম",
    nav_recipes: "🔍 রেসিপি সন্ধান",
    nav_finder: "🥕 উপকরণ দিয়ে সন্ধান",
    nav_scanner: "📸 ডিশ স্ক্যানার",
    nav_categories: "🌎 রান্না শৈলী",
    nav_user_hub: "👤 আমার রান্নাঘর",
    nav_ai_chef: "🤖 AI শেফ",
    nav_login: "🔑 লগইন / সাইন আপ",
    nav_profile: "👤 প্রোফাইল",
    nav_logout: "🚪 লগআউট",

    // Quick Bar Features
    feat_pantry_title: "প্যান্ট্রি ম্যাচিং",
    feat_pantry_desc: "উপলব্ধ উপকরণ দিয়ে রান্না",
    feat_scanner_title: "ডিশ স্ক্যানার",
    feat_scanner_desc: "ছবি তুলে রেসিপি জানুন",
    feat_voice_title: "ভয়েস কুকিং",
    feat_voice_desc: "হাতে স্পর্শ না করে নির্দেশিকা",
    feat_nutrition_title: "সঠিক পুষ্টিতথ্য",
    feat_nutrition_desc: "USDA এবং NIN পরীক্ষিত তথ্য",

    // Popular Section
    popular_section_tag: "বিশেষ সুপারিশ",
    popular_section_title: "🔥 জনপ্রিয় রেসিপি",
    popular_section_desc: "আমাদের শেফ সম্প্রদায়ের সবচেয়ে প্রিয় ও পরীক্ষিত ঐতিহ্যবাহী রেসিপি।",

    // Dish Search & Filters
    filter_section_tag: "গ্লোবাল রেসিপি ক্যাটালগ",
    filter_section_title: "🔍 সমস্ত রেসিপি অন্বেষণ করুন",
    filter_section_desc: "খাবারের ধরণ ও রান্নার সময়ের উপর ভিত্তি করে দ্রুত ফিল্টার করুন।",
    filter_diet_all: "🥗 সব ধরণের খাবার",
    filter_diet_veg: "🟢 খাঁটি নিরামিষ",
    filter_diet_nonveg: "🔴 আমিষ",
    filter_max_time: "সর্বোচ্চ রান্নার সময়:",
    filter_spice_all: "🌶️ যে কোনো ঝাল",
    filter_spice_mild: "🫑 হালকা ঝাল",
    filter_spice_medium: "🌶️ মাঝারি ঝাল",
    filter_spice_hot: "🔥 ঝাল",
    filter_spice_fiery: "🌋 তীব্র ঝাল",
    results_found: "রেসিপি পাওয়া গেছে",

    // Ingredient Finder Section
    finder_section_tag: "অপচয় রোধক ইঞ্জিন",
    finder_section_title: "🥕 উপকরণ ভিত্তিক রেসিপি সন্ধান",
    finder_section_desc: "আপনার ফ্রিজে কি কি আছে জানান। Gustora AI তৎক্ষণাৎ উপযুক্ত রেসিপি তৈরি করে দেবে!",
    finder_input_placeholder: "উপকরণের নাম লিখুন (যেমন: টমেটো, পেঁয়াজ, চাল, ডিম, আলু)...",
    finder_staples_label: "অথবা মূল উপকরণ বেছে নিন:",
    finder_custom_ai_btn: "✨ AI নতুন রেসিপি তৈরি করুন",
    finder_matched_header: "উপযুক্ত পদসমূহ:",

    // AI Food Scanner Section
    scanner_section_tag: "কম্পিউটার ভিশন",
    scanner_section_title: "📸 AI ফুড ও ডিশ স্ক্যানার",
    scanner_section_desc: "যেকোনো খাবারের ছবি তুলুন বা আপলোড করুন — AI তা চিহ্নিত করে সম্পূর্ণ প্রস্তুতপ্রণালী দেবে।",
    scanner_drop_title: "ছবি ড্রপ করুন অথবা নির্বাচন করতে ক্লিক করুন",
    scanner_drop_sub: "JPEG, PNG, WebP (১০ এমবি পর্যন্ত)",
    scanner_upload_btn: "📁 ছবি আপলোড করুন",
    scanner_camera_btn: "📷 ক্যামেরা ব্যবহার করুন",
    scanner_preset_title: "অথবা এই নমুনা খাবারগুলো স্ক্যান করুন:",
    scanner_status_awaiting: "ছবির অপেক্ষায়...",
    scanner_confidence_label: "নির্ভুলতার হার",

    // Cuisines / Categories Section
    cat_section_tag: "রন্ধন ঐতিহ্য",
    cat_section_title: "🌎 খাঁটি খাবারের বিভাগ",
    cat_section_desc: "দক্ষিণ ভারতীয় টিফিন থেকে ইতালীয় পাস্তা—স্বাদের এক অনন্য জগত।",

    // User Hub Section
    hub_section_tag: "ব্যক্তিগত রান্নাঘর",
    hub_section_title: "👤 আমার কিচেন হাব",
    hub_section_desc: "বাজারের তালিকা, প্রিয় রেসিপি ও রান্নার ইতিহাস সহজে পরিচালনা করুন।",
    hub_create_recipe_btn: "➕ নিজের রেসিপি তৈরি করুন",
    hub_shopping_title: "🛒 বাজারের ফর্দ",
    hub_shopping_placeholder: "উপকরণ যোগ করুন (যেমন: ২ কাপ বাসমতি চাল)...",
    hub_history_title: "📜 রান্নার ইতিহাস",
    hub_favorites_title: "❤️ সংরক্ষিত প্রিয় রেসিপি",

    // Auth & Profile Modal
    auth_tab_login: "🔑 লগইন",
    auth_tab_signup: "✨ প্রোফাইল তৈরি করুন",
    auth_welcome_back: "ফিরে আসার জন্য স্বাগতম, শেফ!",
    auth_login_desc: "আপনার প্রিয় রেসিপি ও ব্যাজ দেখতে লগইন করুন।",
    auth_email_label: "ইমেল ঠিকানা",
    auth_email_placeholder: "your.name@example.com",
    auth_password_label: "পাসওয়ার্ড",
    auth_password_placeholder: "••••••••",
    auth_btn_login: "রান্নাঘরে প্রবেশ করুন",
    auth_switch_to_signup: "নতুন? এখনই প্রোফাইল তৈরি করুন →",

    auth_create_title: "আপনার শেফ প্রোফাইল তৈরি করুন",
    auth_create_desc: "আপনার রান্নার পছন্দ ও খাদ্যতালিকা কাস্টমাইজ করুন।",
    auth_name_label: "সম্পূর্ণ নাম / শেফ নাম",
    auth_name_placeholder: "যেমন: কার্তি সেলভম",
    auth_skill_label: "রান্নার দক্ষতা",
    auth_skill_beginner: "🌱 শিক্ষানবিস (সহজ ১৫-মিনিটের খাবার)",
    auth_skill_intermediate: "🍳 সাধারণ রাঁধুনি (মশলায় অভ্যস্ত)",
    auth_skill_master: "👨‍🍳 মাস্টার শেফ (দম ও বিশেষ রান্না)",
    auth_diet_label: "খাদ্যাভ্যাস পছন্দ",
    auth_diet_all: "🥗 সব ধরণের (নমনীয়)",
    auth_diet_veg: "🟢 খাঁটি নিরামিষ",
    auth_diet_nonveg: "🔴 আমিষ প্রেমী",
    auth_diet_vegan: "🌱 উদ্ভিদভিত্তিক খাদ্য (Vegan)",
    auth_diet_keto: "🥑 কিটো / লো কার্ব",
    auth_cuisine_label: "প্রিয় রন্ধনশৈলী",
    auth_cuisine_south_indian: "দক্ষিণ ভারতীয় (দোসা, ইডলি, সম্বর)",
    auth_cuisine_north_indian: "উত্তর ভারতীয় (বিরিয়ানি, পনির)",
    auth_cuisine_asian: "এশিয়ান / ইন্দো-চাইনিজ",
    auth_cuisine_continental: "ইতালীয় / কন্টিনেন্টাল",
    auth_avatar_label: "অবতার বেছে নিন",
    auth_bio_label: "কিচেন নীতিবাক্য / বায়ো",
    auth_bio_placeholder: "যেমন: ভালোবাসার সাথে খাঁটি রান্না করা...",
    auth_btn_signup: "✨ প্রোফাইল তৈরি করুন ও রান্না শুরু করুন",
    auth_switch_to_login: "ইতিমধ্যে অ্যাকাউন্ট আছে? লগইন করুন →",

    // Profile View Modal
    profile_modal_title: "👤 শেফ প্রোফাইল",
    profile_level_label: "কিচেন র্যাঙ্ক:",
    profile_diet_badge: "ডায়েট:",
    profile_cuisine_badge: "পছন্দ:",
    profile_stat_cooked: "রান্না করা পদ",
    profile_stat_favs: "সংরক্ষিত রেসিপি",
    profile_stat_custom: "নিজের রেসিপি",
    profile_edit_btn: "✏️ প্রোফাইল সম্পাদনা",
    profile_logout_btn: "🚪 সাইন আউট",

    // Recipe Details Modal
    modal_prep_time: "প্রস্তুতির সময়",
    modal_cook_time: "রান্নার সময়",
    modal_difficulty: "কঠিনতা",
    modal_spice_level: "ঝালের মাত্রা",
    modal_tab_ingredients: "🥕 উপকরণ ও পরিমাপ",
    modal_tab_steps: "👨‍🍳 ধাপ অনুযায়ী নির্দেশাবলী",
    modal_tab_nutrition: "🍎 পুষ্টির তথ্য",
    modal_tab_customize: "🌶️ রেসিপি পরিবর্তন করুন",
    modal_servings_scaler: "পরিবেশন পরিমাণ স্কেলার" ,
    modal_servings_desc: "জনসংখ্যার উপর ভিত্তি করে উপকরণের পরিমাণ স্বয়ংক্রিয়ভাবে পরিবর্তিত হবে।",
    modal_start_voice_btn: "🎙️ ভয়েস কুকিং শুরু করুন",

    // Common
    language_switched_toast: "ভাষা বাংলায় পরিবর্তন করা হয়েছে! 🌿",
    profile_created_toast: "প্রোফাইল সফলভাবে তৈরি হয়েছে! স্বাগতম, ",
    logged_in_toast: "ফিরে আসার জন্য স্বাগতম, ",
    logged_out_toast: "আপনি সফলভাবে লগআউট করেছেন।",
    recipe_saved_toast: "রেসিপি পছন্দের তালিকায় যোগ করা হয়েছে! ❤️"
  },

  mr: {
    // Brand & Tagline
    brand_sub: "स्मार्ट किचन",
    hero_badge: "✨ AI-सक्षम पाककला मार्गदर्शन",
    hero_title_prefix: "कार्तिक",
    hero_title_highlight: "रिअल-टाइम एआय मार्गदर्शन",
    hero_subtitle: "अस्सल पाककृती शोधा, शिल्लक साहित्यापासून चविष्ट जेवण बनवा, फोटोवरून डिश स्कॅन करा आणि व्हॉईस मोडद्वारे हातांचा वापर न करता स्वयंपाक करा.",
    hero_cta_pantry: "🥕 आपल्याकडे कोणते साहित्य आहे?",
    hero_cta_scan: "📸 डिश स्कॅन करा",
    search_placeholder: "आज तुम्हाला काय बनवायचे आहे? (उदा. बिर्याणी, डोसा, पनीर, पास्ता)...",

    // Navigation
    nav_home: "🏠 मुख्यपृष्ठ",
    nav_recipes: "🔍 रेसिपी शोध",
    nav_finder: "🥕 साहित्यावरून शोध",
    nav_scanner: "📸 डिश स्कॅनर",
    nav_categories: "🌎 खाद्यसंस्कृती",
    nav_user_hub: "👤 माझे स्वयंपाकघर",
    nav_ai_chef: "🤖 AI शेफ",
    nav_login: "🔑 लॉगिन / साइन अप",
    nav_profile: "👤 प्रोफाइल",
    nav_logout: "🚪 लॉगआउट",

    // Quick Bar Features
    feat_pantry_title: "साहित्य मॅचर",
    feat_pantry_desc: "उपलब्ध साहित्यावरून पाककृती",
    feat_scanner_title: "डिश स्कॅनर",
    feat_scanner_desc: "फोटोवरून कृती जाणून घ्या",
    feat_voice_title: "व्हॉईस कुकिंग",
    feat_voice_desc: "आवाजाद्वारे टप्प्याटप्प्याने मार्गदर्शन",
    feat_nutrition_title: "अचूक पोषणमूल्ये",
    feat_nutrition_desc: "USDA व NIN प्रमाणित माहिती",

    // Popular Section
    popular_section_tag: "खास शिफारसी",
    popular_section_title: "🔥 लोकप्रिय आणि आवडते पदार्थ",
    popular_section_desc: "आमच्या शेफ समुदायाला सर्वाधिक आवडलेल्या अस्सल चवीच्या पाककृती.",

    // Dish Search & Filters
    filter_section_tag: "ग्लोबल रेसिपी कॅटलॉग",
    filter_section_title: "🔍 सर्व पाककृती एक्सप्लोर करा",
    filter_section_desc: "आहार आणि स्वयंपाकाच्या वेळेनुसार त्वरित फिल्टर करा.",
    filter_diet_all: "🥗 सर्व आहार",
    filter_diet_veg: "🟢 शुद्ध शाकाहारी",
    filter_diet_nonveg: "🔴 मांसाहारी",
    filter_max_time: "कमाल वेळ:",
    filter_spice_all: "🌶️ कोणताही तिखटपणा",
    filter_spice_mild: "🫑 कमी तिखट",
    filter_spice_medium: "🌶️ मध्यम तिखट",
    filter_spice_hot: "🔥 झणझणीत",
    filter_spice_fiery: "🌋 अति तिखट",
    results_found: "पाककृती सापडल्या",

    // Ingredient Finder Section
    finder_section_tag: "अन्न वाया जाणे रोखा",
    finder_section_title: "🥕 साहित्यावर आधारित रेसिपी शोधक",
    finder_section_desc: "तुमच्याकडे घरात काय साहित्य आहे ते सांगा. Gustora AI लगेचच योग्य पाककृती सुचवेल!",
    finder_input_placeholder: "साहित्य लिहा (उदा. टोमॅटो, कांदा, तांदूळ, अंडी, बटाटा)...",
    finder_staples_label: "किंवा मुख्य साहित्य निवडा:",
    finder_custom_ai_btn: "✨ AI ने नवीन रेसिपी बनवा",
    finder_matched_header: "मिळतेजुळते पदार्थ:",

    // AI Food Scanner Section
    scanner_section_tag: "कॉम्प्युटर व्हिजन",
    scanner_section_title: "📸 AI फूड आणि डिश स्कॅनर",
    scanner_section_desc: "कोणत्याही पदार्थाचा फोटो काढा किंवा अपलोड करा — AI लगेच ओळखेल आणि कृती दाखवेल.",
    scanner_drop_title: "फोटो इथे टाका किंवा निवडण्यासाठी क्लिक करा",
    scanner_drop_sub: "JPEG, PNG, WebP (१० MB पर्यंत)",
    scanner_upload_btn: "📁 फोटो अपलोड करा",
    scanner_camera_btn: "📷 कॅमेरा वापरा",
    scanner_preset_title: "किंवा हे नमुना पदार्थ स्कॅन करून पहा:",
    scanner_status_awaiting: "फोटोची वाट पाहत आहे...",
    scanner_confidence_label: "अचूकता स्कोअर",

    // Cuisines / Categories Section
    cat_section_tag: "पाककला परंपरा",
    cat_section_title: "🌎 अस्सल खाद्यप्रकार",
    cat_section_desc: "दक्षिण भारतीय नाश्त्यापासून ते इटालियन पास्तापर्यंत समृद्ध चवींची मेजवानी.",

    // User Hub Section
    hub_section_tag: "वैयक्तिक स्वयंपाकघर",
    hub_section_title: "👤 माझे किचन हब",
    hub_section_desc: "खरेदी यादी, आवडत्या पाककृती आणि स्वयंपाकाचा इतिहास व्यवस्थापित करा.",
    hub_create_recipe_btn: "➕ स्वतःची रेसिपी तयार करा",
    hub_shopping_title: "🛒 खरेदी / साहित्याची यादी",
    hub_shopping_placeholder: "साहित्य जोडा (उदा. २ कप बासमती तांदूळ)...",
    hub_history_title: "📜 बनवलेल्या पदार्थांचा इतिहास",
    hub_favorites_title: "❤️ जतन केलेल्या आवडत्या रेसिपी",

    // Auth & Profile Modal
    auth_tab_login: "🔑 लॉगिन",
    auth_tab_signup: "✨ प्रोफाइल बनवा",
    auth_welcome_back: "पुन्हा स्वागत आहे, शेफ!",
    auth_login_desc: "जतन केलेल्या रेसिपी आणि बॅजेस पाहण्यासाठी लॉगिन करा.",
    auth_email_label: "ईमेल पत्ता",
    auth_email_placeholder: "your.name@example.com",
    auth_password_label: "पासवर्ड",
    auth_password_placeholder: "••••••••",
    auth_btn_login: "किचनमध्ये प्रवेश करा",
    auth_switch_to_signup: "नवीन आहात? आताच प्रोफाइल बनवा →",

    auth_create_title: "आपली शेफ प्रोफाइल तयार करा",
    auth_create_desc: "आपल्या आहाराच्या आवडीनुसार अनुभव सानुकूलित करा.",
    auth_name_label: "पूर्ण नाव / शेफचे नाव",
    auth_name_placeholder: "उदा. कार्तिक सेल्वम",
    auth_skill_label: "स्वयंपाक कौशल्य पातळी",
    auth_skill_beginner: "🌱 नवशिक्या (सोप्या १५ मिनिटांच्या रेसिपी)",
    auth_skill_intermediate: "🍳 घरगुती सुगरण (मसाल्यांची जाण)",
    auth_skill_master: "👨‍🍳 मास्टर शेफ (दम आणि खास पदार्थ)",
    auth_diet_label: "प्राथमिक आहार प्राधान्य",
    auth_diet_all: "🥗 सर्वकाही (लवचिक)",
    auth_diet_veg: "🟢 शुद्ध शाकाहारी",
    auth_diet_nonveg: "🔴 मांसाहारी प्रेमी",
    auth_diet_vegan: "🌱 वनस्पती-आधारित (Vegan)",
    auth_diet_keto: "🥑 कीटो / कमी कर्बोदके",
    auth_cuisine_label: "आवडती खाद्यसंस्कृती",
    auth_cuisine_south_indian: "दक्षिण भारतीय (डोसा, इडली, सांबार)",
    auth_cuisine_north_indian: "उत्तर भारतीय (बिर्याणी, पनीर)",
    auth_cuisine_asian: "आशियाई / इंडो-चायनीज",
    auth_cuisine_continental: "इटालियन / कॉन्टिनेंटल",
    auth_avatar_label: "अवतार निवडा",
    auth_bio_label: "किचन ब्रीदवाक्य / बायो",
    auth_bio_placeholder: "उदा. प्रेमाने आणि आपुलकीने रुचकर जेवण बनवणे...",
    auth_btn_signup: "✨ प्रोफाइल बनवा आणि स्वयंपाक सुरू करा",
    auth_switch_to_login: "आधीच खाते आहे? लॉगिन करा →",

    // Profile View Modal
    profile_modal_title: "👤 शेफ प्रोफाइल",
    profile_level_label: "किचन रँक:",
    profile_diet_badge: "आहार:",
    profile_cuisine_badge: "आवड:",
    profile_stat_cooked: "बनवलेले पदार्थ",
    profile_stat_favs: "जतन केलेल्या रेसिपी",
    profile_stat_custom: "स्वतःच्या रेसिपी",
    profile_edit_btn: "✏️ प्रोफाइल बदला",
    profile_logout_btn: "🚪 साइन आउट",

    // Recipe Details Modal
    modal_prep_time: "तयारीची वेळ",
    modal_cook_time: "शिजवण्याची वेळ",
    modal_difficulty: "काठिण्यपातळी",
    modal_spice_level: "तिखटपणाची पातळी",
    modal_tab_ingredients: "🥕 साहित्य आणि प्रमाण",
    modal_tab_steps: "👨‍🍳 सविस्तर कृती",
    modal_tab_nutrition: "🍎 पोषणमूल्ये",
    modal_tab_customize: "🌶️ कृतीत बदल करा",
    modal_servings_scaler: "सर्व्हिंग प्रमाण स्केलर",
    modal_servings_desc: "व्यक्तींच्या संख्येनुसार साहित्याचे प्रमाण आपोआप बदलते.",
    modal_start_voice_btn: "🎙️ व्हॉईस कुकिंग सुरू करा",

    // Common
    language_switched_toast: "भाषा मराठीमध्ये बदलली! 🌿",
    profile_created_toast: "प्रोफाइल यशस्वीरित्या तयार केली! स्वागत आहे, ",
    logged_in_toast: "पुन्हा स्वागत आहे, ",
    logged_out_toast: "तुम्ही लॉगआउट झाला आहात.",
    recipe_saved_toast: "रेसिपी आवडत्या यादीत जोडली! ❤️"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem("gustora_lang") || "en";
    if (!TRANSLATIONS[this.currentLang]) {
      this.currentLang = "en";
    }
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.applyTranslations();
      this.setupLanguageSwitcher();
    });
  }

  get(key) {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  }

  setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    this.currentLang = lang;
    localStorage.setItem("gustora_lang", lang);
    document.documentElement.lang = lang;
    this.applyTranslations();
    this.updateLanguageButton();

    if (window.app && window.app.showToast) {
      window.app.showToast(this.get("language_switched_toast"));
    }

    // Refresh dynamic sections if loaded
    if (window.app) {
      if (typeof window.app.renderCategories === "function") window.app.renderCategories();
      if (typeof window.app.renderAllRecipes === "function") window.app.renderAllRecipes();
    }
    if (window.authManager) {
      window.authManager.renderHeaderAuth();
      window.authManager.renderHubProfileCard();
    }
  }

  toggleLanguage() {
    const idx = SUPPORTED_LANGUAGES.findIndex(l => l.code === this.currentLang);
    const nextIdx = (idx + 1) % SUPPORTED_LANGUAGES.length;
    this.setLanguage(SUPPORTED_LANGUAGES[nextIdx].code);
  }

  applyTranslations() {
    // 1. Text elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = this.get(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // 2. Placeholder attributes with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const translation = this.get(key);
      if (translation) {
        el.placeholder = translation;
      }
    });

    // 3. Title attributes with data-i18n-title
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      const translation = this.get(key);
      if (translation) {
        el.title = translation;
      }
    });
  }

  setupLanguageSwitcher() {
    const dropdownBtn = document.getElementById("langDropdownBtn") || document.getElementById("langToggleBtn");
    const menu = document.getElementById("langDropdownMenu");

    if (menu) {
      menu.innerHTML = SUPPORTED_LANGUAGES.map(lang => `
        <button class="lang-option-btn ${this.currentLang === lang.code ? 'active' : ''}" data-lang="${lang.code}" type="button">
          <span class="lang-opt-flag">${lang.flag}</span>
          <div class="lang-opt-text">
            <span class="lang-opt-native">${lang.label}</span>
            <span class="lang-opt-sub">${lang.sub}</span>
          </div>
          <span class="lang-check">${this.currentLang === lang.code ? '✓' : ''}</span>
        </button>
      `).join("");

      menu.querySelectorAll(".lang-option-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const targetLang = btn.getAttribute("data-lang");
          this.setLanguage(targetLang);
          menu.classList.remove("open");
          if (dropdownBtn) dropdownBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    if (dropdownBtn) {
      dropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (menu) {
          const isOpen = menu.classList.toggle("open");
          dropdownBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        } else {
          this.toggleLanguage();
        }
      });
    }

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (menu && !e.target.closest("#langSelectorWrap")) {
        menu.classList.remove("open");
        if (dropdownBtn) dropdownBtn.setAttribute("aria-expanded", "false");
      }
    });

    this.updateLanguageButton();
  }

  updateLanguageButton() {
    const currentObj = SUPPORTED_LANGUAGES.find(l => l.code === this.currentLang) || SUPPORTED_LANGUAGES[0];
    const label = document.getElementById("currentLangLabel");
    if (label) {
      label.textContent = currentObj.label;
    }
    const indicator = document.getElementById("langIndicatorBadge");
    if (indicator) {
      indicator.textContent = currentObj.code.toUpperCase();
    }
    const menu = document.getElementById("langDropdownMenu");
    if (menu) {
      menu.querySelectorAll(".lang-option-btn").forEach(btn => {
        const langCode = btn.getAttribute("data-lang");
        const isCurrent = langCode === this.currentLang;
        btn.classList.toggle("active", isCurrent);
        const check = btn.querySelector(".lang-check");
        if (check) check.textContent = isCurrent ? "✓" : "";
      });
    }
  }
}

// Global instance
const i18n = new I18nManager();
window.i18n = i18n;
