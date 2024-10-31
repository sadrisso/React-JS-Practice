import { useEffect, useRef } from "react";


const RefForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef, emailRef, passRef)
    }

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();


    return (
        <div className="bg-slate-400 p-5">
            <form action="" onSubmit={handleSubmit} className="space-y-3">
                <input type="text" name="name" ref={nameRef}/>
                <br />
                <input type="email" name="email" ref={emailRef}/>
                <br />
                <input type="password" name="password" ref={passRef}/>
                <br />
                <input type="submit" value={'Submit'} name="submit" />
            </form>
        </div>
    );
};

export default RefForm;