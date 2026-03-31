import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from './features/todo/todoSlice'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [input, setInput] = useState('')
  const [editingTodoId, setEditingTodoId] = useState(null)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedInput = input.trim()
    if (!trimmedInput) return

    if (editingTodoId) {
      dispatch(updateTodo({ id: editingTodoId, text: trimmedInput }))
    } else {
      dispatch(addTodo(trimmedInput))
    }

    setInput('')
    setEditingTodoId(null)
  }

  const handleEdit = (todo) => {
    setEditingTodoId(todo.id)
    setInput(todo.text)
  }

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
    if (editingTodoId === id) {
      setEditingTodoId(null)
      setInput('')
    }
  }

  return (
    <main className="app-shell">
      <section className="glass-panel rounded-3xl p-6 sm:p-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
            Productivity
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Redux Toolkit Todo
          </h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Plan your day with a simple, focused task list.
          </p>
        </div>
        <AddTodo
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          isEditing={Boolean(editingTodoId)}
        />
        <Todos
          onEdit={handleEdit}
          onDelete={handleDelete}
          editingTodoId={editingTodoId}
        />
      </section>
    </main>
  )
}

export default App