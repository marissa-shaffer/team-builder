import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState([
        {
            name: "",
            email: "",
            role: ""
        }
    ]);

    const handleChanges = event => {
    setMember({...member, [even.target.name]: event.target.value });
    };

    const submitHandler = event => {
    event.preventDefault();
    const newMember = {
        ...member, 
        id: Date.now()
    };

    return(
        <div>
            <form onSubmit= {submitHandler}>
                <label htmlFor="name">Name: </label>
                <input
                    onChange= {handleChanges}
                    id="name"
                    name="name"
                    value={member.name}
                />
                <label htmlFor="role">Role: </label>
                <input
                    onChange= {handleChanges}
                    id="role"
                    value={member.role}
                />
                <button type="submit"> Add New Member</button>
                </form>
        </div>
    ); 
};
}

export default Form;