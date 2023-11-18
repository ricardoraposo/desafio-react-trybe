import SearchIcon from '../assets/searchIcon.svg';

function Header() {
  return (
    <div
      className="w-screen py-4 pl-2 pr-6 bg-strong-gray gap-2 opacity-90
      flex justify-between items-center shadow-xl drop-shadow-md
      md:py-8 md:justify-around"
    >
      <div className="hidden md:block" />
      <div
        className="flex flex-col justify-center items-center gap-2
        md:flex-row"
      >
        <img src="/trybe.svg" alt="trybe logo" className="w-8 md:w-20" />
        <h1
          className="font-header text-lg text-dimmed-gray text-center
        md:text-6xl"
        >
          TRYBE NEWS
        </h1>
      </div>
      <div className="flex justify-end gap-2 bg-gray-700 rounded-lg">
        <input
          type="text"
          className="text-dimmed-gray w-1/2 bg-gray-700 py-2 px-1 rounded-lg
          md:text-xl md:w-full md:py-4 md:px-2"
        />
        <button className="px-2">
          <img
            src={ SearchIcon }
            alt="search icon"
            className="w-4 md:w-8"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
