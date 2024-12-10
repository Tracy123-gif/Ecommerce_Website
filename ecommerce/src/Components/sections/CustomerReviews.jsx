import { Accordion, AccordionItem, AccordionPanel, chakra } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'






const CustomerReviews = () => {
   
    

    const reviewData = [
        {
            review: 'They offer the best services with',
            name: 'Lucy carner',
            id:1
        },
        {
            review: 'They offer the best services with quality products',
            name: 'james Harp',
            id:2
        },
        {
            review: 'Its always good to shop from july, theres quality, standards and amazing customer services',
            name: 'Lora Thompson',
            id:3
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    // Logic to navigate through the array
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviewData.length - 1 : prevIndex - 1
      );
    };
  
    const handleReset = () => {
      setCurrentIndex(0);
    };

   const [index, setIndex] = useState(0)
   setTimeout(() => {
    if (index === 0 || index < 3) {
      if(index === 2 ){
        setIndex(0)
      }else{
        setIndex(index + 1)
      }
     }
   }, 3000);






  

  return (
    < div className='px-20 py-32 my-40 text-center h-96 flex justify-center items-center'>
      <div className=''>
        <h1 className='text-3xl my-10'>Customer reviews</h1>
        <div className="review">
            <h1 className='text-6xl'>{reviewData[index].review}</h1>
        </div>

        <div className="reviewName text-2xl my-10">{reviewData[index].name}</div>
        <div className='flex gap-5 justify-center'>

            <span className='dot w-3 h-3 bg-transparent border border-black rounded-full' key={reviewData[0].id} onClick={handlePrevious}></span>
            <span className='dot w-3 h-3 bg-transparent border border-black rounded-full' key={reviewData[1].id} onClick={handleNext}></span>
            <span className='dot w-3 h-3 bg-transparent border border-black rounded-full' key={reviewData[2].id} onClick={handleReset}></span>
        </div>

        
      </div>
   
    </div>
  )
}

export default CustomerReviews
