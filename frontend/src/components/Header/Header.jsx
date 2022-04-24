// import "./header.css";
const Header = () => {
  return (
    <>
      <h1 className="text-48 text-black font-bold">Hello world!</h1>
      <button
        
        className="bg-purple-200 ring-2 ring-purple-500 ring-offset-4 ring-offset-purple-10 focus:outline-none hover:bg-purple-400 hover:text-white px-12 py-2 rounded-md text-24"
        onClick={(e) => {console.log(e)}}      
      >asd
      </button>
    </>
  );
};

export default Header;
