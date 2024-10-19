export default function Home (props) {

    const name = "This is my name..";
    const age = 24;

    const myStyle = {
        border: '1px solid green',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }

    console.log(props)

    return (
        <>
            <div style={myStyle}>
                <h2>This is from HOME component: </h2>
                <p>And my name is {name} and my address is {props.road}</p>
                <p>And my age is {age}</p>
            </div>
        </>
    )
}