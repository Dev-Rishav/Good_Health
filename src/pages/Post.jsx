import React, { useState, useEffect } from 'react';

import { useParams } from "react-router";
import { motion } from 'framer-motion';
import { data } from './data.json';


const Post =()=>{
    const {title}=useParams();
    const [item, setItem] = useState(null);
    useEffect(() => {
        const filteredItem = data.find((d) => d.title === title);
        setItem(filteredItem);
    }, [title]);

    if (!item) {
        return <h1>Loading...</h1>;
    }
    return(
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <img src={item.image} alt={item.title} />
         </motion.div>
    );

};
export default Post;