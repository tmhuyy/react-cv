import checkIconMobile from "../../assets/mobile/checkpoint.svg";
import { RiUser5Fill } from "react-icons/ri";
import { ImFilesEmpty } from "react-icons/im";

const ContentLP = (props) => {
  const { allUsers } = props;
  console.log(allUsers)

  return (
    <>
      {allUsers && <section className="md:flex md:flex-row md:ml-44">
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent md:w-[20%] md:mr-[1px]">
        <div className="mt-16 gap-8 flex items-start mr-[44px]">
          <RiUser5Fill size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            {allUsers.length}
            <p className="text-13 font-semibold mb-[36px] md:text-16">Users</p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-16">
          <ImFilesEmpty size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            {allUsers.length}
            <p className="text-13 font-semibold md:text-16"> PDF Rendered </p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] font-bold mt-[56px] md:w-[30%] md:mt-0 md:text-16 md:ml-[30%] ">
        <div className="landing-content">
          <img src={checkIconMobile} alt="" />
          <p>Resume writing made easy in minutes</p>
        </div>
        <div className="landing-content">
          <img src={checkIconMobile} alt="" />
          <p>No external fees</p>
        </div>
        <div className="landing-content">
          <img src={checkIconMobile} alt="" />
          <p>User-friendly, Effective</p>
        </div>
      </div>
    </section>}
    </>
    
  );
};

export default ContentLP;
