/**
 * ============================================================
 *  LIBRARY DATA
 * ============================================================
 *  This is the ONLY file you need to touch to add, remove, or
 *  edit items in the library. The rest of the app (script.js)
 *  reads this array and builds the entire page automatically.
 *
 *  HOW TO ADD A NEW ITEM:
 *    1. Copy a cover image into the "covers/" folder.
 *       Recommended size: 600x900px (2:3 portrait ratio),
 *       .jpg or .png, keeps the grid looking consistent.
 *    2. Add a new object to the "items" array below, following
 *       the same shape as the existing entries.
 *    3. Save the file and refresh index.html. That's it —
 *       no HTML editing required.
 *
 *  FIELDS:
 *    title      (string, required) - Name shown under the cover.
 *    image      (string, required) - Path to the cover image,
 *                                     relative to index.html.
 *    url        (string, required) - Link opened in a new tab
 *                                     when the cover is clicked.
 *    category   (string, optional) - Shown as a small tag/used
 *                                     for future filtering. Free text.
 *    tags       (array,  optional) - Extra keywords included in
 *                                     the search filter (e.g. degree
 *                                     level, faculty, campus...).
 * ============================================================
 */

window.items = [
  {
    title: "С2 Політологія",
    image: "covers/political_science.jpg",
    url: "https://vstup.osvita.ua/spec/1-40-1/0-0-2523-0-0-0/",
    category: "Політологія",
    tags: ["government", "policy", "international relations"]
  },
  {
    title: "C4 Психологія",
    image: "covers/law.jpg",
    url: "https://vstup.osvita.ua/y2026/r14/97/1609739/",
    category: "Психологія",
    tags: ["justice", "legal studies", "jurisprudence"]
  },
  {
    title: "F1 Фінансовий інжиніринг",
    image: "covers/economics.jpg",
    url: "https://vstup.osvita.ua/y2026/r14/97/1599959/",
    category: "Фінанси",
    tags: ["finance", "markets", "macroeconomics"]
  },
  {
    title: "F3 Комп'ютерні науки",
    image: "covers/computer_science.jpg",
    url: "https://vstup.osvita.ua/y2026/r14/97/1614266/",
    category: "Engineering & Technology",
    tags: ["programming", "software", "algorithms"]
  },
  {
    title: "F5 Кібербезпека",
    image: "covers/mechanical_engineering.jpg",
    url: "https://vstup.osvita.ua/y2026/r14/97/1612310/",
    category: "Technology",
    tags: ["machines", "thermodynamics", "robotics"]
  },
  {
    title: "I1 Стоматологія",
    image: "covers/medicine.jpg",
    url: "https://vstup.osvita.ua/y2026/r14/7314/1559043/",
    category: "Health Sciences",
    tags: ["clinical", "anatomy", "healthcare"]
  },
  {
    title: "G19. Будівництво та цивільна інженерія",
    image: "covers/psychology.jpg",
    url: "https://vstup.osvita.ua/y2026/r14/97/1612088/",
    category: "Minecraft",
    tags: ["behavior", "cognition", "mental health"]
  },
  {
    title: "K9 Правоохоронна діяльність",
    image: "covers/architecture.jpg",
    url: "https://vstup.osvita.ua/y2026/r14/136/1614244/",
    category: "police",
    tags: ["design", "urban planning", "structures"]
  },
  {
    title: "E6 Прикладна фізика та наноматеріали",
    image: "covers/physics.jpg",
    url: "https://vstup.osvita.ua/y2026/r14/97/1614760/",
    category: "Natural Sciences",
    tags: ["quantum", "mechanics", "relativity"]
  },
  {
    title: "D8 Право",
    image: "covers/business_administration.jpg",
    url: "https://vstup.osvita.ua/y2026/r14/97/1609569/",
    category: "Адвакат адвакат",
    tags: ["management", "strategy", "entrepreneurship"]
  },
  {
    title: "...",
    image: "covers/biology.jpg",
    url: "https://ab3.army/",
    category: "...",
    tags: ["genetics", "ecology", "life sciences"]
  }
];
