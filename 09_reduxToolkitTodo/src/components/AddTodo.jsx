function AddTodo({ input, setInput, onSubmit, isEditing }) {
  return (
    <form onSubmit={onSubmit} className="mb-6 flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        className="h-11 w-full rounded-xl border border-white/30 bg-white/15 px-4 text-slate-100 placeholder:text-slate-300/70 outline-none backdrop-blur-md transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-300/30"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="h-11 rounded-xl border border-indigo-200/40 bg-indigo-500/80 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300/35"
      >
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  )
}

export default AddTodo