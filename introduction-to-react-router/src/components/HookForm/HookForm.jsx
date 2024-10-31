import useInputState from "../../Hooks/useInputState";


const HookForm = () => {

    const [name, handleNameChange] = useInputState('Rojoni')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="bg-green-300 p-5">
            <form action="" onSubmit={handleSubmit} className="space-y-3">
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password"/>
                <br />
                <input type="submit" value={'Submit'} name="submit" />
            </form>
        </div>
    );
};

export default HookForm;