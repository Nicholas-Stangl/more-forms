import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // ======================
    // Error States (i did this)
    // ======================
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    

    // ================================
    // How Mich Destructures Everything
    // =================================

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handelChange = e => {
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        })
    }

    // ========================
    // Error Methods (i did this)
    // ========================
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length >= 1 && e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 letters. ");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 letters. ");
        } else if (e.target.value.length > 2) {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 2) {
            setEmailError("Email must be at least 2 letters. ");
        } else if (e.target.value.length > 2) {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 letters. ");
        } else if (e.target.value.length > 2) {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value != password) {
            setConfirmPasswordError("Confirmation must match Password.");
        } else if ((e.target.value == password)) {
            setConfirmPasswordError("");
        }
    }


    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstName, lastName, email, password };
    //     console.log("Welcome", newUser);
    // };

    return (
        <form>
            {/* <form onSubmit={createUser}> */}
            <label>First Name: </label>
            <input name="firstName" value={inputs.firstName} type="text" onChange={handelChange} />
            {
                inputs.firstName.length < 2 ?
                    <p style={{ color: 'red' }}>First Name must be at least 2 characters.</p> :
                    ''
            }
                        {/* {
                firstNameError ?
                    <p style={{ color: 'red' }}>{firstNameError}</p> :
                    ''
            } */}
            <br></br><br></br>
            <label>Last Name: </label>
            <input type="text" onChange={handleLastName} />
            {
                lastNameError ?
                    <p style={{ color: 'red' }}>{lastNameError}</p> :
                    ''
            }
            <br></br><br></br>
            <label>Email Address: </label>
            <input type="text" onChange={handleEmail} />
            {
                emailError ?
                    <p style={{ color: 'red' }}>{emailError}</p> :
                    ''
            }
            <br></br><br></br>
            <label>Password: </label>
            <input type="password" onChange={handlePassword} />
            {
                passwordError ?
                    <p style={{ color: 'red' }}>{passwordError}</p> :
                    ''
            }
            <br></br><br></br>
            <label> Confirm Password: </label>
            <input type="password" onChange={handleConfirmPassword} />
            {
                confirmPasswordError ?
                    <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                    ''
            }
            <br></br><br></br>
            {/* <input type="submit" value="Create User" /> */}

            <div>
                <h4>Your Form Data</h4>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
    );
};

export default UserForm;
