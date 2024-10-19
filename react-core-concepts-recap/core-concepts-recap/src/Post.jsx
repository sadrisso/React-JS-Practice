export default function Post ({post})
{
    const postStyle = {
        padding: '10px',
        border: 'solid 2px red',
        margin: '10px',
        borderRadius: '10px'
    }
    const {userId, id, title, body} = post
    return(
        <div style={postStyle}>
            <h3>Title: {title}</h3>
            <h5>UserId: {userId}</h5>
            <p>Id: {id}</p>
            <p>Body: {body}</p>
        </div>
    )
}