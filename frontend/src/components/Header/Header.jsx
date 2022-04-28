import Card from "../../assets/img-removebg.png"
import "./header.css"
const Header = () => {
  return (
    <section className="text-36 mt-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          Have It <span className="text-blue-600 dark:text-blue-200">Your</span> Way
        </p>
        <button className="button md:text-26">Start</button>
      </div>
      <div className="md:absolute md:right-[5rem]">
        <img src={ Card } alt="" className="m-auto h-[450px] w-[343px]"/>
      </div>
    </section>
  );
};

export default Header;
