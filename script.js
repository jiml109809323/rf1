// Shared interactive behaviour for the Stalls for Good pages.

const seasonalTips = {
  spring: [
    "Sell cupcakes with flowers",
    "Lemonade stand",
    "Decorate with pastel colours",
  ],
  summer: [
    "Ice lollies or cold drinks",
    "Outdoor games",
    "Bright decorations",
  ],
  autumn: [
    "Bake sales (cookies, cakes)",
    "Halloween theme",
    "Warm drinks",
  ],
  winter: [
    "Hot chocolate",
    "Christmas crafts",
    "Festive decorations",
  ],
};

const seasonalRecipes = {
  spring: [
    {
      id: "spring-cupcakes",
      name: "Flower Cupcakes",
      icon: "🧁",
      ingredients: ["100g butter", "100g sugar", "2 eggs", "100g flour"],
      steps: [
        "Mix butter and sugar",
        "Add eggs and mix",
        "Add flour",
        "Pour into cases",
        "Bake at 180°C for 15 mins",
        "Add colourful icing + sprinkles",
      ],
    },
    {
      id: "spring-lemonade",
      name: "Lemonade",
      icon: "🍋",
      ingredients: ["3 lemons", "100g sugar", "Water"],
      steps: ["Squeeze lemons", "Mix with sugar", "Add water", "Stir and chill"],
    },
    {
      id: "spring-fruit-skewers",
      name: "Fruit Skewers",
      icon: "🍓",
      ingredients: ["Strawberries", "Grapes", "Banana"],
      steps: ["Chop fruit", "Stick onto skewers", "Serve fresh"],
    },
    {
      id: "spring-rice-crispy-cakes",
      name: "Rice Crispy Cakes",
      icon: "🍫",
      ingredients: ["Chocolate", "Rice cereal"],
      steps: [
        "Melt chocolate",
        "Mix with cereal",
        "Spoon into cases",
        "Let set",
      ],
    },
    {
      id: "spring-mini-pancake-stacks",
      name: "Mini Pancake Stacks",
      icon: "🥞",
      ingredients: ["Pancake mix", "Syrup"],
      steps: [
        "Make small pancakes",
        "Stack 2-3 together",
        "Add syrup or fruit",
      ],
    },
  ],
  summer: [
    {
      id: "summer-ice-lollies",
      name: "Ice Lollies",
      icon: "🍦",
      ingredients: ["Fruit juice"],
      steps: ["Pour into moulds", "Freeze overnight"],
    },
    {
      id: "summer-fruit-cups",
      name: "Fruit Cups",
      icon: "🍉",
      ingredients: ["Watermelon", "Grapes", "Pineapple"],
      steps: ["Chop fruit", "Put in cups", "Chill"],
    },
    {
      id: "summer-milkshakes",
      name: "Milkshakes",
      icon: "🥤",
      ingredients: ["Milk", "Ice cream"],
      steps: ["Blend together", "Pour and serve"],
    },
    {
      id: "summer-slushies",
      name: "Slushies",
      icon: "🍧",
      ingredients: ["Ice", "Juice"],
      steps: ["Blend ice + juice", "Pour into cups"],
    },
    {
      id: "summer-chocolate-dipped-strawberries",
      name: "Chocolate-Dipped Strawberries",
      icon: "🍫",
      ingredients: ["Strawberries", "Melted chocolate"],
      steps: ["Dip strawberries", "Let them set", "Serve"],
    },
  ],
  autumn: [
    {
      id: "autumn-apple-slices",
      name: "Apple Slices with Toffee",
      icon: "🍎",
      ingredients: ["Apples", "Toffee sauce"],
      steps: ["Slice apples", "Drizzle sauce"],
    },
    {
      id: "autumn-cupcakes",
      name: "Pumpkin / Spiced Cupcakes",
      icon: "🧁",
      ingredients: ["Cupcake mix", "Cinnamon or spice"],
      steps: ["Make cupcakes", "Add spice", "Bake and decorate"],
    },
    {
      id: "autumn-banana-bread-slices",
      name: "Banana Bread Slices",
      icon: "🍞",
      ingredients: ["2 bananas", "100g sugar", "1 egg", "150g flour"],
      steps: [
        "Mash bananas",
        "Mix ingredients",
        "Pour into tin",
        "Bake 30 mins",
        "Slice",
      ],
    },
    {
      id: "autumn-mini-apple-pies",
      name: "Mini Apple Pies",
      icon: "🥧",
      ingredients: ["Pastry", "Apples", "Sugar"],
      steps: [
        "Chop apples",
        "Add sugar",
        "Fill pastry",
        "Bake until golden",
      ],
    },
    {
      id: "autumn-toffee-popcorn",
      name: "Toffee Popcorn",
      icon: "🍯",
      ingredients: ["Popcorn", "Toffee sauce"],
      steps: [
        "Make popcorn",
        "Drizzle toffee sauce",
        "Mix and let it cool",
      ],
    },
  ],
  winter: [
    {
      id: "winter-hot-chocolate",
      name: "Hot Chocolate",
      icon: "☕",
      ingredients: ["Milk", "Cocoa powder", "Sugar"],
      steps: ["Heat milk", "Add cocoa + sugar", "Stir"],
    },
    {
      id: "winter-brownies",
      name: "Brownies",
      icon: "🍫",
      ingredients: [
        "100g chocolate",
        "100g butter",
        "2 eggs",
        "100g sugar",
        "50g flour",
      ],
      steps: [
        "Melt chocolate + butter",
        "Mix in eggs + sugar",
        "Add flour",
        "Bake 20 mins",
      ],
    },
    {
      id: "winter-decorated-donuts",
      name: "Decorated Donuts",
      icon: "🍩",
      ingredients: ["Ready-made donuts", "Icing"],
      steps: ["Add icing", "Add sprinkles"],
    },
    {
      id: "winter-chocolate-bark",
      name: "Chocolate Bark",
      icon: "🍬",
      ingredients: ["Melted chocolate", "Sweets"],
      steps: ["Melt chocolate", "Spread on tray", "Add sweets", "Let it set"],
    },
    {
      id: "winter-marshmallow-skewers",
      name: "Marshmallow Skewers",
      icon: "🍡",
      ingredients: ["Marshmallows", "Chocolate"],
      steps: ["Put marshmallows on sticks", "Drizzle chocolate"],
    },
  ],
};

