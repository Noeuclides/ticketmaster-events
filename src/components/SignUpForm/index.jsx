import { useState } from "react";
import { useForm } from "react-hook-form"

const SignUpForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleSubmitForm = (data) => {
        console.log(data);
    }
    const clearInputs = () => {
        reset();
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Name
            </label>
            <input {...register("Name", { required: true })}></input>
            <br/>
            <label>
                Email
            </label>
            <input {...register("Email", { required: true })}></input>
            <br/>
            <label>
                Password
            </label>
            <input {...register("password", { required: true })}></input>
            <br/>
            <label>
                Confirm Password
            </label>
            <input {...register("Confirm Password", { required: true })}></input>
            <br/>
            <label>
                Phone Number
            </label>
            <input {...register("Phone Number", { required: true })}></input>
            <br/>
            <label>
                Address
            </label>
            <input {...register("Address", { required: true })}></input>
            <br/>
            <button type="button" onClick={clearInputs}>clear</button>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpForm;