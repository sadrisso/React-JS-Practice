// export default function Todo ({task, isDone}) {
//     if (isDone) {
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }


// export default function Todo ({task, isDone})
// {
//     return (
//         <li>{isDone ? "Finished: " : "Work ON: "} {task}</li>
//     )
// }

// export default function Todo ({task, isDone})
// {
//     return (
//         <li>{task} {isDone && "Done"}</li>
//     )
// }

export default function Todo ({task, isDone})
{
    return (
        <li>{task} {isDone || "Try more!!"}</li>
    )
}