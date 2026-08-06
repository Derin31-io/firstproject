/**
 * ============================================================
 *  LIBRARY APP
 * ============================================================
 *  Reads the `items` array from data.js and renders the entire
 *  library grid — no HTML editing required when items change.
 *
 *  Responsibilities:
 *    1. Render one card per item (via <template id="cardTemplate">)
 *    2. Instant client-side search filtering
 *    3. Lazy image loading + fade-in once loaded
 *    4. Open the item's URL in a new tab on click
 * ============================================================
 */

(function () {
  "use strict";

  // ------------------------------------------------------------
  // DOM references
  // ------------------------------------------------------------
  const grid = document.getElementById("grid");
  const template = document.getElementById("cardTemplate");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const emptyState = document.getElementById("emptyState");
  const itemCountEl = document.getElementById("itemCount");

  // Guard against data.js not being loaded / empty
  const libraryItems = Array.isArray(window.items) ? window.items : [];

  // ------------------------------------------------------------
  // Build a lowercase search haystack for each item once,
  // so filtering on every keystroke stays fast even with a
  // large library.
  // ------------------------------------------------------------
  const searchIndex = libraryItems.map((item) => {
    const parts = [item.title, item.category, ...(item.tags || [])];
    return parts.filter(Boolean).join(" ").toLowerCase();
  });

  /**
   * Renders the full grid for a given list of item indices.
   * Re-renders from scratch on every call — the library size
   * here is small enough (hundreds of items) that this is
   * simpler and safer than DOM diffing.
   */
  function renderGrid(indices) {
    grid.innerHTML = "";

    if (indices.length === 0) {
      emptyState.hidden = false;
      itemCountEl.textContent = "0 items";
      return;
    }

    emptyState.hidden = true;
    itemCountEl.textContent = `${indices.length} item${indices.length === 1 ? "" : "s"}`;

    const fragment = document.createDocumentFragment();

    indices.forEach((itemIndex, position) => {
      const item = libraryItems[itemIndex];
      const node = template.content.firstElementChild.cloneNode(true);

      // Card link -> opens in a new tab
      node.href = item.url;
      node.setAttribute("aria-label", item.title);

      // Small stagger so cards animate in like a deck being dealt,
      // capped so a huge library doesn't produce a long queued delay.
      node.style.setProperty("--card-delay", `${Math.min(position, 24) * 18}ms`);

      // Cover image (lazy-loaded via the `loading="lazy"` attribute
      // already present on the template's <img>)
      const img = node.querySelector(".card__img");
      img.src = item.image;
      img.alt = item.title;
      img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
      img.addEventListener(
        "error",
        () => {
          // Graceful fallback if a cover image is missing, so a typo
          // in data.js never breaks the whole grid.
          img.classList.add("is-loaded");
          img.src =
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(
              `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600">
                 <rect width="100%" height="100%" fill="#1b2838"/>
                 <text x="50%" y="50%" fill="#5c6b7d" font-family="sans-serif"
                       font-size="18" text-anchor="middle" dy=".3em">No cover</text>
               </svg>`
            );
        },
        { once: true }
      );

      node.querySelector(".card__title").textContent = item.title;

      const categoryEl = node.querySelector(".card__category");
      if (item.category) {
        categoryEl.textContent = item.category;
      } else {
        categoryEl.remove();
      }

      fragment.appendChild(node);
    });

    grid.appendChild(fragment);
  }

  /**
   * Filters items against the current search query and re-renders.
   */
  function applyFilter() {
    const query = searchInput.value.trim().toLowerCase();
    searchClear.hidden = query.length === 0;

    if (query === "") {
      renderGrid(libraryItems.map((_, i) => i));
      return;
    }

    const matches = [];
    searchIndex.forEach((haystack, i) => {
      if (haystack.includes(query)) matches.push(i);
    });

    renderGrid(matches);
  }

  // ------------------------------------------------------------
  // Event wiring
  // ------------------------------------------------------------
  searchInput.addEventListener("input", applyFilter);

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    applyFilter();
  });

  // ------------------------------------------------------------
  // Initial render
  // ------------------------------------------------------------
  renderGrid(libraryItems.map((_, i) => i));
})();
