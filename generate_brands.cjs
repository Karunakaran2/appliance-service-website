const fs = require('fs');
const path = require('path');

const brands = [
  // Washing Machine
  "Samsung", "LG", "Whirlpool", "Bosch", "IFB", "Godrej", "Panasonic", "Siemens", "Haier",
  // AC
  "Voltas", "Blue Star", "Daikin", "Hitachi", "Lloyd", "Carrier",
  // TV
  "Sony", "Xiaomi", "Oneplus", "RealMe", "Philips",
  // Water Purifier
  "Kent", "Eureka Forbes", "Aquaguard", "Pureit", "Livpure"
];

const generateSVG = (text) => {
  // Simple unique color generation or consistent styling
  const width = 200;
  const height = 80;
  const fontSize = 24;
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="transparent"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-weight="bold" font-size="${fontSize}" fill="#333" dominant-baseline="middle" text-anchor="middle">
    ${text}
  </text>
</svg>`;
};

const outputDir = path.join(__dirname, 'public', 'assets', 'images', 'brands');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// Remove duplicates
const uniqueBrands = [...new Set(brands)];

uniqueBrands.forEach(brand => {
  const filename = brand.toLowerCase().replace(/\s+/g, '-') + '.svg';
  const filepath = path.join(outputDir, filename);
  fs.writeFileSync(filepath, generateSVG(brand));
  console.log(`Generated ${filename}`);
});
