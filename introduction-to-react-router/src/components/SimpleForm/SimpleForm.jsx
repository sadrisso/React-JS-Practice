import { useState } from "react";

const SimpleForm = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('')


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(name, email, pass)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        setPass(e.target.value)
    }


    return (
        <div className="bg-teal-300 p-10">
            <form action="" onSubmit={handleSubmit} className="space-y-3">
                <input type="text" name="name" onChange={handleNameChange} />
                <br />
                <input type="email" name="email" onChange={handleEmailChange}/>
                <br />
                <input type="password" name="password" onChange={handlePassChange}/>
                <br />
                <input type="submit" value={'Submit'} name="submit" />
            </form>

        </div>
    );
};

export default SimpleForm;