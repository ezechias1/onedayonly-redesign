// ---------------------------------------------------------------------------
// Product mock data – ~72 products across all categories
// Prices are in ZAR cents (e.g. 29900 = R299.00)
// ---------------------------------------------------------------------------

import { Product } from '@/types/product';

export const products: Product[] = [
  {
    "id": "prod-001",
    "slug": "bose-quietcomfort-45-headphones-20260226",
    "name": "Bose QuietComfort 45 Noise Cancelling Headphones",
    "shortName": "Bose QC45 Headphones",
    "brand": {
      "id": "brand-bose",
      "name": "Bose",
      "slug": "bose"
    },
    "categoryId": "cat-electronics",
    "dealSectionId": "ds-premium-tech",
    "description": "Experience world-class noise cancellation with the Bose QuietComfort 45. Enjoy up to 24 hours of battery life, premium comfort, and signature Bose sound quality. Perfect for commutes, flights, and focused work sessions.",
    "features": [
      "Active noise cancellation",
      "24-hour battery life",
      "Bluetooth 5.1",
      "USB-C charging",
      "Foldable design",
      "Built-in microphone"
    ],
    "whatsInTheBox": [
      "Bose QC45 headphones",
      "Carrying case",
      "USB-C charging cable",
      "3.5mm audio cable",
      "Quick start guide"
    ],
    "images": [
      {
        "id": "img-101",
        "url": "https://picsum.photos/800/800?random=101",
        "alt": "Bose QC45 headphones front view",
        "isDefault": true
      },
      {
        "id": "img-102",
        "url": "https://picsum.photos/800/800?random=102",
        "alt": "Bose QC45 headphones side view",
        "isDefault": false
      },
      {
        "id": "img-103",
        "url": "https://picsum.photos/800/800?random=103",
        "alt": "Bose QC45 headphones with case",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-001a",
        "name": "Black",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-001b",
        "name": "White Smoke",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 399900,
    "originalPrice": 799900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-002",
    "slug": "jbl-charge-5-bluetooth-speaker-20260226",
    "name": "JBL Charge 5 Portable Bluetooth Speaker",
    "shortName": "JBL Charge 5 Speaker",
    "brand": {
      "id": "brand-jbl",
      "name": "JBL",
      "slug": "jbl"
    },
    "categoryId": "cat-electronics",
    "dealSectionId": "ds-premium-tech",
    "description": "The JBL Charge 5 delivers bold JBL Original Pro Sound with its optimised long-excursion driver and dual bass radiators. It features 20 hours of playtime and an integrated power bank to charge your devices.",
    "features": [
      "JBL Pro Sound",
      "20-hour battery life",
      "IP67 waterproof and dustproof",
      "Built-in power bank",
      "PartyBoost compatible",
      "Bluetooth 5.1"
    ],
    "whatsInTheBox": [
      "JBL Charge 5 speaker",
      "USB-C charging cable",
      "Safety sheet",
      "Quick start guide"
    ],
    "images": [
      {
        "id": "img-104",
        "url": "https://picsum.photos/800/800?random=104",
        "alt": "JBL Charge 5 speaker front",
        "isDefault": true
      },
      {
        "id": "img-105",
        "url": "https://picsum.photos/800/800?random=105",
        "alt": "JBL Charge 5 speaker side",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-002a",
        "name": "Black",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-002b",
        "name": "Blue",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-002c",
        "name": "Red",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": false
      }
    ],
    "price": 249900,
    "originalPrice": 449900,
    "discountPercentage": 44,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 8
    },
    "badges": [
      "best-seller",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-003",
    "slug": "samsung-galaxy-tab-a9-20260226",
    "name": "Samsung Galaxy Tab A9 8.7\" Wi-Fi Tablet (64GB)",
    "shortName": "Samsung Galaxy Tab A9",
    "brand": {
      "id": "brand-samsung",
      "name": "Samsung",
      "slug": "samsung"
    },
    "categoryId": "cat-electronics",
    "dealSectionId": "ds-premium-tech",
    "description": "The Samsung Galaxy Tab A9 is a compact and affordable tablet perfect for entertainment and everyday tasks. Features an 8.7-inch display, 64GB storage, and all-day battery life.",
    "features": [
      "8.7-inch TFT display",
      "64GB internal storage",
      "4GB RAM",
      "Expandable storage up to 1TB",
      "Dolby Atmos surround sound",
      "5100mAh battery"
    ],
    "whatsInTheBox": [
      "Samsung Galaxy Tab A9",
      "USB-C cable",
      "Travel adapter",
      "Quick start guide"
    ],
    "images": [
      {
        "id": "img-106",
        "url": "https://picsum.photos/800/800?random=106",
        "alt": "Samsung Galaxy Tab A9 front",
        "isDefault": true
      },
      {
        "id": "img-107",
        "url": "https://picsum.photos/800/800?random=107",
        "alt": "Samsung Galaxy Tab A9 angled",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 299900,
    "originalPrice": 449900,
    "discountPercentage": 33,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-004",
    "slug": "wuw-10000mah-power-bank-20260226",
    "name": "WUW 10000mAh Fast Charge Power Bank",
    "shortName": "WUW 10000mAh Power Bank",
    "brand": {
      "id": "brand-wuw",
      "name": "WUW",
      "slug": "wuw"
    },
    "categoryId": "cat-electronics",
    "dealSectionId": "ds-charge-up",
    "description": "Keep your devices charged on the go with this slim 10000mAh power bank. Features 22.5W fast charging, dual USB outputs, and a built-in LED display showing remaining battery.",
    "features": [
      "10000mAh capacity",
      "22.5W fast charge",
      "Dual USB-A + USB-C output",
      "LED battery indicator",
      "Slim and lightweight design",
      "Multiple safety protections"
    ],
    "whatsInTheBox": [
      "WUW power bank",
      "USB-C charging cable",
      "User manual"
    ],
    "images": [
      {
        "id": "img-108",
        "url": "https://picsum.photos/800/800?random=108",
        "alt": "WUW power bank front",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 19900,
    "originalPrice": 49900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-005",
    "slug": "earldom-usb-c-cable-3-pack-20260226",
    "name": "Earldom USB-C Fast Charge Cable 3-Pack (1m/1.5m/2m)",
    "shortName": "Earldom USB-C Cable 3-Pack",
    "brand": {
      "id": "brand-earldom",
      "name": "Earldom",
      "slug": "earldom"
    },
    "categoryId": "cat-electronics",
    "dealSectionId": "ds-charge-up",
    "description": "Never run short on cables again. This 3-pack includes 1m, 1.5m, and 2m USB-C cables with braided nylon construction and 60W fast charge support.",
    "features": [
      "3 cables: 1m, 1.5m, 2m",
      "60W fast charge support",
      "Braided nylon jacket",
      "Reinforced connectors",
      "Compatible with all USB-C devices",
      "480Mbps data transfer"
    ],
    "whatsInTheBox": [
      "1m USB-C cable",
      "1.5m USB-C cable",
      "2m USB-C cable"
    ],
    "images": [
      {
        "id": "img-109",
        "url": "https://picsum.photos/800/800?random=109",
        "alt": "Earldom USB-C cable pack",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 9900,
    "originalPrice": 24900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-006",
    "slug": "govee-smart-led-strip-lights-5m-20260226",
    "name": "Govee Smart LED Strip Lights 5m RGBIC Wi-Fi",
    "shortName": "Govee LED Strip 5m",
    "brand": {
      "id": "brand-govee",
      "name": "Govee",
      "slug": "govee"
    },
    "categoryId": "cat-electronics",
    "dealSectionId": "ds-tech-me-away",
    "description": "Transform any room with vibrant RGBIC colour lighting. Control via the Govee app or voice assistants. Features music sync mode and 64+ scene modes.",
    "features": [
      "5m RGBIC LED strip",
      "Wi-Fi + Bluetooth control",
      "Alexa & Google Home compatible",
      "Music sync mode",
      "64+ scene modes",
      "App-controlled segmented colours"
    ],
    "whatsInTheBox": [
      "5m LED strip",
      "Controller",
      "Power adapter",
      "Mounting clips (10x)",
      "User manual"
    ],
    "images": [
      {
        "id": "img-110",
        "url": "https://picsum.photos/800/800?random=110",
        "alt": "Govee LED strip lights in room",
        "isDefault": true
      },
      {
        "id": "img-111",
        "url": "https://picsum.photos/800/800?random=111",
        "alt": "Govee LED strip lights close-up",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 34900,
    "originalPrice": 89900,
    "discountPercentage": 61,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 5
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-007",
    "slug": "amazon-fire-tv-stick-4k-20260226",
    "name": "Amazon Fire TV Stick 4K Max Streaming Device",
    "shortName": "Fire TV Stick 4K Max",
    "brand": {
      "id": "brand-amazon",
      "name": "Amazon",
      "slug": "amazon"
    },
    "categoryId": "cat-electronics",
    "dealSectionId": "ds-tech-me-away",
    "description": "Stream in stunning 4K Ultra HD with support for Dolby Vision, HDR10+, and Dolby Atmos audio. Includes Alexa Voice Remote for hands-free control.",
    "features": [
      "4K Ultra HD streaming",
      "Dolby Vision & HDR10+",
      "Dolby Atmos audio",
      "Wi-Fi 6E support",
      "Alexa Voice Remote included",
      "16GB storage"
    ],
    "whatsInTheBox": [
      "Fire TV Stick 4K Max",
      "Alexa Voice Remote",
      "USB cable",
      "Power adapter",
      "HDMI extender",
      "Batteries (2x AAA)"
    ],
    "images": [
      {
        "id": "img-112",
        "url": "https://picsum.photos/800/800?random=112",
        "alt": "Amazon Fire TV Stick 4K",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 99900,
    "originalPrice": 149900,
    "discountPercentage": 33,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-008",
    "slug": "storinity-6-piece-storage-container-set-20260226",
    "name": "Storinity 6-Piece Airtight Storage Container Set",
    "shortName": "Storinity 6pc Containers",
    "brand": {
      "id": "brand-storinity",
      "name": "Storinity",
      "slug": "storinity"
    },
    "categoryId": "cat-home-and-garden",
    "dealSectionId": "ds-storage-solutions",
    "description": "Keep your pantry organised with these stackable airtight containers. BPA-free, dishwasher safe, and perfect for cereals, pasta, flour, and more.",
    "features": [
      "6 containers with locking lids",
      "BPA-free food-safe material",
      "Airtight silicone seal",
      "Stackable design",
      "Dishwasher safe",
      "Clear view for easy identification"
    ],
    "whatsInTheBox": [
      "2x large containers (2.4L)",
      "2x medium containers (1.6L)",
      "2x small containers (0.8L)",
      "6x airtight lids",
      "Label stickers"
    ],
    "images": [
      {
        "id": "img-113",
        "url": "https://picsum.photos/800/800?random=113",
        "alt": "Storinity storage containers set",
        "isDefault": true
      },
      {
        "id": "img-114",
        "url": "https://picsum.photos/800/800?random=114",
        "alt": "Storinity containers stacked",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 29900,
    "originalPrice": 69900,
    "discountPercentage": 57,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-009",
    "slug": "fine-living-blockout-curtain-pair-20260226",
    "name": "Fine Living Premium Blockout Curtain Pair (230x218cm)",
    "shortName": "Fine Living Blockout Curtains",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-home-and-garden",
    "dealSectionId": "ds-home-sweet-home",
    "description": "Block out light and reduce noise with these premium lined curtains. Triple-weave fabric with thermal insulation properties. Includes matching tie-backs.",
    "features": [
      "230cm x 218cm per curtain",
      "Triple-weave blockout fabric",
      "Thermal insulation",
      "Noise reducing",
      "Machine washable",
      "Eyelet heading for easy hanging"
    ],
    "whatsInTheBox": [
      "2x blockout curtains",
      "2x matching tie-backs"
    ],
    "images": [
      {
        "id": "img-115",
        "url": "https://picsum.photos/800/800?random=115",
        "alt": "Fine Living blockout curtains",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-009a",
        "name": "Charcoal",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-009b",
        "name": "Cream",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-009c",
        "name": "Navy",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 39900,
    "originalPrice": 99900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-010",
    "slug": "outdoor-essentials-3m-cantilever-umbrella-20260226",
    "name": "Outdoor Essentials 3m Cantilever Patio Umbrella",
    "shortName": "3m Cantilever Umbrella",
    "brand": {
      "id": "brand-outdoor-essentials",
      "name": "Outdoor Essentials",
      "slug": "outdoor-essentials"
    },
    "categoryId": "cat-home-and-garden",
    "dealSectionId": "ds-garden-glow",
    "description": "Create the perfect outdoor shade with this large 3m cantilever umbrella. Features a crank-and-tilt mechanism, UV50+ protection, and a sturdy steel frame.",
    "features": [
      "3m canopy diameter",
      "UV50+ sun protection",
      "Crank-and-tilt mechanism",
      "Powder-coated steel frame",
      "Waterproof polyester canopy",
      "360-degree rotation"
    ],
    "whatsInTheBox": [
      "Cantilever umbrella",
      "Cross base",
      "Assembly hardware",
      "Installation guide"
    ],
    "images": [
      {
        "id": "img-116",
        "url": "https://picsum.photos/800/800?random=116",
        "alt": "Cantilever patio umbrella",
        "isDefault": true
      },
      {
        "id": "img-117",
        "url": "https://picsum.photos/800/800?random=117",
        "alt": "Umbrella in garden setting",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-010a",
        "name": "Beige",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-010b",
        "name": "Grey",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": false
      }
    ],
    "price": 149900,
    "originalPrice": 349900,
    "discountPercentage": 57,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 3
    },
    "badges": [
      "last-chance"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-011",
    "slug": "fine-living-shaggy-area-rug-160x230-20260226",
    "name": "Fine Living Shaggy Area Rug (160x230cm)",
    "shortName": "Fine Living Shaggy Rug",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-home-and-garden",
    "dealSectionId": "ds-home-sweet-home",
    "description": "Add warmth and texture to any room with this plush shaggy rug. Soft underfoot, non-slip backing, and easy to vacuum.",
    "features": [
      "160cm x 230cm",
      "4cm pile height",
      "Non-slip backing",
      "Stain resistant",
      "Easy to vacuum",
      "Hypoallergenic fibres"
    ],
    "whatsInTheBox": [
      "1x shaggy area rug"
    ],
    "images": [
      {
        "id": "img-118",
        "url": "https://picsum.photos/800/800?random=118",
        "alt": "Fine Living shaggy rug",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-011a",
        "name": "Silver Grey",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-011b",
        "name": "Ivory",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 59900,
    "originalPrice": 149900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-012",
    "slug": "outdoor-essentials-steel-garden-shed-20260226",
    "name": "Outdoor Essentials Galvanised Steel Garden Shed (1.9x1.3m)",
    "shortName": "Steel Garden Shed",
    "brand": {
      "id": "brand-outdoor-essentials",
      "name": "Outdoor Essentials",
      "slug": "outdoor-essentials"
    },
    "categoryId": "cat-home-and-garden",
    "dealSectionId": "ds-garden-glow",
    "description": "Durable galvanised steel garden shed with lockable sliding doors. Perfect for storing tools, bikes, and garden equipment. Weather-resistant with ventilation panels.",
    "features": [
      "1.9m x 1.3m x 1.8m (LxWxH)",
      "Galvanised steel construction",
      "Lockable sliding doors",
      "Ventilation panels",
      "Sloped roof for drainage",
      "Corrosion resistant"
    ],
    "whatsInTheBox": [
      "Steel panel kit",
      "Roof panels",
      "Door assembly",
      "Hardware and fixings",
      "Assembly instructions"
    ],
    "images": [
      {
        "id": "img-119",
        "url": "https://picsum.photos/800/800?random=119",
        "alt": "Steel garden shed exterior",
        "isDefault": true
      },
      {
        "id": "img-120",
        "url": "https://picsum.photos/800/800?random=120",
        "alt": "Garden shed interior view",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 449900,
    "originalPrice": 899900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "sold_out"
    },
    "badges": [],
    "isSoldOut": true,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-013",
    "slug": "sci-core-creatine-monohydrate-500g-20260226",
    "name": "Sci-Core Nutrition Creatine Monohydrate 500g",
    "shortName": "Sci-Core Creatine 500g",
    "brand": {
      "id": "brand-sci-core",
      "name": "Sci-Core Nutrition",
      "slug": "sci-core-nutrition"
    },
    "categoryId": "cat-health-and-beauty",
    "dealSectionId": "ds-fit-and-fabulous",
    "description": "Pharmaceutical-grade creatine monohydrate to boost strength, power, and muscle recovery. Micronised for better absorption. Unflavoured for easy mixing.",
    "features": [
      "500g (100 servings)",
      "Micronised creatine monohydrate",
      "Pharmaceutical grade",
      "Unflavoured",
      "No fillers or additives",
      "5g per serving"
    ],
    "whatsInTheBox": [
      "1x 500g creatine monohydrate tub"
    ],
    "images": [
      {
        "id": "img-121",
        "url": "https://picsum.photos/800/800?random=121",
        "alt": "Sci-Core creatine tub",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 19900,
    "originalPrice": 39900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-014",
    "slug": "dreame-hair-glory-hair-dryer-20260226",
    "name": "Dreame Hair Glory High-Speed Hair Dryer",
    "shortName": "Dreame Hair Glory Dryer",
    "brand": {
      "id": "brand-dreame",
      "name": "Dreame",
      "slug": "dreame"
    },
    "categoryId": "cat-health-and-beauty",
    "dealSectionId": "ds-glow-up",
    "description": "Salon-quality drying at home with 110,000 RPM motor and intelligent heat control. Dries hair in half the time while protecting against heat damage.",
    "features": [
      "110,000 RPM brushless motor",
      "Intelligent heat control",
      "3 speed settings",
      "4 heat settings",
      "Cool shot button",
      "Magnetic nozzle attachments",
      "Lightweight (325g)"
    ],
    "whatsInTheBox": [
      "Dreame Hair Glory dryer",
      "Smoothing nozzle",
      "Styling concentrator",
      "Diffuser",
      "Storage mat"
    ],
    "images": [
      {
        "id": "img-122",
        "url": "https://picsum.photos/800/800?random=122",
        "alt": "Dreame hair dryer front",
        "isDefault": true
      },
      {
        "id": "img-123",
        "url": "https://picsum.photos/800/800?random=123",
        "alt": "Dreame hair dryer with attachments",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-014a",
        "name": "Midnight Blue",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-014b",
        "name": "Rose Gold",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 179900,
    "originalPrice": 399900,
    "discountPercentage": 55,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-015",
    "slug": "russell-hobbs-3-head-rotary-shaver-20260226",
    "name": "Russell Hobbs 3-Head Rotary Shaver with Trimmer",
    "shortName": "Russell Hobbs Rotary Shaver",
    "brand": {
      "id": "brand-russell-hobbs",
      "name": "Russell Hobbs",
      "slug": "russell-hobbs"
    },
    "categoryId": "cat-health-and-beauty",
    "dealSectionId": "ds-glow-up",
    "description": "Get a close, comfortable shave with this 3-head rotary shaver. Features a pop-up trimmer for sideburns and moustache. Wet and dry use. Rechargeable with USB-C.",
    "features": [
      "3 floating heads",
      "Pop-up trimmer",
      "Wet and dry use",
      "USB-C rechargeable",
      "60-minute runtime",
      "LED battery indicator",
      "Travel lock"
    ],
    "whatsInTheBox": [
      "Rotary shaver",
      "USB-C charging cable",
      "Cleaning brush",
      "Travel pouch",
      "User manual"
    ],
    "images": [
      {
        "id": "img-124",
        "url": "https://picsum.photos/800/800?random=124",
        "alt": "Russell Hobbs rotary shaver",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 24900,
    "originalPrice": 59900,
    "discountPercentage": 58,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-016",
    "slug": "sci-core-whey-protein-1kg-20260226",
    "name": "Sci-Core Nutrition 100% Whey Protein 1kg",
    "shortName": "Sci-Core Whey Protein 1kg",
    "brand": {
      "id": "brand-sci-core",
      "name": "Sci-Core Nutrition",
      "slug": "sci-core-nutrition"
    },
    "categoryId": "cat-health-and-beauty",
    "dealSectionId": "ds-fit-and-fabulous",
    "description": "Premium whey protein with 24g protein per serving. Available in Chocolate, Vanilla, and Strawberry. Low in sugar, fast absorbing, and great tasting.",
    "features": [
      "1kg (33 servings)",
      "24g protein per serving",
      "Low sugar formula",
      "Fast absorbing whey concentrate",
      "No amino spiking",
      "Mixes easily"
    ],
    "whatsInTheBox": [
      "1x 1kg whey protein tub"
    ],
    "images": [
      {
        "id": "img-125",
        "url": "https://picsum.photos/800/800?random=125",
        "alt": "Sci-Core whey protein tub",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-016a",
        "name": "Chocolate",
        "optionType": "dropdown",
        "optionLabel": "Flavour",
        "inStock": true
      },
      {
        "id": "v-016b",
        "name": "Vanilla",
        "optionType": "dropdown",
        "optionLabel": "Flavour",
        "inStock": true
      },
      {
        "id": "v-016c",
        "name": "Strawberry",
        "optionType": "dropdown",
        "optionLabel": "Flavour",
        "inStock": false
      }
    ],
    "price": 29900,
    "originalPrice": 59900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 7
    },
    "badges": [
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-017",
    "slug": "premium-arabica-coffee-beans-1kg-20260226",
    "name": "Cape Origin Premium Arabica Coffee Beans 1kg",
    "shortName": "Cape Origin Coffee 1kg",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-food-and-beverages",
    "dealSectionId": "ds-pantry-deals",
    "description": "Single-origin 100% Arabica beans roasted in Cape Town. Medium roast with notes of chocolate, caramel, and citrus. Perfect for espresso, filter, or French press.",
    "features": [
      "1kg whole beans",
      "100% Arabica",
      "Single origin",
      "Medium roast",
      "Roasted in Cape Town",
      "Resealable bag with one-way valve"
    ],
    "whatsInTheBox": [
      "1x 1kg bag of coffee beans"
    ],
    "images": [
      {
        "id": "img-126",
        "url": "https://picsum.photos/800/800?random=126",
        "alt": "Cape Origin coffee beans bag",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 14900,
    "originalPrice": 34900,
    "discountPercentage": 57,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-018",
    "slug": "gourmet-snack-box-20-piece-20260226",
    "name": "SA Gourmet Snack Box - 20 Pieces Assorted",
    "shortName": "Gourmet Snack Box 20pc",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-food-and-beverages",
    "dealSectionId": "ds-pantry-deals",
    "description": "A curated selection of 20 South African gourmet snacks including biltong, droewors, rusks, nut mixes, and dried fruit. Perfect for gifting or treating yourself.",
    "features": [
      "20 individually packed snacks",
      "Includes biltong and droewors",
      "SA-made rusks",
      "Mixed nuts and dried fruit",
      "Gift-ready packaging",
      "No artificial preservatives"
    ],
    "whatsInTheBox": [
      "20x assorted snack items in gift box"
    ],
    "images": [
      {
        "id": "img-127",
        "url": "https://picsum.photos/800/800?random=127",
        "alt": "Gourmet snack box contents",
        "isDefault": true
      },
      {
        "id": "img-128",
        "url": "https://picsum.photos/800/800?random=128",
        "alt": "Snack box gift packaging",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 24900,
    "originalPrice": 49900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-019",
    "slug": "artisan-spice-set-12-piece-20260226",
    "name": "Cape Herb & Spice Artisan Collection 12-Piece Set",
    "shortName": "12pc Spice Set",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-food-and-beverages",
    "dealSectionId": "ds-pantry-deals",
    "description": "Elevate your cooking with this collection of 12 artisan spices and seasonings. Includes smoked paprika, Durban curry, peri-peri, braai spice, and more SA favourites.",
    "features": [
      "12 glass jars with wooden lids",
      "Includes braai spice and peri-peri",
      "Durban curry blend",
      "Smoked paprika",
      "Comes on wooden display rack",
      "No MSG or artificial colours"
    ],
    "whatsInTheBox": [
      "12x spice jars",
      "1x wooden display rack"
    ],
    "images": [
      {
        "id": "img-129",
        "url": "https://picsum.photos/800/800?random=129",
        "alt": "Artisan spice set on rack",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 34900,
    "originalPrice": 79900,
    "discountPercentage": 56,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 4
    },
    "badges": [
      "last-chance"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-020",
    "slug": "rooibos-tea-gift-set-20260226",
    "name": "Cape Rooibos Premium Tea Gift Set (80 Bags)",
    "shortName": "Rooibos Tea Gift Set",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-food-and-beverages",
    "dealSectionId": "ds-pantry-deals",
    "description": "A beautifully packaged collection of 80 rooibos tea bags in 8 unique flavours including classic, vanilla, honeybush, buchu, and citrus blends.",
    "features": [
      "80 tea bags total",
      "8 unique rooibos flavours",
      "Caffeine free",
      "Rich in antioxidants",
      "SA-grown rooibos",
      "Gift box packaging"
    ],
    "whatsInTheBox": [
      "80x rooibos tea bags",
      "1x wooden gift box"
    ],
    "images": [
      {
        "id": "img-130",
        "url": "https://picsum.photos/800/800?random=130",
        "alt": "Rooibos tea gift set",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 19900,
    "originalPrice": 44900,
    "discountPercentage": 56,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-021",
    "slug": "anthony-james-london-emperor-watch-20260226",
    "name": "Anthony James London Emperor Automatic Watch",
    "shortName": "AJ Emperor Watch",
    "brand": {
      "id": "brand-anthony-james",
      "name": "Anthony James London",
      "slug": "anthony-james-london"
    },
    "categoryId": "cat-apparel-and-accessories",
    "dealSectionId": "ds-style-steals",
    "description": "A stunning automatic timepiece with skeleton dial, sapphire crystal glass, and genuine leather strap. Water resistant to 30m. Comes in a luxury presentation box.",
    "features": [
      "Automatic movement (self-winding)",
      "Skeleton dial",
      "Sapphire crystal glass",
      "Genuine leather strap",
      "30m water resistance",
      "Stainless steel case (42mm)"
    ],
    "whatsInTheBox": [
      "Anthony James Emperor watch",
      "Luxury presentation box",
      "Certificate of authenticity",
      "User manual"
    ],
    "images": [
      {
        "id": "img-131",
        "url": "https://picsum.photos/800/800?random=131",
        "alt": "Anthony James Emperor watch face",
        "isDefault": true
      },
      {
        "id": "img-132",
        "url": "https://picsum.photos/800/800?random=132",
        "alt": "Watch on wrist",
        "isDefault": false
      },
      {
        "id": "img-133",
        "url": "https://picsum.photos/800/800?random=133",
        "alt": "Watch in presentation box",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-021a",
        "name": "Silver / Black Leather",
        "optionType": "dropdown",
        "optionLabel": "Style",
        "price": 149900,
        "originalPrice": 599900,
        "inStock": true
      },
      {
        "id": "v-021b",
        "name": "Rose Gold / Brown Leather",
        "optionType": "dropdown",
        "optionLabel": "Style",
        "price": 169900,
        "originalPrice": 649900,
        "inStock": true
      },
      {
        "id": "v-021c",
        "name": "Gold / Navy Leather",
        "optionType": "dropdown",
        "optionLabel": "Style",
        "price": 169900,
        "originalPrice": 649900,
        "inStock": true
      }
    ],
    "price": 149900,
    "originalPrice": 599900,
    "discountPercentage": 75,
    "hasVariantPricing": true,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-022",
    "slug": "forever-new-crystal-pendant-necklace-20260226",
    "name": "Forever New Crystal Pendant Necklace - Sterling Silver",
    "shortName": "Crystal Pendant Necklace",
    "brand": {
      "id": "brand-forever-new",
      "name": "Forever New",
      "slug": "forever-new"
    },
    "categoryId": "cat-apparel-and-accessories",
    "dealSectionId": "ds-style-steals",
    "description": "Elegant sterling silver pendant necklace with Swarovski crystal. Adjustable chain length (40-45cm). Perfect for everyday elegance or gifting.",
    "features": [
      "Sterling silver (925)",
      "Swarovski crystal pendant",
      "Adjustable 40-45cm chain",
      "Lobster clasp closure",
      "Tarnish resistant",
      "Nickel free"
    ],
    "whatsInTheBox": [
      "Crystal pendant necklace",
      "Gift pouch",
      "Polishing cloth"
    ],
    "images": [
      {
        "id": "img-134",
        "url": "https://picsum.photos/800/800?random=134",
        "alt": "Crystal pendant necklace",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 24900,
    "originalPrice": 79900,
    "discountPercentage": 69,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-023",
    "slug": "ven-dens-mens-boxer-trunks-5-pack-20260226",
    "name": "Ven-Dens Men's Cotton Boxer Trunks 5-Pack",
    "shortName": "Ven-Dens 5pk Trunks",
    "brand": {
      "id": "brand-ven-dens",
      "name": "Ven-Dens",
      "slug": "ven-dens"
    },
    "categoryId": "cat-apparel-and-accessories",
    "dealSectionId": "ds-wardrobe-basics",
    "description": "Premium combed cotton boxer trunks in 5 colours. Breathable, comfortable, and designed for all-day wear. Elastic waistband with branded logo.",
    "features": [
      "5 pairs per pack",
      "95% combed cotton, 5% elastane",
      "Breathable fabric",
      "Flat-lock seams",
      "Elastic waistband",
      "Assorted colours"
    ],
    "whatsInTheBox": [
      "5x boxer trunks (Black, Navy, Grey, Charcoal, White)"
    ],
    "images": [
      {
        "id": "img-135",
        "url": "https://picsum.photos/800/800?random=135",
        "alt": "Ven-Dens boxer trunks pack",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-023a",
        "name": "S",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-023b",
        "name": "M",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-023c",
        "name": "L",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-023d",
        "name": "XL",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-023e",
        "name": "XXL",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": false
      }
    ],
    "price": 19900,
    "originalPrice": 49900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-024",
    "slug": "yesplus-polarised-sunglasses-20260226",
    "name": "YesPlus Polarised Sport Sunglasses UV400",
    "shortName": "YesPlus Sport Sunglasses",
    "brand": {
      "id": "brand-yesplus",
      "name": "YesPlus",
      "slug": "yesplus"
    },
    "categoryId": "cat-apparel-and-accessories",
    "dealSectionId": "ds-wardrobe-basics",
    "description": "Lightweight polarised sunglasses with UV400 protection. Ideal for driving, cycling, and outdoor activities. Anti-glare lenses with flexible TR90 frame.",
    "features": [
      "Polarised lenses",
      "UV400 protection",
      "TR90 flexible frame",
      "Anti-glare coating",
      "Lightweight (28g)",
      "Includes hard case"
    ],
    "whatsInTheBox": [
      "YesPlus sunglasses",
      "Hard case",
      "Microfibre cleaning cloth",
      "Drawstring pouch"
    ],
    "images": [
      {
        "id": "img-136",
        "url": "https://picsum.photos/800/800?random=136",
        "alt": "YesPlus sport sunglasses",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-024a",
        "name": "Matte Black / Smoke",
        "optionType": "dropdown",
        "optionLabel": "Style",
        "inStock": true
      },
      {
        "id": "v-024b",
        "name": "Blue / Mirror",
        "optionType": "dropdown",
        "optionLabel": "Style",
        "inStock": true
      }
    ],
    "price": 14900,
    "originalPrice": 39900,
    "discountPercentage": 63,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-025",
    "slug": "anthony-james-london-vintage-chronograph-20260226",
    "name": "Anthony James London Vintage Chronograph Watch",
    "shortName": "AJ Vintage Chronograph",
    "brand": {
      "id": "brand-anthony-james",
      "name": "Anthony James London",
      "slug": "anthony-james-london"
    },
    "categoryId": "cat-apparel-and-accessories",
    "dealSectionId": "ds-style-steals",
    "description": "Classic vintage-style chronograph with Japanese quartz movement, genuine leather strap, and luminous hands. Water resistant to 50m.",
    "features": [
      "Japanese quartz movement",
      "Chronograph function",
      "Luminous hands and markers",
      "Genuine leather strap",
      "50m water resistance",
      "40mm stainless steel case"
    ],
    "whatsInTheBox": [
      "Vintage chronograph watch",
      "Presentation box",
      "Warranty card"
    ],
    "images": [
      {
        "id": "img-137",
        "url": "https://picsum.photos/800/800?random=137",
        "alt": "AJ Vintage chronograph watch",
        "isDefault": true
      },
      {
        "id": "img-138",
        "url": "https://picsum.photos/800/800?random=138",
        "alt": "Watch side profile",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 99900,
    "originalPrice": 499900,
    "discountPercentage": 80,
    "hasVariantPricing": false,
    "stock": {
      "type": "sold_out"
    },
    "badges": [
      "best-seller"
    ],
    "isSoldOut": true,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-026",
    "slug": "ergonomic-mesh-office-chair-20260226",
    "name": "ProSit Ergonomic Mesh Office Chair with Lumbar Support",
    "shortName": "ProSit Office Chair",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-furniture",
    "dealSectionId": "ds-office-upgrade",
    "description": "Work comfortably all day with this ergonomic mesh office chair. Features adjustable lumbar support, armrests, seat height, and tilt tension. Breathable mesh back.",
    "features": [
      "Adjustable lumbar support",
      "Breathable mesh backrest",
      "Adjustable armrests",
      "Seat height adjustment",
      "Tilt tension control",
      "120kg weight capacity",
      "360-degree swivel",
      "Nylon base with smooth-rolling castors"
    ],
    "whatsInTheBox": [
      "Chair components",
      "Assembly hardware",
      "Allen key",
      "Assembly instructions"
    ],
    "images": [
      {
        "id": "img-139",
        "url": "https://picsum.photos/800/800?random=139",
        "alt": "Ergonomic office chair front",
        "isDefault": true
      },
      {
        "id": "img-140",
        "url": "https://picsum.photos/800/800?random=140",
        "alt": "Office chair side view",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-026a",
        "name": "Black",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-026b",
        "name": "Grey",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 199900,
    "originalPrice": 499900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-027",
    "slug": "modern-bedside-table-pair-20260226",
    "name": "Fine Living Modern Bedside Table Pair with Drawers",
    "shortName": "Bedside Table Pair",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-furniture",
    "dealSectionId": "ds-bedroom-bliss",
    "description": "Pair of sleek modern bedside tables with two drawers each. Engineered wood with melamine finish. Easy assembly with all hardware included.",
    "features": [
      "Set of 2 tables",
      "2 drawers per table",
      "Dimensions: 40x35x50cm each",
      "Engineered wood with melamine finish",
      "Metal handles",
      "Easy assembly"
    ],
    "whatsInTheBox": [
      "2x bedside table kits",
      "Assembly hardware",
      "Instructions"
    ],
    "images": [
      {
        "id": "img-141",
        "url": "https://picsum.photos/800/800?random=141",
        "alt": "Modern bedside table pair",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-027a",
        "name": "White",
        "optionType": "color",
        "optionLabel": "Colour",
        "price": 119900,
        "originalPrice": 299900,
        "inStock": true
      },
      {
        "id": "v-027b",
        "name": "Oak",
        "optionType": "color",
        "optionLabel": "Colour",
        "price": 129900,
        "originalPrice": 329900,
        "inStock": true
      },
      {
        "id": "v-027c",
        "name": "Walnut",
        "optionType": "color",
        "optionLabel": "Colour",
        "price": 129900,
        "originalPrice": 329900,
        "inStock": true
      }
    ],
    "price": 119900,
    "originalPrice": 299900,
    "discountPercentage": 60,
    "hasVariantPricing": true,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-028",
    "slug": "mirrored-dressing-table-set-20260226",
    "name": "Glam Mirrored Dressing Table with Stool and Mirror",
    "shortName": "Mirrored Dressing Table Set",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-furniture",
    "dealSectionId": "ds-bedroom-bliss",
    "description": "Glamorous dressing table set with tri-fold mirror, cushioned stool, and 5 storage drawers. White finish with crystal-effect knobs.",
    "features": [
      "Tri-fold mirror with LED lights",
      "5 storage drawers",
      "Cushioned stool included",
      "Crystal-effect drawer knobs",
      "Dimensions: 80x40x130cm",
      "MDF with painted finish"
    ],
    "whatsInTheBox": [
      "Dressing table",
      "Tri-fold mirror",
      "Cushioned stool",
      "LED light strip",
      "Assembly hardware",
      "Instructions"
    ],
    "images": [
      {
        "id": "img-142",
        "url": "https://picsum.photos/800/800?random=142",
        "alt": "Mirrored dressing table set",
        "isDefault": true
      },
      {
        "id": "img-143",
        "url": "https://picsum.photos/800/800?random=143",
        "alt": "Dressing table detail",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 249900,
    "originalPrice": 599900,
    "discountPercentage": 58,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 2
    },
    "badges": [
      "last-chance"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-029",
    "slug": "queen-memory-foam-mattress-20260226",
    "name": "DreamRest Queen Memory Foam Mattress (25cm)",
    "shortName": "Queen Memory Foam Mattress",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-furniture",
    "dealSectionId": "ds-bedroom-bliss",
    "description": "Sleep better on 25cm of layered memory foam and pocket springs. CertiPUR-US certified foam with cooling gel layer. Compressed and rolled for easy delivery.",
    "features": [
      "Queen size (152x188cm)",
      "25cm total height",
      "Cooling gel memory foam",
      "Pocket spring support layer",
      "CertiPUR-US certified",
      "Hypoallergenic cover",
      "10-year warranty"
    ],
    "whatsInTheBox": [
      "Queen memory foam mattress (compressed/rolled)"
    ],
    "images": [
      {
        "id": "img-144",
        "url": "https://picsum.photos/800/800?random=144",
        "alt": "Memory foam mattress",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 399900,
    "originalPrice": 899900,
    "discountPercentage": 56,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-030",
    "slug": "standing-desk-converter-20260226",
    "name": "ErgoRise Standing Desk Converter - Height Adjustable",
    "shortName": "Standing Desk Converter",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-furniture",
    "dealSectionId": "ds-office-upgrade",
    "description": "Convert any desk into a standing desk. Gas spring mechanism for smooth height adjustment. Fits up to 2 monitors and a keyboard. No assembly required.",
    "features": [
      "Gas spring height adjustment",
      "Fits 2 monitors + keyboard",
      "Wide platform (80x50cm)",
      "15kg weight capacity",
      "No assembly required",
      "Anti-slip pads"
    ],
    "whatsInTheBox": [
      "Standing desk converter (fully assembled)"
    ],
    "images": [
      {
        "id": "img-145",
        "url": "https://picsum.photos/800/800?random=145",
        "alt": "Standing desk converter in use",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 179900,
    "originalPrice": 399900,
    "discountPercentage": 55,
    "hasVariantPricing": false,
    "stock": {
      "type": "sold_out"
    },
    "badges": [],
    "isSoldOut": true,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-031",
    "slug": "foldable-walking-pad-treadmill-20260226",
    "name": "FitWalk Foldable Walking Pad Treadmill",
    "shortName": "FitWalk Walking Pad",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-sporting-goods",
    "dealSectionId": "ds-home-gym",
    "description": "Walk or jog at home with this ultra-slim foldable walking pad. Fits under a desk for active working. Speed range 1-6 km/h. Remote control included.",
    "features": [
      "Speed range: 1-6 km/h",
      "Ultra-slim: 5.5cm height",
      "Foldable design",
      "Remote control included",
      "LED speed display",
      "100kg weight capacity",
      "Quiet motor (<50dB)"
    ],
    "whatsInTheBox": [
      "Walking pad",
      "Remote control",
      "Power adapter",
      "Lubricant bottle",
      "User manual"
    ],
    "images": [
      {
        "id": "img-146",
        "url": "https://picsum.photos/800/800?random=146",
        "alt": "Foldable walking pad",
        "isDefault": true
      },
      {
        "id": "img-147",
        "url": "https://picsum.photos/800/800?random=147",
        "alt": "Walking pad under desk",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 299900,
    "originalPrice": 699900,
    "discountPercentage": 57,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-032",
    "slug": "vibration-plate-fitness-machine-20260226",
    "name": "PowerVibe Vibration Plate Fitness Machine",
    "shortName": "PowerVibe Vibration Plate",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-sporting-goods",
    "dealSectionId": "ds-home-gym",
    "description": "Full-body vibration training with 99 speed levels and 5 preset programmes. Includes resistance bands. Compact design with Bluetooth speaker.",
    "features": [
      "99 speed levels",
      "5 preset programmes",
      "Bluetooth speaker",
      "Resistance bands included",
      "150kg weight capacity",
      "LED display",
      "Remote control"
    ],
    "whatsInTheBox": [
      "Vibration plate",
      "2x resistance bands",
      "Remote control",
      "Power cable",
      "User manual"
    ],
    "images": [
      {
        "id": "img-148",
        "url": "https://picsum.photos/800/800?random=148",
        "alt": "Vibration plate machine",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 179900,
    "originalPrice": 449900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-033",
    "slug": "adjustable-dumbbell-set-24kg-20260226",
    "name": "IronGrip Adjustable Dumbbell Set 24kg (Pair)",
    "shortName": "Adjustable Dumbbells 24kg",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-sporting-goods",
    "dealSectionId": "ds-home-gym",
    "description": "Replace 15 sets of dumbbells with one adjustable pair. Quick-change dial mechanism adjusts from 2.5kg to 24kg per dumbbell in 2.5kg increments.",
    "features": [
      "2.5-24kg per dumbbell",
      "2.5kg increment adjustment",
      "Quick-change dial mechanism",
      "Replaces 15 dumbbell sets",
      "Anti-slip grip",
      "Storage tray included"
    ],
    "whatsInTheBox": [
      "2x adjustable dumbbells",
      "2x storage trays"
    ],
    "images": [
      {
        "id": "img-149",
        "url": "https://picsum.photos/800/800?random=149",
        "alt": "Adjustable dumbbell set",
        "isDefault": true
      },
      {
        "id": "img-150",
        "url": "https://picsum.photos/800/800?random=150",
        "alt": "Dumbbell dial mechanism",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 349900,
    "originalPrice": 799900,
    "discountPercentage": 56,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 6
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-034",
    "slug": "yoga-mat-premium-6mm-20260226",
    "name": "ZenFlex Premium Yoga Mat 6mm with Carry Strap",
    "shortName": "ZenFlex Yoga Mat",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-sporting-goods",
    "dealSectionId": "ds-get-active",
    "description": "Non-slip TPE yoga mat with alignment lines. Eco-friendly, latex-free material. 6mm cushioning for joint protection. Includes carry strap.",
    "features": [
      "183x61cm",
      "6mm thickness",
      "Non-slip texture both sides",
      "Alignment guide lines",
      "TPE eco-friendly material",
      "Carry strap included",
      "Lightweight (0.8kg)"
    ],
    "whatsInTheBox": [
      "Yoga mat",
      "Carry strap"
    ],
    "images": [
      {
        "id": "img-151",
        "url": "https://picsum.photos/800/800?random=151",
        "alt": "Premium yoga mat rolled",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-034a",
        "name": "Purple",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-034b",
        "name": "Teal",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-034c",
        "name": "Black",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 24900,
    "originalPrice": 59900,
    "discountPercentage": 58,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-035",
    "slug": "resistance-band-set-5-piece-20260226",
    "name": "FitBand Resistance Band Set - 5 Levels",
    "shortName": "Resistance Band Set 5pc",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-sporting-goods",
    "dealSectionId": "ds-get-active",
    "description": "5 colour-coded resistance bands from light to extra heavy. Natural latex with fabric coating. Includes door anchor, handles, and ankle straps.",
    "features": [
      "5 resistance levels",
      "Natural latex with fabric coating",
      "Door anchor included",
      "2x handles",
      "2x ankle straps",
      "Carry bag"
    ],
    "whatsInTheBox": [
      "5x resistance bands",
      "1x door anchor",
      "2x handles",
      "2x ankle straps",
      "1x carry bag"
    ],
    "images": [
      {
        "id": "img-152",
        "url": "https://picsum.photos/800/800?random=152",
        "alt": "Resistance band set",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 14900,
    "originalPrice": 39900,
    "discountPercentage": 63,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-036",
    "slug": "asics-gel-venture-9-trail-20260226",
    "name": "ASICS Gel-Venture 9 Trail Running Shoes",
    "shortName": "ASICS Gel-Venture 9",
    "brand": {
      "id": "brand-asics",
      "name": "ASICS",
      "slug": "asics"
    },
    "categoryId": "cat-shoes",
    "dealSectionId": "ds-step-it-up",
    "description": "Hit the trails with confidence in the ASICS Gel-Venture 9. GEL technology cushioning, trail-specific outsole, and breathable mesh upper for all-terrain comfort.",
    "features": [
      "GEL technology cushioning",
      "Trail-specific outsole",
      "OrthoLite sockliner",
      "Breathable mesh upper",
      "Rearfoot GEL absorption",
      "Durable rubber outsole"
    ],
    "whatsInTheBox": [
      "1x pair ASICS Gel-Venture 9"
    ],
    "images": [
      {
        "id": "img-153",
        "url": "https://picsum.photos/800/800?random=153",
        "alt": "ASICS Gel-Venture 9 side",
        "isDefault": true
      },
      {
        "id": "img-154",
        "url": "https://picsum.photos/800/800?random=154",
        "alt": "ASICS Gel-Venture 9 sole",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-036a",
        "name": "UK 7",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-036b",
        "name": "UK 8",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-036c",
        "name": "UK 9",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-036d",
        "name": "UK 10",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-036e",
        "name": "UK 11",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": false
      }
    ],
    "price": 89900,
    "originalPrice": 179900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-037",
    "slug": "asics-gel-kayano-30-20260226",
    "name": "ASICS Gel-Kayano 30 Road Running Shoes",
    "shortName": "ASICS Gel-Kayano 30",
    "brand": {
      "id": "brand-asics",
      "name": "ASICS",
      "slug": "asics"
    },
    "categoryId": "cat-shoes",
    "dealSectionId": "ds-step-it-up",
    "description": "Premium stability running shoe with FF BLAST PLUS ECO cushioning and 4D guidance system. Engineered mesh upper adapts to your stride.",
    "features": [
      "FF BLAST PLUS ECO cushioning",
      "4D Guidance System",
      "Engineered knit upper",
      "AHARPLUS outsole",
      "OrthoLite X-40 sockliner",
      "Reflective details"
    ],
    "whatsInTheBox": [
      "1x pair ASICS Gel-Kayano 30"
    ],
    "images": [
      {
        "id": "img-155",
        "url": "https://picsum.photos/800/800?random=155",
        "alt": "ASICS Gel-Kayano 30 side view",
        "isDefault": true
      },
      {
        "id": "img-156",
        "url": "https://picsum.photos/800/800?random=156",
        "alt": "Gel-Kayano 30 on foot",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-037a",
        "name": "UK 7",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": false
      },
      {
        "id": "v-037b",
        "name": "UK 8",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-037c",
        "name": "UK 9",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-037d",
        "name": "UK 10",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-037e",
        "name": "UK 11",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-037f",
        "name": "UK 12",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      }
    ],
    "price": 159900,
    "originalPrice": 319900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 4
    },
    "badges": [
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-038",
    "slug": "casual-canvas-sneakers-20260226",
    "name": "UrbanStep Canvas Casual Sneakers",
    "shortName": "UrbanStep Canvas Sneakers",
    "brand": {
      "id": "brand-ven-dens",
      "name": "Ven-Dens",
      "slug": "ven-dens"
    },
    "categoryId": "cat-shoes",
    "dealSectionId": "ds-everyday-kicks",
    "description": "Classic canvas sneakers for everyday wear. Vulcanised rubber sole, cushioned insole, and reinforced toe cap. Unisex sizing.",
    "features": [
      "Canvas upper",
      "Vulcanised rubber sole",
      "Cushioned insole",
      "Reinforced toe cap",
      "Unisex sizing",
      "Machine washable"
    ],
    "whatsInTheBox": [
      "1x pair canvas sneakers"
    ],
    "images": [
      {
        "id": "img-157",
        "url": "https://picsum.photos/800/800?random=157",
        "alt": "Canvas sneakers side view",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-038a",
        "name": "UK 5",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-038b",
        "name": "UK 6",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-038c",
        "name": "UK 7",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-038d",
        "name": "UK 8",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-038e",
        "name": "UK 9",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-038f",
        "name": "UK 10",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      }
    ],
    "price": 19900,
    "originalPrice": 49900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "flash-deal",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-039",
    "slug": "leather-chelsea-boots-20260226",
    "name": "BrownStone Genuine Leather Chelsea Boots",
    "shortName": "BrownStone Chelsea Boots",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-shoes",
    "dealSectionId": "ds-everyday-kicks",
    "description": "Timeless Chelsea boots in genuine leather with elastic side panels. Goodyear welted sole for durability. Perfect for work or smart casual occasions.",
    "features": [
      "Genuine leather upper",
      "Goodyear welted sole",
      "Elastic side panels",
      "Pull tab",
      "Cushioned insole",
      "Available in whole sizes"
    ],
    "whatsInTheBox": [
      "1x pair Chelsea boots",
      "Shoe bag"
    ],
    "images": [
      {
        "id": "img-158",
        "url": "https://picsum.photos/800/800?random=158",
        "alt": "Chelsea boots pair",
        "isDefault": true
      },
      {
        "id": "img-159",
        "url": "https://picsum.photos/800/800?random=159",
        "alt": "Chelsea boot side detail",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-039a",
        "name": "UK 7",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-039b",
        "name": "UK 8",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-039c",
        "name": "UK 9",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-039d",
        "name": "UK 10",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-039e",
        "name": "UK 11",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": false
      }
    ],
    "price": 69900,
    "originalPrice": 179900,
    "discountPercentage": 61,
    "hasVariantPricing": false,
    "stock": {
      "type": "sold_out"
    },
    "badges": [],
    "isSoldOut": true,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-040",
    "slug": "memory-foam-slide-sandals-20260226",
    "name": "ComfyStep Memory Foam Slide Sandals",
    "shortName": "ComfyStep Slides",
    "brand": {
      "id": "brand-ven-dens",
      "name": "Ven-Dens",
      "slug": "ven-dens"
    },
    "categoryId": "cat-shoes",
    "dealSectionId": "ds-everyday-kicks",
    "description": "Ultra-comfortable memory foam slides for home or poolside. EVA sole with textured footbed for grip. Lightweight and quick-drying.",
    "features": [
      "Memory foam footbed",
      "EVA sole",
      "Textured non-slip base",
      "Quick-drying",
      "Lightweight",
      "Unisex sizing"
    ],
    "whatsInTheBox": [
      "1x pair slide sandals"
    ],
    "images": [
      {
        "id": "img-160",
        "url": "https://picsum.photos/800/800?random=160",
        "alt": "Memory foam slide sandals",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-040a",
        "name": "UK 5/6",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-040b",
        "name": "UK 7/8",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-040c",
        "name": "UK 9/10",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-040d",
        "name": "UK 11/12",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      }
    ],
    "price": 9900,
    "originalPrice": 24900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-041",
    "slug": "hardshell-luggage-set-3-piece-20260226",
    "name": "TravelPro 3-Piece Hardshell Luggage Set (20\"/24\"/28\")",
    "shortName": "3pc Luggage Set",
    "brand": {
      "id": "brand-safeway",
      "name": "Safeway",
      "slug": "safeway"
    },
    "categoryId": "cat-luggage-and-bags",
    "dealSectionId": "ds-travel-ready",
    "description": "Complete luggage set with cabin, medium, and large suitcases. ABS hardshell with 360-degree spinner wheels. TSA-approved combination lock. Telescopic handle.",
    "features": [
      "3 sizes: 20\" cabin, 24\" medium, 28\" large",
      "ABS hardshell",
      "360-degree spinner wheels",
      "TSA combination lock",
      "Telescopic aluminium handle",
      "Interior dividers and straps",
      "Expandable zippers"
    ],
    "whatsInTheBox": [
      "20\" cabin suitcase",
      "24\" medium suitcase",
      "28\" large suitcase"
    ],
    "images": [
      {
        "id": "img-161",
        "url": "https://picsum.photos/800/800?random=161",
        "alt": "Three-piece luggage set",
        "isDefault": true
      },
      {
        "id": "img-162",
        "url": "https://picsum.photos/800/800?random=162",
        "alt": "Luggage set open",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-041a",
        "name": "Black",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-041b",
        "name": "Navy",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-041c",
        "name": "Rose Gold",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": false
      }
    ],
    "price": 199900,
    "originalPrice": 599900,
    "discountPercentage": 67,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-042",
    "slug": "anti-theft-laptop-backpack-20260226",
    "name": "SecureCarry Anti-Theft Laptop Backpack (15.6\")",
    "shortName": "Anti-Theft Laptop Backpack",
    "brand": {
      "id": "brand-greatthink",
      "name": "GreatThink",
      "slug": "greatthink"
    },
    "categoryId": "cat-luggage-and-bags",
    "dealSectionId": "ds-travel-ready",
    "description": "Protect your gear with this anti-theft backpack featuring hidden zippers, RFID pocket, and USB charging port. Fits laptops up to 15.6 inches. Water-resistant fabric.",
    "features": [
      "Fits 15.6\" laptop",
      "Hidden anti-theft zippers",
      "RFID blocking pocket",
      "USB charging port",
      "Water-resistant fabric",
      "Padded back panel",
      "Luggage strap"
    ],
    "whatsInTheBox": [
      "Anti-theft backpack",
      "USB charging cable"
    ],
    "images": [
      {
        "id": "img-163",
        "url": "https://picsum.photos/800/800?random=163",
        "alt": "Anti-theft backpack front",
        "isDefault": true
      },
      {
        "id": "img-164",
        "url": "https://picsum.photos/800/800?random=164",
        "alt": "Backpack compartments open",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 39900,
    "originalPrice": 89900,
    "discountPercentage": 56,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-043",
    "slug": "canvas-duffel-bag-50l-20260226",
    "name": "Outdoor Essentials Canvas Duffel Bag 50L",
    "shortName": "Canvas Duffel Bag 50L",
    "brand": {
      "id": "brand-outdoor-essentials",
      "name": "Outdoor Essentials",
      "slug": "outdoor-essentials"
    },
    "categoryId": "cat-luggage-and-bags",
    "dealSectionId": "ds-travel-ready",
    "description": "Rugged 50L canvas duffel with leather trim. Ideal for weekends away, gym, or travel. Features shoe compartment, multiple pockets, and detachable shoulder strap.",
    "features": [
      "50L capacity",
      "Waxed canvas with leather trim",
      "Shoe compartment",
      "Internal zip pocket",
      "Detachable shoulder strap",
      "Brass hardware",
      "Water-resistant coating"
    ],
    "whatsInTheBox": [
      "Canvas duffel bag",
      "Detachable shoulder strap"
    ],
    "images": [
      {
        "id": "img-165",
        "url": "https://picsum.photos/800/800?random=165",
        "alt": "Canvas duffel bag",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-043a",
        "name": "Army Green",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-043b",
        "name": "Charcoal",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 44900,
    "originalPrice": 99900,
    "discountPercentage": 55,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-044",
    "slug": "travel-organiser-set-6-piece-20260226",
    "name": "PackSmart Travel Organiser Packing Cubes 6-Piece",
    "shortName": "Packing Cubes 6pc Set",
    "brand": {
      "id": "brand-safeway",
      "name": "Safeway",
      "slug": "safeway"
    },
    "categoryId": "cat-luggage-and-bags",
    "dealSectionId": "ds-travel-ready",
    "description": "Stay organised on the go with 6 packing cubes in various sizes. Mesh top panels for visibility. Durable nylon with reinforced seams.",
    "features": [
      "6 cubes: 2 large, 2 medium, 2 small",
      "Mesh top panels",
      "Durable nylon fabric",
      "Reinforced zippers",
      "Lightweight",
      "Compression design"
    ],
    "whatsInTheBox": [
      "2x large cubes",
      "2x medium cubes",
      "2x small cubes"
    ],
    "images": [
      {
        "id": "img-166",
        "url": "https://picsum.photos/800/800?random=166",
        "alt": "Packing cubes set",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-044a",
        "name": "Grey",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-044b",
        "name": "Teal",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 14900,
    "originalPrice": 34900,
    "discountPercentage": 57,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-045",
    "slug": "socket-set-150-piece-20260226",
    "name": "CraftPro 150-Piece Socket and Tool Set",
    "shortName": "150pc Socket Set",
    "brand": {
      "id": "brand-orionedge",
      "name": "ORIONEDGE",
      "slug": "orionedge"
    },
    "categoryId": "cat-hardware",
    "dealSectionId": "ds-tool-time",
    "description": "Comprehensive socket and tool set with metric and imperial sizes. Chrome vanadium steel for durability. Includes ratchets, extensions, hex keys, and more in a blow-mould case.",
    "features": [
      "150 pieces",
      "Chrome vanadium steel",
      "Metric and imperial sizes",
      "1/4\" and 1/2\" drive ratchets",
      "Extensions and adaptors",
      "Blow-mould carry case"
    ],
    "whatsInTheBox": [
      "150-piece socket and tool set",
      "Blow-mould carry case"
    ],
    "images": [
      {
        "id": "img-167",
        "url": "https://picsum.photos/800/800?random=167",
        "alt": "Socket set open case",
        "isDefault": true
      },
      {
        "id": "img-168",
        "url": "https://picsum.photos/800/800?random=168",
        "alt": "Socket set close-up",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 69900,
    "originalPrice": 179900,
    "discountPercentage": 61,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-046",
    "slug": "heavy-duty-5-tier-shelf-20260226",
    "name": "ORIONEDGE Heavy-Duty 5-Tier Storage Shelf",
    "shortName": "5-Tier Storage Shelf",
    "brand": {
      "id": "brand-orionedge",
      "name": "ORIONEDGE",
      "slug": "orionedge"
    },
    "categoryId": "cat-hardware",
    "dealSectionId": "ds-tool-time",
    "description": "Industrial-strength steel shelving unit with 5 adjustable shelves. Each shelf holds up to 175kg. Perfect for garages, workshops, and storerooms.",
    "features": [
      "5 adjustable shelves",
      "175kg per shelf capacity",
      "Powder-coated steel",
      "Dimensions: 180x90x40cm",
      "Boltless assembly",
      "Adjustable feet for levelling"
    ],
    "whatsInTheBox": [
      "Shelf frame components",
      "5x shelf panels",
      "Assembly hardware",
      "Instructions"
    ],
    "images": [
      {
        "id": "img-169",
        "url": "https://picsum.photos/800/800?random=169",
        "alt": "Heavy-duty storage shelf",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 89900,
    "originalPrice": 199900,
    "discountPercentage": 55,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-047",
    "slug": "digital-safe-25l-20260226",
    "name": "SecureVault Digital Safe 25L",
    "shortName": "Digital Safe 25L",
    "brand": {
      "id": "brand-orionedge",
      "name": "ORIONEDGE",
      "slug": "orionedge"
    },
    "categoryId": "cat-hardware",
    "dealSectionId": "ds-secure-it",
    "description": "Protect your valuables with this 25-litre digital safe. Features electronic keypad with backup key, pre-drilled mounting holes, and 2 live-locking bolts.",
    "features": [
      "25L capacity",
      "Electronic keypad",
      "Backup key override",
      "Pre-drilled mounting holes",
      "2 live-locking bolts",
      "Interior LED light",
      "Low battery warning"
    ],
    "whatsInTheBox": [
      "Digital safe",
      "2x backup keys",
      "Mounting bolts",
      "4x AA batteries",
      "User manual"
    ],
    "images": [
      {
        "id": "img-170",
        "url": "https://picsum.photos/800/800?random=170",
        "alt": "Digital safe open",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 59900,
    "originalPrice": 149900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 3
    },
    "badges": [
      "last-chance"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-048",
    "slug": "cordless-drill-set-20260226",
    "name": "CraftPro 20V Cordless Drill Driver Set",
    "shortName": "Cordless Drill Set",
    "brand": {
      "id": "brand-orionedge",
      "name": "ORIONEDGE",
      "slug": "orionedge"
    },
    "categoryId": "cat-hardware",
    "dealSectionId": "ds-tool-time",
    "description": "Powerful 20V lithium-ion cordless drill with 2-speed gearbox, 50 Nm torque, and 13mm chuck. Includes 2 batteries, charger, and 50-piece bit set in carry case.",
    "features": [
      "20V lithium-ion",
      "2-speed gearbox",
      "50 Nm max torque",
      "13mm keyless chuck",
      "LED work light",
      "21+1 torque settings"
    ],
    "whatsInTheBox": [
      "Cordless drill driver",
      "2x 2.0Ah batteries",
      "Fast charger",
      "50-piece bit set",
      "Carry case"
    ],
    "images": [
      {
        "id": "img-171",
        "url": "https://picsum.photos/800/800?random=171",
        "alt": "Cordless drill set",
        "isDefault": true
      },
      {
        "id": "img-172",
        "url": "https://picsum.photos/800/800?random=172",
        "alt": "Drill with bits",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 99900,
    "originalPrice": 249900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "sold_out"
    },
    "badges": [],
    "isSoldOut": true,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-049",
    "slug": "pebble-gear-kids-tablet-7-inch-20260226",
    "name": "Pebble Gear Kids Tablet 7\" (16GB) with Bumper Case",
    "shortName": "Pebble Gear Kids Tablet",
    "brand": {
      "id": "brand-pebble-gear",
      "name": "Pebble Gear",
      "slug": "pebble-gear"
    },
    "categoryId": "cat-baby-and-toddler",
    "dealSectionId": "ds-little-ones",
    "description": "Safe and fun tablet designed for kids aged 3-8. Pre-loaded with 500+ games and apps. Parental controls, blue-light filter, and drop-proof silicone bumper case included.",
    "features": [
      "7-inch IPS display",
      "16GB storage (expandable)",
      "Blue light filter",
      "Parental controls",
      "500+ pre-loaded apps",
      "Drop-proof bumper case",
      "10-hour battery life"
    ],
    "whatsInTheBox": [
      "Pebble Gear kids tablet",
      "Silicone bumper case",
      "USB-C charging cable",
      "Quick start guide"
    ],
    "images": [
      {
        "id": "img-173",
        "url": "https://picsum.photos/800/800?random=173",
        "alt": "Pebble Gear kids tablet with case",
        "isDefault": true
      },
      {
        "id": "img-174",
        "url": "https://picsum.photos/800/800?random=174",
        "alt": "Kids tablet screen",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-049a",
        "name": "Blue Bumper",
        "optionType": "color",
        "optionLabel": "Case Colour",
        "inStock": true
      },
      {
        "id": "v-049b",
        "name": "Pink Bumper",
        "optionType": "color",
        "optionLabel": "Case Colour",
        "inStock": true
      }
    ],
    "price": 149900,
    "originalPrice": 299900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-050",
    "slug": "wooden-building-blocks-100-piece-20260226",
    "name": "KiddoBlocks Wooden Building Blocks 100-Piece Set",
    "shortName": "100pc Building Blocks",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-baby-and-toddler",
    "dealSectionId": "ds-little-ones",
    "description": "Natural wooden building blocks in various shapes and colours. Non-toxic paint, sanded smooth edges, and comes in a convenient canvas storage bag. Ages 2+.",
    "features": [
      "100 wooden blocks",
      "Various shapes and colours",
      "Non-toxic water-based paint",
      "Smooth sanded edges",
      "Canvas storage bag",
      "Ages 2+"
    ],
    "whatsInTheBox": [
      "100x wooden blocks",
      "Canvas storage bag"
    ],
    "images": [
      {
        "id": "img-175",
        "url": "https://picsum.photos/800/800?random=175",
        "alt": "Wooden building blocks set",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 19900,
    "originalPrice": 44900,
    "discountPercentage": 56,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-051",
    "slug": "baby-carrier-ergonomic-20260226",
    "name": "SnugBaby Ergonomic Baby Carrier (3.5-15kg)",
    "shortName": "SnugBaby Carrier",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-baby-and-toddler",
    "dealSectionId": "ds-little-ones",
    "description": "Ergonomic baby carrier with 4 carry positions. Wide seat supports healthy hip development. Padded shoulder straps and lumbar support for parent comfort.",
    "features": [
      "4 carry positions",
      "Wide ergonomic seat",
      "Padded shoulder straps",
      "Lumbar support belt",
      "3.5-15kg capacity",
      "Breathable mesh panel",
      "Machine washable"
    ],
    "whatsInTheBox": [
      "Baby carrier",
      "Newborn insert",
      "Hood/sun shade",
      "Instruction manual"
    ],
    "images": [
      {
        "id": "img-176",
        "url": "https://picsum.photos/800/800?random=176",
        "alt": "Ergonomic baby carrier",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-051a",
        "name": "Charcoal",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-051b",
        "name": "Navy",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 49900,
    "originalPrice": 129900,
    "discountPercentage": 62,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-052",
    "slug": "toddler-sleep-suit-3-pack-20260226",
    "name": "Bunny Hop Toddler Sleep Suit 3-Pack (0-12 months)",
    "shortName": "Sleep Suit 3-Pack",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-baby-and-toddler",
    "dealSectionId": "ds-tiny-fashion",
    "description": "Soft 100% cotton sleep suits with zip-front closure for easy nappy changes. Available in adorable prints. OEKO-TEX certified.",
    "features": [
      "3 sleep suits",
      "100% cotton",
      "Zip-front closure",
      "OEKO-TEX certified",
      "Machine washable",
      "Adorable prints"
    ],
    "whatsInTheBox": [
      "3x toddler sleep suits"
    ],
    "images": [
      {
        "id": "img-177",
        "url": "https://picsum.photos/800/800?random=177",
        "alt": "Toddler sleep suits",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-052a",
        "name": "0-3 months",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-052b",
        "name": "3-6 months",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      },
      {
        "id": "v-052c",
        "name": "6-12 months",
        "optionType": "size",
        "optionLabel": "Size",
        "inStock": true
      }
    ],
    "price": 14900,
    "originalPrice": 34900,
    "discountPercentage": 57,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-053",
    "slug": "label-printer-wireless-20260226",
    "name": "PrintPro Wireless Thermal Label Printer",
    "shortName": "Wireless Label Printer",
    "brand": {
      "id": "brand-greatthink",
      "name": "GreatThink",
      "slug": "greatthink"
    },
    "categoryId": "cat-business-and-industrial",
    "dealSectionId": "ds-office-essentials",
    "description": "Compact wireless label printer for shipping labels, barcodes, and product stickers. Works with all major e-commerce platforms. No ink needed — thermal printing.",
    "features": [
      "Wireless (Wi-Fi + Bluetooth)",
      "Thermal printing (no ink)",
      "Prints up to 150mm/s",
      "203 DPI resolution",
      "Compatible with major platforms",
      "Label auto-detection",
      "Supports 25-108mm label width"
    ],
    "whatsInTheBox": [
      "Label printer",
      "USB cable",
      "Power adapter",
      "Sample labels",
      "Quick start guide"
    ],
    "images": [
      {
        "id": "img-178",
        "url": "https://picsum.photos/800/800?random=178",
        "alt": "Wireless label printer",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 149900,
    "originalPrice": 349900,
    "discountPercentage": 57,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-054",
    "slug": "desk-organiser-set-20260226",
    "name": "Executive Desk Organiser 5-Piece Set - Faux Leather",
    "shortName": "Desk Organiser Set",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-business-and-industrial",
    "dealSectionId": "ds-office-essentials",
    "description": "Keep your workspace tidy with this 5-piece faux leather desk organiser set. Includes document tray, pen holder, memo holder, business card holder, and mouse pad.",
    "features": [
      "5-piece set",
      "Premium faux leather",
      "Document tray",
      "Pen holder",
      "Business card holder",
      "Memo holder",
      "Mouse pad"
    ],
    "whatsInTheBox": [
      "Document tray",
      "Pen holder",
      "Memo holder",
      "Business card holder",
      "Mouse pad"
    ],
    "images": [
      {
        "id": "img-179",
        "url": "https://picsum.photos/800/800?random=179",
        "alt": "Desk organiser set",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-054a",
        "name": "Black",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-054b",
        "name": "Brown",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 29900,
    "originalPrice": 79900,
    "discountPercentage": 63,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-055",
    "slug": "whiteboard-magnetic-120x90-20260226",
    "name": "OfficePro Magnetic Whiteboard 120x90cm with Accessories",
    "shortName": "Magnetic Whiteboard 120x90",
    "brand": {
      "id": "brand-greatthink",
      "name": "GreatThink",
      "slug": "greatthink"
    },
    "categoryId": "cat-business-and-industrial",
    "dealSectionId": "ds-office-essentials",
    "description": "Double-sided magnetic whiteboard with aluminium frame. Includes markers, magnets, and eraser. Wall-mountable with included hardware.",
    "features": [
      "120cm x 90cm",
      "Double-sided magnetic surface",
      "Aluminium frame",
      "Wall-mount hardware",
      "Marker tray",
      "Easy-clean surface"
    ],
    "whatsInTheBox": [
      "Whiteboard",
      "4x dry-erase markers",
      "6x magnets",
      "1x eraser",
      "Wall-mount kit"
    ],
    "images": [
      {
        "id": "img-180",
        "url": "https://picsum.photos/800/800?random=180",
        "alt": "Magnetic whiteboard",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 44900,
    "originalPrice": 99900,
    "discountPercentage": 55,
    "hasVariantPricing": false,
    "stock": {
      "type": "sold_out"
    },
    "badges": [],
    "isSoldOut": true,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-056",
    "slug": "sa-bestseller-book-bundle-20260226",
    "name": "SA Bestseller Book Bundle - 5 Novels",
    "shortName": "SA Book Bundle 5pk",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-media",
    "dealSectionId": "ds-page-turners",
    "description": "A curated collection of 5 bestselling South African novels. Includes works from acclaimed local authors. Perfect for book lovers or gifting.",
    "features": [
      "5 bestselling novels",
      "SA authors featured",
      "Paperback editions",
      "Mix of fiction genres",
      "Gift-wrapped option available"
    ],
    "whatsInTheBox": [
      "5x paperback novels"
    ],
    "images": [
      {
        "id": "img-181",
        "url": "https://picsum.photos/800/800?random=181",
        "alt": "Book bundle collection",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 24900,
    "originalPrice": 74900,
    "discountPercentage": 67,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-057",
    "slug": "streaming-gift-card-r500-20260226",
    "name": "Streaming Service Gift Card - R500",
    "shortName": "Streaming Gift Card R500",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-media",
    "dealSectionId": "ds-page-turners",
    "description": "R500 gift card redeemable for streaming subscriptions. Works with major streaming platforms. Delivered as digital code via email.",
    "features": [
      "R500 value",
      "Digital delivery",
      "Instant email delivery",
      "No expiry date",
      "Works with major platforms"
    ],
    "whatsInTheBox": [
      "Digital gift card code (delivered via email)"
    ],
    "images": [
      {
        "id": "img-182",
        "url": "https://picsum.photos/800/800?random=182",
        "alt": "Streaming gift card",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 39900,
    "originalPrice": 50000,
    "discountPercentage": 20,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-058",
    "slug": "audiobook-subscription-6-month-20260226",
    "name": "6-Month Audiobook Subscription - 2 Credits/Month",
    "shortName": "6mo Audiobook Subscription",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-media",
    "dealSectionId": "ds-page-turners",
    "description": "6-month audiobook subscription with 2 credits per month. Access over 500,000 titles. Listen on any device. Credits roll over for up to 12 months.",
    "features": [
      "6-month subscription",
      "2 credits per month (12 total)",
      "500,000+ title library",
      "Listen on any device",
      "Credits roll over",
      "Cancel anytime"
    ],
    "whatsInTheBox": [
      "Digital subscription code (delivered via email)"
    ],
    "images": [
      {
        "id": "img-183",
        "url": "https://picsum.photos/800/800?random=183",
        "alt": "Audiobook subscription",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 59900,
    "originalPrice": 119900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-059",
    "slug": "retro-handheld-gaming-console-20260226",
    "name": "Retro Handheld Gaming Console (500 Built-in Games)",
    "shortName": "Retro Handheld Console",
    "brand": {
      "id": "brand-retro",
      "name": "Retro",
      "slug": "retro"
    },
    "categoryId": "cat-toys-and-games",
    "dealSectionId": "ds-game-on",
    "description": "Relive the classics with this handheld console pre-loaded with 500 retro games. 3.0-inch colour screen, rechargeable battery, and AV output to play on TV.",
    "features": [
      "500 built-in retro games",
      "3.0-inch colour screen",
      "Rechargeable battery (6hrs)",
      "AV output for TV",
      "Save/load game states",
      "Compact and portable"
    ],
    "whatsInTheBox": [
      "Handheld console",
      "USB charging cable",
      "AV cable",
      "User manual"
    ],
    "images": [
      {
        "id": "img-184",
        "url": "https://picsum.photos/800/800?random=184",
        "alt": "Retro handheld console",
        "isDefault": true
      },
      {
        "id": "img-185",
        "url": "https://picsum.photos/800/800?random=185",
        "alt": "Console gameplay screen",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-059a",
        "name": "Red",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-059b",
        "name": "Blue",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-059c",
        "name": "Black",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 24900,
    "originalPrice": 59900,
    "discountPercentage": 58,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-060",
    "slug": "strategy-board-game-collection-20260226",
    "name": "GameNight Strategy Board Game Collection (4 Games)",
    "shortName": "Board Game Collection",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-toys-and-games",
    "dealSectionId": "ds-game-on",
    "description": "4 classic strategy board games in one box. Includes chess, draughts, backgammon, and nine men's morris. Wooden pieces with folding game board.",
    "features": [
      "4 games in 1 set",
      "Wooden playing pieces",
      "Folding game board",
      "Includes chess, draughts, backgammon, nine men's morris",
      "Travel-friendly",
      "Ages 6+"
    ],
    "whatsInTheBox": [
      "Folding game board",
      "Chess pieces",
      "Draughts pieces",
      "Backgammon pieces",
      "Dice",
      "Instructions"
    ],
    "images": [
      {
        "id": "img-186",
        "url": "https://picsum.photos/800/800?random=186",
        "alt": "Board game collection open",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 19900,
    "originalPrice": 49900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-061",
    "slug": "rc-drift-car-4wd-20260226",
    "name": "SpeedDemon RC Drift Car 1:16 Scale 4WD",
    "shortName": "RC Drift Car 1:16",
    "brand": {
      "id": "brand-retro",
      "name": "Retro",
      "slug": "retro"
    },
    "categoryId": "cat-toys-and-games",
    "dealSectionId": "ds-outdoor-fun",
    "description": "High-speed RC drift car with 4WD and 2.4GHz remote. Reaches speeds of 25km/h. Drift tyres included for sideways action. Rechargeable battery with 20-minute run time.",
    "features": [
      "1:16 scale",
      "4WD drivetrain",
      "2.4GHz remote control",
      "25km/h top speed",
      "Drift tyres included",
      "Rechargeable 700mAh battery",
      "20-minute run time",
      "30m control range"
    ],
    "whatsInTheBox": [
      "RC drift car",
      "2.4GHz remote",
      "Rechargeable battery",
      "USB charger",
      "Drift tyres (4x)",
      "Grip tyres (4x)",
      "User manual"
    ],
    "images": [
      {
        "id": "img-187",
        "url": "https://picsum.photos/800/800?random=187",
        "alt": "RC drift car",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 34900,
    "originalPrice": 79900,
    "discountPercentage": 56,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 9
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-062",
    "slug": "science-experiment-kit-20260226",
    "name": "SciKids 100-in-1 Science Experiment Kit",
    "shortName": "100-in-1 Science Kit",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-toys-and-games",
    "dealSectionId": "ds-outdoor-fun",
    "description": "100 science experiments for curious kids aged 8+. Covers chemistry, physics, and biology basics. Includes all materials and illustrated instruction booklet.",
    "features": [
      "100 experiments",
      "Chemistry, physics & biology",
      "All materials included",
      "Illustrated instructions",
      "Safety goggles included",
      "Ages 8+"
    ],
    "whatsInTheBox": [
      "Experiment materials kit",
      "Safety goggles",
      "Instruction booklet",
      "Experiment journal"
    ],
    "images": [
      {
        "id": "img-188",
        "url": "https://picsum.photos/800/800?random=188",
        "alt": "Science experiment kit",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 29900,
    "originalPrice": 69900,
    "discountPercentage": 57,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-063",
    "slug": "orthopaedic-pet-bed-large-20260226",
    "name": "PawComfort Orthopaedic Pet Bed - Large (90x70cm)",
    "shortName": "Orthopaedic Pet Bed L",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-animals-and-pet-supplies",
    "dealSectionId": "ds-pampered-pets",
    "description": "Memory foam pet bed with bolstered edges for dogs up to 35kg. Removable, machine-washable cover. Non-slip base. Ideal for older dogs or those with joint issues.",
    "features": [
      "90x70cm large size",
      "Memory foam mattress",
      "Bolstered edges",
      "Removable washable cover",
      "Non-slip base",
      "Suitable for dogs up to 35kg",
      "Water-resistant liner"
    ],
    "whatsInTheBox": [
      "Orthopaedic pet bed with cover"
    ],
    "images": [
      {
        "id": "img-189",
        "url": "https://picsum.photos/800/800?random=189",
        "alt": "Orthopaedic pet bed",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-063a",
        "name": "Grey",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-063b",
        "name": "Brown",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 44900,
    "originalPrice": 109900,
    "discountPercentage": 59,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "best-seller",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-064",
    "slug": "automatic-pet-feeder-4l-20260226",
    "name": "SmartFeed Automatic Pet Feeder 4L with App Control",
    "shortName": "Auto Pet Feeder 4L",
    "brand": {
      "id": "brand-greatthink",
      "name": "GreatThink",
      "slug": "greatthink"
    },
    "categoryId": "cat-animals-and-pet-supplies",
    "dealSectionId": "ds-pampered-pets",
    "description": "Wi-Fi enabled automatic feeder with 4L capacity. Schedule up to 10 meals per day via smartphone app. Voice recording feature to call your pet to eat.",
    "features": [
      "4L capacity",
      "Wi-Fi + app control",
      "Up to 10 meals/day",
      "Voice recording",
      "Portion control (5-200g)",
      "Dual power (adapter + batteries)",
      "BPA-free bowl"
    ],
    "whatsInTheBox": [
      "Automatic feeder unit",
      "Stainless steel bowl",
      "Power adapter",
      "Desiccant bag",
      "User manual"
    ],
    "images": [
      {
        "id": "img-190",
        "url": "https://picsum.photos/800/800?random=190",
        "alt": "Automatic pet feeder",
        "isDefault": true
      },
      {
        "id": "img-191",
        "url": "https://picsum.photos/800/800?random=191",
        "alt": "Pet feeder app screen",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 59900,
    "originalPrice": 149900,
    "discountPercentage": 60,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-065",
    "slug": "pet-grooming-kit-8-piece-20260226",
    "name": "PawPerfect Pet Grooming Kit 8-Piece",
    "shortName": "Pet Grooming Kit 8pc",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-animals-and-pet-supplies",
    "dealSectionId": "ds-pampered-pets",
    "description": "Complete grooming kit for dogs and cats. Includes cordless clipper, scissors, nail trimmer, deshedding brush, and more. Low-noise motor for anxious pets.",
    "features": [
      "8 grooming tools",
      "Cordless rechargeable clipper",
      "Low-noise motor (<50dB)",
      "4 guide combs",
      "Stainless steel scissors",
      "Nail trimmer with guard",
      "Deshedding brush",
      "Carry case"
    ],
    "whatsInTheBox": [
      "Cordless clipper",
      "4x guide combs",
      "Scissors",
      "Nail trimmer",
      "Deshedding brush",
      "Cleaning brush",
      "USB charger",
      "Carry case"
    ],
    "images": [
      {
        "id": "img-192",
        "url": "https://picsum.photos/800/800?random=192",
        "alt": "Pet grooming kit",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 29900,
    "originalPrice": 69900,
    "discountPercentage": 57,
    "hasVariantPricing": false,
    "stock": {
      "type": "sold_out"
    },
    "badges": [],
    "isSoldOut": true,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-066",
    "slug": "samsung-galaxy-buds-fe-20260226",
    "name": "Samsung Galaxy Buds FE True Wireless Earbuds",
    "shortName": "Galaxy Buds FE",
    "brand": {
      "id": "brand-samsung",
      "name": "Samsung",
      "slug": "samsung"
    },
    "categoryId": "cat-extra-time-deals",
    "dealSectionId": "ds-encore",
    "description": "Back by popular demand! Active noise cancellation, 30-hour total battery life with case, and rich AKG sound. IPX2 water resistance. One-tap pairing with Samsung devices.",
    "features": [
      "Active noise cancellation",
      "30hr total battery (6hr buds + case)",
      "AKG-tuned sound",
      "IPX2 water resistant",
      "Ambient sound mode",
      "Touch controls",
      "Wireless charging case"
    ],
    "whatsInTheBox": [
      "Galaxy Buds FE",
      "Wireless charging case",
      "Ear tips (S/M/L)",
      "USB-C cable",
      "Quick start guide"
    ],
    "images": [
      {
        "id": "img-193",
        "url": "https://picsum.photos/800/800?random=193",
        "alt": "Samsung Galaxy Buds FE",
        "isDefault": true
      },
      {
        "id": "img-194",
        "url": "https://picsum.photos/800/800?random=194",
        "alt": "Galaxy Buds FE in case",
        "isDefault": false
      }
    ],
    "variants": [
      {
        "id": "v-066a",
        "name": "Graphite",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-066b",
        "name": "White",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 109900,
    "originalPrice": 199900,
    "discountPercentage": 45,
    "hasVariantPricing": false,
    "stock": {
      "type": "low_stock",
      "remaining": 10
    },
    "badges": [
      "best-seller",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-067",
    "slug": "dreame-v12-cordless-vacuum-20260226",
    "name": "Dreame V12 Cordless Stick Vacuum Cleaner",
    "shortName": "Dreame V12 Vacuum",
    "brand": {
      "id": "brand-dreame",
      "name": "Dreame",
      "slug": "dreame"
    },
    "categoryId": "cat-extra-time-deals",
    "dealSectionId": "ds-encore",
    "description": "Powerful cordless vacuum with 27kPa suction and HEPA filtration. 85-minute battery life in eco mode. Auto-dust detection adjusts power automatically.",
    "features": [
      "27,000Pa suction",
      "HEPA filtration",
      "85-minute runtime (eco)",
      "Auto dust detection",
      "0.6L dustbin",
      "LED display",
      "Wall-mount dock included"
    ],
    "whatsInTheBox": [
      "V12 vacuum body",
      "Extension wand",
      "Motorised floor head",
      "Crevice tool",
      "2-in-1 brush",
      "Wall-mount dock",
      "Charger"
    ],
    "images": [
      {
        "id": "img-195",
        "url": "https://picsum.photos/800/800?random=195",
        "alt": "Dreame V12 vacuum",
        "isDefault": true
      },
      {
        "id": "img-196",
        "url": "https://picsum.photos/800/800?random=196",
        "alt": "Dreame V12 accessories",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 399900,
    "originalPrice": 799900,
    "discountPercentage": 50,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-068",
    "slug": "lifeproof-waterproof-phone-pouch-20260226",
    "name": "LifeProof Waterproof Phone Pouch - Universal",
    "shortName": "Waterproof Phone Pouch",
    "brand": {
      "id": "brand-lifeproof",
      "name": "LifeProof",
      "slug": "lifeproof"
    },
    "categoryId": "cat-extra-time-deals",
    "dealSectionId": "ds-second-chance",
    "description": "IPX8 waterproof phone pouch for phones up to 7 inches. Touch-screen compatible, lanyard included. Perfect for the beach, pool, or rainy-day adventures.",
    "features": [
      "IPX8 waterproof (30m depth)",
      "Fits phones up to 7\"",
      "Touch-screen compatible",
      "Lanyard included",
      "Clear window both sides",
      "Triple-seal closure"
    ],
    "whatsInTheBox": [
      "Waterproof pouch",
      "Adjustable lanyard"
    ],
    "images": [
      {
        "id": "img-197",
        "url": "https://picsum.photos/800/800?random=197",
        "alt": "Waterproof phone pouch",
        "isDefault": true
      }
    ],
    "variants": [],
    "price": 9900,
    "originalPrice": 29900,
    "discountPercentage": 67,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-069",
    "slug": "orionedge-knife-block-set-14pc-20260226",
    "name": "ORIONEDGE Professional Knife Block Set 14-Piece",
    "shortName": "Knife Block Set 14pc",
    "brand": {
      "id": "brand-orionedge",
      "name": "ORIONEDGE",
      "slug": "orionedge"
    },
    "categoryId": "cat-home-and-garden",
    "dealSectionId": "ds-home-sweet-home",
    "description": "Professional-grade 14-piece knife set with acacia wood block. High-carbon stainless steel blades with full-tang construction. Includes chef's knife, bread knife, santoku, utility, paring, steak knives (6), sharpener, and scissors.",
    "features": [
      "14 pieces",
      "High-carbon stainless steel",
      "Full-tang construction",
      "Acacia wood block",
      "Ergonomic handles",
      "Includes sharpener"
    ],
    "whatsInTheBox": [
      "Chef's knife (8\")",
      "Bread knife (8\")",
      "Santoku (7\")",
      "Utility knife (5\")",
      "Paring knife (3.5\")",
      "6x steak knives",
      "Kitchen scissors",
      "Sharpening steel",
      "Acacia wood block"
    ],
    "images": [
      {
        "id": "img-198",
        "url": "https://picsum.photos/800/800?random=198",
        "alt": "Knife block set",
        "isDefault": true
      },
      {
        "id": "img-199",
        "url": "https://picsum.photos/800/800?random=199",
        "alt": "Individual knives displayed",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 89900,
    "originalPrice": 249900,
    "discountPercentage": 64,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "flash-deal"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-070",
    "slug": "jbl-go-3-portable-speaker-20260226",
    "name": "JBL GO 3 Ultra-Portable Bluetooth Speaker",
    "shortName": "JBL GO 3 Speaker",
    "brand": {
      "id": "brand-jbl",
      "name": "JBL",
      "slug": "jbl"
    },
    "categoryId": "cat-electronics",
    "dealSectionId": "ds-tech-me-away",
    "description": "Pocket-sized speaker with surprisingly big JBL Pro Sound. IP67 waterproof and dustproof. 5 hours of playtime. Clips onto bags with integrated loop.",
    "features": [
      "JBL Pro Sound",
      "IP67 waterproof and dustproof",
      "5-hour battery",
      "Bluetooth 5.1",
      "Integrated loop",
      "USB-C charging",
      "Weighs only 209g"
    ],
    "whatsInTheBox": [
      "JBL GO 3 speaker",
      "USB-C charging cable",
      "Safety sheet"
    ],
    "images": [
      {
        "id": "img-200",
        "url": "https://picsum.photos/800/800?random=200",
        "alt": "JBL GO 3 speaker",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-070a",
        "name": "Black",
        "optionType": "color",
        "optionLabel": "Colour",
        "price": 59900,
        "originalPrice": 99900,
        "inStock": true
      },
      {
        "id": "v-070b",
        "name": "Blue",
        "optionType": "color",
        "optionLabel": "Colour",
        "price": 59900,
        "originalPrice": 99900,
        "inStock": true
      },
      {
        "id": "v-070c",
        "name": "Red",
        "optionType": "color",
        "optionLabel": "Colour",
        "price": 59900,
        "originalPrice": 99900,
        "inStock": true
      },
      {
        "id": "v-070d",
        "name": "Pink",
        "optionType": "color",
        "optionLabel": "Colour",
        "price": 64900,
        "originalPrice": 109900,
        "inStock": true
      },
      {
        "id": "v-070e",
        "name": "Teal",
        "optionType": "color",
        "optionLabel": "Colour",
        "price": 59900,
        "originalPrice": 99900,
        "inStock": false
      }
    ],
    "price": 59900,
    "originalPrice": 99900,
    "discountPercentage": 40,
    "hasVariantPricing": true,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "more-options",
      "best-seller"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-071",
    "slug": "greatthink-wireless-earbuds-20260226",
    "name": "GreatThink Active Noise Cancelling Wireless Earbuds",
    "shortName": "GreatThink ANC Earbuds",
    "brand": {
      "id": "brand-greatthink",
      "name": "GreatThink",
      "slug": "greatthink"
    },
    "categoryId": "cat-electronics",
    "dealSectionId": "ds-charge-up",
    "description": "Affordable ANC earbuds with 40-hour total battery life. IPX5 water resistant, touch controls, and transparency mode. Punches well above its price.",
    "features": [
      "Active noise cancellation",
      "40hr total battery",
      "IPX5 water resistant",
      "Touch controls",
      "Transparency mode",
      "Bluetooth 5.3",
      "USB-C charging"
    ],
    "whatsInTheBox": [
      "Wireless earbuds",
      "Charging case",
      "Ear tips (S/M/L)",
      "USB-C cable",
      "User manual"
    ],
    "images": [
      {
        "id": "img-201",
        "url": "https://picsum.photos/800/800?random=201",
        "alt": "GreatThink ANC earbuds",
        "isDefault": true
      }
    ],
    "variants": [
      {
        "id": "v-071a",
        "name": "Black",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      },
      {
        "id": "v-071b",
        "name": "White",
        "optionType": "color",
        "optionLabel": "Colour",
        "inStock": true
      }
    ],
    "price": 29900,
    "originalPrice": 79900,
    "discountPercentage": 63,
    "hasVariantPricing": false,
    "stock": {
      "type": "in_stock"
    },
    "badges": [
      "new",
      "more-options"
    ],
    "isSoldOut": false,
    "dealDate": "2026-02-26"
  },
  {
    "id": "prod-072",
    "slug": "fine-living-robot-vacuum-20260226",
    "name": "Fine Living Smart Robot Vacuum with Mop",
    "shortName": "Robot Vacuum & Mop",
    "brand": {
      "id": "brand-fine-living",
      "name": "Fine Living",
      "slug": "fine-living"
    },
    "categoryId": "cat-home-and-garden",
    "dealSectionId": "ds-storage-solutions",
    "description": "Robot vacuum and mop combo with app control. 2200Pa suction, 120-minute runtime, and auto-recharge. Maps your home for efficient cleaning paths.",
    "features": [
      "2200Pa suction",
      "Vacuum + mop combo",
      "App control (Wi-Fi)",
      "120-minute runtime",
      "Auto-recharge",
      "Anti-drop sensors",
      "HEPA filter",
      "Works on hard floors and carpet"
    ],
    "whatsInTheBox": [
      "Robot vacuum",
      "Charging dock",
      "Mop pad (2x)",
      "Side brushes (2x)",
      "HEPA filter",
      "User manual"
    ],
    "images": [
      {
        "id": "img-202",
        "url": "https://picsum.photos/800/800?random=202",
        "alt": "Robot vacuum top view",
        "isDefault": true
      },
      {
        "id": "img-203",
        "url": "https://picsum.photos/800/800?random=203",
        "alt": "Robot vacuum with mop pad",
        "isDefault": false
      }
    ],
    "variants": [],
    "price": 249900,
    "originalPrice": 599900,
    "discountPercentage": 58,
    "hasVariantPricing": false,
    "stock": {
      "type": "sold_out"
    },
    "badges": [
      "best-seller"
    ],
    "isSoldOut": true,
    "dealDate": "2026-02-26"
  }
];
