import { ITypes } from "../types/ITypes"

interface TodoInputProps {
    todos: ITypes[]
    setTodos: React.Dispatch<React.SetStateAction<ITypes[]>>
}

const TodoRes:React.FC<TodoInputProps> = ({todos, setTodos}) => {
    const deleteFunc = (id: number) => {
        setTodos(todos.filter(todo => todo.id != id))
    }
  return (
    <div>
        {
            todos.map((todo,i)=>(
                <div key={i} >
                    <div>-----------------------------------------------------------------------------</div>
                    <div><b>ID:</b> {todo.id} </div>
                    <div><b>TODO:</b> {todo.todo}</div>
                    <div><b>Color:</b>{todo.isColor ? " Var" : " Yok"}</div>
                    <button onClick={()=>deleteFunc(todo.id)}>Sil</button>
                </div>

            ))
        }
    </div>
  )
}

export default TodoRes