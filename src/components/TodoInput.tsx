
interface TodoInputProps {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addFunc: (e: React.FormEvent) => void
}
const TodoInput:React.FC<TodoInputProps> = ({todo, setTodo, addFunc}) => {
  return (
    <form onSubmit={e => addFunc(e)}>
        <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder="Todo Yaz..." />
        <button type="submit">Ekle</button>
    </form>
  )
}

export default TodoInput