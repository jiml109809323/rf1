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

const stallIdeaGuides = {
  "bake-sale": {
    label: "Bake Sale",
    title: "How to make a bake sale",
    icon: "🧁",
    intro:
      "Bake sales are brilliant because people can see the treats straight away and choose what they like.",
    supplies: [
      "A table and bright tablecloth",
      "Cakes, biscuits, fruit cups, or lemonade",
      "Cake cases, napkins, and tongs",
      "Price labels and a donation jar",
    ],
    steps: [
      "Choose 2 or 3 simple recipes and bake with a grown-up.",
      "Write labels for the treats, including any common allergens.",
      "Arrange everything in rows so it looks colourful and easy to choose from.",
      "Put your charity sign and donation jar where people can see them.",
      "Smile, say thank you, and count the donations with a grown-up afterwards.",
    ],
    tip: "Mini cupcakes and cookies are easy to price because each person can buy one or two.",
  },
  "craft-stall": {
    label: "Craft Stall",
    title: "How to make a craft stall",
    icon: "🎨",
    intro:
      "Craft stalls are great when you want to make things in advance and sell small handmade treasures.",
    supplies: [
      "Friendship bracelets, bookmarks, badges, cards, or painted stones",
      "Small baskets, trays, or boxes for display",
      "Card for price labels",
      "Pens, stickers, ribbon, and a donation jar",
    ],
    steps: [
      "Pick 1 or 2 crafts that are quick, neat, and fun to repeat.",
      "Make a small collection before the stall day so the table looks full.",
      "Group similar colours or designs together in trays or little piles.",
      "Add simple prices, such as 50p, £1, or pay-what-you-can.",
      "Offer to write names on cards or bookmarks if a grown-up says it is okay.",
    ],
    tip: "A tiny 'custom orders' sign can be fun if you have time to make bracelets or cards while people wait.",
  },
  "toy-sale": {
    label: "Toy Sale",
    title: "How to make a toy sale",
    icon: "🧸",
    intro:
      "Toy sales help toys, books, and puzzles find new homes while raising money for a good cause.",
    supplies: [
      "Clean toys, books, puzzles, or games you are ready to pass on",
      "Boxes or blankets for sorting",
      "Sticky labels or tags",
      "A charity sign and donation jar",
    ],
    steps: [
      "Ask a grown-up before choosing which toys can be sold.",
      "Check everything is clean, safe, and has all the important pieces.",
      "Sort items into groups like books, cuddly toys, puzzles, and games.",
      "Put easy prices on labels, or make a 'choose a donation' box.",
      "At the end, tidy unsold items into a box to keep, donate, or try another day.",
    ],
    tip: "Bundle small toys together in little sets so they feel extra special.",
  },
  "games-stall": {
    label: "Games Stall",
    title: "How to make a games stall",
    icon: "🎮",
    intro:
      "Games stalls are perfect for fairs and garden events because people can pay a small donation to have a go.",
    supplies: [
      "A simple game like lucky dip, hoop toss, tin-can alley, or hook-a-duck",
      "Small prizes or stickers",
      "A clear rules sign",
      "A donation jar or box",
    ],
    steps: [
      "Choose one game that is easy to explain in one sentence.",
      "Test it a few times so it feels fair and not too hard.",
      "Write the rules and suggested donation on a bright sign.",
      "Set up a safe playing space with enough room for people to stand back.",
      "Give everyone a cheer, whether they win a prize or just have fun.",
    ],
    tip: "Use three tries per turn. It keeps the queue moving and makes the game feel fair.",
  },
};

