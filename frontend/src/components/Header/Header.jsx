import Card from "../../assets/img-removebg.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className="text-36 mt-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          Have It <span className="text-blue-600 dark:text-blue-200">Your</span> Way
        </p>
        <button className="button md:text-26"><Link to="/create" >Start</Link></button>
      </div>
      <div className="md:absolute md:left-[5%] md:top-[8%] ">
        <img src={Card} alt="" className="m-auto h-[450px] w-[343px]" />
      </div>
    </section>
  );
};

export default Header;
