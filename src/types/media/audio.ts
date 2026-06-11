export type AudioLevel = "word" | "meaning" | "example";
export type AudioQuality = "low" | "medium" | "high";

export interface AudioMetadata {
  entryId: string;
  level: AudioLevel;
  levelId?: string;
  speaker?: string;
  dialect?: string;
  quality?: AudioQuality;
  notes?: string;
}

export interface AudioRecord {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  duration?: number;
  metadata: AudioMetadata;
  url: string;
  blobUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AudioFilters {
  entryId?: string;
  level?: AudioLevel;
  levelId?: string;
  speaker?: string;
  dialect?: string;
}
