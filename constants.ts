import { Product } from './types';

export const CATEGORIES = [
  'All',
  'Par lights',
  'Moving heads',
  'Consol',
  'Climate creations',
  'Lasers',
  'Facelight',
  'Follow Spot',
  'Effect lights',
  'Accessories',
  'Blindor',
  'Speakers',
  'Amplifiers',
  'Sound Splitters',
  'HF',
  'Mics',
  'Bluetooth Speakers'
];

const VENDORS = ['Topfinger Group Inc', 'Muenled Group', 'XinRunJin Tech', 'GZ Lighting', 'TLC VIET NAM', 'Voltaz Official', 'Global Truss', 'Osram Pro'];
const COUNTRIES = ['US', 'CN', 'HK', 'IN', 'VN', 'DE', 'JP', 'UK'];

const PRODUCT_IMAGES: Record<string, string[]> = {
  'Par lights': [
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Moving heads': [
    'https://images.unsplash.com/photo-1516280440614-6697288d5d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Consol': [
    'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Climate creations': [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://plus.unsplash.com/premium_photo-1664194583917-b013342637eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Lasers': [
    'https://images.unsplash.com/photo-1563330232-5711c05370d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Facelight': [
    'https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Follow Spot': [
    'https://images.unsplash.com/photo-1501386761106-fa747390ea36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Effect lights': [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Accessories': [
    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Blindor': [
    'https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'Speakers': [
    'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  'default': [
    'https://images.unsplash.com/photo-1516280440614-6697288d5d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ]
};

// Configuration for specific counts
const CATEGORY_COUNTS: Record<string, number> = {
  'Par lights': 15,
  'Moving heads': 12,
  'Consol': 12,
  'Climate creations': 18,
  'Lasers': 12,
  'Facelight': 3,
  'Follow Spot': 3,
  'Effect lights': 18,
  'Accessories': 22,
  'Blindor': 12,
  // Optional: add a few for others so they aren't empty
  'Speakers': 4,
  'Amplifiers': 4,
  'Sound Splitters': 2,
  'HF': 2,
  'Mics': 4,
  'Bluetooth Speakers': 4
};

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let idCounter = 1;

  Object.entries(CATEGORY_COUNTS).forEach(([category, count]) => {
    const images = PRODUCT_IMAGES[category] || PRODUCT_IMAGES['default'];
    
    // Naming helpers
    const prefixes = ['Pro', 'Ultra', 'Voltaz', 'Stage', 'Max', 'Super', 'Elite', 'Prime'];
    const suffixes = ['MKII', 'Pro', 'V2', 'Plus', 'Extreme', 'X', 'Series 5', 'Lite'];
    
    // Specific naming logic based on category
    let noun = 'Device';
    if (category === 'Par lights') noun = 'LED Par';
    else if (category === 'Moving heads') noun = 'Beam Moving Head';
    else if (category === 'Consol') noun = 'DMX Console';
    else if (category === 'Climate creations') noun = 'Fog/Haze Machine';
    else if (category === 'Lasers') noun = 'Laser RGB';
    else if (category === 'Facelight') noun = 'COB Blinder';
    else if (category === 'Follow Spot') noun = 'Follow Spot';
    else if (category === 'Effect lights') noun = 'Derby/Strobe';
    else if (category === 'Accessories') noun = 'Clamp/Cable';
    else if (category === 'Blindor') noun = 'Stage Blinder';
    else noun = category.slice(0, -1); // fallback singular

    for (let i = 0; i < count; i++) {
      const vendor = VENDORS[Math.floor(Math.random() * VENDORS.length)];
      const country = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
      const image = images[i % images.length]; // cycle through available images
      
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      const modelNum = Math.floor(Math.random() * 900) + 100;
      
      products.push({
        id: idCounter.toString(),
        name: `${prefix} ${noun} ${modelNum} ${suffix}`,
        price: Math.floor(Math.random() * 2000) + 50,
        category: category,
        description: `High performance ${noun.toLowerCase()} designed for professional use. Features advanced control and durable construction.`,
        image: image,
        features: ['DMX512', 'Auto Run', 'Sound Active', 'Master/Slave'],
        stock: Math.floor(Math.random() * 100) + 1,
        featured: Math.random() > 0.85,
        minOrder: Math.floor(Math.random() * 4) + 1,
        vendor: vendor,
        rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
        reviewCount: Math.floor(Math.random() * 300),
        country: country,
        yearsActive: Math.floor(Math.random() * 15) + 1
      });
      idCounter++;
    }
  });

  return products;
};

export const INITIAL_PRODUCTS: Product[] = generateProducts();
