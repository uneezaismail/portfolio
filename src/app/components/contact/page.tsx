import React from 'react'

const Contact = () => {
  return (
    <section className='contact-form'>
        <h2 className='contact-me'>Contact <span>Me</span></h2>
        <form action="">
            <div className='input-box'>
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Email' />
            </div>

            <div className='input-box'>
                <input type="number" placeholder='Phone Number'/>
            </div>

            <textarea name="" id="" cols={20} rows={6} placeholder='Your Message'></textarea>
            <input type="button" value="Send Me" className='btn-1'/>
        </form>
    </section>
  )
}

export default Contact