

const ReuseableForm = ({children, btnText, handleSubmit}) =>
{

    const handleLocalSubmit = (e) =>
    {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        handleSubmit(data)
    }

    return (
        <div>
            {children}
            <div className="bg-black space-y-5 mt-10 py-10">
                <form action="" className="space-y-4" onSubmit={handleLocalSubmit}>
                    <input type="text" name="name"  /><br />
                    <input type="email" name="email"/><br />
                    <input type="password" name="password"/><br />
                    <input type="submit" value={btnText} className="btn" />
                </form>
            </div>
        </div>
    );
};

export default ReuseableForm;