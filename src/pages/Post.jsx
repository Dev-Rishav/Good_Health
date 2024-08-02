import React, { useState, useEffect } from 'react';

import { useParams } from "react-router";
//import { motion } from 'framer-motion';
//import { data } from './data.json';


const Post =()=>{
    const data=[ {
        "title":"Physical Health",
        "description":"Physical health refers to the well-being of the body and its ability to function optimally in daily activities.",        
        "topics":[
            {
                "pointTitle":"Healthy Eating",
                "pointPhoto":"https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
                "pointDescription":"Focus on a balanced diet with plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats.Stay hydrated by drinking plenty of water throughout the day.Limit processed foods, sugar, and unhealthy fats"
            },
            {
                "pointTitle":"Regular Exercise",
                "pointPhoto":"https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
                "pointDescription":"Regular exercise refers to the consistent practice of physical activities aimed at improving or maintaining overall health and fitness. It involves a variety of movements that work different parts of the body, providing numerous benefits to physical and mental well-being."
            }
        ]
    }
    ]
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
       
        <div className="bg-gray-900 text-gray-900">
        <header className=" text-white p-4">
            <div className="container mx-auto text-center">
                <h1 className="text-purple-500 text-2xl font-bold mb-2">{item.title}</h1>
                <p className="text-gray-400 text-lg">{item.description}</p>
            </div>
        </header>
       
        <main className="  container mx-auto py-12">
            <section className="mb-12">
                
                <div className="space-y-8">

                    {/* topic card */}
                    {item.topics.map((card,index)=>{
                        const {subtopic,pic,descrp}=card;
                        console.log(card);

                        return(
                            <div key={index} className=" bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-6">
                                <img src={card.pointPhoto} alt={index} class="w-40 h-40 object-cover rounded-lg"/>
                                <div>
                                    <h3 className=" text-white text-2xl font-semibold mb-3">{card.pointTitle}</h3>
                                    <p className="text-gray-400">{card.pointDescription}</p>
                                </div>
                            </div>
                        )
                    })   
                            
                    }


                    {/* <div class=" bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-6">
                        <img src="https://plus.unsplash.com/premium_photo-1674978723656-6b0ee188a014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="Topic 1" class="w-40 h-40 object-cover rounded-lg"/>
                        <div>
                            <h3 class=" text-white text-2xl font-semibold mb-3">Topic 1</h3>
                            <p class="text-gray-400">This is a description for topic 1. It provides insights and information about the topic.</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6">
                        <img src="https://via.placeholder.com/150" alt="Topic 2" class="w-40 h-40 object-cover rounded-lg"/>
                        <div>
                            <h3 class="text-2xl font-semibold mb-2">Topic 2</h3>
                            <p class="text-gray-700">This is a description for topic 2. It provides insights and information about the topic.</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6">
                        <img src="https://via.placeholder.com/150" alt="Topic 3" class="w-40 h-40 object-cover rounded-lg"/>
                        <div>
                            <h3 class="text-2xl font-semibold mb-2">Topic 3</h3>
                            <p class="text-gray-700">This is a description for topic 3. It provides insights and information about the topic.</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </main>
    
        
    </div>
    );

};
export default Post;