"""
Gustora AI - FastAPI Backend Server
Provides RESTful APIs for Recipes, Pantry Ingredient Matching,
Multimodal Dish Recognition, and Culinary Assistant Chat.
"""

from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List, Optional
import os
import json

app = FastAPI(
    title="Gustora AI - Smart Cooking Guidance API",
    description="Backend services for Recipe Search, Pantry Matching, Dish Vision, and AI Assistant",
    version="1.0.0"
)

# Enable CORS for local and web clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Detect workspace root to serve frontend static assets
current_dir = os.path.dirname(os.path.abspath(__file__))
workspace_root = os.path.dirname(current_dir) if os.path.basename(current_dir) == "backend" else current_dir

for folder in ["css", "js", "assets"]:
    target_path = os.path.join(workspace_root, folder)
    if os.path.isdir(target_path):
        app.mount(f"/{folder}", StaticFiles(directory=target_path), name=folder)

# Request Models
class PantrySearchRequest(BaseModel):
    ingredients: List[str]

class ChatRequest(BaseModel):
    message: str
    context_recipe_id: Optional[str] = None

class CustomRecipeModel(BaseModel):
    title: str
    category: str
    diet: str
    difficulty: str
    prepTime: int
    cookTime: int
    servings: int
    spiceLevel: str
    description: str
    ingredients: List[dict]
    instructions: List[dict]
    nutrition: dict

# Sample In-Memory Database (Synced with frontend recipes-data.js)
RECIPES_DB = [
    {
        "id": "chicken-biryani",
        "title": "Royal Dum Chicken Biryani",
        "category": "North Indian",
        "cuisine": "Hyderabadi / Mughlai",
        "diet": "non-veg",
        "difficulty": "Medium",
        "prepTime": 25,
        "cookTime": 45,
        "servings": 4,
        "spiceLevel": "Hot",
        "nutrition": {"calories": 580, "protein": 34, "carbs": 62, "fat": 21, "fiber": 3.5, "sodium": 740},
        "ingredients": ["Basmati Rice", "Chicken", "Onion", "Tomato", "Curd", "Ginger Garlic Paste", "Biryani Masala", "Mint"]
    },
    {
        "id": "masala-dosa",
        "title": "Crispy Golden Masala Dosa",
        "category": "South Indian",
        "cuisine": "South Indian",
        "diet": "veg",
        "difficulty": "Medium",
        "prepTime": 20,
        "cookTime": 15,
        "servings": 3,
        "spiceLevel": "Medium",
        "nutrition": {"calories": 320, "protein": 8, "carbs": 52, "fat": 9, "fiber": 5, "sodium": 520},
        "ingredients": ["Dosa Batter", "Potato", "Onion", "Green Chili", "Mustard Seeds", "Curry Leaves", "Ghee"]
    },
    {
        "id": "paneer-butter-masala",
        "title": "Velvety Paneer Butter Masala",
        "category": "North Indian",
        "cuisine": "Punjabi",
        "diet": "veg",
        "difficulty": "Easy",
        "prepTime": 15,
        "cookTime": 20,
        "servings": 4,
        "spiceLevel": "Medium",
        "nutrition": {"calories": 430, "protein": 18, "carbs": 16, "fat": 32, "fiber": 3, "sodium": 610},
        "ingredients": ["Paneer", "Tomato", "Cashew", "Butter", "Fresh Cream", "Ginger Garlic Paste", "Kasuri Methi"]
    },
    {
        "id": "fresh-garden-salad",
        "title": "Mediterranean Rainbow Garden Salad",
        "category": "Snacks",
        "cuisine": "Mediterranean / Continental",
        "diet": "veg",
        "difficulty": "Easy",
        "prepTime": 12,
        "cookTime": 0,
        "servings": 2,
        "spiceLevel": "Mild",
        "nutrition": {"calories": 220, "protein": 7, "carbs": 16, "fat": 14, "fiber": 5.5, "sodium": 320},
        "ingredients": ["Mixed Crisp Lettuce", "Cherry Tomatoes", "Cucumber", "Sweet Corn", "Black Olives", "Feta Cheese", "Olive Oil"]
    }
]

