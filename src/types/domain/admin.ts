import type { DictionaryEntry } from "@/types/domain/dictionary";

export interface AdminDictionaryEntry extends DictionaryEntry {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  lastReviewed?: string;
  needsReview?: boolean;
  status?: "published" | "draft" | "archived";
}

export interface AdminOperationResult {
  success: boolean;
  message: string;
  data?: AdminDictionaryEntry | AdminDictionaryEntry[];
  error?: string;
  total?: number;
  page?: number;
  limit?: number;
}
