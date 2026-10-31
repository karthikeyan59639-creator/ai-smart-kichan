/**
 * Gustora AI - Comprehensive Recipe Database
 * Real food data, nutritional values (USDA / NIN benchmarks), step-by-step instructions,
 * ingredients with scalable amounts, spice levels, and dietary attributes.
 */

const RECIPES_DATA = [
  {
    id: "chicken-biryani",
    title: "Royal Dum Chicken Biryani",
    category: "North Indian",
    cuisine: "Hyderabadi / Mughlai",
    diet: "non-veg",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 45,
    servings: 4,
    spiceLevel: "Hot",
    rating: 4.9,
    reviewsCount: 342,
    image: "assets/images/chicken_biryani.jpg",
    tags: ["biryani", "chicken", "rice", "mughlai", "dinner", "party", "fragrant"],
    description: "Layered fragrant basmati rice and marinated tender chicken slow-cooked on 'dum' with saffron, brown onions, fresh mint, and whole aromatic spices.",
    nutrition: {
      calories: 580,
      protein: 34,
      carbs: 62,
      fat: 21,
      fiber: 3.5,
      sodium: 740,
      healthTags: ["High Protein", "Rich in Iron", "Aromatic Spices"]
    },
    ingredients: [
      { name: "Basmati Rice", amount: 400, unit: "g", pantryKey: "rice" },
      { name: "Chicken (bone-in pieces)", amount: 600, unit: "g", pantryKey: "chicken" },
      { name: "Onions (thinly sliced)", amount: 3, unit: "medium", pantryKey: "onion" },
      { name: "Tomatoes (chopped)", amount: 2, unit: "medium", pantryKey: "tomato" },
      { name: "Yogurt / Curd", amount: 150, unit: "g", pantryKey: "curd" },
      { name: "Ginger Garlic Paste", amount: 2, unit: "tbsp", pantryKey: "garlic" },
      { name: "Biryani Masala / Garam Masala", amount: 1.5, unit: "tbsp", pantryKey: "garam masala" },
      { name: "Red Chili Powder", amount: 1, unit: "tsp", pantryKey: "chili" },
      { name: "Turmeric Powder", amount: 0.5, unit: "tsp", pantryKey: "turmeric" },
      { name: "Fresh Mint & Coriander Leaves", amount: 1, unit: "cup", pantryKey: "coriander" },
      { name: "Saffron soaked in warm milk", amount: 2, unit: "tbsp", pantryKey: "milk" },
      { name: "Ghee / Cooking Oil", amount: 3, unit: "tbsp", pantryKey: "oil" }
    ],
    instructions: [
      { step: 1, text: "Wash basmati rice thoroughly and soak in water for 30 minutes. Drain completely." },
      { step: 2, text: "In a mixing bowl, marinate chicken with curd, ginger-garlic paste, red chili powder, turmeric, biryani masala, half of the mint, and 1 tsp salt for at least 30 minutes." },
      { step: 3, text: "Deep fry or sauté sliced onions in oil until golden brown and crispy (birista). Set aside half for garnish." },
      { step: 4, text: "In a heavy-bottomed pot, cook marinated chicken with remaining fried onions and chopped tomatoes for 15 minutes until chicken is 80% tender." },
      { step: 5, text: "In a large separate pot, boil 2 liters water with whole spices (cardamom, cloves, bay leaf) and salt. Add soaked rice and boil until 70% cooked (about 6 minutes). Drain." },
      { step: 6, text: "Layer the parboiled rice over the cooked chicken. Top with saffron milk, ghee, fried onions, and fresh coriander-mint leaves." },
      { step: 7, text: "Seal pot tightly with foil or tight lid and cook on low heat ('dum') for 15 minutes. Let rest 10 minutes before gently fluffing and serving with raita." }
    ]
  },
  {
    id: "masala-dosa",
    title: "Crispy Golden Masala Dosa",
    category: "South Indian",
    cuisine: "South Indian / Karnataka",
    diet: "veg",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 15,
    servings: 3,
    spiceLevel: "Medium",
    rating: 4.8,
    reviewsCount: 289,
    image: "assets/images/masala_dosa.jpg",
    tags: ["dosa", "potato", "breakfast", "gluten-free", "crispy", "south indian"],
    description: "Paper-thin, golden crispy fermented rice-lentil crepe wrapped around a savory, tempered spiced potato masala, served with coconut chutney and piping hot sambar.",
    nutrition: {
      calories: 320,
      protein: 8,
      carbs: 52,
      fat: 9,
      fiber: 5,
      sodium: 520,
      healthTags: ["Fermented Goodness", "Gut Friendly", "Gluten Free"]
    },
    ingredients: [
      { name: "Dosa Batter (fermented rice & urad dal)", amount: 500, unit: "ml", pantryKey: "rice" },
      { name: "Potatoes (boiled and mashed)", amount: 3, unit: "large", pantryKey: "potato" },
      { name: "Onion (thinly sliced)", amount: 2, unit: "medium", pantryKey: "onion" },
      { name: "Green Chilies (chopped)", amount: 2, unit: "pieces", pantryKey: "chili" },
      { name: "Mustard Seeds", amount: 1, unit: "tsp", pantryKey: "mustard" },
      { name: "Curry Leaves", amount: 10, unit: "leaves", pantryKey: "curry leaves" },
      { name: "Turmeric Powder", amount: 0.5, unit: "tsp", pantryKey: "turmeric" },
      { name: "Ghee or Butter for roasting", amount: 3, unit: "tbsp", pantryKey: "butter" },
      { name: "Fresh Coriander", amount: 2, unit: "tbsp", pantryKey: "coriander" }
    ],
    instructions: [
      { step: 1, text: "For the potato masala: Heat 1 tbsp oil in a pan. Add mustard seeds, let them splutter, then add curry leaves and chopped green chilies." },
      { step: 2, text: "Add sliced onions and sauté until translucent. Stir in turmeric powder and salt." },
      { step: 3, text: "Add roughly mashed boiled potatoes and 3 tbsp water. Simmer on low heat for 3-4 minutes until moist and soft. Garnish with chopped coriander." },
      { step: 4, text: "Heat a cast-iron tawa or non-stick griddle over medium-high heat. Lightly grease and sprinkle droplets of water to adjust surface temperature." },
      { step: 5, text: "Pour a ladle of dosa batter in the center. Using circular spiral motions from center outward, spread batter into a thin uniform circle." },
      { step: 6, text: "Drizzle ghee or butter around edges and over top. Cook on medium flame until edges lift and base turns golden brown and crispy." },
      { step: 7, text: "Place 2 spoonfuls of warm potato masala in the center, fold dosa into a roll or triangle, and serve hot immediately." }
    ]
  },
  {
    id: "paneer-butter-masala",
    title: "Velvety Paneer Butter Masala",
    category: "North Indian",
    cuisine: "North Indian / Punjabi",
    diet: "veg",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    spiceLevel: "Medium",
    rating: 4.9,
    reviewsCount: 410,
    image: "assets/images/paneer_butter_masala.jpg",
    tags: ["paneer", "curry", "butter", "creamy", "north indian", "vegetarian"],
    description: "Cubes of soft cottage cheese cooked in a satin-smooth, mildly sweet and savory makhani gravy infused with butter, cashew cream, and crushed kasuri methi.",
    nutrition: {
      calories: 430,
      protein: 18,
      carbs: 16,
      fat: 32,
      fiber: 3,
      sodium: 610,
      healthTags: ["High Protein", "Calcium Rich", "Vegetarian Delight"]
    },
    ingredients: [
      { name: "Paneer (fresh cottage cheese)", amount: 300, unit: "g", pantryKey: "paneer" },
      { name: "Ripe Red Tomatoes", amount: 4, unit: "large", pantryKey: "tomato" },
      { name: "Cashews (soaked)", amount: 15, unit: "pieces", pantryKey: "cashew" },
      { name: "Butter", amount: 3, unit: "tbsp", pantryKey: "butter" },
      { name: "Fresh Cream", amount: 3, unit: "tbsp", pantryKey: "cream" },
      { name: "Ginger Garlic Paste", amount: 1, unit: "tbsp", pantryKey: "garlic" },
      { name: "Kashmiri Red Chili Powder", amount: 1, unit: "tbsp", pantryKey: "chili" },
      { name: "Garam Masala", amount: 0.75, unit: "tsp", pantryKey: "garam masala" },
      { name: "Kasuri Methi (crushed)", amount: 1, unit: "tsp", pantryKey: "fenugreek" },
      { name: "Honey or Sugar", amount: 1, unit: "tsp", pantryKey: "sugar" }
    ],
    instructions: [
      { step: 1, text: "Roughly chop tomatoes and simmer with soaked cashews in 1 cup water for 10 minutes until soft. Blend into an ultra-smooth puree." },
      { step: 2, text: "Melt 2 tbsp butter with 1 tsp oil in a pan. Add ginger-garlic paste and sauté for 1 minute until fragrant." },
      { step: 3, text: "Strain the tomato-cashew puree into the pan. Stir in Kashmiri red chili powder, salt, and cook until butter starts separating (8-10 minutes)." },
      { step: 4, text: "Add 1/2 cup warm water, sugar/honey, and garam masala. Stir well and bring gravy to a gentle simmer." },
      { step: 5, text: "Add soft paneer cubes. Simmer gently for 3-4 minutes so paneer absorbs the gravy flavors without turning chewy." },
      { step: 6, text: "Finish with fresh cream, remaining 1 tbsp butter, and crushed kasuri methi. Serve piping hot with garlic naan or jeera rice." }
    ]
  },
  {
    id: "italian-pasta",
    title: "Classic Penne all'Arrabbiata",
    category: "Italian",
    cuisine: "Italian / Roman",
    diet: "veg",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    spiceLevel: "Medium",
    rating: 4.7,
    reviewsCount: 195,
    image: "assets/images/italian_pasta.jpg",
    tags: ["pasta", "italian", "penne", "tomato", "garlic", "quick", "vegan-friendly"],
    description: "Al dente penne pasta tossed in a fiery, aromatic tomato sauce infused with thinly sliced garlic, dried red chili flakes, extra virgin olive oil, and sweet Italian basil.",
    nutrition: {
      calories: 390,
      protein: 12,
      carbs: 68,
      fat: 8,
      fiber: 4.5,
      sodium: 480,
      healthTags: ["Mediterranean Diet", "Heart Healthy", "Lycopene Rich"]
    },
    ingredients: [
      { name: "Penne Rigate Pasta", amount: 250, unit: "g", pantryKey: "pasta" },
      { name: "Peeled Plum Tomatoes / Puree", amount: 400, unit: "g", pantryKey: "tomato" },
      { name: "Garlic Cloves (thinly sliced)", amount: 5, unit: "cloves", pantryKey: "garlic" },
      { name: "Dried Red Chili Flakes", amount: 1.5, unit: "tsp", pantryKey: "chili" },
      { name: "Extra Virgin Olive Oil", amount: 3, unit: "tbsp", pantryKey: "oil" },
      { name: "Fresh Basil Leaves", amount: 8, unit: "leaves", pantryKey: "basil" },
      { name: "Parmesan Cheese (grated)", amount: 2, unit: "tbsp", pantryKey: "cheese" }
    ],
    instructions: [
      { step: 1, text: "Bring a large pot of salted water (like sea water) to a rolling boil. Add penne and cook until 1 minute before al dente. Reserve 1/2 cup pasta water, then drain." },
      { step: 2, text: "In a wide skillet, heat olive oil over medium-low heat. Add sliced garlic and chili flakes; gently sizzle for 2 minutes until fragrant and golden (do not burn!)." },
      { step: 3, text: "Pour in crushed tomatoes, season with sea salt and freshly cracked black pepper. Simmer for 10-12 minutes until the sauce thickens and deepens in color." },
      { step: 4, text: "Add drained pasta and 3-4 tbsp reserved pasta water to the sauce. Toss vigorously over medium-high heat for 1 minute until pasta is beautifully coated." },
      { step: 5, text: "Tear in fresh basil leaves and drizzle a swirl of raw extra virgin olive oil. Garnish with grated Parmesan cheese and serve immediately." }
    ]
  },
  {
    id: "hakka-noodles",
    title: "Sizzling Wok Hakka Noodles",
    category: "Chinese",
    cuisine: "Indo-Chinese",
    diet: "veg",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    servings: 3,
    spiceLevel: "Medium",
    rating: 4.8,
    reviewsCount: 220,
    image: "assets/images/hakka_noodles.jpg",
    tags: ["noodles", "chinese", "stir-fry", "quick", "street-food", "crisp-veggies"],
    description: "Chinese eggless wheat noodles tossed in a scorching smoking wok with crunchy julienned bell peppers, cabbage, carrots, soy sauce, and aromatic garlic-chili oil.",
    nutrition: {
      calories: 360,
      protein: 9,
      carbs: 58,
      fat: 10,
      fiber: 4,
      sodium: 680,
      healthTags: ["High Energy", "Crunchy Veggies", "Quick 25m Meal"]
    },
    ingredients: [
      { name: "Hakka Noodles", amount: 200, unit: "g", pantryKey: "noodles" },
      { name: "Bell Peppers (tri-color julienned)", amount: 1, unit: "cup", pantryKey: "bell pepper" },
      { name: "Cabbage & Carrots (shredded)", amount: 1.5, unit: "cups", pantryKey: "carrot" },
      { name: "Spring Onions (chopped)", amount: 0.5, unit: "cup", pantryKey: "onion" },
      { name: "Garlic (minced)", amount: 2, unit: "tbsp", pantryKey: "garlic" },
      { name: "Soy Sauce (dark)", amount: 1.5, unit: "tbsp", pantryKey: "soy sauce" },
      { name: "Chili Garlic Sauce / Vinegar", amount: 1, unit: "tbsp", pantryKey: "vinegar" },
      { name: "Sesame Oil or Cooking Oil", amount: 2, unit: "tbsp", pantryKey: "oil" },
      { name: "Black Pepper Powder", amount: 0.5, unit: "tsp", pantryKey: "pepper" }
    ],
    instructions: [
      { step: 1, text: "Boil noodles in salted water until just cooked (90%). Rinse immediately under cold running water and toss with 1 tsp oil to prevent sticking." },
      { step: 2, text: "Heat a wok on high heat until lightly smoking. Swirl in sesame oil and add minced garlic and whites of spring onions; toss for 30 seconds." },
      { step: 3, text: "Add julienned carrots, bell peppers, and cabbage. Stir-fry rapidly on high flame for 2 minutes to keep vegetables crunchy ('wok hei')." },
      { step: 4, text: "Add cooked noodles, dark soy sauce, vinegar, chili sauce, salt, and crushed black pepper." },
      { step: 5, text: "Using two spatulas or tongs, toss everything rapidly for 2 minutes until sauce is evenly distributed." },
      { step: 6, text: "Garnish with fresh green spring onions and toasted sesame seeds. Serve immediately with chili vinegar." }
    ]
  },
  {
    id: "golden-samosas",
    title: "Crispy Punjabi Golden Samosas",
    category: "Snacks",
    cuisine: "North Indian / Street Food",
    diet: "veg",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    spiceLevel: "Medium",
    rating: 4.9,
    reviewsCount: 310,
    image: "assets/images/samosas.jpg",
    tags: ["samosa", "snack", "potato", "chai-time", "crispy", "fried", "street-food"],
    description: "Flaky, golden pastry cones stuffed with a spiced potato and green peas filling flavored with roasted cumin, coriander seeds, and dry mango powder.",
    nutrition: {
      calories: 260,
      protein: 5,
      carbs: 32,
      fat: 13,
      fiber: 3.2,
      sodium: 380,
      healthTags: ["Chai Time Favorite", "Comfort Food"]
    },
    ingredients: [
      { name: "All-Purpose Flour (Maida)", amount: 250, unit: "g", pantryKey: "flour" },
      { name: "Potatoes (boiled, peeled, cubed)", amount: 4, unit: "medium", pantryKey: "potato" },
      { name: "Green Peas (fresh or frozen)", amount: 0.5, unit: "cup", pantryKey: "peas" },
      { name: "Ajwain (carom seeds)", amount: 0.75, unit: "tsp", pantryKey: "spices" },
      { name: "Ghee / Oil (for dough)", amount: 4, unit: "tbsp", pantryKey: "ghee" },
      { name: "Crushed Coriander & Cumin Seeds", amount: 1.5, unit: "tbsp", pantryKey: "coriander" },
      { name: "Amchur (dry mango powder)", amount: 1, unit: "tsp", pantryKey: "amchur" },
      { name: "Green Chilies & Ginger (minced)", amount: 1, unit: "tbsp", pantryKey: "ginger" },
      { name: "Oil for deep frying", amount: 500, unit: "ml", pantryKey: "oil" }
    ],
    instructions: [
      { step: 1, text: "For the dough: Rub flour, ajwain, salt, and warm ghee together with fingers until it resembles breadcrumbs. Gradually add cold water and knead into a stiff, firm dough. Rest covered for 30 minutes." },
      { step: 2, text: "For filling: Heat 1 tbsp oil in a pan. Add crushed coriander and cumin seeds, ginger, and green chilies. Sauté for 30 seconds." },
      { step: 3, text: "Add boiled potatoes, peas, chili powder, amchur, garam masala, and salt. Sauté for 4-5 minutes while gently crushing potatoes into small chunks. Let cool." },
      { step: 4, text: "Divide dough into equal balls. Roll into an oval shape, cut in half with a knife." },
      { step: 5, text: "Apply water along the straight edge, fold into a cone shape, and seal seam firmly." },
      { step: 6, text: "Stuff the cone with potato filling. Brush water along open edges, pinch and fold to seal completely." },
      { step: 7, text: "Deep fry samosas in moderately hot oil on low-medium flame for 12-14 minutes until crust is pale gold, crisp, and blister-free. Serve with sweet tamarind and spicy mint chutney." }
    ]
  },
  {
    id: "gulab-jamun",
    title: "Shahi Royal Gulab Jamun",
    category: "Desserts",
    cuisine: "Indian Sweets",
    diet: "veg",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 25,
    servings: 6,
    spiceLevel: "Mild",
    rating: 5.0,
    reviewsCount: 380,
    image: "assets/images/gulab_jamun.jpg",
    tags: ["gulab jamun", "dessert", "sweet", "festive", "rose", "cardamom", "khoya"],
    description: "Melt-in-the-mouth golden dumplings made from milk solids (khoya) gently fried in ghee and soaked in warm, fragrant rose-cardamom sugar syrup.",
    nutrition: {
      calories: 310,
      protein: 6,
      carbs: 48,
      fat: 11,
      fiber: 0.5,
      sodium: 120,
      healthTags: ["Rich in Calcium", "Festive Celebrations"]
    },
    ingredients: [
      { name: "Mawa / Khoya (crumbled)", amount: 200, unit: "g", pantryKey: "milk" },
      { name: "Chenna / Paneer (grated)", amount: 50, unit: "g", pantryKey: "paneer" },
      { name: "All-Purpose Flour (Maida)", amount: 3, unit: "tbsp", pantryKey: "flour" },
      { name: "Baking Soda", amount: 0.25, unit: "tsp", pantryKey: "baking soda" },
      { name: "Sugar", amount: 350, unit: "g", pantryKey: "sugar" },
      { name: "Water (for syrup)", amount: 350, unit: "ml", pantryKey: "water" },
      { name: "Green Cardamom pods (crushed)", amount: 4, unit: "pods", pantryKey: "cardamom" },
      { name: "Rose Water & Saffron strands", amount: 1, unit: "tsp", pantryKey: "saffron" },
      { name: "Ghee / Oil for deep frying", amount: 400, unit: "ml", pantryKey: "ghee" },
      { name: "Crushed Pistachios for garnish", amount: 1, unit: "tbsp", pantryKey: "nuts" }
    ],
    instructions: [
      { step: 1, text: "For sugar syrup: Combine sugar and water in a saucepan. Boil for 6-8 minutes until sticky (half-string consistency). Add crushed cardamom, saffron, and rose water. Keep warm." },
      { step: 2, text: "In a wide plate, knead mawa and chenna with the heel of your palm for 5 minutes until smooth and lump-free." },
      { step: 3, text: "Add maida and baking soda. Knead gently into a soft, pliable dough without overworking. If dry, add a few drops of milk." },
      { step: 4, text: "Pinch small equal portions and roll between greased palms into crack-free, smooth round balls." },
      { step: 5, text: "Heat ghee/oil in a heavy kadai on low heat. Gently drop the jamuns in; do not touch with spatula initially—swirl the oil around them." },
      { step: 6, text: "Fry slowly on low flame for 10-12 minutes, turning continuously until evenly golden-brown all around." },
      { step: 7, text: "Drain with a slotted spoon and immediately drop warm jamuns into the warm sugar syrup. Soak for at least 2 hours. Garnish with pistachios before serving." }
    ]
  },
  {
    id: "idli-sambar",
    title: "Steaming Soft Idli with Homestyle Sambar",
    category: "South Indian",
    cuisine: "South Indian / Tamil",
    diet: "veg",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    spiceLevel: "Medium",
    rating: 4.8,
    reviewsCount: 260,
    image: "assets/images/idli_sambar.jpg",
    tags: ["idli", "sambar", "steamed", "south indian", "healthy", "protein", "low-fat"],
    description: "Cloud-like, fluffy steamed rice cakes served submerged in a bowl of hot, tangy lentil-vegetable stew tempered with mustard, curry leaves, and asafoetida.",
    nutrition: {
      calories: 240,
      protein: 9,
      carbs: 46,
      fat: 2.2,
      fiber: 6.5,
      sodium: 490,
      healthTags: ["Low Fat", "Heart Friendly", "Steamed & Healthy", "Plant Protein"]
    },
    ingredients: [
      { name: "Idli Batter (fermented rice & black gram)", amount: 500, unit: "ml", pantryKey: "rice" },
      { name: "Toor Dal (pigeon peas)", amount: 150, unit: "g", pantryKey: "dal" },
      { name: "Mixed Vegetables (drumstick, carrots, pumpkin)", amount: 1.5, unit: "cups", pantryKey: "carrot" },
      { name: "Shallots / Pearl Onions", amount: 10, unit: "pieces", pantryKey: "onion" },
      { name: "Tomatoes (chopped)", amount: 2, unit: "medium", pantryKey: "tomato" },
      { name: "Tamarind Pulp", amount: 2, unit: "tbsp", pantryKey: "tamarind" },
      { name: "Sambar Powder", amount: 2, unit: "tbsp", pantryKey: "sambar powder" },
      { name: "Mustard Seeds & Curry Leaves", amount: 1, unit: "tsp", pantryKey: "mustard" },
      { name: "Asafoetida (Hing)", amount: 0.25, unit: "tsp", pantryKey: "hing" }
    ],
    instructions: [
      { step: 1, text: "Grease idli plates lightly with sesame oil or ghee. Pour fermented batter into each mold." },
      { step: 2, text: "Steam in an idli pot or steamer over high heat for 10-12 minutes until a toothpick inserted comes out clean. Rest 3 minutes and unmold." },
      { step: 3, text: "For Sambar: Pressure cook toor dal with turmeric and water for 4 whistles until mushy. Mash smoothly." },
      { step: 4, text: "In a pot, boil vegetables and shallots with tamarind water, sambar powder, chopped tomatoes, and salt until vegetables are tender." },
      { step: 5, text: "Add mashed cooked dal and adjust consistency with water. Bring to a rolling boil for 5 minutes." },
      { step: 6, text: "Prepare tempering: Heat 1 tbsp ghee, crackle mustard seeds, dried red chili, hing, and curry leaves. Pour sizzling tempering into sambar." },
      { step: 7, text: "Serve steaming idlis floating in a bowl of aromatic sambar with coconut chutney." }
    ]
  },
  {
    id: "fried-rice",
    title: "Golden Wok Vegetable Fried Rice",
    category: "Chinese",
    cuisine: "Chinese / Asian",
    diet: "veg",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    spiceLevel: "Mild",
    rating: 4.7,
    reviewsCount: 180,
    image: "assets/images/fried_rice.jpg",
    tags: ["rice", "fried rice", "chinese", "quick", "vegan", "gluten-free-option"],
    description: "Fluffy chilled jasmine or basmati rice stir-fried in a roaring wok with sweet corn, carrots, tender green peas, garlic, light soy sauce, and toasted sesame oil.",
    nutrition: {
      calories: 340,
      protein: 7,
      carbs: 60,
      fat: 7.5,
      fiber: 4,
      sodium: 540,
      healthTags: ["Quick Meal", "Plant Powered", "Colorful Antioxidants"]
    },
    ingredients: [
      { name: "Cooked & Chilled Jasmine/Basmati Rice", amount: 400, unit: "g", pantryKey: "rice" },
      { name: "Carrots (finely diced)", amount: 0.5, unit: "cup", pantryKey: "carrot" },
      { name: "Green Peas & Sweet Corn", amount: 0.5, unit: "cup", pantryKey: "corn" },
      { name: "Spring Onion (greens and whites)", amount: 0.5, unit: "cup", pantryKey: "onion" },
      { name: "Garlic (finely chopped)", amount: 1.5, unit: "tbsp", pantryKey: "garlic" },
      { name: "Light Soy Sauce", amount: 1.5, unit: "tbsp", pantryKey: "soy sauce" },
      { name: "Toasted Sesame Oil", amount: 1, unit: "tbsp", pantryKey: "sesame oil" },
      { name: "White Pepper Powder", amount: 0.5, unit: "tsp", pantryKey: "pepper" }
    ],
    instructions: [
      { step: 1, text: "Use day-old cooked rice or cook rice and spread on a tray to chill in the fridge for at least 1 hour so grains stay distinct." },
      { step: 2, text: "Heat wok over high flame with oil. Add chopped garlic and spring onion whites; toss for 20 seconds." },
      { step: 3, text: "Toss in diced carrots, sweet corn, and green peas. Stir-fry aggressively for 2 minutes." },
      { step: 4, text: "Add cold rice, breaking up any clumps with a spatula. Drizzle soy sauce and toasted sesame oil around the perimeter of the wok." },
      { step: 5, text: "Toss constantly on high heat for 3 minutes until rice is piping hot and fragrant." },
      { step: 6, text: "Season with white pepper and fold in chopped spring onion greens. Serve warm with Manchurian or chili sauce." }
    ]
  },
  {
    id: "semiya-payasam",
    title: "Cardamom & Saffron Semiya Payasam",
    category: "Desserts",
    cuisine: "South Indian / Kerala",
    diet: "veg",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 18,
    servings: 4,
    spiceLevel: "Mild",
    rating: 4.9,
    reviewsCount: 235,
    image: "assets/images/payasam.jpg",
    tags: ["payasam", "kheer", "dessert", "vermicelli", "milk", "sweet", "festive"],
    description: "Silky vermicelli slow-cooked in rich whole milk infused with fragrant cardamom, saffron threads, sweet golden raisins, and ghee-roasted crunchy cashews.",
    nutrition: {
      calories: 280,
      protein: 7,
      carbs: 44,
      fat: 8.5,
      fiber: 1.2,
      sodium: 95,
      healthTags: ["Calcium Rich", "Traditional Comfort", "Festive Dessert"]
    },
    ingredients: [
      { name: "Roasted Semiya / Vermicelli", amount: 100, unit: "g", pantryKey: "vermicelli" },
      { name: "Full Cream Milk", amount: 750, unit: "ml", pantryKey: "milk" },
      { name: "Sugar or Condensed Milk", amount: 120, unit: "g", pantryKey: "sugar" },
      { name: "Cardamom Powder", amount: 0.5, unit: "tsp", pantryKey: "cardamom" },
      { name: "Cashews & Golden Raisins", amount: 2, unit: "tbsp", pantryKey: "nuts" },
      { name: "Ghee", amount: 1.5, unit: "tbsp", pantryKey: "ghee" },
      { name: "Saffron strands (optional)", amount: 5, unit: "strands", pantryKey: "saffron" }
    ],
    instructions: [
      { step: 1, text: "Heat 1 tbsp ghee in a heavy pot. Fry cashews until golden; add raisins until they plump up. Remove and keep aside." },
      { step: 2, text: "In the same pan, roast vermicelli on low heat until aromatic and light golden (skip if using pre-roasted)." },
      { step: 3, text: "Pour in whole milk and bring to a gentle boil while stirring occasionally to avoid burning." },
      { step: 4, text: "Simmer vermicelli in milk for 7-8 minutes until soft and cooked through." },
      { step: 5, text: "Add sugar and cardamom powder. Simmer for another 3 minutes until sugar dissolves completely." },
      { step: 6, text: "Turn off heat, add saffron and garnish with golden fried cashews and plump raisins. Serve warm or chilled." }
    ]
  },
  {
    id: "egg-bhurji-toast",
    title: "Street Style Spicy Egg Bhurji & Toast",
    category: "Snacks",
    cuisine: "Indian Street Food",
    diet: "non-veg",
    difficulty: "Easy",
    prepTime: 8,
    cookTime: 10,
    servings: 2,
    spiceLevel: "Medium",
    rating: 4.8,
    reviewsCount: 165,
    image: "assets/images/hero.jpg",
    tags: ["egg", "bhurji", "breakfast", "quick", "toast", "high-protein"],
    description: "Fluffy scrambled eggs cooked street-style with caramelized onions, tangy tomatoes, green chilies, cilantro, and warm buttered pav or toasted bread.",
    nutrition: {
      calories: 340,
      protein: 18,
      carbs: 24,
      fat: 19,
      fiber: 2,
      sodium: 510,
      healthTags: ["High Protein", "Quick 15-Min Breakfast", "Keto Friendly (without bread)"]
    },
    ingredients: [
      { name: "Eggs", amount: 4, unit: "large", pantryKey: "egg" },
      { name: "Onion (finely chopped)", amount: 1, unit: "large", pantryKey: "onion" },
      { name: "Tomato (finely chopped)", amount: 1, unit: "medium", pantryKey: "tomato" },
      { name: "Green Chilies (chopped)", amount: 2, unit: "pieces", pantryKey: "chili" },
      { name: "Butter or Cooking Oil", amount: 1.5, unit: "tbsp", pantryKey: "butter" },
      { name: "Turmeric & Pav Bhaji Masala", amount: 1, unit: "tsp", pantryKey: "spices" },
      { name: "Fresh Coriander", amount: 2, unit: "tbsp", pantryKey: "coriander" },
      { name: "Slices of Bread or Pav", amount: 4, unit: "slices", pantryKey: "bread" }
    ],
    instructions: [
      { step: 1, text: "Whisk 4 eggs in a bowl with a pinch of salt until frothy." },
      { step: 2, text: "Melt butter in a pan over medium heat. Sauté onions and green chilies until light golden." },
      { step: 3, text: "Add tomatoes, turmeric, and pav bhaji masala. Cook for 2-3 minutes until tomatoes soften." },
      { step: 4, text: "Pour in whisked eggs and reduce heat to low-medium. Gently stir and scramble until soft, fluffy curds form (do not overcook!)." },
      { step: 5, text: "Turn off heat, stir in fresh coriander and a pinch of black pepper." },
      { step: 6, text: "Toast bread slices with butter until golden and serve hot with spicy bhurji." }
    ]
  },
  {
    id: "tomato-onion-curry",
    title: "Quick 15-Min Onion Tomato Thokku",
    category: "South Indian",
    cuisine: "Tamil Homestyle",
    diet: "veg",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 12,
    servings: 3,
    spiceLevel: "Hot",
    rating: 4.6,
    reviewsCount: 140,
    image: "assets/images/masala_dosa.jpg",
    tags: ["tomato", "onion", "thokku", "curry", "instant", "chapati-sidedish"],
    description: "A zesty, tangy South Indian side dish made from simple pantry staples: ripe tomatoes, caramelized onions, mustard seeds, and chili powder.",
    nutrition: {
      calories: 140,
      protein: 3,
      carbs: 18,
      fat: 6,
      fiber: 3.5,
      sodium: 390,
      healthTags: ["Low Calorie", "Quick 15-Min", "Pantry Staples"]
    },
    ingredients: [
      { name: "Tomatoes (chopped)", amount: 3, unit: "medium", pantryKey: "tomato" },
      { name: "Onions (chopped)", amount: 2, unit: "medium", pantryKey: "onion" },
      { name: "Mustard Seeds", amount: 1, unit: "tsp", pantryKey: "mustard" },
      { name: "Curry Leaves", amount: 8, unit: "leaves", pantryKey: "curry leaves" },
      { name: "Chili Powder & Turmeric", amount: 1.5, unit: "tsp", pantryKey: "chili" },
      { name: "Sesame / Cooking Oil", amount: 2, unit: "tbsp", pantryKey: "oil" },
      { name: "Salt to taste", amount: 1, unit: "tsp", pantryKey: "salt" }
    ],
    instructions: [
      { step: 1, text: "Heat oil in a pan. Splutter mustard seeds and add curry leaves." },
      { step: 2, text: "Add chopped onions and sauté until translucent and golden brown." },
      { step: 3, text: "Add chopped tomatoes, turmeric, chili powder, and salt." },
      { step: 4, text: "Cover and cook on medium flame for 7-8 minutes until tomatoes break down completely and oil separates." },
      { step: 5, text: "Stir well to form a thick, jammy gravy. Serve with hot rice, chapati, or dosa." }
    ]
  },
  {
    id: "fresh-garden-salad",
    title: "Fresh Mediterranean Garden Salad with Cherry Tomatoes & Microgreens",
    category: "Snacks",
    cuisine: "Mediterranean / Continental",
    diet: "veg",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    spiceLevel: "Mild",
    rating: 4.95,
    reviewsCount: 215,
    image: "assets/images/garden_salad.jpg",
    tags: ["salad", "mediterranean", "healthy", "fresh", "diet", "vegan", "raw", "keto", "bowl", "greens", "cherry tomatoes", "microgreens", "sprouts", "olive oil", "lemon", "detox"],
    description: "Vibrant garden bowl featuring tender lamb's lettuce and baby spinach crowned with sweet cherry tomatoes, delicate alfalfa microgreens, crunchy purple cabbage, cracked black pepper, and an emulsified lemon-extra virgin olive oil vinaigrette.",
    nutrition: {
      calories: 195,
      protein: 5.2,
      carbs: 14,
      fat: 13.5,
      fiber: 4.8,
      sodium: 190,
      healthTags: ["100% Plant-Based", "Lycopene Rich", "Antioxidant Powerhouse", "Keto Friendly", "Zero Cook Time"]
    },
    ingredients: [
      { name: "Tender Lamb's Lettuce (Mâche) & Baby Spinach", amount: 3, unit: "cups", pantryKey: "lettuce" },
      { name: "Vine-Ripened Cherry Tomatoes (halved & whole)", amount: 1.5, unit: "cups", pantryKey: "tomato" },
      { name: "Fresh Alfalfa Sprouts or Microgreens", amount: 0.5, unit: "cup", pantryKey: "coriander" },
      { name: "Finely Shredded Purple Cabbage", amount: 0.5, unit: "cup", pantryKey: "cabbage" },
      { name: "Yellow Cherry Tomatoes or Bell Pepper slivers", amount: 0.25, unit: "cup", pantryKey: "tomato" },
      { name: "Cold-Pressed Extra Virgin Olive Oil", amount: 2, unit: "tbsp", pantryKey: "oil" },
      { name: "Freshly Squeezed Lemon Juice", amount: 1.5, unit: "tbsp", pantryKey: "lemon" },
      { name: "Pink Himalayan Crystal Salt (crushed)", amount: 0.5, unit: "tsp", pantryKey: "salt" },
      { name: "Freshly Cracked Coarse Black Pepper", amount: 0.5, unit: "tsp", pantryKey: "pepper" },
      { name: "Fresh Herbs (Oregano or Basil leaves)", amount: 1, unit: "tsp", pantryKey: "coriander" }
    ],
    instructions: [
      { step: 1, text: "Gently rinse lamb's lettuce and baby spinach in ice water to maintain optimum crunch; spin or pat thoroughly dry." },
      { step: 2, text: "Slice half of the sweet cherry tomatoes in halves to release natural juices, keeping the remaining whole for a bursting bite texture." },
      { step: 3, text: "Arrange the tender leafy greens into a shallow ceramic bowl. Nest the finely shredded purple cabbage along the perimeter for color contrast." },
      { step: 4, text: "Toss in the halved and whole cherry tomatoes along with delicate ribbons of yellow cherry tomato." },
      { step: 5, text: "In a small cruet or bowl, vigorously whisk cold-pressed extra virgin olive oil, fresh lemon juice, crushed pink Himalayan rock salt, and freshly cracked black peppercorns until emulsified." },
      { step: 6, text: "Drizzle the dressing lightly over the greens, crown the center with a generous nest of fresh alfalfa microgreens, and serve immediately with fresh crusty bread or seasonal fruits." }
    ]
  },
  {
    id: "margherita-pizza",
    title: "Artisanal Neapolitan Margherita Pizza",
    category: "Italian",
    cuisine: "Italian / Neapolitan",
    diet: "veg",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 12,
    servings: 3,
    spiceLevel: "Mild",
    rating: 4.8,
    reviewsCount: 215,
    image: "assets/images/hero.jpg",
    tags: ["pizza", "margherita", "italian", "cheese", "mozzarella", "basil", "crust"],
    description: "Hand-stretched sourdough pizza crust baked with sweet San Marzano tomato sauce, bubbly melted fresh mozzarella, aromatic basil leaves, and extra virgin olive oil.",
    nutrition: {
      calories: 460,
      protein: 16,
      carbs: 58,
      fat: 18,
      fiber: 3.5,
      sodium: 680,
      healthTags: ["Italian Classic", "Vegetarian Favorite", "Comfort Food"]
    },
    ingredients: [
      { name: "Pizza Dough Ball", amount: 250, unit: "g", pantryKey: "flour" },
      { name: "Crushed San Marzano Tomatoes", amount: 150, unit: "g", pantryKey: "tomato" },
      { name: "Fresh Mozzarella Cheese (sliced)", amount: 120, unit: "g", pantryKey: "cheese" },
      { name: "Fresh Basil Leaves", amount: 8, unit: "leaves", pantryKey: "basil" },
      { name: "Extra Virgin Olive Oil", amount: 1.5, unit: "tbsp", pantryKey: "oil" },
      { name: "Sea Salt & Garlic Powder", amount: 0.5, unit: "tsp", pantryKey: "garlic" }
    ],
    instructions: [
      { step: 1, text: "Preheat oven with a pizza stone or heavy baking tray at 250°C (480°F) for at least 30 minutes." },
      { step: 2, text: "Stretch pizza dough with hands on a floured surface from center outwards, leaving a thicker airy edge (cornicione)." },
      { step: 3, text: "Spread crushed tomato sauce in spirals, leaving 1-inch border. Season with a pinch of sea salt." },
      { step: 4, text: "Tear pieces of fresh mozzarella evenly over the sauce." },
      { step: 5, text: "Bake on hot stone for 10-12 minutes until crust is blistered and cheese is bubbling and golden." },
      { step: 6, text: "Finish with fresh sweet basil leaves and a drizzle of extra virgin olive oil. Slice and enjoy hot." }
    ]
  }
];

