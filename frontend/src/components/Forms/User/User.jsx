import { useFormik } from "formik";
import * as Yup from "yup";
const User = (props) => {
    const { onUserData, onValid } = props;
    
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            careerObjective: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
            phoneNumber: Yup.string().required("Required").matches(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, "Please enter a valid phone number"),
            careerObjective: Yup.string().required("Required")
        }),
        onSubmit: (values) => {
            onValid(true);
            onUserData(values);
        }
    });
    return ( 
        <>
            <form className="mx-4" onSubmit={ formik.handleSubmit }>
                <div className="mb-4">
                    <label htmlFor="firstName" className="cursor-pointer">First Name</label>
                    <input type="text" name="firstName" id="firstName" className="input"
                        value={formik.values.firstName} placeholder="First Name"
                        onChange={formik.handleChange} />
                    <p className="errorMsg">{ formik.errors.firstName }</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="cursor-pointer">Last Name</label>
                    <input type="text" name="lastName" id="=lastName" className="input"
                        value={formik.values.lastName} placeholder="Last Name"
                        onChange={formik.handleChange} />
                    <p className="errorMsg">{ formik.errors.lastName }</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="cursor-pointer">Address</label>
                    <input type="text" name="address" id="address" className="input"
                        value={formik.values.address} placeholder="Address"
                        onChange={formik.handleChange} />
                    <p className="errorMsg">{ formik.errors.address }</p>

                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="cursor-pointer">Phone Number</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" className="input"
                        value={formik.values.phoneNumber} placeholder="Phone Number"
                        onChange={formik.handleChange} />
                    <p className="errorMsg">{ formik.errors.phoneNumber }</p>

                </div>
                <div className="">
                    <label htmlFor="careerObjective" className="cursor-pointer">Career Objective</label>
                    <textarea type="text" name="careerObjective" id="careerObjective" className="input"
                        value={formik.values.careerObjective} placeholder="Your Career Objective"
                        onChange={formik.handleChange} ></textarea>
                    <p className="errorMsg">{ formik.errors.careerObjective }</p>

                </div>
                <button type="submit" className="button mb-4">Send First</button>
            </form>
        </>
        
     );
}
 
export default User;