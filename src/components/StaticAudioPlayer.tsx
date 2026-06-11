'use client';

import type { AudioRecord } from '@/types/media/audio';
import AudioSelector from './AudioSelector';

interface StaticAudioPlayerProps {
  recordings: AudioRecord[]; // Pre-resolved at build time
  className?: string;
}

// Static audio player - receives pre-resolved recordings, no runtime loading
export default function StaticAudioPlayer({ recordings, className }: StaticAudioPlayerProps) {
  // No loading state, no useEffect, no fetching - just render the pre-resolved data
  if (!recordings || recordings.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <AudioSelector recordings={recordings} />
    </div>
  );
}
