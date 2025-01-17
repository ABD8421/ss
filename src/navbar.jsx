import React from 'react';

const Navbar = () => {
  const handleClick = (category) => {
    console.log(`${category} button clicked`);
  };

  return (
    <nav className="py-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <button
            className="px-4 py-2 bg-stone-300 text-black hover:bg-red-600 rounded-md"
            onClick={() => handleClick('All')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className="px-4 py-2 bg-stone-300 text-black hover:bg-red-600 rounded-md"
            onClick={() => handleClick('Music')}
          >
            Music
          </button>
        </li>
        <li>
          <button
            className="px-4 py-2 bg-stone-300 text-black hover:bg-red-600 rounded-md"
            onClick={() => handleClick('Comedy')}
          >
            Comedy
          </button>
        </li>
        <li>
          <button
            className="px-4 py-2 bg-stone-300 text-black hover:bg-red-600 rounded-md"
            onClick={() => handleClick('Drawing')}
          >
            Drawing
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
