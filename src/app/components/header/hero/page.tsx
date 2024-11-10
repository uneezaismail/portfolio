import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='home'>
             <div className='img-box-1'><Image className='img' src={"/hero.png"} alt='hero-img' layout="fill"/></div>
        <div className='home-content'>
            <h3>Hi,</h3>
            <h1>I&apos;m <span>UNEEZA</span><br />a Frontend Developer</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi consequuntur consequatur doloribus officia neque facere eaque animi, fuga nulla explicabo laboriosam ab nihil cumque tenetur provident similique voluptatem maiores libero fugiat atque expedita debitis? Facilis, voluptate voluptas earum animi dolore porro quia molestias, eum, labore rerum ea perspiciatis vitae ratione!</p>

        <div className='btn-box'>
            <button className='btn-1'>Hire Me</button>
            <button className='btn-2'>My CV</button>
        </div>
        </div>
        <div className='img-box'><Image className='img' src={"/hero.png"} alt='hero-img' layout="fill"/></div>
    </section>
  )
}

export default Hero