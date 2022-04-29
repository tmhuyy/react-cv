import { useState } from "react";
import User from "../Forms/User/User";
import Education from "../Forms/Education/Education";
import Project from "../Forms/Project/Project";
import Link from "../Forms/Link/Link";

const CreateCv = () => {
    const [page, setPage] = useState(0);
    const [isFinish, setIsFinish] = useState(false);
    const formTitles = ["Personal Detail", "Education", "Project", "Link"];
    const prevHandler = () => {
        if (page === 0) return;
        setIsFinish(false)
        setPage((previous) => previous - 1)
    };
    const nextHandler = () => {
        if (page === formTitles.length - 1) {
            return;
        } setPage((previous) => previous + 1)
    }
    const onUserDataHandler = (userData) => {
        console.log(userData)
    }
    const onEducationDataHandler = (educationData) => {
        console.log(educationData)
    }
    const onProjectDataHandler = (projectData) => {
        console.log(projectData)
    }
    const onLinkDataHandler = (linkData) => {
        console.log(linkData)
    }
    const pageDisplay = () => {
        if (page === 0) return <User onUserData={onUserDataHandler}/>
        else if (page === 1) return <Education />
        else if (page === 2) return <Project/>
        else if (page === 3) return <Link/>

    }
    return ( 
        <section className="flex flex-col content-center">
            <h1 className="text-24 mt-8 text-center">Prgress Bar</h1>
            <div className="w-full h-[20px] mb-8 bg-slate-300 text-center">
                <div className="h-[100%] bg-pink-500 z-[-1]" style={{width: page === 0 ? "0" : page === 1 ? "33.33%" : page === 2 ? "66.66%" : "100%"}}></div>
            </div>
            <header className="mt-8 mb-4 font-extrabold text-36 text-center">Sign Up</header>
            <section className="bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent text-center">
                {/* <User/> */}
                <div className="mb-4">
                    <h1>{formTitles[page]}</h1>
                </div>
                <div className="body">{ pageDisplay()}</div>
                <button className="button disabled:opacity-50 diabled:" onClick={prevHandler} disabled={page === 0 }>Prev</button>
                {page === formTitles.length - 1  ?
                    <button className="button" onClick={nextHandler}>Submit</button> :
                    <button className="button" onClick={nextHandler}>Next</button>
                }
                
            </section>
        </section>
        
     );
}
 
export default CreateCv;