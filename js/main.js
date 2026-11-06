// Small data sets keep the HTML easy to read and make the JavaScript lesson clear.
const heroSlides = [
  {
    title: "Model 3 Premium",
    subtitle: "Sport Sedan",
    image: "assets/images/hero-premium.avif",
    alt: "Silver Model 3 Premium driving on a road",
  },
  {
    title: "Model 3 Performance",
    subtitle: "Sport Sedan",
    image: "assets/images/hero-performance.avif",
    alt: "Model 3 Performance driving on a road",
  },
  {
    title: "Model 3",
    subtitle: "Sport Sedan",
    image: "assets/images/hero-model-3.avif",
    alt: "Model 3 driving on a road",
  },
];
const features = {
  convenience: {
    title: "Everyday Convenience",
    copy: "A minimalist cabin and easy-to-use controls help make every drive feel effortless.",
    image: "assets/images/meet-convenience.avif",
    alt: "Model 3 convenience feature illustration",
  },
  safety: {
    title: "Engineered for Your Safety",
    copy: "Impact-absorbing zones, a stiff passenger compartment and active safety features help protect everyone inside.",
    image: "assets/images/meet-safety.avif",
    alt: "Model 3 safety feature illustration",
  },
};
const trims = {
  standard: {
    title: "Model 3",
    stats: [
      ["321 mi", "Range (EPA est.)"],
      ["5.8 s", "0–60 mph"],
      ["24 cu ft", "Cargo Space"],
    ],
    image: "assets/images/trim-model-3.avif",
  },
  premium: {
    title: "Model 3 Premium",
    stats: [
      ["346 mi", "Range (EPA est.)"],
      ["15 min", "Recharge up to 185 miles"],
      ["AWD", "Dual Motor"],
    ],
    image: "assets/images/trim-premium.avif",
  },
  performance: {
    title: "Model 3 Performance",
    stats: [
      ["528 hp", "Peak Power"],
      ["2.9 s", "0–60 mph"],
      ["163 mph", "Top Speed"],
    ],
    image: "assets/images/trim-performance.avif",
  },
};

let heroIndex = 0;
const heroDots = document.querySelector("#hero-dots");
heroSlides.forEach((slide, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "focus-ring h-3 w-3 rounded-full bg-white";
  button.setAttribute("aria-label", `Show ${slide.title} slide`);
  button.addEventListener("click", () => showHero(index));
  heroDots.append(button);
});
function showHero(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[heroIndex];
  const image = document.querySelector("#hero-image");
  image.src = slide.image;
  image.alt = slide.alt;
  document.querySelector("#hero-title").textContent = slide.title;
  document.querySelector("#hero-subtitle").textContent = slide.subtitle;
  [...heroDots.children].forEach((dot, dotIndex) => {
    dot.classList.toggle("opacity-50", dotIndex !== heroIndex);
    dot.setAttribute("aria-current", String(dotIndex === heroIndex));
  });
}
document
  .querySelector("#hero-prev")
  .addEventListener("click", () => showHero(heroIndex - 1));
document
  .querySelector("#hero-next")
  .addEventListener("click", () => showHero(heroIndex + 1));
showHero(0);

function selectTab(buttons, selectedButton) {
  buttons.forEach((button) => {
    const selected = button === selectedButton;
    button.setAttribute("aria-selected", String(selected));
    button.classList.toggle("bg-[#171a20]", selected);
    button.classList.toggle("border-[#171a20]", selected);
    button.classList.toggle("text-white", selected);
    button.classList.toggle("border-gray-300", !selected);
  });
}
const featureButtons = [...document.querySelectorAll(".feature-tab")];
featureButtons.forEach((button) =>
  button.addEventListener("click", () => {
    selectTab(featureButtons, button);
    const feature = features[button.dataset.feature];
    document.querySelector("#feature-image").src = feature.image;
    document.querySelector("#feature-image").alt = feature.alt;
    document.querySelector("#feature-title").textContent = feature.title;
    document.querySelector("#feature-copy").textContent = feature.copy;
  }),
);
const trimButtons = [...document.querySelectorAll(".trim-tab")];
trimButtons.forEach((button) =>
  button.addEventListener("click", () => {
    selectTab(trimButtons, button);
    const trim = trims[button.dataset.trim];
    document.querySelector("#trim-title").textContent = trim.title;
    trim.stats.forEach(([value, label], index) => {
      document.querySelector(`#trim-stat-${index + 1}`).textContent = value;
      document.querySelector(`#trim-label-${index + 1}`).textContent = label;
    });
    document.querySelector("#trim-image").src = trim.image;
    document.querySelector("#trim-image").alt = `${trim.title} exterior`;
  }),
);

const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  mobileMenu.classList.toggle("hidden", !open);
});
mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuButton.setAttribute("aria-expanded", "false");
  }),
);
