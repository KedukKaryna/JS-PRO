import ToDo from "./ToDo";
import todos from "./ToDos";
import styles from "./ToDo.module.css"

export default function ToDoList(){
    return(
        <div className={styles.todoList}>
            {todos.map((todo)=>(
                <ToDo
                title={todo.title}
                deadline={todo.deadline}
                description={todo.description}
                />
            ))}
        </div>
    )
}