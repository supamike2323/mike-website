'use client';

import { useMode } from '@/context/ModeContext';
import { FancyHome } from '@/components/features/home/FancyHome';
import { SimpleHome } from '@/components/simple/SimpleHome';

export default function Home() {
  const { isSimpleMode } = useMode();

  return isSimpleMode ? <SimpleHome /> : <FancyHome />;
}
