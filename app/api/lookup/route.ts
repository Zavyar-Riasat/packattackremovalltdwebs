// app/api/lookup/route.ts
import { NextResponse } from 'next/server';

// Static mapping for common London areas and landmarks
const placeMappings: { [key: string]: { postcode: string; borough: string; region: string } } = {
  // Boroughs
  'camden': { postcode: 'NW1', borough: 'Camden', region: 'London' },
  'chelsea': { postcode: 'SW3', borough: 'Chelsea', region: 'London' },
  'islington': { postcode: 'N1', borough: 'Islington', region: 'London' },
  'greenwich': { postcode: 'SE10', borough: 'Greenwich', region: 'London' },
  'westminster': { postcode: 'SW1A 1AA', borough: 'Westminster', region: 'London' },
  'kensington': { postcode: 'SW7', borough: 'Kensington', region: 'London' },
  'hackney': { postcode: 'E8', borough: 'Hackney', region: 'London' },
  'wandsworth': { postcode: 'SW18', borough: 'Wandsworth', region: 'London' },
  'lambeth': { postcode: 'SE1', borough: 'Lambeth', region: 'London' },
  'southwark': { postcode: 'SE1', borough: 'Southwark', region: 'London' },
  'tower hamlets': { postcode: 'E1', borough: 'Tower Hamlets', region: 'London' },
  'battersea': { postcode: 'SW11', borough: 'Battersea', region: 'London' },
  'clapham': { postcode: 'SW4', borough: 'Clapham', region: 'London' },
  'brixton': { postcode: 'SW2', borough: 'Brixton', region: 'London' },
  'richmond': { postcode: 'TW9', borough: 'Richmond', region: 'London' },
  'wimbledon': { postcode: 'SW19', borough: 'Wimbledon', region: 'London' },
  'notting hill': { postcode: 'W11', borough: 'Notting Hill', region: 'London' },
  'shoreditch': { postcode: 'E1', borough: 'Shoreditch', region: 'London' },
  'soho': { postcode: 'W1D', borough: 'Soho', region: 'London' },
  'covent garden': { postcode: 'WC2E', borough: 'Covent Garden', region: 'London' },
  'mayfair': { postcode: 'W1K', borough: 'Mayfair', region: 'London' },
  'paddington': { postcode: 'W2', borough: 'Paddington', region: 'London' },
  'marylebone': { postcode: 'W1H', borough: 'Marylebone', region: 'London' },
  'belgravia': { postcode: 'SW1X', borough: 'Belgravia', region: 'London' },
  'knightsbridge': { postcode: 'SW1X', borough: 'Knightsbridge', region: 'London' },
  'fulham': { postcode: 'SW6', borough: 'Fulham', region: 'London' },
  'hammersmith': { postcode: 'W6', borough: 'Hammersmith', region: 'London' },
  'putney': { postcode: 'SW15', borough: 'Putney', region: 'London' },
  
  // Landmarks
  'buckingham palace': { postcode: 'SW1A 1AA', borough: 'Westminster', region: 'London' },
  'big ben': { postcode: 'SW1A 0AA', borough: 'Westminster', region: 'London' },
  'london eye': { postcode: 'SE1 7PB', borough: 'Lambeth', region: 'London' },
  'tower bridge': { postcode: 'SE1 2UP', borough: 'Tower Hamlets', region: 'London' },
  'hyde park': { postcode: 'W2 2UH', borough: 'Kensington', region: 'London' },
  'trafalgar square': { postcode: 'WC2N 5DN', borough: 'Westminster', region: 'London' },
  'tower of london': { postcode: 'EC3N 4AB', borough: 'Tower Hamlets', region: 'London' },
  'st pauls': { postcode: 'EC4M 8AD', borough: 'City of London', region: 'London' },
  'st paul\'s cathedral': { postcode: 'EC4M 8AD', borough: 'City of London', region: 'London' },
  'greenwich park': { postcode: 'SE10 8XJ', borough: 'Greenwich', region: 'London' },
  'camden market': { postcode: 'NW1 8AH', borough: 'Camden', region: 'London' },
  'kensington palace': { postcode: 'W8 4PX', borough: 'Kensington', region: 'London' },
  'kensington gardens': { postcode: 'W2 2UH', borough: 'Kensington', region: 'London' },
  'westminster abbey': { postcode: 'SW1P 3PA', borough: 'Westminster', region: 'London' },
  'parliament square': { postcode: 'SW1A 0AA', borough: 'Westminster', region: 'London' },
  '10 downing street': { postcode: 'SW1A 2AA', borough: 'Westminster', region: 'London' },
  
  // UK Cities
  'edinburgh': { postcode: 'EH1', borough: 'Edinburgh', region: 'Scotland' },
  'edinburgh castle': { postcode: 'EH1 2NG', borough: 'Edinburgh', region: 'Scotland' },
  'edinburgh old town': { postcode: 'EH1', borough: 'Edinburgh', region: 'Scotland' },
  'edinburgh new town': { postcode: 'EH2', borough: 'Edinburgh', region: 'Scotland' },
  'glasgow': { postcode: 'G1', borough: 'Glasgow', region: 'Scotland' },
  'manchester': { postcode: 'M1', borough: 'Manchester', region: 'North West' },
  'birmingham': { postcode: 'B1', borough: 'Birmingham', region: 'West Midlands' },
  'leeds': { postcode: 'LS1', borough: 'Leeds', region: 'Yorkshire' },
  'bristol': { postcode: 'BS1', borough: 'Bristol', region: 'South West' },
  'liverpool': { postcode: 'L1', borough: 'Liverpool', region: 'North West' },
  'sheffield': { postcode: 'S1', borough: 'Sheffield', region: 'Yorkshire' },
  'cardiff': { postcode: 'CF10', borough: 'Cardiff', region: 'Wales' },
  'belfast': { postcode: 'BT1', borough: 'Belfast', region: 'Northern Ireland' },
  'brighton': { postcode: 'BN1', borough: 'Brighton', region: 'South East' },
  'oxford': { postcode: 'OX1', borough: 'Oxford', region: 'South East' },
  'cambridge': { postcode: 'CB1', borough: 'Cambridge', region: 'East' },
  'york': { postcode: 'YO1', borough: 'York', region: 'Yorkshire' },
  'bath': { postcode: 'BA1', borough: 'Bath', region: 'South West' },
  'canterbury': { postcode: 'CT1', borough: 'Canterbury', region: 'South East' },
  'durham': { postcode: 'DH1', borough: 'Durham', region: 'North East' },
  'exeter': { postcode: 'EX1', borough: 'Exeter', region: 'South West' },
  'lincoln': { postcode: 'LN1', borough: 'Lincoln', region: 'East Midlands' },
  'norwich': { postcode: 'NR1', borough: 'Norwich', region: 'East' },
  'nottingham': { postcode: 'NG1', borough: 'Nottingham', region: 'East Midlands' },
  'plymouth': { postcode: 'PL1', borough: 'Plymouth', region: 'South West' },
  'portsmouth': { postcode: 'PO1', borough: 'Portsmouth', region: 'South East' },
  'southampton': { postcode: 'SO1', borough: 'Southampton', region: 'South East' },
  'stirling': { postcode: 'FK8', borough: 'Stirling', region: 'Scotland' },
  'aberdeen': { postcode: 'AB10', borough: 'Aberdeen', region: 'Scotland' },
  'dundee': { postcode: 'DD1', borough: 'Dundee', region: 'Scotland' },
  'inverness': { postcode: 'IV1', borough: 'Inverness', region: 'Scotland' },
  'holyrood palace': { postcode: 'EH8 8DX', borough: 'Edinburgh', region: 'Scotland' },
  'arthurs seat': { postcode: 'EH8 8AZ', borough: 'Edinburgh', region: 'Scotland' },
  'royal mile': { postcode: 'EH1', borough: 'Edinburgh', region: 'Scotland' },
  'princes street': { postcode: 'EH2', borough: 'Edinburgh', region: 'Scotland' },
  'calton hill': { postcode: 'EH7 5AA', borough: 'Edinburgh', region: 'Scotland' },
  'glasgow cathedral': { postcode: 'G4 0QZ', borough: 'Glasgow', region: 'Scotland' },
  'kelvingrove': { postcode: 'G3 8AG', borough: 'Glasgow', region: 'Scotland' },
  'loch lomond': { postcode: 'G83', borough: 'Loch Lomond', region: 'Scotland' },
  'highland': { postcode: 'IV', borough: 'Highland', region: 'Scotland' },
  'isle of skye': { postcode: 'IV', borough: 'Isle of Skye', region: 'Scotland' },
  'ben nevis': { postcode: 'PH33', borough: 'Ben Nevis', region: 'Scotland' },
};

