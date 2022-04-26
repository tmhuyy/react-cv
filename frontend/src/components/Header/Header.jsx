import Card from "../../assets/desktop/isocard.svg"
import "./header.css"
const Header = () => {
  return (
    <section className="text-36 my-14 font-extrabold">
      <div className="text-center">
        <p className="">
          Have It <span className="text-purple-300">Your</span> Way
        </p>
        <button className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-md hover:bg-pink-500 transition-all duration-300 cursor-pointer">Start</button>
      </div>
      <div className="mt-[70px]">
        <img src={ Card } alt="" className="img m-auto"/>
      </div>
    </section>
  );
};

export default Header;
