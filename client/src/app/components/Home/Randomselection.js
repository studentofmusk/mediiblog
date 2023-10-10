import React from 'react'
import Card from '../Accessory/Card'



const Randomselection = ({randomPosts}) => {
  return (
    
    <section className='flex flex-col sm:flex-row items-center sm:justify-end sm:items-center my-10 sm:my-36 space-y-5 sm:space-x-6 sm:mr-10'>
        {randomPosts?
          randomPosts.map((element, index)=>{
            return <Card 
            key={index}
            imageSrc={element.coverpic}
            category={element.category} 
            title={element.title} 
            author={element.author} 
            time={element.time} 
            href={element._id}
            />
          })
        :<>
        <Card 
        imageSrc='slidepic1.jpg'
        category='Fitness' 
        title='Strategies & Tips for the Hardest Topics on the ACSM CPT Exam' 
        author='Alyson Newby' 
        time='September 15, 2023' 
        />
        <Card 
        imageSrc='slidepic2.jpg'
        category='Skilled Trades' 
        title='How To Get Certified as a Journeyman Electrician' 
        author='Pocket Prep' 
        time=' July 18, 2023' 
        />
        <Card 
        imageSrc='slidepic3.jpg'
        category='Nursing' 
        title='What Do Diabetic Specialists Do?' 
        author='Caitlin Khullar' 
        time=' May 4, 2023' 
        />
        </>
        }
    </section>
  )
}

export default Randomselection

