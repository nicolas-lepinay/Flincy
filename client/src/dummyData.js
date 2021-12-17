const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

// User :
export const user = {
    firstName: "Émilia",
    lastName: "Clarke",
    address: "74, rue de la République",
    city: "Avignon",
    departement: "84",
    zipcode: "84000",
    country: "France",
    phone: "07 12 78 36 22"
}

// Home Page - Paniers à composer :
export const basketItems = [
    {
        _id: "300",
        image: `${PF}/data/panier-apero.webp`,
        name: "Panier apéritif",
        price: 45.00,
        rating: 4.9,
        feedback: 124,
        section: "paniers"
    },
    {
        _id: "301",
        image: `${PF}/data/panier-breakfast.webp`,
        name: "Panier petit-déjeuner",
        price: 35.00,
        rating: 4.4,
        feedback: 78,
        section: "paniers"
    },
    {
        _id: "302",
        image: `${PF}/data/panier-veggie.webp`,
        name: "Panier végétarien",
        price: 40.00,
        rating: 4.5,
        feedback: 142,
        section: "paniers"
    },
    {
        _id: "303",
        image: `${PF}/data/panier-italian.webp`,
        name: "Panier italien",
        price: 35.00,
        rating: 4.7,
        feedback: 201,
        section: "paniers"
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
        _id: "200",
        image: `${PF}/data/grenade.webp`,
        name: "Grenades",
        country: "France",
        price: 2.50,
        weight: "250g",
        shop: "Epicerie&Co",
        rating: 4.9,
        feedback: 6,
        section: "ingrédients"
    },
    {
        _id: "201",
        image: `${PF}/data/kiwi.webp`,
        name: "Kiwi",
        country: "France",
        price: 1.30,
        weight: "La pièce",
        shop: "Epicerie&Co",
        rating: 4.9,
        feedback: 4,
        section: "ingrédients"
    },
    {
        _id: "203",
        image: `${PF}/data/vin-rouge.webp`,
        name: "Vin rouge",
        country: "France",
        price: 30.00,
        weight: "70cl",
        shop: "Epicerie&Co",
        rating: 4.9,
        feedback: 5,
        section: "ingrédients"
    },
    {
        _id: "204",
        image: `${PF}/data/steak-boeuf.webp`,
        name: "Steak de boeuf",
        country: "France",
        price: 5.25,
        weight: "500g",
        shop: "Epicerie&Co",
        rating: 4.9,
        feedback: 2,
        section: "ingrédients"
    }
]