const charities = [
  {
    name: "RSPCA",
    category: "pets",
    description: "Helps animals in need",
    donateUrl: "https://www.rspca.org.uk/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=rspca.org.uk",
  },
  {
    name: "Dogs on the Streets",
    category: "pets",
    description: "Supports dogs of homeless people",
    donateUrl: "https://dogsonthestreets.org/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=dogsonthestreets.org",
  },
  {
    name: "StreetVet",
    category: "pets",
    description: "Free vet care for pets of homeless people",
    donateUrl: "https://www.streetvet.org.uk/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=streetvet.org.uk",
  },
  {
    name: "The Cinnamon Trust",
    category: "pets",
    description: "Helps older people and their pets",
    donateUrl: "https://cinnamon.org.uk/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=cinnamon.org.uk",
  },
  {
    name: "Crisis",
    category: "homeless",
    description: "Helps people out of homelessness",
    donateUrl: "https://www.crisis.org.uk/get-involved/donate/",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=crisis.org.uk",
  },
  {
    name: "St Mungo’s",
    category: "homeless",
    description: "Supports homeless people across the UK",
    donateUrl: "https://www.mungos.org/donate/",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=mungos.org",
  },
  {
    name: "Centrepoint",
    category: "homeless",
    description: "Helps young homeless people",
    donateUrl: "https://centrepoint.org.uk/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=centrepoint.org.uk",
  },
  {
    name: "Barnardo’s",
    category: "children",
    description: "Supports vulnerable children",
    donateUrl: "https://www.barnardos.org.uk/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=barnardos.org.uk",
  },
  {
    name: "Action for Children",
    category: "children",
    description: "Helps children and families",
    donateUrl: "https://www.actionforchildren.org.uk/donate/",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=actionforchildren.org.uk",
  },
  {
    name: "Great Ormond Street Hospital Charity",
    category: "children",
    description: "Supports children's hospital care",
    donateUrl: "https://www.gosh.org/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=gosh.org",
  },
  {
    name: "The Childhood Trust",
    category: "children",
    description: "Helps children in poverty",
    donateUrl: "https://www.childhoodtrust.org.uk/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=childhoodtrust.org.uk",
  },
  {
    name: "KidsOut",
    category: "children",
    description: "Gives fun experiences to disadvantaged kids",
    donateUrl: "https://www.kidsout.org.uk/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=kidsout.org.uk",
  },
  {
    name: "Guide Dogs",
    category: "blind",
    description: "Provides guide dogs",
    donateUrl: "https://www.guidedogs.org.uk/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=guidedogs.org.uk",
  },
  {
    name: "RNIB",
    category: "blind",
    description: "Supports blind people",
    donateUrl: "https://www.rnib.org.uk/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=rnib.org.uk",
  },
  {
    name: "Blind Veterans UK",
    category: "blind",
    description: "Helps blind veterans",
    donateUrl: "https://www.blindveterans.org.uk/support-us/donate",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=blindveterans.org.uk",
  },
];

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function setupSeasonButtons() {
  const seasonButtons = document.querySelectorAll(".season-button");
  const panel = document.querySelector("#season-tip-panel");
  const recipeGrid = document.querySelector("#recipe-grid");
  const recipeDetailPanel = document.querySelector("#recipe-detail-panel");

  if (!seasonButtons.length || !panel) {
    return;
  }

  let activeSeason = "spring";
  let activeRecipeId = seasonalRecipes.spring[0].id;

  function renderRecipeDetail(seasonKey, recipeId) {
    if (!recipeDetailPanel) {
      return;
    }

    const selectedRecipe = seasonalRecipes[seasonKey].find(
      (recipe) => recipe.id === recipeId,
    );

    recipeDetailPanel.innerHTML = `
      <div class="recipe-detail-header">
        <span class="recipe-detail-icon">${selectedRecipe.icon}</span>
        <div>
          <p class="recipe-detail-season">${titleCase(seasonKey)} recipe</p>
          <h3>${selectedRecipe.name}</h3>
        </div>
      </div>

      <div class="recipe-detail-columns">
        <section class="recipe-detail-block">
          <h4>Ingredients</h4>
          <ul class="recipe-list">
            ${selectedRecipe.ingredients.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section class="recipe-detail-block">
          <h4>Steps</h4>
          <ol class="recipe-list recipe-steps">
            ${selectedRecipe.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </section>
      </div>
    `;
  }

  function renderRecipeButtons(seasonKey) {
    if (!recipeGrid) {
      return;
    }

    recipeGrid.innerHTML = seasonalRecipes[seasonKey]
      .map(
        (recipe) => `
          <button
            class="recipe-card ${recipe.id === activeRecipeId ? "is-selected" : ""}"
            type="button"
            data-recipe-id="${recipe.id}"
          >
            <div class="recipe-icon">${recipe.icon}</div>
            <h3>${recipe.name}</h3>
          </button>
        `,
      )
      .join("");

    const recipeButtons = recipeGrid.querySelectorAll(".recipe-card");
    recipeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeRecipeId = button.dataset.recipeId;
        renderRecipeButtons(activeSeason);
        renderRecipeDetail(activeSeason, activeRecipeId);
      });
    });
  }

  function renderSeason(seasonKey) {
    const tips = seasonalTips[seasonKey];
    activeSeason = seasonKey;
    activeRecipeId = seasonalRecipes[seasonKey][0].id;

    panel.innerHTML = `
      <h3 class="tips-title">${titleCase(seasonKey)} Ideas</h3>
      <ul class="tips-list">
        ${tips.map((tip) => `<li>${tip}</li>`).join("")}
      </ul>
    `;

    renderRecipeButtons(seasonKey);
    renderRecipeDetail(seasonKey, activeRecipeId);
  }

  seasonButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedSeason = button.dataset.season;

      seasonButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderSeason(selectedSeason);
    });
  });

  renderSeason(activeSeason);
}

