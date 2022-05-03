import moment from "moment"
const Register = (props) => {
    const { allUsers } = props;
    const data = allUsers[0];
    console.log(data)
    return ( 
        
        <>
            {data && 
            <section className="mx-4 mt-4">
                <div className="text-center mb-4">
                    <h1 className="md:text-[25px]">{`${data.firstName} ${data.lastName}`}</h1>
                    <p className="text-[10px] md:text-[15px]">{data.address}</p>
                    <p className="text-[10px] md:text-[15px]">{data.phoneNumber}</p>
                    {data.links.map((link, index) => {
                        return (
                            <a key={index} href={link.url} className="text-[10px] md:text-[15px] mr-4 underline decoration-1">{ link.name }</a>
                        )
                    })}
                </div>
                <div className="mb-8">
                    <h2 className="md:text-[20px]">CAREER OBJECTIVE</h2>
                    <hr className="md:border-[1px] border-black dark:border-white"></hr>
                    <p className="text-[10px] md:text-[15px]">{ data.careerObjective}</p>
                </div>
                <div className="mb-8">
                    <h2 className="md:text-[20px]">EDUCATION</h2>
                    <hr className="md:border-[1px] border-black dark:border-white"></hr>
                    {data.educations.map((education, index) => {
                        return (
                            <section key={index}>
                                <div className="flex flex-row justify-between mb-2">
                                    <p className="text-[11px] font-bold md:text-[15px]">{ education.name}</p>
                                    <p className="text-[11px] font-bold md:text-[15px]">{`${moment(education.startDate).format("MMM YYYY")} - ${moment(education.endDate).format("MMM YYYY")}`}</p>
                                </div>
                                <p className="text-[11px] md:text-[15px]">{education.degree}</p>
                                <p className="text-[11px] md:text-[15px]">{education.details}</p>
                            </section>
                        )
                    })}
                    
                </div>
                <div className="mb-8">
                    <h2 className="md:text-[20px]">SKILLS</h2>
                    <hr className="md:border-[1px] border-black dark:border-white"></hr>
                    <ul className="grid grid-cols-2">
                        {data.skills.map((skill, index) => {
                            return (
                                <li key={index} className="text-[11px] list-disc md:text-[15px]">{`${skill.name}: ${skill.details}`}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="md:text-[20px]">PROJECTS</h2>
                    <hr className="md:border-[1px] border-black dark:border-white"></hr>
                    {data.projects.map((project, index) => {
                        return (
                            <section key={index}>
                                <div className="flex flex-row justify-between">
                                    <p className="text-[11px] font-bold md:text-[15px]">{ project.name}</p>
                                    <p className="text-[11px] font-bold md:text-[15px]">{`${moment(project.startDate).format("MMM YYYY")} - ${moment(project.endDate).format("MMM YYYY")}`}</p>
                                </div>
                                <p className="text-[11px] mb-4 md:text-[15px]">{ project.details }</p>
                            </section>
                        )
                    })}      
                </div> 
            </section>}
            
        </>
        
     );
}
 
export default Register;