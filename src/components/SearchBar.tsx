"use client";

import { cn } from "@/lib/utils";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search/${term}`);
  };

  return (
    <div className="flex items-center justify-between">
      <form
        className="flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-28 bg-burntumber pl-4 pt-1 font-oswald placeholder:font-oswald placeholder:text-champagnepink md:w-full lg:w-full"
          placeholder="Search..."
        />
        <button
          className="ml-3 hidden h-full bg-slate-500 p-2 px-5 disabled:bg-darkslategray md:block lg:block"
          type="submit"
          disabled={!term}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
