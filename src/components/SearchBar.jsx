import { useState } from "react";

const searchIcon = (
  <svg
    className="fill-blue mx-[1.6rem] my-[0.8rem] mobile:mx-[5px] mobile:my-[2.5px] mobile:shrink-0"
    height="24"
    width="25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" />
  </svg>
);

function SearchBar(prop) {
  const { handleSubmit, errorOrNot } = prop;
  const [input, setInput] = useState("");

  const handleFormSubmit = function (e) {
    e.preventDefault();
    if (input) handleSubmit(input);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full bg-white dark:bg-darkgrey3 p-[1rem] rounded-[1.5rem] shadow-darkgrey dark:shadow-lightgrey flex gap-[1rem] justify-between items-center transition-all duration-300 mobile:p-[7px] mobile:gap-0 mobile:relative "
    >
      {searchIcon}
      <input
        id="search"
        className="grow h-full outline-none dark:bg-darkgrey3 text-m text-darkgrey1 dark:text-lightgrey1 placeholder:text-darkblue dark:placeholder:text-lightgrey2 caret-blue transition-all duration-300 mobile:text-s"
        type="text"
        value={input}
        placeholder="Search GitHub username…"
        onChange={(e) => setInput(e.target.value)}
      />

      {errorOrNot ? (
        <p className="mr-[1.4rem] text-body font-bold text-red mobile:text-s mobile:mr-[3px] mobile:absolute mobile:top-[-2.5rem] mobile:right-[1rem]">
          No results
        </p>
      ) : null}

      <button className="bg-blue text-white px-[2.6rem] py-[1.3rem] rounded-[1rem] text-m font-bold hover:bg-lightblue transition-all duration-300 mobile:text-s mobile:px-[2rem]">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
