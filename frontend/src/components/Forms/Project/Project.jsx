import { useState } from "react";

const Project = (props) => {
    const { onProjectData, onValid } = props;
    const [projects, setProjects] = useState([
        {
            name: "",
            startDate: "",
            endDate: "",
            details: ""
        }
    ]);
    const inputChangeHandler = (e, index) => {
        const data = [...projects];
        data[index][e.target.name] = e.target.value;
        setProjects(data);
    };
    const addHandler = () => {
        setProjects(previous => {
            return [
                ...previous,
                {
                    name: "",
                    startDate: "",
                    endDate: "",
                    details: "",
                }
            ]
        })
    };
    const removeHandler = (index) => {
        if (index > 0) {
            const data = [...projects];
            data.splice(index, 1);
            setProjects(data);
        }
        
    }
    const submitHandler = (e) => {
        e.preventDefault();
        onValid(true);
        onProjectData(projects);
    }
    return ( 
        <form className="mx-4" onSubmit={submitHandler}>
            {projects.map((project, index) => {
                return (
                    <section key={index}>
                        <div className="mb-4">
                             <label htmlFor="name" className="cursor-pointer">Project Name</label>
                            <input type="text" id="name" name="name" className="input"
                                 value={project.name} onChange={(e) => inputChangeHandler(e, index)} required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="startDate" className="cursor-pointer">Start Date</label>
                            <input type="month" id="startDate" name="startDate" className="input"
                                value={project.startDate} onChange={(e) => inputChangeHandler(e, index)} required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="endDate" className="cursor-pointer">End Date</label>
                            <input type="month" id="endDate" name="endDate" className="input"
                                value={project.endDate} onChange={(e) => inputChangeHandler(e, index)} required/>
                        </div>
                        <div className="mb-4">
                            <label html="details" className="cursor-pointer">Details</label>
                            <textarea type="text" id="details" name="details" className="input"
                                value={project.details} onChange={(e) => inputChangeHandler(e, index)} required></textarea>
                        </div>
                        <div className="flex flex-row justify-center space-x-4">
                            <button type="button" className="bg-red-400 px-2 py-1" onClick={() => addHandler()}>ADD</button>
                            <button type="button" className="bg-red-400 px-2 py-1" onClick={() => removeHandler(index)}>REMOVE</button>
                        </div> 
                    </section>
                )
            })}
            <button type="submit" className="button mb-4">Send First</button>

        </form>
     );
}
 
export default Project;