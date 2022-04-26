import Card from "../../assets/img-removebg.png"
import "./header.css"
const Header = () => {
  return (
    <section className="text-36 mt-14 font-extrabold">
      <div className="text-center">
        <p className="">
          Have It <span className="text-blue-500 dark:text-blue-200">Your</span> Way
        </p>
        <button className="button">Start</button>
      </div>
      <div className="">
        <img src={ Card } alt="" className="m-auto h-[450px] w-[343px]"/>
      </div>
    </section>
  );
};

export default Header;
