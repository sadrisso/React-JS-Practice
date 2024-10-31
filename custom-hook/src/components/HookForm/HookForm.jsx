import useInputValue from "../../Hooks/useInputValue";



const HookForm = () => {

    // const [name, nameChange]  = useInputValue('Rahim');
    const emailState = useInputValue('rahim@karim.com')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form data", emailState.value)
    }

    return (
        <div className="flex justify-center items-center h-[100vh] bg-blue-400">
            <form action="" className="space-y-4" onSubmit={handleSubmit}>
                {/* <input type="text" name="name" value={name} onChange={nameChange} /><br /> */}
                <input {...emailState} type="email" /><br />
                <input type="password" /><br />
                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>
    );
};

export default HookForm;