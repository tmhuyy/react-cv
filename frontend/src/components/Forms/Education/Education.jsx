import { useFormik } from "formik";
import * as Yup from "yup";
const Education = (props) => {
    const { onEducationData, onValid } = props;
    const formik = useFormik({
        initialValues: {
            schoolName: "",
            degree: "",
            startDate: "",
            endDate: "",
            eduDetails: ""
        },
        validationSchema: Yup.object({
            schoolName: Yup.string().required("Required"),
            degree: Yup.string().required("Required"),
            startDate: Yup.string().required("Required"),
            endDate: Yup.string().required("Required"),
            eduDetails: Yup.string().required("Required")
        }),
        onSubmit: (values) => {
            onValid(true);
            onEducationData(values);
        }
    });

    return ( 
        <>
            <form className="mx-4" onSubmit={ formik.handleSubmit }>
                <div className="mb-4">
                    <label htmlFor="schoolName" className="cursor-pointer">Name</label>
                    <input type="text" id="schoolName" name="schoolName" className="input"
                        value={formik.values.schoolName} onChange={formik.handleChange} />
                    <p className="errorMsg">{ formik.errors.schoolName }</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="degree" className="cursor-pointer">Degree</label>
                    <input type="text" id="degree" name="degree" className="input"
                        value={formik.values.degree} onChange={formik.handleChange} />
                    <p className="errorMsg">{ formik.errors.degree }</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="startDate" className="cursor-pointer">Start Date</label>
                    <input type="text" id="startDate" name="startDate" className="input" value={ formik.values.startDate }  onChange={ formik.handleChange }/>
                    <p className="errorMsg">{ formik.errors.startDate }</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="endDate" className="cursor-pointer">End Date</label>
                    <input type="text" id="endDate" name="endDate" className="input" value={ formik.values.endDate }  onChange={ formik.handleChange }/>
                    <p className="errorMsg">{ formik.errors.endDate }</p>
                </div>
                <div className="mb-4">
                    <label html="eduDetails" className="cursor-pointer">Details</label>
                    <textarea type="text" id="eduDetails" name="eduDetails" className="input" value={ formik.values.eduDetails }  onChange={ formik.handleChange }></textarea>
                    <p className="errorMsg">{ formik.errors.eduDetails }</p>
                </div>
                <button type="submit" className="button mb-4">Send First</button>

            </form>
        </>
     );
}
 
export default Education;