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

  if (!seasonButtons.length || !panel) {
    return;
  }

  seasonButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedSeason = button.dataset.season;
      const tips = seasonalTips[selectedSeason];

      seasonButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      panel.innerHTML = `
        <h3 class="tips-title">${titleCase(selectedSeason)} Ideas</h3>
        <ul class="tips-list">
          ${tips.map((tip) => `<li>${tip}</li>`).join("")}
        </ul>
      `;
    });
  });
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
      <p class="charity-meta">Category: ${titleCase(charity.category)}</p>
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
