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
    id: "breakfast-sandwiches",
    title: "Breakfast Sandwiches",
    note: "Breakfast available all day",
    items: [
      { name: "Smokey Romesco Egg Sandwich", description: "Organic free range scrambled eggs, cheddar cheese, & smokey romesco sauce on an English muffin", price: "8.00" },
      { name: "Bacon, Egg & Cheese Sandwich", description: "Scrambled organic free range eggs, cheddar cheese, beef bacon & garlic aioli on an English muffin", price: "8.00" },
      { name: "Smoked Salmon Bagel", description: "Choice of bagel (plain or everything), smoked salmon, whipped cream cheese, tomato, cucumber, onion & capers", price: "13.00" },
      { name: "Bagel & Cream Cheese", description: "Choice of bagel (plain or everything) & whipped cream cheese", price: "5.00" },
    ],
  },
  {
    id: "parfait",
    title: "Parfait",
    items: [
      { name: "Sunrise Bowl", description: "Choice of vanilla or plant based yogurt, organic granola, fresh berries, and local honey drizzle", price: "9.00" },
    ],
  },
  {
    id: "toast",
    title: "Toast",
    items: [
      { name: "Avocado Toast", description: "Avocado crush & everything bagel seasonings on a toasted levaine bread", price: "9.00" },
      { name: "PB&J", description: "Organic creamy peanut butter & strawberry preserves on toasted pan de mie", price: "8.00" },
    ],
  },
  {
    id: "grilled-paninis",
    title: "Grilled Paninis",
    items: [
      { name: "Chicken Pesto", description: "Grilled chicken marinated with rosemary, garlic & lemon juice, melted provolone cheese, basil pesto, mix greens, tomato & olive oil drizzle, pizza bianca", price: "14.00" },
      { name: "Fiesta Fusion", description: "Grilled chicken, beef bacon, chipotle aioli, pepper jack cheese, red onion, pizza bianca", price: "14.00" },
      { name: "Pastrami & Swiss", description: "Finest beef pastrami, melted Swiss cheese, Dijon mustard & sauerkraut on pan de mie", price: "14.00" },
      { name: "Townhouse Tuna Melt", description: "House made tuna salad & Tillamook cheddar cheese on pan de mie", price: "13.00" },
      { name: "Garlic Butter Grilled Cheese", description: "Garlic butter, aged white cheddar & fontina cheese, pan de mie", price: "12.00" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    note: "We proudly serve Acme all organic breads",
    items: [
      { name: "Oasis Club", description: "Marinated grilled chicken breast, crispy bacon, cheese, mayo, lettuce & tomato, on pan de mie", price: "16.00" },
      { name: "BLT", description: "Beef bacon, mayo, lettuce, vine ripened tomato, on pan de mie", price: "15.00" },
      { name: "Tuna Salad", description: "Albacore tuna, celery, red onion, lemon juice, olive oil, Dijon mustard, mixed greens, tomato, on pan de mie", price: "14.00" },
      { name: "Oven Roasted Turkey", description: "Turkey breast, cheese, mayonnaise, lettuce, tomato & onion on choice of bread (pizza bianca, sweet deli roll, pan de mie, levaine, or gluten free for an extra charge)", price: "13.00" },
      { name: "Charcuterie", description: "Aged white cheddar, brie cheese, sliced apple, fig spread, arugula, on levaine bread", price: "13.00" },
      { name: "Veggie Delight", description: "Housemade hummus, mixed greens, avocado, tomato, cucumber, red onion, drizzle of olive oil, on levaine bread", price: "13.00" },
    ],
  },
  {
    id: "salads-wraps",
    title: "Salads & Wraps",
    note: "Make it a salad or wrap",
    items: [
      { name: "Thai Chicken Salad", description: "Grilled chicken, lettuce, cabbage, carrots, cucumber, bell pepper, roasted peanuts & peanut dressing", price: "14.00" },
      { name: "Crunchy Lemon Caesar", description: "Hearts of romaine, Parmigiano Reggiano, housemade croutons & lemon Caesar dressing (add grilled chicken for an extra charge)", price: "13.00" },
      { name: "Santorini", description: "Hearts of romaine, Persian cucumber, cherry tomato, red onion, kalamata olives, feta cheese, balsamic vinaigrette (add fresh avocado for an extra charge)", price: "13.00" },
      { name: "Harvest Salad", description: "Mixed greens, Pink Lady apple, feta cheese, candied pecans & balsamic vinaigrette (add grilled chicken or tuna for an extra charge)", price: "12.00" },
    ],
  },
  {
    id: "flatbreads",
    title: "Flatbreads",
    items: [
      { name: "BBQ Chicken", description: "BBQ sauce, grilled chicken, red onion, mozzarella & arugula", price: "16.00" },
      { name: "Pear & Gorgonzola", description: "Fig spread, pear, gorgonzola cheese, arugula with a drizzle of olive oil & balsamic glaze", price: "13.00" },
      { name: "Margherita", description: "San Marzano tomato, fresh mozzarella, basil, with a drizzle of olive oil", price: "13.00" },
    ],
  },
  {
    id: "kids-menu",
    title: "Kids Menu",
    items: [
      { name: "Chicken Panini", description: "Grilled chicken and Monterey Jack cheese on country bread", price: "9.00" },
      { name: "Grilled Cheese", description: "Cheesy delight on toasted bread", price: "8.00" },
      { name: "PB&J Sandwich", description: "Peanut butter and jelly on soft white bread", price: "8.00" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { name: "Cappuccino", description: "Espresso with steamed milk and a layer of milk foam — 8 oz", price: "5.00" },
      { name: "Flat White", description: "Double shot of espresso with steamed milk and a thin layer of microfoam — 8 oz", price: "5.00" },
      { name: "Cortado", description: "Equal parts espresso and steamed milk — 4 oz", price: "4.25" },
      { name: "Double Espresso", description: "2 oz", price: "3.75" },
      { name: "Americano", description: "Choice of 16 or 12 oz", price: "5.50" },
      { name: "Latte", description: "Espresso and steamed milk — 16 or 12 oz", price: "6.25" },
      { name: "Mocha", description: "Rich coffee drink with chocolate notes — 16 or 12 oz", price: "6.75" },
      { name: "Matcha Latte", description: "Creamy blend of matcha and steamed milk — 16 or 12 oz", price: "7.00" },
      { name: "Chai Latte", description: "Spiced tea with steamed milk — 16 or 12 oz", price: "7.00" },
      { name: "Hot or Iced Tea", description: "16 or 12 oz", price: "5.75" },
      { name: "Hot Chocolate", description: "16 or 12 oz", price: "5.25" },
    ],
  },
  {
    id: "signature-drinks",
    title: "Signature Drinks",
    items: [
      { name: "Cardamom Brown Sugar Latte", description: "Infused with aromatic cardamom and sweet brown sugar — 16 or 12 oz", price: "6.25" },
      { name: "Maple Matcha Latte", description: "Vibrant matcha with a hint of maple — 16 or 12 oz", price: "6.25" },
      { name: "Vietnamese Latte", description: "Vietnamese coffee with milk — 16 or 12 oz", price: "6.25" },
      { name: "Peach Iced Tea", description: "16 or 12 oz", price: "6.25" },
      { name: "Passionfruit Iced Tea", description: "16 or 12 oz", price: "5.25" },
      { name: "Strawberry Matcha Latte", description: "Rich matcha with a hint of strawberry — 16 or 12 oz", price: "6.75" },
      { name: "Vanilla Mint Latte", description: "16 or 12 oz", price: "6.75" },
      { name: "Caramel Latte", description: "16 or 12 oz", price: "6.75" },
      { name: "Mango Iced Tea", description: "16 or 12 oz", price: "6.75" },
    ],
  },
];
