import React from 'react';
import { motion } from 'framer-motion';

const divVariants = {
    hidden:{
        y:0,
        backgoundColor:'#F2A057'
    },
    visible:{
        y:50,
        backgoundColor:'#262473'
    }
}

const loadingPage = ()=>{
    return (
        <motion.div className="loadingContainer">
            <motion.div
                variants={divVariants}
                transition={{type:'easeInOut',yoyo:'Infinity',delay:.1,duration:.3}}
                initial="hidden"
                animate="visible"
                ></motion.div>
            <motion.div
                variants={divVariants}
                transition={{type:'easeInOut',yoyo:'Infinity',delay:.2,duration:.3}}
                initial="hidden"
                animate="visible"
                ></motion.div>
            <motion.div
                variants={divVariants}
                transition={{type:'easeInOut',yoyo:'Infinity',delay:.3,duration:.3}}
                initial="hidden"
                animate="visible"
                ></motion.div>
            
        </motion.div>
    ); 
}

export default loadingPage;