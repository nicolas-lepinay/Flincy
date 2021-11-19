const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

// User :
export const user = {
    firstName: "Émilia",
    lastName: "Clarke",
    city: "Avignon",
    departement: "84"
}

// Home Page - Paniers à composer :
export const basketItems = [
    {
        image: `${PF}/data/panier-apero.webp`,
        name: "Panier apéritif",
        price: 45.00,
        rating: 4.9,
        feedback: 124
    },
    {
        image: `${PF}/data/panier-breakfast.webp`,
        name: "Panier petit-déjeuner",
        price: 35.00,
        rating: 4.4,
        feedback: 78
    },
    {
        image: `${PF}/data/panier-veggie.webp`,
        name: "Panier végétarien",
        price: 40.00,
        rating: 4.5,
        feedback: 142
    },
    {
        image: `${PF}/data/panier-italian.webp`,
        name: "Panier italien",
        price: 35.00,
        rating: 4.7,
        feedback: 201
    }
]

export const basketSetting = {
    dragSpeed: 1.25,
    itemWidth: 280,
    itemHeight: 200,
    itemSideOffsets: 20
  };

export const basketItemStyle = {
    width: `${basketSetting.itemWidth}px`,
    height: `${basketSetting.itemHeight}px`,
    margin: `0 ${basketSetting.itemSideOffsets}px`
};

// Nos derniers articles :
export const latestItems = [
    {
        image: `${PF}/data/grenade.webp`,
        name: "Grenades",
        country: "France",
        price: 2.50,
        weight: "250g",
        shop: "Epicerie&Co",
        rating: 4.9,
        feedback: 6
    },
    {
        image: `${PF}/data/kiwi.webp`,
        name: "Kiwi",
        country: "France",
        price: 1.30,
        weight: "La pièce",
        shop: "Epicerie&Co",
        rating: 4.9,
        feedback: 4
    },
    {
        image: `${PF}/data/vin-rouge.webp`,
        name: "Vin rouge",
        country: "France",
        price: 30.00,
        weight: "70cl",
        shop: "Epicerie&Co",
        rating: 4.9,
        feedback: 5
    },
    {
        image: `${PF}/data/steak-boeuf.webp`,
        name: "Steak de boeuf",
        country: "France",
        price: 5.25,
        weight: "500g",
        shop: "Epicerie&Co",
        rating: 4.9,
        feedback: 2
    }
]

// Recettes
export const recipeItems = [
    {
        image: `${PF}/data/blueberry-cheesecake.webp`,
        name: "Cheesecake à la myrtille",
        category: "Desserts",
        price: 15.25,
        rating: 4.7,
        feedback: 124
    },
    {
        image: `${PF}/data/chicken-pizza.webp`,
        name: "Pizza au poulet et champignons",
        category: "Pizza",
        price: 20.00,
        rating: 4.2,
        feedback: 78
    },
    {
        image: `${PF}/data/egg-burger.webp`,
        name: "Burger aux oeufs et emmental",
        category: "Burgers",
        price: 14.00,
        rating: 4.8,
        feedback: 142
    },
    {
        image: `${PF}/data/fish-chips.webp`,
        name: "Fish & Chips",
        category: "Plats chauds",
        price: 16.00,
        rating: 4.5,
        feedback: 201
    },
    {
        image: `${PF}/data/glazed-salmon.webp`,
        name: "Saumon laqué",
        category: "Plats chauds",
        price: 22.00,
        rating: 4.8,
        feedback: 175
    }
]

export const recipeSetting = {
    dragSpeed: 1.25,
    itemWidth: 120,
    itemHeight: 200,
    itemSideOffsets: 10
  };

export const recipeItemStyle = {
    width: `${recipeSetting.itemWidth}px`,
    height: `${recipeSetting.itemHeight}px`,
    margin: `0 ${recipeSetting.itemSideOffsets}px`
  };

// Products Page - Ingredients & Recipes :
export const ingredients = [
    {
        _id: "1",
        name: "Primeurs"
    },
    {
        _id: "2",
        name: "Produits laitiers"
    },
    {
        _id: "3",
        name: "Viandes, oeufs et poissons"
    },
    {
        _id: "4",
        name: "Assaisonnements"
    },
    {
        _id: "5",
        name: "Pain"
    },
    {
        _id: "6",
        name: "Caviste"
    },
    {
        _id: "7",
        name: "Confiseries et gâteaux"
    }
]

export const recipes = [
    {
        _id: "1",
        name: "Entrées"
    },
    {
        _id: "2",
        name: "Plats chauds"
    },
    {
        _id: "3",
        name: "Plats froids"
    },
    {
        _id: "4",
        name: "Soupes et potages"
    },
    {
        _id: "5",
        name: "Street food"
    },
    {
        _id: "6",
        name: "Boissons et cocktails"
    },
    {
        _id: "7",
        name: "Végétariens"
    },
    {
        _id: "8",
        name: "Desserts"
    }
]

// Page Ingrédients - "Nos derniers ingrédients" :

export const latestIngredients = [
    {
        image: `${PF}/data/grenade.webp`,
        name: "Grenades",
        country: "France",
        price: 2.25,
        weight: "unité",
        rating: 4.7,
        feedback: 124
    },
    {
        image: `${PF}/data/figs.webp`,
        name: "Figues",
        country: "Belgique",
        price: 5.50,
        weight: "250g",
        rating: 4.2,
        feedback: 78
    },
    {
        image: `${PF}/data/kiwi.webp`,
        name: "Kiwi",
        country: "France",
        price: 0.90,
        weight: "unité",
        rating: 4.8,
        feedback: 142
    },
    {
        image: `${PF}/data/bananas.webp`,
        name: "Bananes",
        country: "Espagne",
        price: 2.20,
        weight: "1kg",
        rating: 4.8,
        feedback: 142
    },
    {
        image: `${PF}/data/pineapple.webp`,
        name: "Ananas secs",
        country: "France",
        price: 1.80,
        weight: "100g",
        rating: 4.2,
        feedback: 75
    }
]

export const ingredientSetting = {
    dragSpeed: 1.25,
    itemWidth: 120,
    itemHeight: 200,
    itemSideOffsets: 10
  };

export const ingredientItemStyle = {
    width: `${recipeSetting.itemWidth}px`,
    height: `${recipeSetting.itemHeight}px`,
    margin: `0 ${recipeSetting.itemSideOffsets}px`
  };