// Food categories catalog with icons, descriptions, and taglines
const FOOD_CATEGORIES = [
  {
    id: "south-indian",
    name: "South Indian",
    icon: "🥥",
    count: 3,
    examples: "Idli, Dosa, Sambar, Vada, Payasam",
    description: "Aromatic curries, fermented dosas, coconut chutneys, and soothing herbal broths.",
    badge: "Traditional"
  },
  {
    id: "north-indian",
    name: "North Indian",
    icon: "🥘",
    count: 3,
    examples: "Paneer Butter Masala, Biryani, Naan, Dal",
    description: "Rich creamy gravies, tandoor flatbreads, royal Mughlai biryanis, and aromatic spices.",
    badge: "Rich & Royal"
  },
  {
    id: "chinese",
    name: "Chinese",
    icon: "🥢",
    count: 2,
    examples: "Hakka Noodles, Fried Rice, Manchurian",
    description: "Sizzling high-flame wok toss dishes with crunch, soy reduction, and garlic chili aromas.",
    badge: "Wok Fresh"
  },
  {
    id: "italian",
    name: "Italian",
    icon: "🍝",
    count: 1,
    examples: "Penne Arrabbiata, Pasta, Pizza, Risotto",
    description: "Sun-ripened tomatoes, extra virgin olive oil, fragrant basil, and artisanal cheeses.",
    badge: "Mediterranean"
  },
  {
    id: "snacks",
    name: "Snacks",
    icon: "🥟",
    count: 2,
    examples: "Crispy Samosa, Egg Bhurji Toast, Pakora",
    description: "Irresistible crunchy appetizers, street-side chai snacks, and quick breakfast bites.",
    badge: "Quick Bites"
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "🍯",
    count: 2,
    examples: "Gulab Jamun, Semiya Payasam, Kheer, Halwa",
    description: "Decadent saffron syrups, milk confections, cardamom kheer, and festival sweets.",
    badge: "Sweet Indulgence"
  }
];

