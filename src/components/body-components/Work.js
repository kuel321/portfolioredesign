import React from 'react'
import { motion } from "framer-motion"

import example1 from '../body-components/thegrillshot.png';
import example2 from '../body-components/keithalbeeshot.png';
import example3 from '../body-components/gardenparkshot.png';
import example4 from '../body-components/mingoshot.png';
export default function Work() {
  return (
    <motion.div animate={{opacity:1}} initial={{opacity: 0}} transition={{duration: 1, delay: 0.5}} className='component-container-main work'>
<div className='work-intro-container'>
        <h1>Client work</h1>
        <p>Here's some projects I was the lead developer on for Bulldog Creative clients.</p>
     </div>
 
    <motion.div className="component-container work">
     

     <div className='work-cards-container'>
        <div className='work-card'>
            <motion.div whileHover={{scale: 1.04}} whileTap={{ scale: 0.99 }} className='work-img-container'>
          <a href='https://thegrillonthird.com'  target="_blank"> <img className='work-img' src={example1}></img></a>
            </motion.div>
            <div className='work-card-description-container'>
               <h1 className='work-title'>
                The Grill on Third
               </h1>
               <p className='work-desc'>
                Website for an upcoming restaurant in Huntington, WV. This site features
                modern design and an interactive menu. Built in React and Gatsby.js, this site 
                uses a WordPress backend allowing the client to update or modify the menu.  
               </p>
               <motion.a  target="_blank" initial={{background: "#29221d"}} whileHover={{background: "#567095ff", color: "#ffffff"}} href="https://thegrillonthird.com" className='view-site-link'>View Site</motion.a>
            </div>
        </div>

        <div className='work-card'>
            <motion.div whileHover={{scale: 1.04}} whileTap={{ scale: 0.99 }} className='work-img-container'>
          <a href='https://keithalbee.com/  target="_blank"'> <img className='work-img' src={example2}></img></a>
            </motion.div>
            <div className='work-card-description-container'>
               <h1 className='work-title'>
                Keith Albee
               </h1>
               <p className='work-desc'>
                Website built for historical performing arts theater, The Keith Albee. This site features a PHP/Javascript based
                event manager and fluid animations. Built in WordPress to allow the client to add their own events.    
               </p>
               <motion.a  target="_blank" initial={{background: "#622203"}} whileHover={{background: "#567095ff", color: "#ffffff"}} href="https://keithalbee.com/" className='view-site-link'>View Site</motion.a>
            </div>
        </div>


        <div className='work-card'>
            <motion.div whileHover={{scale: 1.04}} whileTap={{ scale: 0.99 }} className='work-img-container'>
          <a href='https://mingowv.com/' target="_blank"> <img className='work-img' src={example4}></img></a>
            </motion.div>
            <div className='work-card-description-container'>
               <h1 className='work-title'>
                MinGO
               </h1>
               <p className='work-desc'>
                Event management system built for Mingo County, WV. This site features an extensive in-house built calendar event system created by me. 
                The event system allows anyone to submit an event to be approved by an admin. After approval, the event can be displayed on the calendar. 
                The calendar was built primarily with pure Javascript and jQuery with some PHP. Built in WordPress.</p>
               <motion.a initial={{background: "#079ace"}} whileHover={{background: "#567095ff", color: "#ffffff"}} href="https://mingowv.com/" className='view-site-link'>View Site</motion.a>
            </div>
        </div>

        <div className='work-card'>
            <motion.div whileHover={{scale: 1.04}} whileTap={{ scale: 0.99 }} className='work-img-container'>
          <a href='https://gardenparkrentals.com/'  target="_blank"> <img className='work-img' src={example3}></img></a>
            </motion.div>
            <div className='work-card-description-container'>
               <h1 className='work-title'>
                Garden Park Rentals
               </h1>
               <p className='work-desc'>
                Website built for a leasing company. This website allows users to view listed properties and submit applications to Garden Park Rentals. Built in Wordpress. 
               </p>
               <motion.a initial={{background: "#619775"}} whileHover={{background: "#567095ff", color: "#ffffff"}} href="https://gardenparkrentals.com/"  target="_blank" className='view-site-link'>View Site</motion.a>
            </div>
        </div>

      


     </div>
    </motion.div>
    </motion.div>
  )
}
