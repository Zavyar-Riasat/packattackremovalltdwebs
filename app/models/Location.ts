// models/Location.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  slug: string;             // e.g., 'camden'
  boroughName: string;      // e.g., 'Camden'
  region: string;           // e.g., 'North London'
  postcodes: string[];      // e.g., ['NW1', 'NW3', 'NW5']
  metaTitle: string;        // Explicit control over Google's blue link text
  metaDescription: string;  // Explicit control over the summary snippet
  heroHeading: string;
  heroSubheading: string;
  localText: string;
  prices: { manVan: number; houseMove: number; };
}

const LocationSchema = new Schema<ILocation>({
  slug: { type: String, required: true, unique: true, index: true }, // Indexing speeds up server loading
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

export default mongoose.models.Location || mongoose.model<ILocation>('Location', LocationSchema);