// Recettes
export const recipeItems = [
    {
        _id: "100",
        image: `${PF}/data/blueberry-cheesecake.webp`,
        name: "Cheesecake à la myrtille",
        category: "Desserts",
        price: 15.25,
        rating: 4.7,
        feedback: 124,
        section: "recettes"
    },
    {
        _id: "101",
        image: `${PF}/data/chicken-pizza.webp`,
        name: "Pizza au poulet et champignons",
        category: "Pizza",
        price: 20.00,
        rating: 4.2,
        feedback: 78,
        section: "recettes"
    },
    {
        _id: "102",
        image: `${PF}/data/egg-burger.webp`,
        name: "Burger aux oeufs et emmental",
        category: "Burgers",
        price: 14.00,
        rating: 4.8,
        feedback: 142,
        section: "recettes"
    },
    {
        _id: "103",
        image: `${PF}/data/fish-chips.webp`,
        name: "Fish & Chips",
        category: "Plats chauds",
        price: 16.00,
        rating: 4.5,
        feedback: 201,
        section: "recettes"
    },
    {
        _id: "104",
        image: `${PF}/data/glazed-salmon.webp`,
        name: "Saumon laqué",
        category: "Plats chauds",
        price: 22.00,
        rating: 4.8,
        feedback: 175,
        section: "recettes"
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
        _id: "400",
        image: `${PF}/data/grenade.webp`,
        name: "Grenades",
        country: "France",
        price: 2.25,
        weight: "unité",
        rating: 4.7,
        feedback: 124,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "401",
        image: `${PF}/data/figs.webp`,
        name: "Figues",
        country: "Belgique",
        price: 5.50,
        weight: "250g",
        rating: 4.2,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "402",
        image: `${PF}/data/kiwi.webp`,
        name: "Kiwi",
        country: "France",
        price: 0.90,
        weight: "unité",
        rating: 4.8,
        feedback: 142,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "403",
        image: `${PF}/data/bananas.webp`,
        name: "Bananes",
        country: "Espagne",
        price: 2.20,
        weight: "1kg",
        rating: 4.8,
        feedback: 142,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "404",
        image: `${PF}/data/pineapple.webp`,
        name: "Ananas secs",
        country: "France",
        price: 1.80,
        weight: "100g",
        rating: 4.2,
        feedback: 75,
        shop: "Epicerie&Co",
        section: "ingrédients"
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

  // Nos recommandations :
  export const recommandations = [
    {
        _id: "405",
        image: `${PF}/data/lemons.webp`,
        name: " Citrons jaunes",
        country: "France",
        price: 0.90,
        weight: "unité",
        rating: 4.7,
        feedback: 124,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "406",
        image: `${PF}/data/dattes.webp`,
        name: "Dattes",
        country: "Maroc",
        price: 1.50,
        weight: "50g",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "407",
        image: `${PF}/data/red-apples.webp`,
        name: "Pommes rouges",
        country: "France",
        price: 2.30,
        weight: "1kg",
        rating: 4.5,
        feedback: 113,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "408",
        image: `${PF}/data/quinces.webp`,
        name: "Coings",
        country: "France",
        price: 2.90,
        weight: "1kg",
        rating: 4.8,
        feedback: 275,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "409",
        image: `${PF}/data/green-grapes.webp`,
        name: "Raisin vert",
        country: "France",
        price: 2.20,
        weight: "250g",
        rating: 4.7,
        feedback: 124,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
]

  // Tous nos ingrédients :
  export const allIngredients = [
    {
        _id: "410",
        image: `${PF}/data/almonds.webp`,
        name: "Amandes",
        country: "France",
        price: 2.20,
        weight: "250g",
        rating: 4.2,
        feedback: 95,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "411",
        image: `${PF}/data/pears.webp`,
        name: "Poires",
        country: "France",
        price: 2.20,
        weight: "unité",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "412",
        image: `${PF}/data/red-grapes.webp`,
        name: "Raisin rouge",
        country: "France",
        price: 2.30,
        weight: "250g",
        rating: 4.5,
        feedback: 113,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "413",
        image: `${PF}/data/melons.webp`,
        name: " Melons verts",
        country: "France",
        price: 1.50,
        weight: "unité",
        rating: 4.7,
        feedback: 124,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "414",
        image: `${PF}/data/green-apples.webp`,
        name: "Pommes Granny",
        country: "Maroc",
        price: 2.80,
        weight: "1kg",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "415",
        image: `${PF}/data/oranges.webp`,
        name: "Oranges",
        country: "Espagne",
        price: 1.90,
        weight: "1kg",
        rating: 4.5,
        feedback: 113,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "416",
        image: `${PF}/data/grapefruits.webp`,
        name: "Pamplemousses",
        country: "France",
        price: 0.70,
        weight: "unité",
        rating: 4.7,
        feedback: 124,
        shop: "Epicerie&Co",
        section: "ingrédients"
    }
]

// Page Recettes - "Nos dernières recettes" :
export const latestRecipes = [
    {
        _id: "500",
        image: `${PF}/data/tart.webp`,
        name: "Tarte aux fraises",
        category: "Dessert",
        rating: 4.7,
        feedback: 124,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "501",
        image: `${PF}/data/macarons.webp`,
        name: "Macarons au chocolat",
        category: "Dessert",
        rating: 4.2,
        feedback: 78,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "502",
        image: `${PF}/data/bananes-flambees.webp`,
        name: "Bananes flambées",
        category: "Dessert",
        rating: 4.8,
        feedback: 142,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "503",
        image: `${PF}/data/choux.webp`,
        name: "Choux à la crème",
        category: "Dessert",
        rating: 4.8,
        feedback: 142,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "504",
        image: `${PF}/data/waffles.webp`,
        name: "Gauffres et coulis au chocolat",
        category: "Dessert",
        rating: 4.2,
        feedback: 75, 
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    }
]

// Nos recommandations :
export const recommandationsRecipes = [
    {
        _id: "505",
        image: `${PF}/data/religieuse.webp`,
        name: "Religieuse au café",
        category: "Dessert",
        rating: 4.7,
        feedback: 124,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "506",
        image: `${PF}/data/tiramisu.webp`,
        name: "Tiramisu",
        category: "Dessert",
        rating: 4.2,
        feedback: 78,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "507",
        image: `${PF}/data/eclair-fraises.webp`,
        name: "Eclair aux fraises",
        category: "Dessert",
        rating: 4.8,
        feedback: 142,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "508",
        image: `${PF}/data/far-breton.webp`,
        name: "Far breton",
        category: "Dessert",
        rating: 4.8,
        feedback: 142,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "509",
        image: `${PF}/data/crumble.webp`,
        name: "Crumble aux abricots",
        category: "Dessert",
        rating: 4.2,
        feedback: 75, 
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    }
]

// Toutes nos recettes :
export const allRecipes = [
    {
        _id: "510",
        image: `${PF}/data/beignets.webp`,
        name: "Beignets fourrés à la fraise",
        category: "Dessert",
        rating: 4.7,
        feedback: 124,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "511",
        image: `${PF}/data/brownies.webp`,
        name: "Brownies",
        category: "Dessert",
        rating: 4.2,
        feedback: 78,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "512",
        image: `${PF}/data/crepes.webp`,
        name: "Crêpes",
        category: "Dessert",
        rating: 4.8,
        feedback: 142,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "513",
        image: `${PF}/data/donuts.webp`,
        name: "Donuts",
        category: "Dessert",
        rating: 4.8,
        feedback: 142,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "514",
        image: `${PF}/data/ile-flottante.webp`,
        name: "Île flottante",
        category: "Dessert",
        rating: 4.2,
        feedback: 75,
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    },
    {
        _id: "515",
        image: `${PF}/data/waffles.webp`,
        name: "Gauffres et coulis au chocolat",
        category: "Dessert",
        rating: 4.2,
        feedback: 75, 
        section: "recettes",
        ingredients: [1001, 1002, 1003, 1004]
    }
]

// Ingrédients pour la recette "Tarte aux fraises" :
export const recipeIngredients = [
    {
        _id: "1001",
        recipeId: "500",
        image: `${PF}/data/strawberries.webp`,
        name: "Fraises",
        country: "France",
        price: 4.00,
        weight: "500g",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "1002",
        recipeId: "500",
        image: `${PF}/data/sugar.webp`,
        name: "Sucre blanc",
        country: "France",
        price: 2.00,
        weight: "70g",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "1003",
        recipeId: "500",
        image: `${PF}/data/eggs.webp`,
        name: "Oeufs de poule",
        country: "France",
        price: 2.30,
        weight: "les 8",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients"
    },
    {
        _id: "1004",
        recipeId: "500",
        image: `${PF}/data/butter.webp`,
        name: "Beurre doux",
        country: "France",
        price: 2.50,
        weight: "125g",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients"
    }
]

// Panier :
export const cart = [
    {
        _id: "1001",
        recipeId: "500",
        image: `${PF}/data/strawberries.webp`,
        name: "Fraises",
        country: "France",
        price: 4.00,
        weight: "500g",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients",
        quantity: 2
    },
    {
        _id: "1002",
        recipeId: "500",
        image: `${PF}/data/sugar.webp`,
        name: "Sucre blanc",
        country: "France",
        price: 2.00,
        weight: "70g",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients",
        quantity: 1
    },
    {
        _id: "1003",
        recipeId: "500",
        image: `${PF}/data/eggs.webp`,
        name: "Oeufs de poule",
        country: "France",
        price: 2.30,
        weight: "les 8",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients",
        quantity: 2
    },
    {
        _id: "1004",
        recipeId: "500",
        image: `${PF}/data/butter.webp`,
        name: "Beurre doux",
        country: "France",
        price: 2.50,
        weight: "125g",
        rating: 4.3,
        feedback: 78,
        shop: "Epicerie&Co",
        section: "ingrédients",
        quantity: 3
    },
    {
        _id: "407",
        image: `${PF}/data/red-apples.webp`,
        name: "Pommes rouges",
        country: "France",
        price: 2.30,
        weight: "1kg",
        rating: 4.5,
        feedback: 113,
        shop: "Epicerie&Co",
        section: "ingrédients",
        quantity: 2
    },
    {
        _id: "405",
        image: `${PF}/data/lemons.webp`,
        name: " Citrons jaunes",
        country: "France",
        price: 0.90,
        weight: "unité",
        rating: 4.7,
        feedback: 124,
        shop: "Epicerie&Co",
        section: "ingrédients",
        quantity: 1
    },
    
    
]