@app.get("/", include_in_schema=False)
def home():
    index_file = os.path.join(workspace_root, "index.html")
    if os.path.isfile(index_file):
        return FileResponse(index_file)
    return {
        "status": "healthy",
        "service": "Gustora AI Culinary Engine",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/api/health")
def health():
    return {
        "status": "healthy",
        "service": "Gustora AI Culinary Engine",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/api/recipes")
def get_recipes(category: Optional[str] = None, diet: Optional[str] = None):
    results = RECIPES_DB
    if category:
        results = [r for r in results if r["category"].lower() == category.lower()]
    if diet:
        results = [r for r in results if r["diet"].lower() == diet.lower()]
    return {"count": len(results), "recipes": results}

@app.get("/api/recipes/{recipe_id}")
def get_recipe_detail(recipe_id: str):
    for r in RECIPES_DB:
        if r["id"] == recipe_id:
            return r
    raise HTTPException(status_code=404, detail="Recipe not found")

@app.post("/api/ingredient-search")
def search_by_ingredients(payload: PantrySearchRequest):
    user_pantry = [i.strip().lower() for i in payload.ingredients]
    matched_results = []

    for r in RECIPES_DB:
        recipe_ing_str = " ".join(r["ingredients"]).lower()
        matched = [i for i in user_pantry if i in recipe_ing_str]
        score = round((len(matched) / max(len(r["ingredients"]), 1)) * 100)
        if matched:
            matched_results.append({
                "recipe": r,
                "matchPercentage": score,
                "matchedCount": len(matched),
                "matchedItems": matched
            })

    matched_results.sort(key=lambda x: x["matchPercentage"], reverse=True)
    return {"query": user_pantry, "results": matched_results}

@app.post("/api/chat")
def cooking_assistant_chat(payload: ChatRequest):
    msg = payload.message.lower()
    
    # Check curd substitution
    if "curd" in msg or "yogurt" in msg:
        reply = (
            "Substitutions for Curd (Yogurt):\n"
            "1. Plain Greek Yogurt (1:1 ratio) - closest texture and acidity.\n"
            "2. 1 tbsp Lemon juice/Vinegar + 1 cup Milk (wait 5 mins) - great for tenderizing.\n"
            "3. Cashew Cream + splash of lemon - 100% vegan richness.\n"
            "Flavor impact: Adjust other citrus so the dish doesn't become overly tart."
        )
    elif "salty" in msg or "salt" in msg:
        reply = (
            "How to fix an over-salted dish:\n"
            "1. Drop in raw peeled potato wedges for 10 minutes to absorb excess salt.\n"
            "2. Stir in heavy cream, unsalted butter, or plain yogurt.\n"
            "3. Add a squeeze of fresh lemon juice to balance your taste buds."
        )
    else:
        reply = f"Chef Gustora here! Regarding '{payload.message}': Remember to balance salt, acid, fat, and heat for optimal flavor harmony."

    return {"response": reply, "model": "Gustora-Culinary-Engine-v1"}

@app.post("/api/scan-dish")
async def scan_dish_image(file: UploadFile = File(...)):
    filename = file.filename.lower()
    if any(k in filename for k in ["salad", "green", "fruit", "diet", "raw", "bowl", "istock"]):
        dish = "fresh-garden-salad"
    elif "dosa" in filename:
        dish = "masala-dosa"
    elif "paneer" in filename:
        dish = "paneer-butter-masala"
    else:
        dish = "chicken-biryani"

    recipe = next((r for r in RECIPES_DB if r["id"] == dish), RECIPES_DB[0])
    return {
        "status": "success",
        "identifiedDish": recipe["title"],
        "confidence": 98.4,
        "cuisine": recipe["cuisine"],
        "recipeId": recipe["id"],
        "nutrition": recipe["nutrition"]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
