import { useState } from "react";

const Skill = (props) => {
    const { onSkillData, onValid } = props;
    const [skills, setSkills] = useState([
        {
            name: "",
            details: ""
        },
    ]);
    const addHandler = () => {
        setSkills(previous => {
            return [
                ...previous,
                {
                    name: "",
                    details: ""
                }
            ]
        })
    };
    const removeHandler = (index) => {
        if (index > 0) {
            const data = [...skills];
            data.splice(index, 1);
            setSkills(data);
        }
    };
    const submitHandler = (e) => {
        e.preventDefault();
        onSkillData(skills);
        onValid(true);
    };
    const inputChangeHandler = (e, index) => {
        const data = [...skills];
        data[index][e.target.name] = e.target.value;
        setSkills(data);
    }
    return ( 
        <form className="mx-4" onSubmit={ submitHandler }>
            {skills.map((skill, index) => {
                return [
                    <section key={index}>
                        <div className="mb-4">
                            <label htmlFor="name" className="cursor-pointer">Skill Name</label>
                            <input type="text" id="name" name="name" className="input"
                                value={skill.name} onChange={(e) => inputChangeHandler(e, index)} required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="details" className="cursor-pointer">Details</label>
                            <textarea type="text" id="details" name="details" className="input"
                                value={skill.details} onChange={(e) => inputChangeHandler(e, index)} required></textarea>
                        </div>
                        <div className="flex flex-row justify-center space-x-4">
                            <button type="button" className="bg-red-400 px-2 py-1" onClick={() => addHandler()}>ADD</button>
                            <button type="button" className="bg-red-400 px-2 py-1" onClick={() => removeHandler(index)}>REMOVE</button>
                        </div> 
                    </section>
                ]
            })}
            <button type="submit" className="button mb-4">Send First</button>      
        </form>
     );
}
 
export default Skill;