import React, { useState } from 'react'
import { motion } from "framer-motion"
import Projects from './body-components/Projects';
import Work from './body-components/Work';
import Contact from './body-components/Contact';
import Footer from './body-components/Footer';
import { Outlet, Link } from "react-router-dom";
import logo from './body-components/lukeshortdev.png';

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

            <div className='for-header-background'>
            <div className='navbar-container'>
                <div className='navbar-logo-container'>
                    <motion.img  animate={{opacity: 1, x:0}} transition={{duration: 1, delay: 0.1}} initial={{x:-400}}  src={logo} className="navbar-logo"></motion.img>
                </div>
                <motion.div animate={{opacity: 1, y:0}} transition={{duration: 1, delay: 0.3}} initial={{y:-300}} className='navbar-links-container'>
                    <motion.div animate={{ opacity: 1 }} transition={{ duration: 1 }} className='header-links-container'>
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.99 }} className={active === "1" ? "header-link active" : "header-link"} id={"1"} onClick={handleClickWork}  >WORK</motion.button>
                        <Link to="/blog">Blogs</Link>
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.99 }} className={active === "2" ? "header-link active" : "header-link"} id={"2"} onClick={handleClickContact}  >CONTACT</motion.button>
                     
             
                    </motion.div>
                </motion.div>
            </div>
            <div className='biography-container'>
                <motion.div animate={{ opacity: 1}} transition={{ duration: 1 }} initial={{ opacity:0 }} className='header-profile'>

                </motion.div>
                <motion.div className='biograpy-desc-container'>
                    <motion.div animate={{opacity: 1, y:0}} transition={{duration: 1, delay: 1}} initial={{y:-300}} className='biography-title'>
                        Hi, I'm Luke Short
                    </motion.div>
                    <motion.div animate={{opacity: 1, y:0}} transition={{duration: 1, delay: 0.5}} initial={{y:-400}} className='biography-desc'>
                        I'm a developer from Hurricane, WV. I'm currently working at <a class="inner-link" href='https://bulldogcreative.com' target="_blank">Bulldog Creative Services</a> in Huntington, WV.
                        I design and develop full-stack web applications. My favorite tools are React, .NET, and Go. Check out some of
                        my work below.
                    </motion.div>
                    <div className='bio-socials-container'>
                        <motion.a animate={{opacity: 1}} transition={{duration: 1, delay: 1.2}} initial={{opacity:0}} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.99 }} href="https://www.linkedin.com/in/luke-short-272434b8/" target="_BLANK"> <img src='https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' className='linkedin-icon'></img></motion.a>
                        <motion.a animate={{opacity: 1}} transition={{duration: 1, delay: 1.5}} initial={{opacity:0}} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.99 }} href="https://github.com/kuel321" target="blank" ><img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' className='github-icon'></img></motion.a>
                        <motion.a animate={{opacity: 1}} transition={{duration: 1, delay: 1.8}} initial={{opacity:0}} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.99 }} className='inner-link resume-link' href="https://lukeshort.dev/lukeshortresume.pdf" target="_blank">Resume</motion.a>
                    </div>
                </motion.div>


            </div>
            </div>




            {/* <motion.div  animate={{ scale: 1.1 }} transition={{duration: 1.5}}
         className='header-container'>
            <div className='header-profile'>

            </div>
            <div className='header-title'>
                <div animate={{ x: 100 }} className='header-name' >LUKE SHORT</div>
                <div className='little-line'></div>
                <motion.div animate={{opacity: 1, x: 80}} initial={{opacity: 0, x:0}} transition={{duration: 1}} className='header-links-container'>
                    <motion.button whileHover={{scale: 1.04}} whileTap={{ scale: 0.99 }} className={active === "1" ? "header-link active" : "header-link"} id={"1"} onClick={handleClickWork}  >WORK</motion.button>
                    <motion.button whileHover={{scale: 1.04}} whileTap={{ scale: 0.99 }} className={active === "2" ? "header-link active" : "header-link"} id={"2"} onClick={handleClickContact}  >CONTACT</motion.button>
                    <motion.button whileHover={{scale: 1.04}} whileTap={{ scale: 0.99 }} className={active === "3" ? "header-link active" : "header-link"} id={"3"} onClick={handleClickProjects}  >PROJECTS</motion.button>
                </motion.div>

               
            </div>

           

            </motion.div>
            <div className='bio-main'>
            <motion.div  className='bio-container'>
                <motion.div initial={{background: "#ffffff"}} whileHover={{ background: "#567095ff", color: "#ffffff"
            }} transition={{duration: 1}} className='bio-desc-container'>
                    <p className='bio-desc'>
                        I'm a developer from Hurricane, WV. I'm currently working at Bulldog Creative Services in Huntington, WV.
                        I design and develop full-stack web applications. My favorite tools are React, .NET, and Go. Check out some of
                        my work below.
                        
                    </p>
                    <motion.p initial={{color: "#ffffff"}} transition={{duration: 1}} animate={{x: 30}} className='bio-desc other-color'>*Experienced in Framer Motion also</motion.p>
                </motion.div>
            </motion.div>
            <div className='bio-socials-container'>
               <motion.a whileHover={{scale: 1.04}} whileTap={{ scale: 0.99 }} href="https://www.linkedin.com/in/luke-short-272434b8/" target="_BLANK"> <img src='https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' className='linkedin-icon'></img></motion.a>
                <motion.a whileHover={{scale: 1.04}} whileTap={{ scale: 0.99 }} href="https://github.com/kuel321" target="blank" ><img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' className='github-icon'></img></motion.a>
            </div> 
            </div>
*/}

            <motion.div  className='selected-component-container'>
                {componentSelection}
                <Footer />
            </motion.div>


        </div>
    )
}
