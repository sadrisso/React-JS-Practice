
export default function Singer ({singer}) {

    function handleClick () {
        alert("Clicked")
    }

    function addToFive (number) {
        alert(number + 5)
    }

    //basic machanism of useState..
    // function useState(num) {
    //     function updateState(value) {
    //         num += value;
    //     }
    //     return [num, updateState]
    // }

    // const [count, setCount] = useState(5)
    // console.log(count, setCount)

    return (
        <div>
            <h2>Name: {singer.name}</h2>
            <p>Age: {singer.age}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => addToFive(5)}>Four</button>
        </div>
    )
}