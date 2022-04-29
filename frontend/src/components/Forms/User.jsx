import { useState } from "react";

const User = () => {
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
        console.log(newUser)
    }
    return ( 
        <>
            <form action="/" className="mx-4" onSubmit={ submitHandler }>
                <div className="mb-4">
                    <label htmlFor="f-name" className="cursor-pointer">First Name</label>
                    <input type="text" name="f-name" id="f-name" className="input" placeholder="First Name" onChange={(e) => setFristName(e.target.value)}/>
                    <p className="errorMsg">error</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="l-name" className="cursor-pointer">Last Name</label>
                    <input type="text" name="l-name" id="=l-name" className="input" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                    <p className="errorMsg">error</p>

                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="cursor-pointer">Address</label>
                    <input type="text" name="address" id="address" className="input" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
                    <p className="errorMsg">error</p>

                </div>
                <div className="mb-4">
                    <label htmlFor="p-number" className="cursor-pointer">Phone Number</label>
                    <input type="text" name="p-number" id="p-number" className="input" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <p className="errorMsg">error</p>

                </div>
                <div className="">
                    <label htmlFor="co" className="cursor-pointer">Career Objective</label>
                    <input type="text" name="co" id="co" className="input" placeholder="Your Career Objective"onChange={(e) => setCareerObjective(e.target.value)} ></input>
                    <p className="errorMsg">error</p>

                </div>
                <button type="submit" className="button mb-4">Submit</button>
            </form>
        </>
        
     );
}
 
export default User;