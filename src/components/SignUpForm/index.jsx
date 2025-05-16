import { useState } from "react";

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted", {
            name,
            email,
            password,
            confirmPassword,
            phoneNumber,
            address
        });
    }
    const clearInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhoneNumber("");
        setAddress("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
            </label>
            <input value={name} onChange={(evt) => setName(evt.target.value)} required></input>
            <br/>
            <label>
                Email
            </label>
            <input value={email} onChange={(evt) => setEmail(evt.target.value)} required></input>
            <br/>
            <label>
                Password
            </label>
            <input value={password} onChange={(evt) => setPassword(evt.target.value)} required></input>
            <br/>
            <label>
                Confirm Password
            </label>
            <input value={confirmPassword} onChange={(evt) => setConfirmPassword(evt.target.value)} required></input>
            <br/>
            <label>
                Phone Number
            </label>
            <input value={phoneNumber} onChange={(evt) => setPhoneNumber(evt.target.value)} required></input>
            <br/>
            <label>
                Address
            </label>
            <input value={address} onChange={(evt) => setAddress(evt.target.value)} required></input>
            <br/>
            <button type="button" onClick={clearInputs}>clear</button>
            <button type="submit">Sign Up</button>

        </form>
    )
}

export default SignUpForm;