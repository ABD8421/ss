import Logo from './assets/Logo.png';


export default function Header() {
    return (
      <header className="flex justify-around items-center p-4 bg-white-100">

        <div className="flex flex-1 justify-start">
          <img src={Logo} alt="Logo" />
        </div>
  
        <div className="flex flex-2 justify-center ">
          <button className="px-4 py-2 bg-stone-300	 text-black rounded-md">Sort by view</button>
        </div>
  
        <div className="flex flex-1 justify-end">
          <button 
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-stone-600"
          >
            Blog
          </button>
        </div>
      </header>
    );
  }
  