// Common pantry ingredients for the Ingredient-Based Recipe Finder
const PANTRY_STAPLES = [
  { id: "tomato", name: "Tomato", icon: "🍅", category: "Vegetables" },
  { id: "onion", name: "Onion", icon: "🧅", category: "Vegetables" },
  { id: "potato", name: "Potato", icon: "🥔", category: "Vegetables" },
  { id: "garlic", name: "Garlic", icon: "🧄", category: "Spices" },
  { id: "ginger", name: "Ginger", icon: "🫚", category: "Spices" },
  { id: "chili", name: "Green Chili", icon: "🌶️", category: "Vegetables" },
  { id: "coriander", name: "Fresh Coriander", icon: "🌿", category: "Herbs" },
  { id: "carrot", name: "Carrot", icon: "🥕", category: "Vegetables" },
  { id: "bell pepper", name: "Bell Pepper", icon: "🫑", category: "Vegetables" },
  { id: "rice", name: "Rice", icon: "🍚", category: "Grains" },
  { id: "egg", name: "Egg", icon: "🥚", category: "Protein" },
  { id: "chicken", name: "Chicken", icon: "🍗", category: "Protein" },
  { id: "paneer", name: "Paneer", icon: "🧀", category: "Dairy" },
  { id: "curd", name: "Yogurt / Curd", icon: "🥣", category: "Dairy" },
  { id: "milk", name: "Milk", icon: "🥛", category: "Dairy" },
  { id: "butter", name: "Butter / Ghee", icon: "🧈", category: "Dairy" },
  { id: "cheese", name: "Cheese", icon: "🧀", category: "Dairy" },
  { id: "pasta", name: "Pasta", icon: "🍝", category: "Grains" },
  { id: "noodles", name: "Noodles", icon: "🍜", category: "Grains" },
  { id: "bread", name: "Bread / Pav", icon: "🍞", category: "Bakery" },
  { id: "dal", name: "Dal / Lentils", icon: "🍲", category: "Grains" },
  { id: "oil", name: "Cooking Oil", icon: "🫒", category: "Pantry" },
  { id: "soy sauce", name: "Soy Sauce", icon: "🍶", category: "Sauces" }
];

