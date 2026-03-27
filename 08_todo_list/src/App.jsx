import React, { useEffect, useRef, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItems";
const App = () => {
  const [todos, setTodos] = useState([]);
  const hasHydrated = useRef(false);
 
  const addTodo = (todo) => {
    setTodos ((prev) => [{id: Date.now(), ...todo}, ...prev])

  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

  }

  const deleteTodo = (id) => {
    setTodos ((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))

    

  }

  useEffect(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      if (Array.isArray(storedTodos) && storedTodos.length > 0) {
        setTodos(storedTodos);
      }
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error);
    } finally {
      hasHydrated.current = true;
    }
  }, []);

  useEffect(() => {
    if (!hasHydrated.current) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  
  

   return (
    <TodoProvider value={{todos, addTodo, updateTodo,deleteTodo,toggleComplete}}>
      <div className="min-h-screen bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-2xl px-5 py-6 text-slate-100">
          <h1 className="text-3xl font-semibold text-center tracking-tight mb-6">
            Manage Your Todos
          </h1>
          <div className="mb-5">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
