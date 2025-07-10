import React from 'react'

const Form = () => {
    const handelForm = (e) =>{
        e.preventDefault()
        const fromData = new FormData(e.target.value)
        const obj = Object.fromEntries(fromData.entries())
        console.log(obj)
    }
  return (
    <form action="" onSubmit={handelForm}>
        <div>
            <input type="text" name='name' placeholder='name: Umesh' />
            <input type="number" name='number' placeholder='Number: 984956' />
            <input type="text" name='Address' placeholder='Address: ktm/kailali' />
            <button type='submit'>submit form</button>
        </div>
    </form>
  )
}

export default Form