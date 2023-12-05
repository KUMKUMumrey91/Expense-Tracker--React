"use client"
import React, { useState } from 'react'

const page = () => {
  const [date, setdate] = useState("");
  const [expense, setexpense] = useState("");
  const [desc, setdesc] = useState("");
  const [amount, setamount] = useState("");
  const [Maintask, setMaintask] = useState([])
  // const [Maintask, setMaintask] = useState(JSON.parse(localStorage.getItem("Maintask"))|| []
  //       );

  const submitHandler = (e) => {
    e.preventDefault()
    setMaintask([...Maintask, { date, expense, desc, amount }])
    console.log(Maintask)
    setdate("")
    setexpense("")
    setdesc("")
    setamount("")
    // localStorage.setItem("Maintask",JSON.stringify(setMaintask));
  }

  const deleteHandler = (i) => {
    const copytask = [...Maintask];
    copytask.splice(i, 1)
    setMaintask(copytask)

  }

  let rendertask = <h2>No entry done </h2>

  if (Maintask.length > 0) {

    rendertask = Maintask.map((t, i) => {
      return (
        <li key={i} className='flex justify-between mb-4'>
          <div className='px-1 flex items-center justify-between mb-2 w-4/5'>
            <h3 className='text-xs font-sans text-center w-1/6 md:text-xl'>{t.date}</h3>
            <h3 className='text-xs font-sans text-center w-1/3 md:text-xl'>{t.expense}</h3>
            <h3 className='text-xs font-sans text-center w-1/3 md:text-xl'>{t.desc}</h3>
            <h3 className='text-xs font-sans text-center w-1/5 md:text-xl'>{t.amount}</h3>
          </div>
          <div className='px-4 flex items-center justify-evenly mb-2 w-1/6 '>

            <button onClick={() => {
              deleteHandler(i)
            }}
              className='bg-red-400 text-xs px-2 py-1 rounded text-white md:text-2xl md:px-4 md:py-1'>delete</button>

          </div>
        </li>

      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white text-center text-2xl md:text-5xl font-bold m-1 p-4 '>EXPENSE TRACKER</h1>
      <form onSubmit={submitHandler} className='text-center'>
        DATE <input type="date" placeholder='enter date' className='text-xs md:text-2xl w-2/5 border-zinc-900 border-2 rounded m-4 px-3 py-1'
          value={date}
          onChange={(e) => {
            setdate(e.target.value)
          }} /> <br />

      EXPENSES <select className='text-xs md:text-2xl w-2/5 border-zinc-900 border-2 rounded m-4 px-3 py-1'
          value={expense}
          onChange={(e) => { setexpense(e.target.value) }}>
          <option value="groceries">groceries</option>
          <option value="entertainment">entertainment</option>
          <option value="utilities">utilities</option>
          <option value="others">others</option>
        </select><br />

        DESCRIPTION <input type="text" placeholder='enter desc' className='text-xs md:text-2xl border-zinc-900 border-2 rounded m-4 px-3 py-1 w-2/5'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} /> <br />
        AMOUNT <input type="text" placeholder='enter amount' className='text-xs md:text-2xl border-zinc-900 border-2 rounded m-4 px-3 py-1 w-2/5'
          value={amount}
          onChange={(e) => {
            setamount(e.target.value)
          }} /> <br /> 
        <button className='bg-black text-white text-2xl px-6 py-1 mx-3 mb-5 rounded'>ADD</button>

      </form>

      <hr />

      <div className='bg-slate-200 md:p-4 '>
        <div className='flex justify-between w-4/5 mb-4 pl-1 text-xs font-bold'>
          <h3 className=' w-1/6 text-center md:text-xl'>DATE</h3>
          <h3 className=' w-1/3 text-center md:text-xl'>EXPENSE</h3>
          <h3 className=' w-1/3 text-center md:text-xl'>DESCRIPTION</h3>
          <h3 className=' w-1/5 text-center md:text-xl'>AMOUNT</h3>
        </div>
        {rendertask}

        <h2 className='mt-5 text-xs md:text-xl'><b>Total Spent</b>: {Maintask.reduce((ac, cv) => ac + +cv.amount, 0)}{""}</h2>

      </div>

    </>
  )
}
export default page






