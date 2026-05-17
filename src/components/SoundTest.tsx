'use client';

import { useSoundEffects } from '@/hooks/useSoundEffects';
import SoundControls from './SoundControls';
import InlineIcon from '@/components/InlineIcon';
import { IoVolumeHighOutline } from 'react-icons/io5';

export default function SoundTest() {
  const { playSound } = useSoundEffects();

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        <span className="inline-flex items-center gap-2">
          <IoVolumeHighOutline className="h-5 w-5" aria-hidden="true" />
          Sound Effects Test
        </span>
      </h3>
      
      {/* Sound Controls */}
      <div className="mb-4">
        <SoundControls />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => playSound('correct')}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        >
          <span className="inline-flex items-center gap-2"><InlineIcon className="h-4 w-4" name="check" /> Correct</span>
        </button>
        <button
          onClick={() => playSound('incorrect')}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
        >
          <span className="inline-flex items-center gap-2"><InlineIcon className="h-4 w-4" name="close" /> Incorrect</span>
        </button>
        <button
          onClick={() => playSound('challenge-complete')}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          <span className="inline-flex items-center gap-2"><InlineIcon className="h-4 w-4" name="sparkle" /> Complete</span>
        </button>
        <button
          onClick={() => playSound('challenge-failed')}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
        >
          <span className="inline-flex items-center gap-2"><InlineIcon className="h-4 w-4" name="alert" /> Failed</span>
        </button>
      </div>
    </div>
  );
}
