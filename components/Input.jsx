const Input = ({ form, setForm, handleSubmitForm }) => {
    return (
        <div className='bg-slate-100 text-black p-4 flex justify-between'>
          <input
            className='flex items-center h-10 w-[89%] border-2 border-blue-600 rounded px-3 text-sm'
            type='text'
            placeholder='Type your message…'
            onChange={(e) => setForm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmitForm(e)}
          />
          <button
            className='flex-shrink-0 w-[10%] bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded'
            onClick={handleSubmitForm}>
                Send
            </button>
        </div>
    )
}

export default Input;