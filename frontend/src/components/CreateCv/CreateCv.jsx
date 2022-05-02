import { useState } from "react";
import User from "../Forms/User/User";
import Education from "../Forms/Education/Education";
import Project from "../Forms/Project/Project";
import Link from "../Forms/Link/Link";
import Skill from "../Forms/Skill/Skill";

import axios from "axios";
const CreateCv = () => {
    const [page, setPage] = useState(0);
    const [isFinish, setIsFinish] = useState(false);
    const [isValid, setIsValid] = useState();
    const formTitles = ["Personal Detail", "Education", "Project", "Skill", "Link"];

    const [user, setUser] = useState({});
    const [educations, setEducations] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [links, setLinks] = useState([]);

    const prevHandler = () => {
        if (page === 0 && isValid === false) {
            return;
        }
        else if (isValid === true) {
            console.log("valid");
            setIsFinish(false);
            setPage((previous) => previous - 1);
        }
    };
    const nextHandler = () => {
        setIsValid(false)

        if ((page < formTitles.length - 1) && (isValid === true)) {
            setIsValid(false);
            return setPage((previous) => previous + 1);
        }
        else if ((page === formTitles.length - 1) && isValid === false) {
            return;
        }
    }
    const submitAllData = () => {
        const submitData = { ...user, educations, projects, skills, links };
        console.log(submitData)
        axios.post("/v1/users", submitData);
    }
    const onValidHandler = (entered) => {
        setIsValid(entered)
    }
    const onUserDataHandler = (userData) => {
        setUser(userData);
        console.log(userData);
    }
    const onEducationDataHandler = (educationData) => {
        const data = [...educationData]
        setEducations(data);
        console.log(educationData);
    }
    const onProjectDataHandler = (projectData) => {
        const data = [...projectData]
        setProjects(data);
        console.log(projectData);
    }
    const onSkillDataHandler = (skillData) => {
        const data = [...skillData]
        setSkills(data);
        console.log(skillData);
    }
    const onLinkDataHandler = (linkData) => {
        const data = [...linkData]
        setLinks(data);
        console.log(linkData);
    }
    const pageDisplay = () => {
        if (page === 0) return <User onUserData={onUserDataHandler} onValid={onValidHandler}/>
        else if (page === 1) return <Education onEducationData={onEducationDataHandler} onValid={onValidHandler}/>
        else if (page === 2) return <Project onProjectData={onProjectDataHandler} onValid={onValidHandler} />
        else if (page === 3) return <Skill onSkillData={onSkillDataHandler} onValid={onValidHandler} />
        else if (page === 4) return <Link onLinkData={onLinkDataHandler} onValid={onValidHandler} />
    }
    return ( 
        <section className="flex flex-col content-center">
            <h1 className="text-24 mt-8 text-center">Prgress Bar</h1>
            <div className="w-full h-[20px] mb-8 bg-slate-300 text-center">
                <div className="h-[100%] bg-pink-500 z-[-1]" style={{width: page === 0 ? "0" : page === 1 ? "25%" : page === 2 ? "50%" : page === 3 ? "75%": "100%"}}></div>
            </div>
            <header className="mt-8 mb-4 font-extrabold text-36 text-center">Sign Up</header>
            <section className="bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent text-center">
                <div className="mb-4">
                    <h1>{formTitles[page]}</h1>
                    { isValid === false && <h2 className="text-13 text-red-600">Make sure every fields is set</h2>}
                </div>
                <div className="body">{ pageDisplay()}</div>
                <button className="button disabled:opacity-50" onClick={prevHandler} disabled={page === 0 }>Prev</button>
                {page === formTitles.length - 1  ?
                    <button className="button" onClick={submitAllData}><a href="http://localhost:3000/cv-builder">Submit</a></button> :
                    <button className="button" onClick={nextHandler}>Next</button>
                }
            </section>
        </section>
        
     );
}
 
export default CreateCv;