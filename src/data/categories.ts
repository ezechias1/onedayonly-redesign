// ---------------------------------------------------------------------------
// Category mock data – 16 categories matching OneDayOnly's real taxonomy
// ---------------------------------------------------------------------------

import { Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'cat-home-and-garden',
    name: 'Home & Garden',
    slug: 'home-and-garden',
    description: 'Transform your living space with unbeatable daily deals on homeware, decor, and garden essentials.',
    icon: '🏠',
    image: 'https://placehold.co/600x400/2d4059/ea5455/png?text=Home%20%26%20Garden&font=montserrat',
    dealCount: 12,
    seoContent:
      'Discover incredible deals on home and garden products at OneDayOnly. From stylish storage solutions and cosy curtains to outdoor furniture and garden tools, we bring you the best brands at prices you won\'t find anywhere else in South Africa.\n\nWhether you\'re redecorating a room, organising your garage, or sprucing up the garden for a braai, our daily deals make it easy to upgrade your space without breaking the bank. We partner with trusted brands like Fine Living, Storinity, and Outdoor Essentials to bring you quality you can rely on.\n\nNew home and garden deals drop every day at 6 AM SAST. Sign up for notifications so you never miss out on the perfect piece for your home.',
  },
  {
    id: 'cat-apparel-and-accessories',
    name: 'Apparel & Accessories',
    slug: 'apparel-and-accessories',
    description: 'Stay stylish for less with deals on clothing, watches, jewellery, and accessories.',
    icon: '👗',
    image: 'https://placehold.co/600x400/2d132c/e8a87c/png?text=Apparel%20%26%20Accessories&font=montserrat',
    dealCount: 8,
    seoContent:
      'Shop the latest fashion at a fraction of the retail price. OneDayOnly brings you daily deals on clothing, accessories, watches, and jewellery from brands South Africans know and love.\n\nFrom elegant Anthony James London timepieces to everyday essentials like trunks and sunglasses, our curated selection ensures you\'ll always find something worth adding to your wardrobe. Each deal is available for one day only, so once it\'s gone, it\'s gone.\n\nJoin thousands of savvy South African shoppers who refresh their style every day with our apparel and accessories deals. Free delivery on orders over R500 makes it even sweeter.',
  },
  {
    id: 'cat-health-and-beauty',
    name: 'Health & Beauty',
    slug: 'health-and-beauty',
    description: 'Look and feel your best with deals on supplements, grooming, skincare, and wellness.',
    icon: '💆',
    image: 'https://placehold.co/600x400/e8a87c/2d132c/png?text=Health%20%26%20Beauty&font=montserrat',
    dealCount: 6,
    seoContent:
      'Take care of yourself with daily deals on health and beauty products. From premium supplements by Sci-Core Nutrition to professional-grade hair dryers and grooming kits, OneDayOnly has everything you need to look and feel great.\n\nOur health and beauty deals cover skincare, haircare, oral care, vitamins, and sports nutrition. Every product is sourced from reputable suppliers and offered at discounts of up to 70% off recommended retail prices.\n\nWhether you\'re stocking up on protein powder for the gym or treating yourself to a new fragrance, our one-day-only prices make self-care affordable for every South African.',
  },
  {
    id: 'cat-food-and-beverages',
    name: 'Food & Beverages',
    slug: 'food-and-beverages',
    description: 'Stock up on gourmet treats, coffee, snacks, and pantry essentials at deal prices.',
    icon: '🍕',
    image: 'https://placehold.co/600x400/1b5e20/c8e6c9/png?text=Food%20%26%20Beverages&font=montserrat',
    dealCount: 4,
    seoContent:
      'Satisfy your cravings with unbeatable deals on food and beverages. OneDayOnly brings you everything from artisan coffee beans and premium spice sets to indulgent snack boxes and healthy meal kits.\n\nWe work with local South African producers and international brands alike to offer you a curated selection of food deals that change every single day. Whether you\'re a home chef looking for quality ingredients or just want to stock the pantry at a bargain, you\'ll find it here.\n\nAll food products are stored and shipped according to strict quality standards. Order before the deal expires and enjoy delivery to your door anywhere in SA.',
  },
  {
    id: 'cat-electronics',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Score big on headphones, speakers, gadgets, cables, and smart devices.',
    icon: '📱',
    image: 'https://placehold.co/600x400/1a1a2e/e94560/png?text=Electronics&font=montserrat',
    dealCount: 10,
    seoContent:
      'Get the latest electronics at the best prices in South Africa. OneDayOnly features daily deals on premium audio from Bose and JBL, smart home devices from Govee, tablets, power banks, cables, and more.\n\nOur electronics deals offer discounts of 30% to 80% off retail. Every product comes with a standard manufacturer warranty, and our customer service team is here to help if you have any questions.\n\nFrom essential charging cables to high-end Bluetooth speakers, our tech deals are perfect for gadget lovers and bargain hunters alike. New electronics deals go live every morning at 6 AM.',
  },
  {
    id: 'cat-shoes',
    name: 'Shoes',
    slug: 'shoes',
    description: 'Step into savings with deals on sneakers, trail shoes, boots, and sandals.',
    icon: '👟',
    image: 'https://placehold.co/600x400/212121/ff6f00/png?text=Shoes&font=montserrat',
    dealCount: 5,
    seoContent:
      'Find your perfect pair at unbeatable prices. OneDayOnly brings you daily shoe deals from top brands like ASICS, featuring everything from trail running shoes to casual sneakers and smart boots.\n\nEvery shoe deal includes multiple size options so you can find the right fit. Our deals cover men\'s, women\'s, and kids\' footwear across all styles and occasions.\n\nWhether you\'re hitting the trails in the Drakensberg or need a fresh pair of kicks for the weekend, our shoe deals deliver quality and value straight to your door.',
  },
  {
    id: 'cat-furniture',
    name: 'Furniture',
    slug: 'furniture',
    description: 'Furnish your home for less with deals on chairs, tables, beds, and storage.',
    icon: '🛋️',
    image: 'https://placehold.co/600x400/3c2a21/d7a86e/png?text=Furniture&font=montserrat',
    dealCount: 5,
    seoContent:
      'Refresh your home with our daily furniture deals. From ergonomic office chairs and sleek bedside tables to full bedroom sets and dressing tables, OneDayOnly offers quality furniture at prices that make sense.\n\nAll furniture items include detailed dimensions and assembly information. Most products are flat-packed for convenient delivery across South Africa, with some items available for same-day dispatch in major metros.\n\nWhether you\'re setting up a home office, decorating a new flat, or upgrading your bedroom, our furniture deals help you create the space you deserve without the designer price tag.',
  },
  {
    id: 'cat-sporting-goods',
    name: 'Sporting Goods',
    slug: 'sporting-goods',
    description: 'Get fit for less with deals on exercise equipment, outdoor gear, and sportswear.',
    icon: '⚽',
    image: 'https://placehold.co/600x400/004e92/ffffff/png?text=Sporting%20Goods&font=montserrat',
    dealCount: 5,
    seoContent:
      'Achieve your fitness goals without overspending. OneDayOnly brings you daily deals on exercise equipment, from walking pads and vibration plates to resistance bands and yoga mats.\n\nOur sporting goods deals cover home gym equipment, outdoor adventure gear, team sports accessories, and fitness technology. We source from trusted brands to ensure you get reliable equipment that lasts.\n\nStart your fitness journey today with savings of up to 60% on retail prices. Whether you\'re a weekend warrior or a dedicated athlete, our daily deals make quality sporting goods accessible to all South Africans.',
  },
  {
    id: 'cat-extra-time-deals',
    name: 'Extra Time Deals',
    slug: 'extra-time-deals',
    description: 'Popular deals brought back for an encore. Get a second chance at the best prices.',
    icon: '⏰',
    image: 'https://placehold.co/600x400/0d47a1/64b5f6/png?text=Extra%20Time%20Deals&font=montserrat',
    dealCount: 3,
    seoContent:
      'Missed out the first time? Our Extra Time Deals give you another shot at the most popular products from previous sales. These fan-favourite items are back by popular demand at the same unbeatable prices.\n\nExtra Time Deals typically run for 48 to 72 hours, but stock is strictly limited. Once they sell out this time, they really are gone for good.\n\nKeep an eye on this section for second chances on electronics, homeware, fashion, and more. It\'s like injury time for shopping — you never know what gems will appear.',
  },
  {
    id: 'cat-hardware',
    name: 'Hardware',
    slug: 'hardware',
    description: 'Tools, storage, and DIY essentials for every project around the house.',
    icon: '🔧',
    image: 'https://placehold.co/600x400/333333/ffab00/png?text=Hardware&font=montserrat',
    dealCount: 4,
    seoContent:
      'Get the right tools for every job at deal prices. Our hardware section features socket sets, power tools, storage shelves, safes, and everything else you need for DIY projects and home improvement.\n\nFrom weekend warriors tackling a bathroom renovation to professionals looking for quality tools at better prices, OneDayOnly\'s hardware deals deliver value across the board.\n\nAll tools and hardware come with manufacturer warranties. New deals go live daily, so check back often for the gear you need.',
  },
  {
    id: 'cat-luggage-and-bags',
    name: 'Luggage & Bags',
    slug: 'luggage-and-bags',
    description: 'Travel in style with deals on luggage sets, backpacks, and duffel bags.',
    icon: '🧳',
    image: 'https://placehold.co/600x400/263238/80cbc4/png?text=Luggage%20%26%20Bags&font=montserrat',
    dealCount: 4,
    seoContent:
      'Pack your bags — at bargain prices. OneDayOnly features daily deals on luggage sets, backpacks, laptop bags, duffel bags, and travel accessories from trusted brands.\n\nWhether you\'re jetting off to Mauritius, driving down to the coast, or just need a reliable daily carry, our luggage deals have you covered. We offer everything from budget-friendly options to premium hardshell sets.\n\nAll luggage and bag deals include detailed specifications so you can choose the right size and style for your needs.',
  },
  {
    id: 'cat-baby-and-toddler',
    name: 'Baby & Toddler',
    slug: 'baby-and-toddler',
    description: 'Everything for the little ones — toys, clothing, gear, and more at deal prices.',
    icon: '👶',
    image: 'https://placehold.co/600x400/f06292/ffffff/png?text=Baby%20%26%20Toddler&font=montserrat',
    dealCount: 4,
    seoContent:
      'Give your little ones the best without spending a fortune. OneDayOnly\'s baby and toddler section features daily deals on kids\' tablets, educational toys, clothing, feeding accessories, and nursery essentials.\n\nWe carefully curate our baby deals to include only safe, age-appropriate products from reputable brands. From Pebble Gear kids\' tablets to adorable onesies and teething toys, every deal is designed with young families in mind.\n\nParenting is expensive enough — let our daily deals help you save on the things your children need and love.',
  },
  {
    id: 'cat-business-and-industrial',
    name: 'Business & Industrial',
    slug: 'business-and-industrial',
    description: 'Office supplies, commercial equipment, and business essentials at wholesale-beating prices.',
    icon: '🏢',
    image: 'https://placehold.co/600x400/37474f/90a4ae/png?text=Business%20%26%20Industrial&font=montserrat',
    dealCount: 3,
    seoContent:
      'Stock up your office and business at deal prices. From stationery and printer supplies to commercial-grade equipment, OneDayOnly brings daily deals that help businesses save on essential purchases.\n\nOur business and industrial deals are perfect for small business owners, home office workers, and corporate buyers looking to stretch their budgets further.\n\nBulk pricing and quantity discounts are often available on selected items. Check back daily for new business deals.',
  },
  {
    id: 'cat-media',
    name: 'Media',
    slug: 'media',
    description: 'Books, gift cards, digital media, and entertainment at unbeatable prices.',
    icon: '📚',
    image: 'https://placehold.co/600x400/4a148c/ce93d8/png?text=Media&font=montserrat',
    dealCount: 3,
    seoContent:
      'Feed your mind and your entertainment collection with daily media deals. OneDayOnly features books, audiobooks, gift cards, streaming subscriptions, and more at prices that make binge-reading and binge-watching guilt-free.\n\nFrom bestselling South African authors to international favourites, our book deals cover fiction, non-fiction, self-help, and children\'s titles. Gift cards make perfect presents for any occasion.\n\nNew media deals arrive daily, so there\'s always something fresh to discover.',
  },
  {
    id: 'cat-toys-and-games',
    name: 'Toys & Games',
    slug: 'toys-and-games',
    description: 'Fun for all ages with deals on gaming, board games, outdoor toys, and more.',
    icon: '🎮',
    image: 'https://placehold.co/600x400/f4001a/ffffff/png?text=Toys%20%26%20Games&font=montserrat',
    dealCount: 4,
    seoContent:
      'Play time just got cheaper. OneDayOnly features daily deals on toys, games, and gaming essentials for kids and adults alike. From retro gaming consoles and board games to outdoor play equipment and educational toys, there\'s fun for the whole family.\n\nOur toy and game deals include popular brands and trending items, often at 40% to 70% off retail prices. Stock up for birthdays, Christmas, or just because — at these prices, why not?\n\nAll toys are sourced from authorised distributors and meet South African safety standards.',
  },
  {
    id: 'cat-animals-and-pet-supplies',
    name: 'Animals & Pet Supplies',
    slug: 'animals-and-pet-supplies',
    description: 'Treat your furry friends with deals on pet beds, feeders, toys, and accessories.',
    icon: '🐾',
    image: 'https://placehold.co/600x400/1b5e20/a5d6a7/png?text=Animals%20%26%20Pet%20Supplies&font=montserrat',
    dealCount: 3,
    seoContent:
      'Spoil your pets without spoiling your budget. OneDayOnly brings daily deals on pet beds, automatic feeders, toys, grooming supplies, and accessories for dogs, cats, and other beloved companions.\n\nFrom cosy orthopaedic pet beds to smart feeding stations, our pet deals help you give your animals the comfort and care they deserve at prices that won\'t have you sleeping in the dog house.\n\nAll pet products are selected for quality and safety. New deals go live every morning — your fur babies will thank you.',
  },
];