function createCharityCard(charity) {
  return `
    <article class="charity-card">
      <span class="charity-badge">${titleCase(charity.category)}</span>
      <div class="charity-heading">
        <span class="charity-logo-wrap">
          <img
            class="charity-logo"
            src="${charity.logoUrl}"
            alt="${charity.name} logo"
            loading="lazy"
          />
        </span>
        <h3>${charity.name}</h3>
      </div>
      <p>${charity.description}</p>
      <a
        class="donate-link"
        href="${charity.donateUrl}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </a>
    </article>
  `;
}

function setupCharityFilters() {
  const searchInput = document.querySelector("#charity-search");
  const filterButtons = document.querySelectorAll(".filter-button");
  const charityGrid = document.querySelector("#charity-grid");
  const emptyState = document.querySelector("#empty-state");

  if (!searchInput || !filterButtons.length || !charityGrid || !emptyState) {
    return;
  }

  let activeCategory = "all";

  function renderCharities() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredCharities = charities.filter((charity) => {
      const matchesCategory =
        activeCategory === "all" || charity.category === activeCategory;
      const matchesSearch =
        charity.name.toLowerCase().includes(searchTerm) ||
        charity.description.toLowerCase().includes(searchTerm) ||
        charity.category.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });

    charityGrid.innerHTML = filteredCharities
      .map((charity) => createCharityCard(charity))
      .join("");

    emptyState.style.display = filteredCharities.length ? "none" : "block";
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;

      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderCharities();
    });
  });

  searchInput.addEventListener("input", renderCharities);

  renderCharities();
}

setupSeasonButtons();
setupCharityFilters();
