import React, { useState } from 'react'
import { motion } from "framer-motion"
import Projects from './body-components/Projects';
import Work from './body-components/Work';
import Contact from './body-components/Contact';

export default function Header() {
   
    const [activeButton, setActiveButton] = useState(false);
    const [componentSelection, setSelection] = useState(< Work />);
   
    const [active, setActive] = useState("1");
 
    const handleClickWork = (event) => {
      setActive(event.target.id);
      setSelection(<Work />)
    }

    const handleClickContact = (event) => {
        setActive(event.target.id);
        setSelection(<Contact />)
      }

      const handleClickProjects = (event) => {
        setActive(event.target.id);
        setSelection(<Projects />)
      }
  
    

    return (
        <div className='header-main'>
        <motion.div  animate={{ scale: 1.1 }} transition={{duration: 1.5}}
         className='header-container'>
            <div className='header-profile'>

            </div>
            <div className='header-title'>
                <div animate={{ x: 100 }} className='header-name' >LUKE SHORT</div>
                <div className='little-line'></div>
                <motion.div animate={{opacity: 1, x: 80}} initial={{opacity: 0, x:0}} transition={{duration: 1}} className='header-links-container'>
                    <button  className={active === "1" ? "header-link active" : "header-link"} id={"1"} onClick={handleClickWork}  >WORK</button>
                    <button className={active === "2" ? "header-link active" : "header-link"} id={"2"} onClick={handleClickContact}  >CONTACT</button>
                    <button className={active === "3" ? "header-link active" : "header-link"} id={"3"} onClick={handleClickProjects}  >PROJECTS</button>
                </motion.div>

               
            </div>

           

            </motion.div>
            <div className='bio-main'>
            <motion.div  className='bio-container'>
                <motion.div initial={{background: "#ffffff"}} whileHover={{ background: "#567095ff", color: "#ffffff"
            }} transition={{duration: 1}} className='bio-desc-container'>
                    <p className='bio-desc'>
                        I'm a developer from Hurricane, WV. I'm currently working at Bulldog Creative Services in Huntington, WV.
                        I design and develop full-stack web applications. My favorite tools are React, .NET, and Node. Check out some of
                        my work below.
                        
                    </p>
                    <motion.p initial={{color: "#ffffff"}} transition={{duration: 1}} animate={{x: 30}} className='bio-desc other-color'>*Experienced in Framer Motion also</motion.p>
                </motion.div>
            </motion.div>
            <div className='bio-socials-container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' className='linkedin-icon'></img>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' className='github-icon'></img>
            </div>
            </div>


            <div className='selected-component-container'>
                {componentSelection}
            </div>


        </div>
    )
}
