import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";


function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState (todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
    

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }
        

    
    

    return (
        <div
            className={`flex items-center border rounded-xl px-3 py-2 gap-x-3 shadow-md duration-300 ${
                todo.completed
                    ? "bg-emerald-100/90 border-emerald-300/60 text-slate-600"
                    : "bg-white/90 border-slate-200 text-slate-800"
            }`}
        >
            <input
                type="checkbox"
                className="h-4 w-4 cursor-pointer accent-blue-600"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg transition ${
                    isTodoEditable ? "border-slate-300 px-2 py-1 bg-white" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-slate-200 justify-center items-center bg-white hover:bg-slate-100 shrink-0 disabled:opacity-50 transition"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-slate-200 justify-center items-center bg-white hover:bg-red-50 shrink-0 transition"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
