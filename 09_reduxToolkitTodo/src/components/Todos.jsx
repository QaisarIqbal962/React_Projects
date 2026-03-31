import { useSelector } from 'react-redux'

function Todos({ onEdit, onDelete, editingTodoId }) {
  const todos = useSelector((state) => state.todos)

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-100">Tasks</h2>
        <span className="rounded-full border border-indigo-200/40 bg-indigo-400/20 px-3 py-1 text-xs font-semibold text-indigo-100">
          {todos.length} total
        </span>
      </div>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            className={`glass-item flex items-center justify-between rounded-xl px-4 py-3 transition ${
              editingTodoId === todo.id
                ? 'ring-2 ring-indigo-300/60'
                : 'hover:border-white/35'
            }`}
            key={todo.id}
          >
            <div className="pr-3 text-left text-slate-100">{todo.text}</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onEdit(todo)}
                className="rounded-lg border border-amber-100/35 cursor-pointer bg-amber-500/85 px-3 py-2 text-white transition hover:bg-amber-500 focus:outline-none focus :ring-4 focus:ring-amber-300/35"
                aria-label={`Edit ${todo.text}`}
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="rounded-lg border border-rose-100/35 bg-rose-500/85 cursor-pointer px-3 py-2 text-white transition hover:bg-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-300/35"
                aria-label={`Delete ${todo.text}`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        {todos.length === 0 && (
          <li className="rounded-xl border border-dashed border-white/35 bg-white/10 px-4 py-8 text-center text-sm text-slate-200">
            No tasks yet. Add your first task above.
          </li>
        )}
      </ul>
    </section>
  )
}

export default Todos