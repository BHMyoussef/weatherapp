import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const divVarient={
    hidden:{
        opacity:0,
        scale:.1
    },
    visible:{
        scale:1,
        rotate:360,
        opacity:1,
        transition:{
            delay:1
        }
    }
}
const h1Varient={
    hidden:{

    },
    visible:{

    },
    hover:{
        scale:1.2
    }
}
const Header =(props)=> {
        return (
            <motion.div className='header'
                variants={divVarient}
                initial="hidden"
                animate="visible"
            >

                <Link to="/weatherapp">
                    <motion.h1
                        variants={h1Varient}
                        whileHover="hover"
                    >5 days ForeCast</motion.h1>
                </Link>
                <motion.h3
                    whileHover={{
                        rotate:360,
                        color:'#f2a057'
                    }}
                >{props.city}</motion.h3>
            </motion.div>
        )
}
export default  Header;