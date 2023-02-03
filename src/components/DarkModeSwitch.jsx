'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && currentTheme === 'dark' ? (
        <MdLightMode
          class="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme('light')}
        />
      ) : (
        <MdDarkMode
          class="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme('dark')}
        />
      )}
    </>
  );
}
