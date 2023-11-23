function Header() {
  return (
    <div
      className="w-screen py-4 pl-2 pr-6 bg-strong-gray gap-2 opacity-90
      flex justify-center items-center shadow-xl drop-shadow-md
      md:py-8 md:justify-around"
    >
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
    </div>
  );
}

export default Header;
