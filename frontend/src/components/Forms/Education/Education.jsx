import { useState } from "react"; 
const Education = (props) => {
    const { onEducationData, onValid } = props;
    const [educations, setEducations] = useState([
        {
            name: "",
            degree: "",
            startDate: "",
            endDate: "",
            details: "",
        },
    ]);
    
    const inputChangeHandler = (e, index) => {
        const data = [...educations];
        data[index][e.target.name] = e.target.value;
        setEducations(data);
    }
    const addHandler = () => {
        setEducations(previous => {
            return [
                ...previous,
                {
                    name: "",
                    degree: "",
                    startDate: "",
                    endDate: "",
                    details: "",
                }
            ]
        })
    };
    const removeHandler = (index) => {
        if (index > 0) {
            const data = [...educations];
            data.splice(index, 1);
            setEducations(data);
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        onValid(true);
        onEducationData(educations);
    }
    return ( 
        <form className="mx-4" onSubmit={submitHandler}>
            {educations.map((education, index) => {
                return (
                    
                        <section key={index}>
                            <div className="mb-4">
                                <label htmlFor="name" className="cursor-pointer">School Name</label>
                                <input type="text" id="name" name="name" className="input"
                                    value={education.name} onChange={(e) => inputChangeHandler(e, index)} required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="degree" className="cursor-pointer">Degree</label>
                                <input type="text" id="degree" name="degree" className="input"
                                    value={education.degree} onChange={(e) => inputChangeHandler(e, index)} required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="startDate" className="cursor-pointer">Start Date</label>
                                <input type="month" id="startDate" name="startDate" className="input"
                                    value={education.startDate} onChange={(e) => inputChangeHandler(e, index)} required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="endDate" className="cursor-pointer">End Date</label>
                                <input type="month" id="endDate" name="endDate" className="input"
                                    value={education.endDate} onChange={(e) => inputChangeHandler(e, index)} required/>
                            </div>
                            <div className="mb-4">
                                <label html="details" className="cursor-pointer">Details</label>
                                <textarea type="text" id="details" name="details" className="input"
                                    value={education.details} onChange={(e) => inputChangeHandler(e, index)} required></textarea>
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
 
export default Education;