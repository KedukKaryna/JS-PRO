

export default function ToDo({title,description,deadline}){

    return(
        <div>
            <h1>{title}</h1>
            <p>{deadline}</p>
            <p>{description}</p>
        </div>
    )

}