import React from 'react'
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.div animate={{opacity:1}} initial={{opacity: 0}} transition={{duration: 2}}>

    <div className='contact-container'>
      <div className='contact-title'>
        Contact me
      </div>
      <div className='contact-desc-container'>
      <a href="tel:304-982-0128" className="inner-link bigger" >304.982.0128</a>
          <a href="mailto:lukeshort321@gmail.com" className="inner-link bigger" >lukeshort321@gmail.com</a>
      </div>
    </div>


    </motion.div>
  )
}
