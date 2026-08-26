export const business = {
  name: "Oasis Cafe",
  tagline: "A halal oasis in the heart of Lafayette",
  halal: true,
  halalNote: "100% Halal Menu",
  phone: "(925) 298-5673",
  address: {
    line1: "3594 Mt Diablo Blvd",
    line2: "Lafayette, CA 94549",
    mapsQuery: "Oasis Cafe, 3594 Mt Diablo Blvd, Lafayette, CA 94549",
  },
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "9:00 AM – 4:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 4:00 PM" },
    { day: "Thursday", time: "9:00 AM – 4:00 PM" },
    { day: "Friday", time: "9:00 AM – 4:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "9:00 AM – 4:00 PM" },
  ],
  amenities: {
    offered: [
      "Offers delivery",
      "Offers take-out",
      "Offers catering",
      "Accepts credit cards",
      "Outdoor seating",
      "Casual",
      "Quiet",
      "Good for kids",
      "Good for lunch",
      "Dogs allowed",
      "Street parking",
      "Validated parking",
      "Bike parking",
    ],
    notOffered: [
      "Takes reservations",
      "Accepts Apple Pay",
      "Wi-Fi",
      "TV",
      "Good for groups",
      "Alcohol",
    ],
  },
};

export const reviews = {
  source: "Yelp",
  rating: 4.3,
  count: 95,
  quotes: [
    {
      text: "Hidden Gem of Lafayette! Beautiful atmosphere, little seating inside but there is outside seating as well. Food is great, I have gone back multiple times.",
      author: "Noelle S.",
      location: "Lafayette, CA",
      date: "Jun 2026",
    },
    {
      text: "The chicken pesto Panini is very tasty. Counter clerk was very friendly. The restaurant itself was clean and airy.",
      author: "Kim B.",
      location: "Dublin, CA",
      date: "Dec 2025",
    },
    {
      text: "Ended up being one of the best mochas I've ever had. My brain lit up in such a positive way. Service was nice and efficient.",
      author: "Brandye K.",
      location: "Los Angeles, CA",
      date: "Aug 2026",
    },
    {
      text: "Interesting signature latte selections including the cardamom brown sugar latte which was delicious. Friendly baristas and quality ingredients.",
      author: "L C.",
      location: "San Francisco, CA",
      date: "Jun 2026",
    },
  ],
};

export const gallery = [
  { src: "/images/photo-storefront.jpg", label: "Fig. 1 — Storefront", alt: "Oasis Cafe storefront on Mt Diablo Blvd" },
  { src: "/images/photo-pastry-case.jpg", label: "Fig. 2 — Pastry Case", alt: "Pastry case with banana bread, cookies, and baklava" },
  { src: "/images/photo-iced-latte.jpg", label: "Fig. 3 — Iced Latte", alt: "Iced latte on an outdoor table" },
  { src: "/images/photo-outdoor-seating.jpg", label: "Fig. 4 — Outdoor Seating", alt: "Outdoor seating with a red umbrella" },
];

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "oasis-originals",
    title: "The Oasis Originals",
    note: "Small / Large",
    items: [
      { name: "Sahara Sunset", description: "Raspberry, peach & mango", price: "2.25 / 2.75" },
      { name: "Nile Cruiser", description: "Kiwi & mint", price: "2.25 / 2.75" },
      { name: "Nephertiti", description: "Bubblegum", price: "2.25 / 2.75" },
      { name: "Oasis Latte", description: "Sugar-free, calorie-free, low-fat caramel latte", price: "Market price" },
    ],
  },
  {
    id: "pharoccinos",
    title: "Pharoccinos",
    note: "Blended iced coffee drinks — Small / Medium / Large",
    items: [
      { name: "Mocha", price: "2.75 / 3.25 / 3.75" },
      { name: "Vanilla", price: "2.75 / 3.35 / 3.85" },
      { name: "Caramel", price: "2.75 / 3.45 / 3.95" },
    ],
  },
  {
    id: "espresso",
    title: "Espresso Drinks",
    note: "Small / Medium / Large — add an espresso shot .50, add soy .50",
    items: [
      { name: "Cappuccino", price: "2.25 / 2.75 / 3.10" },
      { name: "Latte", price: "2.45 / 3.00 / 3.30" },
      { name: "Mocha", price: "2.60 / 3.15 / 3.55" },
      { name: "Caramel Mint", price: "2.75 / 3.25 / 3.75" },
      { name: "Mocha Mint", price: "2.75 / 3.25 / 3.75" },
      { name: "Mochococonut", price: "2.75 / 3.25 / 3.75" },
      { name: "Chocohazelnut", price: "2.75 / 3.25 / 3.75" },
    ],
  },
  {
    id: "hot-stuff",
    title: "Hot Stuff",
    note: "Small / Medium / Large",
    items: [
      { name: "House Coffee", price: "1.35 / 1.55 / 1.65" },
      { name: "Cafe au Lait", price: "1.85 / 2.05 / 2.25" },
      { name: "Hot Cocoa", price: "2.10 / 2.35 / 2.60" },
      { name: "Hot Tea", price: "1.50" },
      { name: "Chai Tea", price: "2.60 / 2.80 / 3.10" },
    ],
  },
  {
    id: "soups-salads",
    title: "Soups & Salads",
    items: [
      { name: "Cup of Soup", description: "2 soups of the day, incl. clam chowder", price: "2.50" },
      { name: "Bowl of Soup", description: "2 soups of the day, incl. clam chowder", price: "3.50" },
      { name: "Grilled Chicken Caesar Salad", price: "6.50" },
      { name: "Mixed Green Salad", price: "6.50" },
      { name: "Chinese Chicken Salad", description: "Chicken, romaine, mandarin oranges, almonds, crispy noodles, sesame dressing", price: "6.50" },
    ],
  },
  {
    id: "bagels",
    title: "Bagels",
    items: [
      { name: "Bagel and Cream Cheese", price: "1.75" },
      { name: "Bagel and Hummus", price: "1.95" },
      { name: "Bagel, Hummus and Tabule", price: "2.95" },
    ],
  },
  {
    id: "cafe-sandwiches",
    title: "Cafe Sandwiches",
    note: "On sourdough, wheat, Italian, or foccacia cheese bread with mayonnaise, mustard, onion, pickles, lettuce, tomato, cheese, and pepper",
    items: [
      { name: "Veggie Sandwich", description: "Roasted red peppers, eggplant, cheese, pesto aioli", price: "3.99" },
      { name: "Pastrami Sandwich", description: "Swiss cheese, Dijon mustard, onion, pickles, pepperoncini", price: "5.49" },
      { name: "Turkey Breast Sandwich", description: "96% fat free turkey", price: "4.69" },
      { name: "Smoked Ham & Cheese Sandwich", description: "96% fat free ham", price: "4.69" },
      { name: "Tuna Salad Sandwich", description: "Our special recipe", price: "4.69" },
      { name: "Italian Combo Sandwich", description: "Ham, salami, pepperoni, cheese", price: "5.49" },
      { name: "Falafel Alladin Sandwich", price: "5.95" },
      { name: "King Tut Deluxe Sandwich", price: "6.49" },
    ],
  },
];
