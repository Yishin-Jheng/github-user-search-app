import { useState } from "react";
import { searchIcon } from "./Icons";

interface SearchBarProps {
  handleSubmit: (username: string) => void;
  errorOrNot: boolean;
}

function SearchBar(props: SearchBarProps) {
  const { handleSubmit, errorOrNot } = props;
  const [input, setInput] = useState("");

  const handleFormSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input) handleSubmit(input);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full bg-white dark:bg-darkgrey3 p-4 rounded-3xl shadow-darkgrey dark:shadow-lightgrey flex gap-4 justify-between items-center transition-all duration-300 max-mobile:p-[7px] max-mobile:gap-0 max-mobile:relative "
    >
      {searchIcon}
      <input
        id="search"
        className="grow h-full outline-none dark:bg-darkgrey3 text-m text-darkgrey1 dark:text-lightgrey1 placeholder:text-darkblue dark:placeholder:text-lightgrey2 caret-blue transition-all duration-300 max-mobile:text-s"
        type="text"
        value={input}
        placeholder="Search GitHub username…"
        onChange={(e) => setInput(e.target.value)}
      />
      {errorOrNot && (
        <p className="mr-[1.4rem] text-body font-bold text-red max-mobile:text-s max-mobile:mr-[3px] max-mobile:absolute max-mobile:top-10 max-mobile:right-4">
          No results
        </p>
      )}
      <button className="bg-blue text-white px-[2.6rem] py-[1.3rem] rounded-2xl text-m font-bold hover:bg-lightblue transition-all duration-300 max-mobile:text-s max-mobile:px-8">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
