import React from 'react'
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.div animate={{opacity:1}} initial={{opacity: 0}} transition={{duration: 2}} className="footer-container">

     <div className='footer-copyright'>
     ⓒ Luke Short, 2022
     </div>


    </motion.div>
  )
}
