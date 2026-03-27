import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

  if (!todo) return
  
  addTodo({ todo, completed: false})
    setTodo("")
    }

    

    return (
        <form onSubmit={add} className="flex gap-2">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full rounded-xl border border-white/20 bg-slate-900/40 px-4 py-2.5 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-xl px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium shrink-0 transition">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