// Partial matches for common variations
const partialMatches: { [key: string]: string } = {
  'cam': 'camden',
  'chel': 'chelsea',
  'isl': 'islington',
  'green': 'greenwich',
  'west': 'westminster',
  'kens': 'kensington',
  'hack': 'hackney',
  'wand': 'wandsworth',
  'lamb': 'lambeth',
  'south': 'southwark',
  'batt': 'battersea',
  'clap': 'clapham',
  'brix': 'brixton',
  'rich': 'richmond',
  'wimb': 'wimbledon',
  'notting': 'notting hill',
  'shore': 'shoreditch',
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('postcode');

  if (!query) {
    return NextResponse.json(
      { valid: false, error: 'Query parameter required' },
      { status: 400 }
    );
  }

  try {
    const cleanQuery = query.trim();
    const lowerQuery = cleanQuery.toLowerCase();
    console.log('🔍 Searching for:', cleanQuery);

    // STRATEGY 0: Check static mappings first (fastest)
    if (placeMappings[lowerQuery]) {
      const mapping = placeMappings[lowerQuery];
      console.log('✅ Static mapping found:', mapping);
      return NextResponse.json({
        valid: true,
        postcode: mapping.postcode,
        borough: mapping.borough,
        region: mapping.region,
        source: 'static_mapping',
        place_name: cleanQuery
      });
    }

    // Check if it looks like a postcode (contains numbers)
    const isPostcodeLike = /\d/.test(cleanQuery);

    if (isPostcodeLike) {
      // STRATEGY A: Postcode Lookup
      const formattedPostcode = cleanQuery.toUpperCase().replace(/\s+/g, '');
      console.log('📮 Postcode lookup:', formattedPostcode);
      
      const response = await fetch(
        `https://api.postcodes.io/postcodes/${formattedPostcode}`,
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      if (response.ok) {
        const data = await response.json();
        const result = data.result;
        console.log('✅ Postcode found');
        
        return NextResponse.json({
          valid: true,
          postcode: result.postcode,
          borough: result.admin_district || result.admin_ward || 'London',
          region: result.region || 'London',
          country: result.country || 'England',
          latitude: result.latitude,
          longitude: result.longitude,
          source: 'postcode_api'
        });
      } else {
        console.log('❌ Postcode not found, trying other strategies');
      }
    }

    // STRATEGY B: Check partial matches
    for (const [key, value] of Object.entries(partialMatches)) {
      if (lowerQuery.includes(key) || key.includes(lowerQuery)) {
        const mapping = placeMappings[value];
        if (mapping) {
          console.log('✅ Partial match found:', key, '->', value);
          return NextResponse.json({
            valid: true,
            postcode: mapping.postcode,
            borough: mapping.borough,
            region: mapping.region,
            source: 'partial_match',
            place_name: cleanQuery
          });
        }
      }
    }

    // STRATEGY C: Try Postcodes.io place search
    console.log('🏙️ Place search via postcodes.io for:', cleanQuery);
    try {
      const placeResponse = await fetch(
        `https://api.postcodes.io/places?q=${encodeURIComponent(cleanQuery)}&limit=5`,
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      if (placeResponse.ok) {
        const placeData = await placeResponse.json();
        console.log('📊 Place API results:', placeData.result?.length || 0, 'results');
        
        if (placeData.result && placeData.result.length > 0) {
          const primaryMatch = placeData.result[0];
          console.log('✅ API place match found');
          
          const borough = primaryMatch.local_administrative_area || 
                         primaryMatch.admin_district || 
                         primaryMatch.place_name || 
                         primaryMatch.outcode ||
                         'London';
          
          const postcode = primaryMatch.outcode || 
                          primaryMatch.postcode || 
                          'London';
          
          return NextResponse.json({
            valid: true,
            postcode: postcode,
            borough: borough,
            region: primaryMatch.region || 'London',
            country: primaryMatch.country || 'England',
            latitude: primaryMatch.latitude || null,
            longitude: primaryMatch.longitude || null,
            source: 'place_api',
            place_name: primaryMatch.place_name || cleanQuery
          });
        }
      }
    } catch (placeError) {
      console.log('Place API error:', placeError);
    }

    // STRATEGY D: Try the outcode API (for area codes)
    if (isPostcodeLike && cleanQuery.length >= 2) {
      const outcode = cleanQuery.toUpperCase().replace(/\s+/g, '').match(/^[A-Z]{1,2}[0-9][A-Z0-9]?/)?.[0];
      if (outcode && outcode.length >= 2) {
        console.log('🔍 Trying outcode lookup:', outcode);
        try {
          const outcodeResponse = await fetch(
            `https://api.postcodes.io/outcodes/${outcode}`,
            { headers: { 'Content-Type': 'application/json' } }
          );
          
          if (outcodeResponse.ok) {
            const outcodeData = await outcodeResponse.json();
            const result = outcodeData.result;
            if (result) {
              console.log('✅ Outcode found');
              return NextResponse.json({
                valid: true,
                postcode: outcode,
                borough: result.admin_district || result.admin_ward || 'London',
                region: result.region || 'London',
                country: result.country || 'England',
                latitude: result.latitude,
                longitude: result.longitude,
                source: 'outcode_api'
              });
            }
          }
        } catch (outcodeError) {
          console.log('Outcode API error:', outcodeError);
        }
      }
    }

    // STRATEGY E: Try to guess from the query (UK Cities)
    const ukCities: { [key: string]: { postcode: string; borough: string; region: string } } = {
      'edinburgh': { postcode: 'EH1', borough: 'Edinburgh', region: 'Scotland' },
      'glasgow': { postcode: 'G1', borough: 'Glasgow', region: 'Scotland' },
      'manchester': { postcode: 'M1', borough: 'Manchester', region: 'North West' },
      'birmingham': { postcode: 'B1', borough: 'Birmingham', region: 'West Midlands' },
      'leeds': { postcode: 'LS1', borough: 'Leeds', region: 'Yorkshire' },
      'bristol': { postcode: 'BS1', borough: 'Bristol', region: 'South West' },
      'liverpool': { postcode: 'L1', borough: 'Liverpool', region: 'North West' },
      'sheffield': { postcode: 'S1', borough: 'Sheffield', region: 'Yorkshire' },
      'cardiff': { postcode: 'CF10', borough: 'Cardiff', region: 'Wales' },
      'belfast': { postcode: 'BT1', borough: 'Belfast', region: 'Northern Ireland' },
    };

    if (ukCities[lowerQuery]) {
      const city = ukCities[lowerQuery];
      console.log('✅ City match found:', city);
      return NextResponse.json({
        valid: true,
        postcode: city.postcode,
        borough: city.borough,
        region: city.region,
        source: 'city_mapping',
        place_name: cleanQuery
      });
    }

    // STRATEGY F: OpenStreetMap Nominatim Textual Place Lookup (NEW!)
    console.log('🌍 Trying OpenStreetMap Nominatim for:', cleanQuery);
    try {
      // We append "UK" to favor UK results
      const osmUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cleanQuery + ', UK')}&format=json&addressdetails=1&limit=1`;
      
      const osmResponse = await fetch(osmUrl, {
        headers: {
          'User-Agent': 'PackAttackRemovalsApp/1.0 (contact@packattack.com)' // OSM requires a user-agent header
        }
      });

      if (osmResponse.ok) {
        const osmData = await osmResponse.json();
        console.log('📊 OSM results:', osmData.length || 0, 'results');
        
        if (osmData && osmData.length > 0) {
          const result = osmData[0];
          const address = result.address || {};

          // Extract the best available location information
          const locationName = address.suburb || 
                              address.borough || 
                              address.city_district || 
                              address.city || 
                              address.town || 
                              address.village || 
                              address.county || 
                              'London';
          
          // Try to get a postcode, or use a default
          const displayPostcode = address.postcode ? address.postcode.toUpperCase() : 'London';
          
          // Try to extract region/state
          const region = address.state || address.region || address.country || 'London';

          console.log('✅ OSM match found:', { locationName, displayPostcode, region });

          return NextResponse.json({
            valid: true,
            postcode: displayPostcode,
            borough: locationName,
            region: region,
            country: address.country || 'England',
            latitude: parseFloat(result.lat) || null,
            longitude: parseFloat(result.lon) || null,
            source: 'openstreetmap_nominatim',
            place_name: cleanQuery,
            display_name: result.display_name
          });
        } else {
          console.log('❌ No OSM results found');
        }
      } else {
        console.log('❌ OSM API error:', osmResponse.status);
      }
    } catch (osmError) {
      console.log('OSM Nominatim error:', osmError);
    }

    // All strategies failed
    console.log('❌ No results found for:', cleanQuery);
    return NextResponse.json(
      { 
        valid: false, 
        message: "We couldn't verify that UK location. Please check the spelling or postcode and try again."
      },
      { status: 404 }
    );

  } catch (error) {
    console.error('❌ Location lookup error:', error);
    return NextResponse.json(
      { 
        valid: false, 
        error: 'Failed to resolve location. Please try again later.' 
      },
      { status: 500 }
    );
  }
}