const stallTypeWorkshops = {
  "bake-sale": {
    mode: "seasonal",
    heading: "Bake Sale Recipe Ideas",
    intro:
      "Choose a season, then click a recipe icon to load the full recipe below.",
  },
  "craft-stall": {
    mode: "projects",
    heading: "Craft Things You Can Build",
    intro:
      "Pick a craft project to see what you need and how to make it for your stall.",
    items: [
      {
        id: "friendship-bracelets",
        name: "Friendship Bracelets",
        icon: "🧵",
        label: "Popular craft",
        intro: "Colourful bracelets are small, fun to make, and easy to display in bundles.",
        supplies: [
          "Embroidery thread or elastic cord",
          "Letter beads or colourful beads",
          "Scissors",
          "Small bags or card tags",
        ],
        steps: [
          "Choose 3 or 4 thread colours that look cheerful together.",
          "Cut the thread to a bracelet length with extra room for tying.",
          "Plait, knot, or bead the bracelet pattern.",
          "Tie the ends securely and trim any loose thread.",
          "Display bracelets by colour or size with a simple price label.",
        ],
        tip: "Make a few matching best-friend pairs so people can buy two together.",
      },
      {
        id: "bookmarks",
        name: "Kindness Bookmarks",
        icon: "🔖",
        label: "Paper craft",
        intro: "Bookmarks are quick to make and work well for book lovers, teachers, and family.",
        supplies: [
          "Coloured card",
          "Pens, stickers, or stamps",
          "Ribbon or wool",
          "Hole punch",
        ],
        steps: [
          "Cut card into bookmark strips.",
          "Write a cheerful message or draw a tiny picture.",
          "Decorate with stickers, stamps, or patterned edges.",
          "Punch a hole at the top and tie on ribbon.",
          "Bundle them in sets or sell them one at a time.",
        ],
        tip: "Messages like 'You are kind' or 'Keep going' make them feel special.",
      },
      {
        id: "painted-stones",
        name: "Painted Stones",
        icon: "🎨",
        label: "Decor craft",
        intro: "Painted stones can become tiny animals, hearts, flowers, or lucky charms.",
        supplies: [
          "Smooth clean stones",
          "Acrylic paint or paint pens",
          "Newspaper for the table",
          "Optional clear sealant with grown-up help",
        ],
        steps: [
          "Wash and dry the stones first.",
          "Paint a base colour and let it dry.",
          "Add faces, flowers, hearts, patterns, or names.",
          "Let every stone dry completely.",
          "Place them in a tray with a sign like 'Pick a lucky stone'.",
        ],
        tip: "Tiny faces and hearts are usually the quickest designs to repeat.",
      },
      {
        id: "greeting-cards",
        name: "Handmade Cards",
        icon: "💌",
        label: "Gift craft",
        intro: "Cards are lovely because people can buy them for birthdays, thank-yous, or just because.",
        supplies: [
          "Blank cards or folded card",
          "Scrap paper, stickers, or washi tape",
          "Glue stick",
          "Pens",
        ],
        steps: [
          "Fold card neatly or use blank card bases.",
          "Create simple designs like balloons, flowers, stars, or hearts.",
          "Add a short message on the front.",
          "Leave the inside blank so the buyer can write their own note.",
          "Group cards by theme with a clear price.",
        ],
        tip: "Make a few 'thank you' cards because they fit the charity theme beautifully.",
      },
    ],
  },
  "toy-sale": {
    mode: "projects",
    heading: "Toy Sale Setups",
    intro:
      "Choose a toy-sale setup to see how to sort, label, and display things clearly.",
    items: [
      {
        id: "book-box",
        name: "Book Box",
        icon: "📚",
        label: "Easy setup",
        intro: "A book box is a simple way to sell picture books, chapter books, and comics.",
        supplies: [
          "A sturdy box or crate",
          "Clean books",
          "Card for category labels",
          "A simple price sign",
        ],
        steps: [
          "Check books are clean and have no missing pages.",
          "Sort them into picture books, chapter books, and comics.",
          "Stand a few favourites upright at the front.",
          "Add labels so people can browse quickly.",
          "Offer a small bundle price for two or three books.",
        ],
        tip: "Put the most colourful covers facing forward to catch people's eye.",
      },
      {
        id: "teddy-adoption",
        name: "Teddy Adoption",
        icon: "🧸",
        label: "Cute idea",
        intro: "A teddy adoption table gives soft toys a fun story and a new home.",
        supplies: [
          "Clean soft toys",
          "Name tags",
          "A basket or blanket",
          "Optional adoption certificates",
        ],
        steps: [
          "Choose clean soft toys in good condition.",
          "Give each toy a name tag.",
          "Place them sitting up on a blanket or in a basket.",
          "Write a sign saying 'Adopt a teddy for charity'.",
          "Offer a certificate or tiny card with each adopted teddy.",
        ],
        tip: "Naming the teddies makes people smile and helps them choose.",
      },
      {
        id: "puzzle-table",
        name: "Puzzle & Game Table",
        icon: "🧩",
        label: "Family table",
        intro: "Puzzles and games need a little checking, but they can be great stall items.",
        supplies: [
          "Puzzles, board games, or card games",
          "Sticky notes",
          "Rubber bands or bags for loose pieces",
          "A display table",
        ],
        steps: [
          "Check important pieces are included before the stall.",
          "Tape or bag loose pieces so nothing falls out.",
          "Add a note if something is nearly complete but missing a piece.",
          "Group games by age or type.",
          "Put the clearest boxes at the front of the table.",
        ],
        tip: "Honest labels help people trust the stall.",
      },
      {
        id: "pocket-money-basket",
        name: "Pocket Money Basket",
        icon: "🧺",
        label: "Quick buys",
        intro: "A pocket money basket is perfect for tiny toys, figures, cars, and little surprises.",
        supplies: [
          "Small toys",
          "A basket or shallow box",
          "A price sign",
          "Small paper bags",
        ],
        steps: [
          "Choose small toys that are clean and safe.",
          "Put similar toys into little groups.",
          "Use one simple price for the whole basket.",
          "Keep the basket near the front so children can browse.",
          "Offer a paper bag when someone chooses more than one item.",
        ],
        tip: "One clear price is easier than lots of tiny labels.",
      },
    ],
  },
  "games-stall": {
    mode: "projects",
    heading: "Games You Can Run",
    intro:
      "Pick a game to see the setup, rules, and tips for keeping it fun and fair.",
    items: [
      {
        id: "lucky-dip",
        name: "Lucky Dip",
        icon: "🎁",
        label: "Easy game",
        intro: "Lucky dip is quick to set up and exciting because every turn is a surprise.",
        supplies: [
          "A box, basket, or bucket",
          "Tissue paper or shredded paper",
          "Small wrapped prizes",
          "A rules and donation sign",
        ],
        steps: [
          "Wrap small prizes or place them in paper bags.",
          "Fill a box with tissue paper so prizes are hidden.",
          "Write a sign with the donation amount per turn.",
          "Let each person pick one prize without looking.",
          "Refill the box as prizes run low.",
        ],
        tip: "Have a few extra tiny prizes ready so the game does not run out too quickly.",
      },
      {
        id: "tin-can-alley",
        name: "Tin Can Alley",
        icon: "🥫",
        label: "Challenge game",
        intro: "Tin-can alley is brilliant for a stall because it is visual and noisy in a fun way.",
        supplies: [
          "Clean empty cans or plastic cups",
          "A soft ball or beanbag",
          "A table or low box",
          "A safe throwing line",
        ],
        steps: [
          "Stack cans or cups in a pyramid.",
          "Mark a throwing line with tape or chalk.",
          "Give each player three throws.",
          "Reset the cans after each turn.",
          "Award a sticker or small prize for knocking down enough cans.",
        ],
        tip: "Use a soft ball and keep the throwing space clear.",
      },
      {
        id: "hoop-toss",
        name: "Hoop Toss",
        icon: "⭕",
        label: "Outdoor game",
        intro: "Hoop toss works well outside and can be made easier or harder by moving the line.",
        supplies: [
          "Hoops or rope rings",
          "Bottles, cones, or pegs",
          "A marker for the throw line",
          "A score sign",
        ],
        steps: [
          "Set bottles or cones in a row.",
          "Mark where players should stand.",
          "Give each player three hoops.",
          "Count how many hoops land over a target.",
          "Move the line closer for younger players if needed.",
        ],
        tip: "Different coloured targets can be worth different points.",
      },
      {
        id: "guess-the-jar",
        name: "Guess the Jar",
        icon: "🫙",
        label: "Quiet game",
        intro: "Guess the jar is great when you want a simple game that can run all day.",
        supplies: [
          "A clear jar",
          "Sweets, buttons, beads, or counters",
          "Guess slips and pencils",
          "A box for entries",
        ],
        steps: [
          "Fill the jar and secretly count the items with a grown-up.",
          "Put the jar where people can see it but not open it.",
          "Ask people to write their name and guess on a slip.",
          "Collect guesses through the day.",
          "At the end, announce the closest guess and give a small prize.",
        ],
        tip: "Use wrapped sweets if the prize will be eaten later.",
      },
    ],
  },
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
    name: "Shelter",
    category: "homeless",
    description: "Supports people facing bad housing and homelessness",
    donateUrl: "https://england.shelter.org.uk/donate/shelter_and_nationwide",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=england.shelter.org.uk",
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
    logoUrl: "https://www.guidedogs.org.uk/favicon.ico",
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
    logoUrl:
      "https://app-bvuk-web-umbraco-prod-uks.azurewebsites.net/media/31likd2e/bvuk-logo-strapline-colour-rgb-light-bkgrnd.jpg?&quality=90&width=1200&height=630&ranchor=center&rmode=crop",
  },
  {
    name: "Cancer Research UK",
    category: "health",
    description: "Funds research to help beat cancer",
    donateUrl: "https://www.cancerresearchuk.org/get-involved/donate/choose-how-you-support",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=cancerresearchuk.org",
  },
];

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function setupStallIdeaGuides() {
  const ideaGrid = document.querySelector("#idea-grid");
  const ideaCards = document.querySelectorAll(".idea-card[data-idea-id]");
  const ideaDetailPanel = document.querySelector("#idea-detail-panel");
  const workshopPanel = document.querySelector("#idea-workshop-section");

  if (!ideaGrid || !ideaCards.length || !ideaDetailPanel || !workshopPanel) {
    return;
  }

  function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
  }

  function renderProjectDetail(item) {
    const detailPanel = workshopPanel.querySelector("#workshop-detail-panel");

    if (!detailPanel) {
      return;
    }

    workshopPanel.querySelectorAll(".workshop-card").forEach((card) => {
      const isSelected = card.dataset.workshopItemId === item.id;
      card.classList.toggle("is-selected", isSelected);
      card.setAttribute("aria-pressed", String(isSelected));
    });

    detailPanel.innerHTML = `
      <div class="recipe-detail-header">
        <span class="recipe-detail-icon">${item.icon}</span>
        <div>
          <p class="recipe-detail-season">${item.label}</p>
          <h3>${item.name}</h3>
          <p class="idea-detail-intro">${item.intro}</p>
        </div>
      </div>

      <div class="recipe-detail-columns">
        <section class="recipe-detail-block">
          <h4>What you need</h4>
          <ul class="recipe-list">
            ${renderList(item.supplies)}
          </ul>
        </section>

        <section class="recipe-detail-block">
          <h4>How to make it</h4>
          <ol class="recipe-list recipe-steps">
            ${renderList(item.steps)}
          </ol>
        </section>
      </div>

      <p class="idea-detail-tip"><strong>Helpful tip:</strong> ${item.tip}</p>
    `;
  }

  function renderProjectWorkshop(workshop) {
    workshopPanel.innerHTML = `
      <h2>${workshop.heading}</h2>
      <p class="panel-intro">${workshop.intro}</p>

      <div class="activity-grid" id="workshop-grid">
        ${workshop.items
          .map(
            (item, index) => `
              <button
                class="recipe-card workshop-card ${index === 0 ? "is-selected" : ""}"
                type="button"
                data-workshop-item-id="${item.id}"
                aria-pressed="${index === 0 ? "true" : "false"}"
              >
                <div class="recipe-icon">${item.icon}</div>
                <span class="idea-tag">${item.label}</span>
                <h3>${item.name}</h3>
              </button>
            `,
          )
          .join("")}
      </div>

      <div class="recipe-detail-panel activity-detail-panel" id="workshop-detail-panel">
        <!-- Selected workshop details are added by JavaScript -->
      </div>
    `;

    const workshopGrid = workshopPanel.querySelector("#workshop-grid");

    workshopGrid.addEventListener("click", (event) => {
      const button = event.target.closest(".workshop-card[data-workshop-item-id]");

      if (!button) {
        return;
      }

      const selectedItem = workshop.items.find(
        (item) => item.id === button.dataset.workshopItemId,
      );

      if (selectedItem) {
        renderProjectDetail(selectedItem);
      }
    });

    renderProjectDetail(workshop.items[0]);
  }

  function renderBakeRecipeDetail(seasonKey, recipeId) {
    const recipeDetailPanel = workshopPanel.querySelector("#recipe-detail-panel");

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
            ${renderList(selectedRecipe.ingredients)}
          </ul>
        </section>

        <section class="recipe-detail-block">
          <h4>Steps</h4>
          <ol class="recipe-list recipe-steps">
            ${renderList(selectedRecipe.steps)}
          </ol>
        </section>
      </div>
    `;
  }

  function renderBakeWorkshop(workshop) {
    let activeSeason = "spring";
    let activeRecipeId = seasonalRecipes.spring[0].id;

    function renderSeason(seasonKey) {
      const recipeGrid = workshopPanel.querySelector("#recipe-grid");
      const tips = seasonalTips[seasonKey];
      activeSeason = seasonKey;
      activeRecipeId = seasonalRecipes[seasonKey][0].id;

      workshopPanel.querySelectorAll(".season-button").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.season === seasonKey);
      });

      workshopPanel.querySelector("#season-tip-panel").innerHTML = `
        <h3 class="tips-title">${titleCase(seasonKey)} Bake Sale Ideas</h3>
        <ul class="tips-list">
          ${renderList(tips)}
        </ul>
      `;

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

      renderBakeRecipeDetail(activeSeason, activeRecipeId);
    }

    workshopPanel.innerHTML = `
      <section class="workshop-block">
        <h2>When will your bake sale be?</h2>
        <p class="panel-intro">
          Click a season to discover decorating ideas, food ideas, and fun ways
          to make your bake sale shine.
        </p>

        <div class="season-buttons" aria-label="Bake sale season selector">
          <button class="season-button is-active" data-season="spring" type="button">Spring</button>
          <button class="season-button" data-season="summer" type="button">Summer</button>
          <button class="season-button" data-season="autumn" type="button">Autumn</button>
          <button class="season-button" data-season="winter" type="button">Winter</button>
        </div>

        <div class="season-tip-panel" id="season-tip-panel"></div>
      </section>

      <section class="workshop-block workshop-block-spaced">
        <h2>${workshop.heading}</h2>
        <p class="panel-intro">${workshop.intro}</p>

        <div class="recipe-grid" id="recipe-grid"></div>

        <div class="recipe-detail-panel" id="recipe-detail-panel">
          <!-- The selected recipe details are added by JavaScript -->
        </div>
      </section>
    `;

    workshopPanel.querySelectorAll(".season-button").forEach((button) => {
      button.addEventListener("click", () => {
        renderSeason(button.dataset.season);
      });
    });

    workshopPanel.querySelector("#recipe-grid").addEventListener("click", (event) => {
      const recipeButton = event.target.closest(".recipe-card[data-recipe-id]");

      if (!recipeButton) {
        return;
      }

      activeRecipeId = recipeButton.dataset.recipeId;
      workshopPanel.querySelectorAll(".recipe-card").forEach((button) => {
        button.classList.toggle(
          "is-selected",
          button.dataset.recipeId === activeRecipeId,
        );
      });
      renderBakeRecipeDetail(activeSeason, activeRecipeId);
    });

    renderSeason(activeSeason);
  }

  function renderWorkshop(ideaId) {
    const workshop = stallTypeWorkshops[ideaId];

    if (!workshop) {
      return;
    }

    if (workshop.mode === "seasonal") {
      renderBakeWorkshop(workshop);
      return;
    }

    renderProjectWorkshop(workshop);
  }

  function renderIdeaGuide(ideaId) {
    const guide = stallIdeaGuides[ideaId];

    if (!guide) {
      return;
    }

    ideaCards.forEach((card) => {
      const isSelected = card.dataset.ideaId === ideaId;
      card.classList.toggle("is-selected", isSelected);
      card.setAttribute("aria-pressed", String(isSelected));
    });

    ideaDetailPanel.innerHTML = `
      <div class="recipe-detail-header">
        <span class="recipe-detail-icon">${guide.icon}</span>
        <div>
          <p class="recipe-detail-season">${guide.label}</p>
          <h3>${guide.title}</h3>
          <p class="idea-detail-intro">${guide.intro}</p>
        </div>
      </div>

      <div class="recipe-detail-columns">
        <section class="recipe-detail-block">
          <h4>What you need</h4>
          <ul class="recipe-list">
            ${guide.supplies.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section class="recipe-detail-block">
          <h4>How to make it</h4>
          <ol class="recipe-list recipe-steps">
            ${guide.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </section>
      </div>

      <p class="idea-detail-tip"><strong>Helpful tip:</strong> ${guide.tip}</p>
    `;

    renderWorkshop(ideaId);
  }

  ideaGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".idea-card[data-idea-id]");

    if (!card) {
      return;
    }

    renderIdeaGuide(card.dataset.ideaId);
  });

  renderIdeaGuide(ideaCards[0].dataset.ideaId);
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

function setupGalleryPreview() {
  const fileInput = document.querySelector("#gallery-photo");
  const previewCard = document.querySelector("#preview-card");
  const form = document.querySelector("#gallery-form");
  const status = document.querySelector("#gallery-status");
  const approvedGrid = document.querySelector("#approved-gallery-grid");
  const pendingGrid = document.querySelector("#pending-gallery-grid");
  const adminPasswordInput = document.querySelector("#admin-password");
  const loadPendingButton = document.querySelector("#load-pending-button");
  const adminStatus = document.querySelector("#admin-status");
  const publicGallerySection = document.querySelector("#public-gallery-section");
  const adminReviewPanel = document.querySelector("#admin-review-panel");
  const isAdminPage = Boolean(adminPasswordInput && adminStatus && !publicGallerySection);

  const hasPublicGallery = Boolean(fileInput && previewCard && form && status);

  if (!hasPublicGallery && !pendingGrid && !approvedGrid) {
    return;
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, (character) => {
      const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };

      return map[character];
    });
  }

  function galleryCardTemplate(item, actions = "") {
    return `
      <article class="gallery-item">
        <img class="gallery-image" src="${item.imageUrl}" alt="${escapeHtml(item.stallTitle)}" />
        <div class="gallery-item-copy">
          <h3>${escapeHtml(item.stallTitle)}</h3>
          <p class="gallery-byline">By ${escapeHtml(item.submitterName)}</p>
          <p>${escapeHtml(item.stallStory || "")}</p>
          ${actions}
        </div>
      </article>
    `;
  }

  function setGridPlaceholder(grid, message) {
    if (!grid) {
      return;
    }

    grid.innerHTML = `
      <article class="gallery-item gallery-item-placeholder">
        <div class="gallery-image-placeholder">${message}</div>
      </article>
    `;
  }

  async function loadApprovedGallery() {
    if (!approvedGrid) {
      return;
    }

    try {
      const response = await fetch("/api/gallery-items");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not load approved photos.");
      }

      if (!data.items.length) {
        if (publicGallerySection) {
          publicGallerySection.style.display = "none";
        } else {
          setGridPlaceholder(approvedGrid, "Approved photos will appear here after they go live");
        }
        return;
      }

      if (publicGallerySection) {
        publicGallerySection.style.display = "";
      }

      approvedGrid.innerHTML = data.items.map((item) => galleryCardTemplate(item)).join("");
    } catch (error) {
      if (publicGallerySection) {
        publicGallerySection.style.display = "none";
      } else {
        setGridPlaceholder(approvedGrid, error.message);
      }
    }
  }

  async function loadPendingGallery() {
    if (!pendingGrid || !adminPasswordInput || !adminStatus) {
      return;
    }

    const password = adminPasswordInput.value.trim();
    if (!password) {
      adminStatus.textContent = "Enter the admin password first.";
      return;
    }

    adminStatus.textContent = "Loading pending photos...";
    if (adminReviewPanel) {
      adminReviewPanel.hidden = false;
    }

    try {
      const response = await fetch("/api/gallery-items?mode=pending", {
        headers: {
          "x-gallery-admin-password": password,
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not load pending photos.");
      }

      if (!data.items.length) {
        setGridPlaceholder(
          pendingGrid,
          "There are no pending photos waiting for review right now.",
        );
        adminStatus.textContent = "No pending photos right now.";
        return;
      }

      pendingGrid.innerHTML = data.items
        .map(
          (item) =>
            galleryCardTemplate(
              item,
              `
                <div class="admin-actions">
                  <button class="button button-primary admin-action" data-action="approve" data-id="${item.id}" type="button">Approve</button>
                  <button class="button button-secondary admin-action" data-action="reject" data-id="${item.id}" type="button">Reject</button>
                </div>
              `,
            ),
        )
        .join("");

      adminStatus.textContent = "Pending photos loaded.";
    } catch (error) {
      adminStatus.textContent = error.message;
      setGridPlaceholder(
        pendingGrid,
        "Pending photos will appear here after you load them",
      );
    }
  }

  async function updatePendingItem(action, id) {
    if (!adminPasswordInput || !adminStatus) {
      return;
    }

    const password = adminPasswordInput.value.trim();
    const endpoint =
      action === "approve" ? "/api/gallery-approve" : "/api/gallery-reject";

    adminStatus.textContent =
      action === "approve" ? "Approving photo..." : "Rejecting photo...";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-gallery-admin-password": password,
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not update this photo.");
      }

      adminStatus.textContent =
        action === "approve" ? "Photo approved." : "Photo rejected.";
      await loadPendingGallery();
      if (isAdminPage) {
        document.dispatchEvent(new CustomEvent("refresh-approved-admin"));
      } else {
        await loadApprovedGallery();
      }
    } catch (error) {
      adminStatus.textContent = error.message;
    }
  }

  async function deleteApprovedItem(id) {
    if (!adminPasswordInput || !adminStatus) {
      return;
    }

    const password = adminPasswordInput.value.trim();
    adminStatus.textContent = "Deleting approved photo...";

    try {
      const response = await fetch("/api/gallery-delete-approved", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-gallery-admin-password": password,
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not delete this approved photo.");
      }

      adminStatus.textContent = "Approved photo deleted.";
      if (isAdminPage) {
        document.dispatchEvent(new CustomEvent("refresh-approved-admin"));
      } else {
        await loadApprovedGallery();
      }
    } catch (error) {
      adminStatus.textContent = error.message;
    }
  }

  if (hasPublicGallery) {
    fileInput.addEventListener("change", () => {
      const [file] = fileInput.files || [];

      if (!file) {
        previewCard.innerHTML = `
          <div class="preview-placeholder">
            Pick a photo to preview it here before sending it for review.
          </div>
        `;
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      previewCard.innerHTML = `
        <img class="preview-image" src="${previewUrl}" alt="Preview of uploaded stall photo" />
      `;
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      status.textContent = "Sending your photo for review...";

      fetch("/api/gallery-upload", {
        method: "PUT",
        body: formData,
      })
        .then(async (response) => {
          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || "Could not upload your photo.");
          }

          form.reset();
          previewCard.innerHTML = `
            <div class="preview-placeholder">
              Your photo was sent for review. It will appear in the gallery once approved.
            </div>
          `;
          status.textContent = data.message;
        })
        .catch((error) => {
          status.textContent = error.message;
        });
    });
  }

  if (loadPendingButton) {
    loadPendingButton.addEventListener("click", async () => {
      await loadPendingGallery();
      if (isAdminPage) {
        const approvedRefreshEvent = new CustomEvent("refresh-approved-admin");
        document.dispatchEvent(approvedRefreshEvent);
      }
    });
  }

  if (pendingGrid) {
    pendingGrid.addEventListener("click", (event) => {
      const button = event.target.closest(".admin-action");
      if (!button) {
        return;
      }

      updatePendingItem(button.dataset.action, button.dataset.id);
    });
  }

  if (isAdminPage) {
    async function loadApprovedForAdmin() {
      try {
        const response = await fetch("/api/gallery-items");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Could not load approved photos.");
        }

        if (!data.items.length) {
          setGridPlaceholder(
            approvedGrid,
            "Approved photos will appear here after they go live",
          );
          return;
        }

        approvedGrid.innerHTML = data.items
          .map(
            (item) =>
              galleryCardTemplate(
                item,
                `
                  <div class="admin-actions">
                    <button class="button button-secondary approved-delete-action" data-id="${item.id}" type="button">Delete</button>
                  </div>
                `,
              ),
          )
          .join("");
      } catch (error) {
        setGridPlaceholder(approvedGrid, error.message);
      }
    }

    document.addEventListener("refresh-approved-admin", loadApprovedForAdmin);

    approvedGrid.addEventListener("click", (event) => {
      const button = event.target.closest(".approved-delete-action");
      if (!button) {
        return;
      }

      deleteApprovedItem(button.dataset.id);
    });

    loadApprovedForAdmin();
  }

  if (approvedGrid && !isAdminPage) {
    loadApprovedGallery();
  }
}

setupStallIdeaGuides();
setupSeasonButtons();
setupCharityFilters();
setupGalleryPreview();