// Built-in intelligent culinary knowledge for AI Cooking Assistant substitutions & questions
const CULINARY_KNOWLEDGE = {
  substitutions: [
    {
      ingredient: "curd",
      aliases: ["yogurt", "dahi"],
      alternatives: [
        { name: "Plain Greek Yogurt (1:1 ratio)", note: "Same tang and thick creamy texture, perfect for marinades and gravies." },
        { name: "Lemon Juice or Vinegar + Milk (1 tbsp per cup)", note: "Let sit for 5 minutes to curdle; excellent for baking and tenderizing." },
        { name: "Cashew Cream + Splash of Lemon", note: "Best 100% plant-based/vegan substitute that mimics dairy richness." },
        { name: "Sour Cream or Buttermilk", note: "Works great in baking and rich North Indian curries." }
      ]
    },
    {
      ingredient: "egg",
      aliases: ["eggs"],
      alternatives: [
        { name: "Flaxseed Meal (1 tbsp + 3 tbsp water per egg)", note: "Excellent binding for baking and fritters." },
        { name: "Silken Tofu (1/4 cup blended per egg)", note: "Adds dense moisture with neutral flavor." },
        { name: "Mashed Banana or Applesauce (1/4 cup per egg)", note: "Great in sweet baked goods, pancakes, and cakes." },
        { name: "Chickpea Flour (Besan) + Water", note: "Savory binding perfect for fritters, pancakes, and coating." }
      ]
    },
    {
      ingredient: "butter",
      aliases: ["ghee"],
      alternatives: [
        { name: "Ghee (Clarified Butter)", note: "Higher smoke point, nutty aroma, perfect for Indian sweets and searing." },
        { name: "Coconut Oil", note: "Great vegan fat for high heat cooking and South Indian recipes." },
        { name: "Extra Virgin Olive Oil (3:4 ratio)", note: "Heart-healthy substitute ideal for pasta, sautéing, and dressings." }
      ]
    },
    {
      ingredient: "paneer",
      aliases: ["cottage cheese"],
      alternatives: [
        { name: "Extra Firm Tofu (pressed)", note: "Absorbs marinades beautifully, 100% vegan, high protein." },
        { name: "Halloumi Cheese", note: "Grills and sears without melting, slightly saltier." },
        { name: "Ricotta Salata or Fresh Mozzarella", note: "Good for mild creamy texture." }
      ]
    },
    {
      ingredient: "tomato",
      aliases: ["tomatoes"],
      alternatives: [
        { name: "Canned Crushed Tomatoes or Puree", note: "Consistent acidity and rich color throughout the year." },
        { name: "Tamarind Pulp or Amchur (Dry Mango Powder)", note: "Provides sour tang when making Indian curries and rasam." },
        { name: "Red Bell Pepper Puree + Lemon", note: "Great nightshade-free alternative for gravies." }
      ]
    },
    {
      ingredient: "soy sauce",
      aliases: ["soya sauce"],
      alternatives: [
        { name: "Tamari (Gluten-Free)", note: "Identical deep umami flavor with zero gluten." },
        { name: "Coconut Aminos", note: "Lower sodium, slightly sweeter alternative." },
        { name: "Worcestershire Sauce + Pinch of Salt", note: "Savory fermented punch for stir-fries." }
      ]
    }
  ],
  fixes: [
    {
      problem: "too salty",
      solutions: [
        "Drop in a peeled, raw potato cut into chunks for 10 minutes; it absorbs excess sodium like a sponge, then discard before serving.",
        "Add a splash of fresh dairy: heavy cream, plain yogurt, or unsalted butter buffers sharp saltiness.",
        "Add an acid element: fresh lemon juice or cider vinegar cuts perceived saltiness on your palate.",
        "Increase bulk: add more unseasoned base ingredients (diced tomatoes, cooked rice, water, or stock)."
      ]
    },
    {
      problem: "too spicy",
      solutions: [
        "Incorporate dairy or coconut milk: Capsaicin (chili heat) binds to fats like casein in milk/curd/cream.",
        "Add sweetness: a teaspoon of sugar, honey, or jaggery balances fiery heat.",
        "Serve with cooling starches: warm basmati rice, bread, or cucumber raita."
      ]
    },
    {
      problem: "curry too runny",
      solutions: [
        "Simmer uncovered on medium-high to evaporate excess moisture.",
        "Stir in 1-2 tbsp of cashew paste, almond flour, or heavy cream.",
        "Mash a few cooked potato or vegetable pieces directly into the gravy to thicken naturally."
      ]
    }
  ]
};
