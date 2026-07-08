// seed.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from your local file
dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ Error: MONGODB_URI is missing in .env.local');
  process.exit(1);
}

// 1. Define a temporary schema strictly for seeding purposes
const LocationSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  boroughName: { type: String, required: true },
  region: { type: String, required: true },
  postcodes: [{ type: String }],
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  heroHeading: { type: String, required: true },
  heroSubheading: { type: String, required: true },
  localText: { type: String, required: true },
  prices: {
    manVan: { type: Number, required: true },
    houseMove: { type: Number, required: true }
  }
});

const Location = mongoose.models.Location || mongoose.model('Location', LocationSchema);

// 2. High-Quality SEO Target Data for London N niches
const londonBoroughs = [
  {
    slug: 'camden',
    boroughName: 'Camden',
    region: 'North London',
    postcodes: ['NW1', 'NW3', 'NW5'],
    metaTitle: 'Expert House Removals in Camden | Pack Attack Removals Ltd',
    metaDescription: 'Looking for a reliable removal company or man and van in Camden? Get a fully insured, stress-free move across NW1 & NW3. Get your free quote.',
    heroHeading: 'Professional House Removals & Moving Services in Camden',
    heroSubheading: 'Your trusted, fully insured local moving team serving Camden and North London.',
    localText: 'Navigating domestic or office relocations near Camden High Street or around the busy markets requires true local expertise. Our seasoned removal teams handle narrow staircases, parking permits, and red routes effortlessly across NW1, NW3, and NW5.',
    prices: { manVan: 45, houseMove: 249 }
  },
  {
    slug: 'chelsea',
    boroughName: 'Chelsea',
    region: 'West London',
    postcodes: ['SW3', 'SW10'],
    metaTitle: 'Premium Removals Company Chelsea | Pack Attack Removals Ltd',
    metaDescription: 'Top-rated home & office removals in Chelsea SW3. Safe, insured, white-glove packing and moving services. Request an instant quote online today.',
    heroHeading: 'Premium House Removals & Packing in Chelsea',
    heroSubheading: 'White-glove moving services tailored for homes and businesses across Chelsea.',
    localText: 'Moving properties throughout the elegant streets of Chelsea demands absolute precision and care. From fragile antique packing to navigating tight parking bays along King’s Road, our elite SW3 moving teams ensure your items arrive perfectly safe.',
    prices: { manVan: 55, houseMove: 299 }
  },
  {
    slug: 'islington',
    boroughName: 'Islington',
    region: 'North London',
    postcodes: ['N1', 'N5', 'N7'],
    metaTitle: 'Reliable Man and Van Islington | Pack Attack Removals Ltd',
    metaDescription: 'Need professional movers or a man and van in Islington? Fully insured house and flat removals across N1. Check our affordable rates and book.',
    heroHeading: 'Stress-Free Home & Flat Removals in Islington',
    heroSubheading: 'Affordable, punctual, and highly rated removal teams serving Islington N1.',
    localText: 'Islington flat moves often involve multi-story apartment complexes and strict borough parking regulations. Our specialized N1 teams come fully equipped with transit blankets, trolleys, and local experience to make your move completely seamless.',
    prices: { manVan: 45, houseMove: 239 }
  },
  {
    slug: 'greenwich',
    boroughName: 'Greenwich',
    region: 'South East London',
    postcodes: ['SE10', 'SE3'],
    metaTitle: 'Top Rated Removal Company Greenwich | Pack Attack Removals Ltd',
    metaDescription: 'Trusted house removals and commercial moving services in Greenwich SE10. Professional packing, fully insured vans. Get a free quote.',
    heroHeading: 'Trusted Home & Commercial Removals in Greenwich',
    heroSubheading: 'Reliable moving solutions for residents and businesses throughout Greenwich SE10.',
    localText: 'Whether you are moving close to the historic Maritime Greenwich site or relocating a flat near the peninsula, our South East London moving crews bring unmatched local routing knowledge to avoid delays and complete your move smoothly.',
    prices: { manVan: 45, houseMove: 249 }
  }
];

// 3. Execution Execution Function
async function seedDatabase() {
  try {
    console.log('🔄 Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGODB_URI!);
    console.log('✅ Connected successfully.');

    // Clear existing data so we don't duplicate items during testing
    console.log('🧹 Clearing old location data...');
    await Location.deleteMany({});

    console.log('🌱 Injecting London boroughs into database...');
    await Location.insertMany(londonBoroughs);

    console.log('🚀 Database seeding complete! All locations look perfect.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();