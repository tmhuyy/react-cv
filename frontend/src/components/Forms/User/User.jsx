import { useState } from "react";

const User = (props) => {
    const { onUserData } = props;

    const [firstName, setFristName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [careerObjective, setCareerObjective] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            address,
            phoneNumber,
            careerObjective
        }
        onUserData(newUser);
        setFristName("");
        setLastName("");
        setAddress("");
        setPhoneNumber("");
        setCareerObjective("");
    }
    return ( 
        <>
            <form action="/" className="mx-4" onSubmit={ submitHandler }>
                <div className="mb-4">
                    <label htmlFor="f-name" className="cursor-pointer">First Name</label>
                    <input type="text" name="f-name" id="f-name" className="input" value={ firstName } placeholder="First Name" onChange={(e) => setFristName(e.target.value)}/>
                    <p className="errorMsg">error</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="l-name" className="cursor-pointer">Last Name</label>
                    <input type="text" name="l-name" id="=l-name" className="input" value={ lastName } placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                    <p className="errorMsg">error</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="cursor-pointer">Address</label>
                    <input type="text" name="address" id="address" className="input" value={ address } placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
                    <p className="errorMsg">error</p>

                </div>
                <div className="mb-4">
                    <label htmlFor="p-number" className="cursor-pointer">Phone Number</label>
                    <input type="text" name="p-number" id="p-number" className="input" value={ phoneNumber } placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <p className="errorMsg">error</p>

                </div>
                <div className="">
                    <label htmlFor="co" className="cursor-pointer">Career Objective</label>
                    <textarea type="text" name="co" id="co" className="input" value={ careerObjective } placeholder="Your Career Objective"onChange={(e) => setCareerObjective(e.target.value)} ></textarea>
                    <p className="errorMsg">error</p>

                </div>
                <button type="submit" className="button mb-4">Send First</button>
            </form>
        </>
        
     );
}
 
export default User;