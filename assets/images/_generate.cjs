// Generator for on-brand SVG product illustrations.
// Run: node assets/images/_generate.js
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "products");
fs.mkdirSync(OUT, { recursive: true });

// Shared palette
const C = {
  plum: "#43243E", orchid: "#A34373", lilac: "#F6EDF5", ivory: "#FFFCF8",
  charcoal: "#2B222A", gold: "#C9A227", silver: "#B8C4CC", green: "#5b8c6a",
  cream: "#EFE3D0", terracotta: "#C97A5C", brown: "#7A4F33", teal: "#4E8A8A",
  rose: "#E0A8B8", navy: "#34495E", saffron: "#E8A33D",
};

// Helper: base scene with soft background + subtle frame
function scene(bg, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <radialGradient id="bg" cx="50%" cy="42%" r="65%">
      <stop offset="0%" stop-color="${bg.light}"/>
      <stop offset="100%" stop-color="${bg.dark}"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  ${inner}
</svg>`;
}

// soft platform shadow
const shadow = `<ellipse cx="300" cy="500" rx="160" ry="22" fill="rgba(67,36,62,0.12)" filter="url(#soft)"/>`;

const products = {
  // ---- NECKLACE (silver petal) ----
  "p-necklace-silver": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,250)">
      <path d="M0,0 C-40,-30 -40,40 0,70 C40,40 40,-30 0,0Z" fill="none" stroke="${C.silver}" stroke-width="6"/>
      <path d="M0,10 C-25,-10 -25,30 0,55 C25,30 25,-10 0,10Z" fill="${C.silver}" opacity="0.85"/>
      <circle cx="0" cy="-40" r="5" fill="${C.silver}"/>
      <line x1="0" y1="-40" x2="0" y2="-90" stroke="${C.silver}" stroke-width="2.5"/>
      <path d="M-180,-80 Q0,-160 180,-80" fill="none" stroke="${C.silver}" stroke-width="3"/>
      <circle cx="0" cy="-90" r="4" fill="${C.silver}"/>
    </g>` },
  "p-necklace-silver-2": { bg: { light: C.ivory, dark: C.lilac }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <circle r="120" fill="${C.lilac}"/>
      <path d="M0,-60 C-50,-90 -50,20 0,60 C50,20 50,-90 0,-60Z" fill="none" stroke="${C.silver}" stroke-width="5"/>
      <path d="M-120,0 Q0,-140 120,0" fill="none" stroke="${C.silver}" stroke-width="3"/>
    </g>` },

  // ---- EARRINGS (gold hoop) ----
  "p-earrings-gold": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <g transform="translate(-90,0)">
        <circle cx="0" cy="0" r="70" fill="none" stroke="${C.gold}" stroke-width="8"/>
        <circle cx="0" cy="-70" r="6" fill="${C.gold}"/>
        <line x1="0" y1="-70" x2="0" y2="-95" stroke="${C.gold}" stroke-width="3"/>
      </g>
      <g transform="translate(90,0)">
        <circle cx="0" cy="0" r="70" fill="none" stroke="${C.gold}" stroke-width="8"/>
        <circle cx="0" cy="-70" r="6" fill="${C.gold}"/>
        <line x1="0" y1="-70" x2="0" y2="-95" stroke="${C.gold}" stroke-width="3"/>
      </g>
    </g>` },
  "p-earrings-gold-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <rect x="-130" y="-130" width="260" height="260" rx="20" fill="${C.ivory}"/>
      <circle cx="-70" cy="0" r="60" fill="none" stroke="${C.gold}" stroke-width="7"/>
      <circle cx="70" cy="0" r="60" fill="none" stroke="${C.gold}" stroke-width="7"/>
    </g>` },

  // ---- RING (turquoise) ----
  "p-ring-turquoise": { bg: { light: C.ivory, dark: C.cream }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <ellipse cx="0" cy="10" rx="50" ry="35" fill="${C.teal}"/>
      <ellipse cx="-10" cy="0" rx="18" ry="12" fill="#7BB8B8" opacity="0.6"/>
      <path d="M-40,30 Q-80,60 -60,110" fill="none" stroke="${C.silver}" stroke-width="12" stroke-linecap="round"/>
      <path d="M40,30 Q80,60 60,110" fill="none" stroke="${C.silver}" stroke-width="12" stroke-linecap="round"/>
    </g>` },
  "p-ring-turquoise-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,320)">
      <circle r="90" fill="${C.ivory}"/>
      <ellipse cx="0" cy="-5" rx="35" ry="25" fill="${C.teal}"/>
      <path d="M-28,15 Q-55,40 -42,80" fill="none" stroke="${C.silver}" stroke-width="9" stroke-linecap="round"/>
      <path d="M28,15 Q55,40 42,80" fill="none" stroke="${C.silver}" stroke-width="9" stroke-linecap="round"/>
    </g>` },

  // ---- BRACELET (pearl) ----
  "p-bracelet-pearl": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <circle r="110" fill="none" stroke="${C.ivory}" stroke-width="6" stroke-dasharray="2,18"/>
      ${Array.from({length:24}).map((_,i)=>{
        const a=(i/24)*Math.PI*2; const x=Math.cos(a)*110; const y=Math.sin(a)*110;
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="13" fill="#FBF6EE"/><circle cx="${(x-3).toFixed(1)}" cy="${(y-3).toFixed(1)}" r="4" fill="#ffffff" opacity="0.8"/>`;
      }).join("")}
      <circle cx="0" cy="-110" r="16" fill="${C.orchid}"/>
    </g>` },
  "p-bracelet-pearl-2": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      ${Array.from({length:18}).map((_,i)=>{
        const a=(i/18)*Math.PI*2; const x=Math.cos(a)*100; const y=Math.sin(a)*100;
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="11" fill="#FBF6EE"/>`;
      }).join("")}
    </g>` },

  // ---- BAG (leather crossbody) ----
  "p-bag-leather": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,310)">
      <path d="M-90,-30 Q-100,-100 0,-110 Q100,-100 90,-30" fill="none" stroke="${C.brown}" stroke-width="6"/>
      <rect x="-110" y="-30" width="220" height="180" rx="20" fill="${C.brown}"/>
      <rect x="-110" y="-30" width="220" height="40" rx="20" fill="#6B4028"/>
      <rect x="-20" y="20" width="40" height="30" rx="6" fill="${C.gold}"/>
      <line x1="-110" y1="50" x2="110" y2="50" stroke="#6B4028" stroke-width="2"/>
    </g>` },
  "p-bag-leather-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,320)">
      <rect x="-100" y="-50" width="200" height="160" rx="18" fill="${C.plum}"/>
      <path d="M-70,-50 Q-80,-120 0,-130 Q80,-120 70,-50" fill="none" stroke="${C.plum}" stroke-width="6"/>
      <rect x="-15" y="10" width="30" height="24" rx="5" fill="${C.orchid}"/>
    </g>` },

  // ---- SCARF (silk blossom) ----
  "p-scarf-silk": { bg: { light: C.ivory, dark: C.cream }, draw: `
    ${shadow}
    <g transform="translate(300,300) rotate(-12)">
      <path d="M-160,-120 L160,-120 L140,120 L-140,120 Z" fill="${C.rose}" opacity="0.9"/>
      <path d="M-160,-120 L160,-120 L155,-90 L-155,-90 Z" fill="${C.orchid}" opacity="0.4"/>
      <g fill="${C.orchid}">
        <circle cx="-80" cy="-20" r="18"/><circle cx="-50" cy="-40" r="12"/><circle cx="-100" cy="30" r="14"/>
        <circle cx="60" cy="10" r="20"/><circle cx="90" cy="50" r="12"/><circle cx="30" cy="60" r="15"/>
      </g>
      <g fill="${C.gold}" opacity="0.6">
        <circle cx="-80" cy="-20" r="6"/><circle cx="60" cy="10" r="7"/>
      </g>
    </g>` },
  "p-scarf-silk-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,300) rotate(8)">
      <path d="M-150,-100 L150,-100 L130,100 L-130,100 Z" fill="${C.gold}" opacity="0.7"/>
      <g fill="${C.plum}">
        <circle cx="-60" cy="0" r="15"/><circle cx="40" cy="-30" r="18"/><circle cx="80" cy="40" r="13"/>
      </g>
    </g>` },

  // ---- WALLET ----
  "p-wallet": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,300) rotate(-8)">
      <rect x="-120" y="-80" width="240" height="160" rx="14" fill="${C.brown}"/>
      <rect x="-120" y="-80" width="240" height="50" rx="14" fill="#6B4028"/>
      <line x1="-120" y1="-30" x2="120" y2="-30" stroke="#5A3520" stroke-width="2"/>
      <rect x="80" y="-10" width="30" height="20" rx="4" fill="${C.gold}"/>
    </g>` },
  "p-wallet-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,300) rotate(10)">
      <rect x="-110" y="-70" width="220" height="140" rx="12" fill="${C.plum}"/>
      <rect x="-110" y="-70" width="220" height="40" rx="12" fill="#31162c"/>
      <rect x="70" y="0" width="28" height="18" rx="4" fill="${C.orchid}"/>
    </g>` },

  // ---- SUNGLASSES ----
  "p-sunglasses": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <path d="M-130,-20 Q-130,-70 -80,-70 L-30,-70 Q-10,-70 -10,-50 L-10,-20 Q-10,30 -70,30 Q-130,30 -130,-20Z" fill="${C.charcoal}"/>
      <path d="M130,-20 Q130,-70 80,-70 L30,-70 Q10,-70 10,-50 L10,-20 Q10,30 70,30 Q130,30 130,-20Z" fill="${C.charcoal}"/>
      <line x1="-10" y1="-55" x2="10" y2="-55" stroke="${C.charcoal}" stroke-width="6"/>
      <path d="M-130,-60 Q-160,-80 -190,-70" fill="none" stroke="${C.charcoal}" stroke-width="5"/>
      <path d="M130,-60 Q160,-80 190,-70" fill="none" stroke="${C.charcoal}" stroke-width="5"/>
    </g>` },
  "p-sunglasses-2": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <path d="M-120,-10 Q-120,-55 -75,-55 L-25,-55 Q-5,-55 -5,-35 L-5,-10 Q-5,25 -65,25 Q-120,25 -120,-10Z" fill="${C.orchid}"/>
      <path d="M120,-10 Q120,-55 75,-55 L25,-55 Q5,-55 5,-35 L5,-10 Q5,25 65,25 Q120,25 120,-10Z" fill="${C.orchid}"/>
      <line x1="-5" y1="-45" x2="5" y2="-45" stroke="${C.plum}" stroke-width="5"/>
    </g>` },

  // ---- MUG ----
  "p-mug": { bg: { light: C.ivory, dark: C.cream }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <rect x="-90" y="-70" width="160" height="160" rx="14" fill="${C.ivory}" stroke="${C.charcoal}" stroke-width="3"/>
      <rect x="-90" y="-70" width="160" height="30" fill="${C.orchid}"/>
      <rect x="-90" y="-10" width="160" height="8" fill="${C.teal}"/>
      <rect x="-90" y="20" width="160" height="8" fill="${C.gold}"/>
      <path d="M70,-40 Q120,-40 120,10 Q120,60 70,60" fill="none" stroke="${C.charcoal}" stroke-width="8"/>
    </g>` },
  "p-mug-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,310)">
      <rect x="-80" y="-60" width="150" height="150" rx="12" fill="${C.green}"/>
      <rect x="-80" y="-60" width="150" height="26" fill="#4a7355"/>
      <path d="M70,-30 Q110,-30 110,15 Q110,55 70,55" fill="none" stroke="${C.green}" stroke-width="8"/>
    </g>` },

  // ---- CANDLE (saffron) ----
  "p-candle": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <path d="M-60,-60 L60,-60 L70,120 L-70,120 Z" fill="#E8DCC6" opacity="0.85" stroke="${C.charcoal}" stroke-width="2"/>
      <rect x="-40" y="-110" width="80" height="60" fill="${C.saffron}"/>
      <rect x="-40" y="-110" width="80" height="14" fill="#D4912E"/>
      <line x1="0" y1="-130" x2="0" y2="-110" stroke="${C.charcoal}" stroke-width="2.5"/>
      <ellipse cx="0" cy="-138" rx="6" ry="11" fill="${C.gold}"/>
      <ellipse cx="0" cy="-142" rx="3" ry="6" fill="#FFF3C0"/>
    </g>` },
  "p-candle-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,300)">
      <ellipse cx="0" cy="130" rx="80" ry="14" fill="#D4C4A8"/>
      <rect x="-50" y="-90" width="100" height="220" rx="8" fill="${C.orchid}"/>
      <rect x="-50" y="-90" width="100" height="20" fill="#8E3A62"/>
      <line x1="0" y1="-110" x2="0" y2="-90" stroke="${C.charcoal}" stroke-width="2"/>
    </g>` },

  // ---- VASE ----
  "p-vase": { bg: { light: C.ivory, dark: C.cream }, draw: `
    ${shadow}
    <g transform="translate(300,310)">
      <path d="M-40,-130 Q-50,-110 -60,-80 Q-90,-30 -90,40 Q-90,120 0,120 Q90,120 90,40 Q90,-30 60,-80 Q50,-110 40,-130 Z" fill="${C.teal}"/>
      <path d="M-60,-80 L60,-80" stroke="${C.gold}" stroke-width="4"/>
      <path d="M-80,-20 Q-50,-10 -80,0 Q-50,10 -80,20" fill="none" stroke="${C.gold}" stroke-width="2.5"/>
      <path d="M80,-20 Q50,-10 80,0 Q50,10 80,20" fill="none" stroke="${C.gold}" stroke-width="2.5"/>
    </g>` },
  "p-vase-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,310)">
      <path d="M-35,-120 Q-45,-100 -55,-70 Q-80,-20 -80,40 Q-80,110 0,110 Q80,110 80,40 Q80,-20 55,-70 Q45,-100 35,-120 Z" fill="${C.orchid}"/>
      <circle cx="0" cy="20" r="14" fill="${C.lilac}"/>
      <circle cx="-30" cy="-20" r="10" fill="${C.lilac}"/>
      <circle cx="30" cy="-20" r="10" fill="${C.lilac}"/>
    </g>` },

  // ---- THROW BLANKET ----
  "p-throw": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,300) rotate(-6)">
      <rect x="-160" y="-110" width="320" height="220" rx="16" fill="${C.plum}"/>
      <g stroke="${C.orchid}" stroke-width="3" opacity="0.6">
        <line x1="-160" y1="-60" x2="160" y2="-60"/><line x1="-160" y1="0" x2="160" y2="0"/><line x1="-160" y1="60" x2="160" y2="60"/>
      </g>
      <g fill="${C.lilac}" opacity="0.5">
        <rect x="-140" y="-90" width="30" height="30" rx="4"/><rect x="110" y="40" width="30" height="30" rx="4"/>
      </g>
    </g>` },
  "p-throw-2": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,300) rotate(10)">
      <rect x="-150" y="-100" width="300" height="200" rx="14" fill="${C.terracotta}"/>
      <g stroke="${C.cream}" stroke-width="4" opacity="0.7">
        <line x1="-150" y1="-40" x2="150" y2="-40"/><line x1="-150" y1="40" x2="150" y2="40"/>
      </g>
    </g>` },

  // ---- GIFT JEWELRY BOX ----
  "p-gift-jewelry": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,320)">
      <rect x="-130" y="-40" width="260" height="120" rx="10" fill="${C.plum}"/>
      <rect x="-140" y="-55" width="280" height="30" rx="8" fill="#31162c"/>
      <rect x="-40" y="-30" width="80" height="50" rx="6" fill="${C.lilac}"/>
      <path d="M0,-30 C-15,-50 -25,-30 0,-15 C25,-30 15,-50 0,-30Z" fill="${C.orchid}"/>
      <line x1="-140" y1="-40" x2="140" y2="-40" stroke="${C.orchid}" stroke-width="3"/>
    </g>` },
  "p-gift-jewelry-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,320)">
      <rect x="-120" y="-30" width="240" height="110" rx="10" fill="${C.orchid}"/>
      <rect x="-130" y="-45" width="260" height="26" rx="6" fill="#8E3A62"/>
      <circle cx="0" cy="25" r="22" fill="${C.gold}"/>
    </g>` },

  // ---- GIFT SPA SET ----
  "p-gift-spa": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,320)">
      <path d="M-130,-20 L130,-20 L110,90 L-110,90 Z" fill="${C.green}"/>
      <rect x="-60" y="-100" width="50" height="80" rx="8" fill="${C.cream}"/>
      <rect x="-55" y="-100" width="40" height="20" fill="${C.teal}"/>
      <rect x="10" y="-90" width="45" height="70" rx="6" fill="${C.rose}"/>
      <rect x="-20" y="-70" width="40" height="50" rx="6" fill="${C.gold}"/>
    </g>` },
  "p-gift-spa-2": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,310)">
      <ellipse cx="0" cy="90" rx="120" ry="20" fill="${C.green}"/>
      <rect x="-50" y="-100" width="100" height="180" rx="10" fill="${C.ivory}" stroke="${C.green}" stroke-width="3"/>
      <rect x="-50" y="-100" width="100" height="30" fill="${C.green}"/>
    </g>` },

  // ---- GIFT TEA SET ----
  "p-gift-tea": { bg: { light: C.ivory, dark: C.cream }, draw: `
    ${shadow}
    <g transform="translate(300,310)">
      <rect x="-130" y="-20" width="260" height="100" rx="10" fill="${C.terracotta}"/>
      <rect x="-140" y="-35" width="280" height="26" rx="6" fill="#A85E42"/>
      <g transform="translate(-70,20)">
        <rect x="-30" y="-30" width="60" height="55" rx="6" fill="${C.cream}"/>
        <rect x="-30" y="-30" width="60" height="14" fill="${C.orchid}"/>
      </g>
      <g transform="translate(70,20)">
        <rect x="-30" y="-30" width="60" height="55" rx="6" fill="${C.cream}"/>
        <rect x="-30" y="-30" width="60" height="14" fill="${C.teal}"/>
      </g>
      <rect x="-20" y="0" width="40" height="50" rx="4" fill="${C.gold}"/>
    </g>` },
  "p-gift-tea-2": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,310)">
      <rect x="-120" y="-15" width="240" height="95" rx="10" fill="${C.teal}"/>
      <circle cx="-60" cy="35" r="22" fill="${C.cream}"/>
      <circle cx="60" cy="35" r="22" fill="${C.cream}"/>
      <rect x="-15" y="10" width="30" height="40" rx="4" fill="${C.orchid}"/>
    </g>` },

  // ---- GIFT ROMANTIC ----
  "p-gift-romantic": { bg: { light: C.lilac, dark: "#EAD7E6" }, draw: `
    ${shadow}
    <g transform="translate(300,320)">
      <rect x="-120" y="-30" width="240" height="120" rx="10" fill="${C.rose}"/>
      <rect x="-130" y="-45" width="260" height="28" rx="6" fill="#C789A0"/>
      <path d="M-20,-45 C-35,-70 -45,-45 -20,-25 C5,-45 -5,-70 -20,-45Z" fill="${C.orchid}"/>
      <path d="M20,-45 C5,-70 -5,-45 20,-25 C45,-45 35,-70 20,-45Z" fill="${C.orchid}"/>
      <circle cx="0" cy="35" r="18" fill="${C.gold}"/>
      <rect x="-70" y="10" width="30" height="50" rx="4" fill="${C.plum}"/>
    </g>` },
  "p-gift-romantic-2": { bg: { light: C.cream, dark: "#E2D0B6" }, draw: `
    ${shadow}
    <g transform="translate(300,310)">
      <rect x="-110" y="-20" width="220" height="110" rx="10" fill="${C.plum}"/>
      <rect x="-120" y="-35" width="240" height="26" rx="6" fill="#31162c"/>
      <path d="M-25,-35 Q-25,-60 0,-45 Q25,-60 25,-35 Q25,-15 0,-5 Q-25,-15 -25,-35Z" fill="${C.orchid}"/>
    </g>` },
};

