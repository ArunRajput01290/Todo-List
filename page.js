'use client'
import React, { useState } from 'react'

export default function Home() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
  }

  const deletehandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }
  let renderTask = <h2 className='text-2xl'>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-4'>
          <div className='flex justify-evenly mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h5 className='text-xl font-medium'>{t.desc}</h5>
          </div>
          <button onClick={() =>{
            deletehandler(i)
          }}
           className='bg-red-400 p-4 text-white font-bold rounded'>Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <form onSubmit={submithandler}>
        <input className=' p-2 m-11 text-2xl rounded font-bold border-black border-zinc-900' placeholder='Enter title here' value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input className=' p-2 text-2xl rounded font-bold border-black' placeholder='Enter description here' value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button className='bg-white  p-2 text-2xl rounded font-bold'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 mt-6 bg-slate-300'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}