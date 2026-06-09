import { lightIcon, darkIcon } from "./Icons";

function Header(prop) {
  const { darkTheme, handleDarkTheme } = prop;

  return (
    <header className="flex justify-between w-full mb-[1.2rem]">
      <h1 className="text-xl text-darkgrey1 dark:text-white font-bold cursor-default">
        devfinder
      </h1>
      <div
        className="group flex items-center gap-4 cursor-pointer"
        onClick={handleDarkTheme}
      >
        <span className="text-s font-bold tracking-[.2em] uppercase mt-1.5 text-lightgrey3 dark:text-white group-hover:text-darkgrey1 dark:group-hover:text-greyblue transition-all duration-300">
          {darkTheme ? "light" : "dark"}
        </span>
        {darkTheme ? lightIcon : darkIcon}
      </div>
    </header>
  );
}

export default Header;
