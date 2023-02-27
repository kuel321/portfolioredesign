import React from 'react'
import { motion } from "framer-motion"

export default function Footer() {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
  return (
    <motion.div animate={{opacity:1}} initial={{opacity: 0}} transition={{duration: 2}} className="footer-container">

     <div className='footer-copyright'>
     ⓒ Luke Short, 2022 - Hope you're having a great {day}!
     </div>


    </motion.div>
  )
}
