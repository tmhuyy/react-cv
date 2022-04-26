import checkIconMobile from "../../assets/mobile/checkpoint.svg";

const ContentLP = () => {
    return ( 
        <div className="text-13 flex flex-col w-[100%] font-bold">
            <div className="landing-content">
                <img src={checkIconMobile} alt="" />
                <p>Resume writing made easy in minutes</p>
            </div>
            <div className="landing-content">
                <img src={checkIconMobile} alt="" />
                <p>No external fees</p>
            </div>
            <div className="landing-content">
                <img src={checkIconMobile} alt=""/>
                <p>User-friendly, Effective</p>
            </div>
        </div>
    );
}
 
export default ContentLP;