import React from 'react'
import Yoo from '../assets/Yoo.png'
import Fly from '../assets/Fly.png'
import Smk2 from '../assets/Smk2.png'
import Back from '../assets/Back.png'
import Ai from '../assets/Ai.png'
import Wa from '../assets/Wa.png'
import Grid from '../assets/Grid.png'
import Raker from '../assets/Raker.png'
import Smk1 from '../assets/Smk1.png'
import Bunga from '../assets/Bunga.png'
import Mee from '../assets/Mee.png'
import Can from '../assets/Can.png'
import Lala from '../assets/Lala.png'
import Borobudur from '../assets/Borobudur.png'
import Smk from '../assets/Smk.png'
import Aa from '../assets/Aa.png'
import Lets from '../assets/Lets.png'
import Goo from '../assets/Goo.png'
import '../styles/Blog.css'

const Blog = () => {
  return (
    <div  className='myblog'>
      <div className='column'>
        <img src={Yoo} alt='Yoo'/>
        <img src={Fly} alt='Fly'/>
        <img src={Smk2} alt='Smk2'/>
        <img src={Back} alt='Back'/>
        <img src={Ai} alt='Ai'/>
        <img src={Wa} alt='Wa'/>
      </div>

      <div className='column'>
        <img src={Grid} alt='Grid' />
        <img src={Raker} alt='Raker'/>
        <img src={Smk1} alt='Smk1'/>
        <img src={Bunga} alt='Bunga'/>
        <img src={Mee} alt='Mee'/>
      </div>
      
      <div className='column'>
        <img src={Can} alt='Can'/>
        <img src={Lala} alt='Lala'/>
        <img src={Borobudur} alt='Borobudur'/>
        <img  src={Smk} alt='Smk'/>
        <img src={Aa} alt='Aa'/>
        <img  src={Lets} alt='Lets'/>
        <img src={Goo} alt='Goo'/>
      </div>

    </div>
  )
}

export default Blog