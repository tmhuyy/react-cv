import { useState } from "react";
import User from "../Forms/User";
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
    const pageDisplay = () => {
        if(page === 0) return <User/>
    }
    return ( 
        <>
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
        </>
        
     );
}
 
export default CreateCv;