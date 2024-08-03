import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {FaArrowLeft} from "react-icons/fa";
import healthData from '../JSON/notes.json';

const Post = () => {
  const navigate = useNavigate();
<<<<<<< HEAD

  const data = [{
    "title":"Physical Health",
    "description":"Physical health refers to the well-being of the body and its ability to function optimally in daily activities.",
   
    "topics":[{
        "pointTitle":"Healthy Eating",
        "pointPhoto":"https://www.bhf.org.uk/-/media/images/information-support/support/healthy-living/healthy-eating/fruits-and-vegetables-620x400.jpg?h=400&w=620&rev=23d0aed687fc4a508e027bf7ffae5957&hash=0C97A88A71A0C2730A3C82ACDC1489AB",
         "pointDescription":"Focus on a balanced diet with plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats.Stay hydrated by drinking plenty of water throughout the day.Limit processed foods, sugar, and unhealthy fats"
        },
     {
        "pointTitle":"Regular Exercise:",
         "pointPhoto":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dphysical%2520exercise&psig=AOvVaw132yRZIujQiCTLfRo6IhHq&ust=1722725331199000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjJwY6y14cDFQAAAAAdAAAAABAE",
        "pointDescription":"Regular exercise refers to the consistent practice of physical activities aimed at improving or maintaining overall health and fitness. It involves a variety of movements that work different parts of the body, providing numerous benefits to physical and mental well-being."
          
     }
]},
{
   "title":"Psychological Health",
     "description":"Positive thinking involves focusing on the good in any given situation, which can lead to better mental health and improved well-being.",
     "topics":[{
          "pointTitle":"Gratitude Journaling",
           "pointPhoto":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.grottonetwork.com%2Fstories%2Fhow-gratitude-journaling-helps-with-happiness&psig=AOvVaw0KGJmaJ3FHHy21kYSn2O4L&ust=1722725390898000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCusLyy14cDFQAAAAAdAAAAABAE",
           "pointDescription":"Write down three things you’re grateful for each day. This could be anything from a kind gesture from a friend to enjoying a sunny day."
        
         },
         {
          "pointTitle":"Gratitude Meditation",
          "pointPhoto":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fgratitude-celebration-meditation.html&psig=AOvVaw2klsrVMThrCZuN73z0Swhf&ust=1722725467074000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjt2M2y14cDFQAAAAAdAAAAABAE",
          "pointDescription":"Spend a few minutes each day reflecting on what you’re grateful for. This can be a part of your meditation practice or a standalone activity."
         }
         
     ]
     

 },
{ 
     "title":"Social Health",
     "description":"Building and maintaining strong social connections is vital for mental and emotional well-being. These connections can provide support, reduce stress, and create a sense of belonging.",
     
     "topics":[{
          "pointTitle":"Supportive Relationships",
          "pointPhoto":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fsupportive-relationships&psig=AOvVaw2HLFp7pUXDzF0SwyjStz4d&ust=1722725509126000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKir-OKy14cDFQAAAAAdAAAAABAE",
          "pointDescription":"Supportive relationships with friends, family, or loved ones can provide emotional support, help you navigate challenges, and increase your resilience."
          
     },
       {
         "pointTitle":"Community Involvement",
         "pointPhoto":"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcommunity-engagement&psig=AOvVaw0cvFO0GM4Bc0X-7vYEDfa8&ust=1722725572322000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDLqYSz14cDFQAAAAAdAAAAABAK",
         "pointDescription":"Being part of a community, whether through volunteering, joining a group, or participating in local activities, can foster a sense of belonging and purpose"
         }
      ]
},
{
     "title":"Mental Health",
     "description":"Stress management is essential for maintaining both physical and mental health.",
     
     "topics":[{
          "pointTitle":" Deep Breathing",
          "pointPhoto":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fenglish.jagran.com%2Flifestyle%2F4-impressive-health-benefits-of-deep-breathing-exercises-10103375&psig=AOvVaw1028OhBxIhdzfOMkmTzXdC&ust=1722725638119000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCa1aiz14cDFQAAAAAdAAAAABAE",
           "pointDescription":"Deep breathing exercises can quickly reduce physical symptoms of stress, such as heart rate and blood pressure. It promotes relaxation by activating the body’s parasympathetic nervous system, which counteracts the stress respons"
          
     },
     
         
         {
         "pointTitle":"Meditation",
         "pointPhoto":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.artofliving.org%2Fin-en%2Fmeditation%2Fbeginners%2Fpower-of-meditation&psig=AOvVaw3ze8EKLCqeK1Tlc8417Upu&ust=1722725693890000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCR1rqz14cDFQAAAAAdAAAAABAE",
         "pointDescription":"Meditation helps lower physical symptoms of stress by reducing cortisol levels and improving overall relaxation. Regular practice can also enhance immune function and lower blood pressur"
         }
     ]
},

{
       "title":"Engaging in Hobbies and Interests",
     "description":"Engaging in hobbies and interests can have a profound impact on both mental and physical health.",
     
     "topics":[{
          "pointTitle":"Sense of Purpose:",
          "photo1":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbodimetrics.com%2Fsense-purpose-can-add-years-to-your-life%2F&psig=AOvVaw2SGb_aw7EHQFSk4nqkrCHe&ust=1722725738414000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCSs9Cz14cDFQAAAAAdAAAAABAJ",
           "pointDescription":"Hobbies provide a sense of accomplishment and purpose, contributing to overall life satisfaction and reducing feelings of boredom or emptiness"
          
     },
        {
        
         "pointTitle":"Enhanced Creativity",
          "pointPhoto":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.centerpointmedicine.com%2Fblog%2Fenhancement-of-creativity&psig=AOvVaw3sdpbmAEiJSCitU0KvZyyK&ust=1722725784892000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCUoOSz14cDFQAAAAAdAAAAABAE",
         "pointDescription":"Creative activities like painting, writing, or playing music stimulate the brain, enhancing cognitive function and providing an emotional outlet."
         
     }
]
}]

=======
>>>>>>> cf523075496ea146497ff31d6b922b877d926e6a
  const { title } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const filteredItem = healthData.find((d) => d.title === title);
    setItem(filteredItem);
  }, [title]);

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F8F4E1] text-[#543310]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#AF8F6F]"></div>
      </div>
    );
  }

  const fallbackImage = "https://via.placeholder.com/400x300?text=Image+Not+Available";

  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#E8DFC7] text-[#543310] min-h-screen">
      <Navbar/>
      <header className="text-center py-12 px-4 bg-[#AF8F6F] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{item.description}</p>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center text-[#543310] hover:text-orange-500 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>

        <section className="space-y-12">
          {item.topics.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    src={card.pointPhoto || fallbackImage}
                    alt={card.pointTitle}
                    className="h-48 w-full object-cover md:w-48"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#543310] mb-4">
                    {card.pointTitle}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.pointDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Post;