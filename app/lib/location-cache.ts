import { unstable_cache } from 'next/cache';
import dbConnect from './dbConnect';
import Location from '../models/Location';

export type LocationRecord = {
  slug?: string;
  boroughName: string;
  region: string;
  postcodes: string[];
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  localText: string;
  prices: { manVan: number; houseMove: number };
};

export type OSMGeoResult = {
  boroughName: string;
  region: string;
  postcode: string;
  country: string;
  latitude: number | null;
  longitude: number | null;
  displayName: string;
};

const ONE_DAY = 60 * 60 * 24;

export const getCachedLocationBySlug = unstable_cache(
  async (slug: string): Promise<LocationRecord | null> => {
    try {
      await dbConnect();
      const location = await Location.findOne({ slug }).lean<LocationRecord>();
      return location ? (location as LocationRecord) : null;
    } catch (e) {
      console.warn('DB connect or query failed:', e);
      return null;
    }
  },
  ['borough-location-db'],
  { revalidate: ONE_DAY }
);

async function fetchOsmLocation(query: string): Promise<OSMGeoResult | null> {
  const formattedQuery = query.replace(/-/g, ' ').trim();
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(formattedQuery + ', UK')}&format=json&addressdetails=1&limit=1`;

  console.log('🌍 Fetching cached OSM location for:', formattedQuery);

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'PackAttackRemovalsApp/1.0 (contact@packattack.com)',
    },
  });

  if (!response.ok) {
    console.log('❌ OSM API error:', response.status);
    return null;
  }

  const data = await response.json();
  console.log('📊 OSM results:', data.length || 0, 'results');

  if (!data || data.length === 0) {
    console.log('❌ No OSM results found for:', formattedQuery);
    return null;
  }

  const result = data[0];
  const address = result.address || {};

  const boroughName =
    address.suburb ||
    address.borough ||
    address.city_district ||
    address.city ||
    address.town ||
    address.village ||
    address.county ||
    formattedQuery;

  const region = address.state || address.region || address.country || 'United Kingdom';
  const postcode = address.postcode ? address.postcode.toUpperCase() : 'London';

  console.log('✅ OSM match found:', { boroughName, postcode, region });

  return {
    boroughName: boroughName.charAt(0).toUpperCase() + boroughName.slice(1),
    region,
    postcode,
    country: address.country || 'England',
    latitude: parseFloat(result.lat) || null,
    longitude: parseFloat(result.lon) || null,
    displayName: result.display_name,
  };
}

export const getCachedOsmLocation = unstable_cache(
  async (query: string): Promise<OSMGeoResult | null> => fetchOsmLocation(query),
  ['osm-location-cache'],
  { revalidate: ONE_DAY }
);