// Hero collage images (reuse product images)
const heroImages = {
  "hero-main": products["p-necklace-silver"].bg,
  "hero-sm1": products["p-earrings-gold"].bg,
  "hero-sm2": products["p-ring-turquoise"].bg,
};

let count = 0;
for (const [name, spec] of Object.entries(products)) {
  const svg = scene(spec.bg, spec.draw);
  fs.writeFileSync(path.join(OUT, name + ".svg"), svg);
  count++;
}

// Category images (use representative product images by category)
const catMap = {
  "cat-jewelry": "p-necklace-silver",
  "cat-bags": "p-bag-leather",
  "cat-home": "p-vase",
  "cat-gift": "p-gift-jewelry",
};
fs.mkdirSync(path.join(__dirname, "categories"), { recursive: true });
for (const [name, src] of Object.entries(catMap)) {
  const p = products[src];
  const svg = scene(p.bg, p.draw);
  fs.writeFileSync(path.join(__dirname, "categories", name + ".svg"), svg);
  count++;
}

// About image — a styled still life
const aboutSvg = scene({ light: C.lilac, dark: "#EAD7E6" }, `
  ${shadow}
  <g transform="translate(300,300)">
    <rect x="-160" y="-40" width="320" height="160" rx="14" fill="${C.ivory}" stroke="${C.line}" stroke-width="1"/>
    <g transform="translate(-90,0)"><rect x="-30" y="-70" width="60" height="120" rx="8" fill="${C.cream}"/><rect x="-30" y="-70" width="60" height="18" fill="${C.orchid}"/></g>
    <g transform="translate(0,10)"><path d="M-25,-100 Q-35,-80 -45,-60 Q-60,-20 -60,30 Q-60,80 0,80 Q60,80 60,30 Q60,-20 45,-60 Q35,-80 25,-100 Z" fill="${C.teal}"/></g>
    <g transform="translate(90,20)"><rect x="-35" y="-50" width="70" height="90" rx="8" fill="${C.gold}"/></g>
  </g>`);
fs.writeFileSync(path.join(__dirname, "about-store.svg"), aboutSvg);
count++;

console.log("Generated " + count + " SVG images in " + OUT);
