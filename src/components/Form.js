import React, { useState, useEffect, useRef } from 'react'

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  })

  const changeHandle = (e) => {
    setInput(e.target.value)
  }
  const submitHandle = (e) => {
    e.preventDefault()
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    })
    setInput('')
  }
  return (
    <form className='todo-form' onSubmit={submitHandle}>
      {props.edit ? (
        <>
          <input
            type='text'
            placeholder='Edytuj...'
            value={input}
            name='text'
            className='todo-input edit'
            onChange={changeHandle}
            ref={inputRef}
          />
          <button className='todo-button edit'>Zatwierdź</button>
        </>
      ) : (
        <>
          <input
            type='text'
            placeholder='Napisz coś...'
            value={input}
            name='text'
            className='todo-input'
            onChange={changeHandle}
            ref={inputRef}
          />
          <button className='todo-button'>Dodaj</button>
        </>
      )}
    </form>
  )
}

export default Form
