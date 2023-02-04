'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      className="flex max-w-6xl mx-auto items-center justify-between px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords ... "
        className="w-full h-14 outline-none rounded-sm bg-transparent placeholder-gray-500 flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
