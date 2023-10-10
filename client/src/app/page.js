'use client'
import { useEffect, useState } from "react";
import Categories from "./components/Home/Categories";
import Collage from "./components/Home/Collage";
import Hero from "./components/Home/Hero";
import Latestnews from "./components/Home/Latestnews";
import Randomselection from "./components/Home/Randomselection";
import Uptodate from "./components/Home/Uptodate";


const temp =  [
  {
      "_id": "65229f5f778fccc54f1b53ad",
      "title": "Strategies & Tips for the Hardest Topics on the ACSM CPT Exam",
      "category": "Fitness",
      "author": "Pocket Prep",
      "time": "JUNE 28, 2023",
      "coverpic": "slidepic1.jpg"
  },
  {
      "_id": "65229b20778fccc54f1b53aa",
      "title": "Will AI Take Your Job ?",
      "category": "Learning Science",
      "author": "Alyson Newby",
      "time": "September 15, 2023",
      "coverpic": "tvman.jpg"
  },
  {
      "_id": "65229c44778fccc54f1b53ab",
      "title": "How To Study with ADHD",
      "category": "Learning Science",
      "author": "Alyson Newby",
      "time": "AUGUST 11, 2023",
      "coverpic": "ladyphone.jpg"
  },
  {
      "_id": "65229b20778fccc54f1b53aa",
      "title": "What Do Diabetic Specialists Do?",
      "category": "Nursing",
      "author": "Caitlin Khullar",
      "time": "May 4, 2023",
      "coverpic": "slidepic3.jpg"
  },
  {
      "_id": "6522a006778fccc54f1b53ae",
      "title": "How To Get Certified as a Journeyman Electrician",
      "category": "Skilled Trades",
      "author": "Pocket Prep",
      "time": "July 18, 2023",
      "coverpic": "slidepic2.jpg"
  },
  {
      "_id": "65229c44778fccc54f1b53ab",
      "title": "How To Study with ADHD",
      "category": "Learning Science",
      "author": "Alyson Newby",
      "time": "AUGUST 11, 2023",
      "coverpic": "ladyphone.jpg"
  },
  {
      "_id": "6522a1b1778fccc54f1b53af",
      "title": "What Do Diabetic Specialists Do?",
      "category": "Nursing",
      "author": "Caitlin Khullar",
      "time": "May 4, 2023",
      "coverpic": "slidepic3.jpg"
  },
  {
      "_id": "6522a006778fccc54f1b53ae",
      "title": "How To Get Certified as a Journeyman Electrician",
      "category": "Skilled Trades",
      "author": "Pocket Prep",
      "time": "July 18, 2023",
      "coverpic": "slidepic2.jpg"
  },
  {
      "_id": "6522a006778fccc54f1b53ae",
      "title": "How To Get Certified as a Journeyman Electrician",
      "category": "Skilled Trades",
      "author": "Pocket Prep",
      "time": "July 18, 2023",
      "coverpic": "slidepic2.jpg"
  }
]




//get filter the category names 
const categoryFilter = (ListOfObject)=>{
  return ListOfObject.map(element=> element.category).filter((value, index, self) => self.indexOf(value) === index)
}

//shuffle Array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//get Random posts
function getRandomPosts(posts, n) {
  const shuffledPosts = shuffleArray([...posts]);
  if (n > shuffledPosts.length) {
      return shuffledPosts;
  }
  return shuffledPosts.slice(0, n);
}



export default function Home() {
  const [head, setHead] = useState(temp);
  const [shuffle9, setShuffle9] = useState([]);

  useEffect(()=>setShuffle9(getRandomPosts(head, 9)), [head]);

  const getHeads = async ()=>{
    try {
      const res = await fetch("/api/get-head");
      const response = await res.json();
      if(response.success){
        setHead(response.data)
      }else{
        console.log("poche");
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    getHeads();
  }, [])
  return (
    <>
      <Hero/>
      <Categories category={categoryFilter(head)}/>
      <Latestnews latestPost={shuffle9[3]}/>
      <Randomselection randomPosts={shuffle9.slice(0, 3)} /> 
      <Uptodate updated={shuffle9[4]}/>
      <Collage collage={shuffle9.slice(5, 9)} topRead={shuffle9.slice(0, 4)}/>
    </>
  )
}
// 'use client'
// import { useState } from 'react';


// export default function Home() {
//   const [paths, setPaths] = useState([["home", "/"], ["about", "/about"]])

//   const [page, setPage] = useState({
//     page:"Home",
//     content:[
//       ["Hi Hello", 0],
//       ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut aperiam eius placeat quas odio totam asperiores vero rem tenetur porro, ab iste nobis iure quasi soluta assumenda, molestiae doloremque.", 1],
//       ["Hi Hello", 0],
//       ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut aperiam eius placeat quas odio totam asperiores vero rem tenetur porro, ab iste nobis iure quasi soluta assumenda, molestiae doloremque.", 1],
//       ["Hi Hello", 0],
//       ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut aperiam eius placeat quas odio totam asperiores vero rem tenetur porro, ab iste nobis iure quasi soluta assumenda, molestiae doloremque.", 1]
//     ]
//   })
//   const pageContent = ``;

//   const styles = ["text-xl font-bold", "text-red-400"]
  
//   const OnChange = (e, index)=>{
//     let tempPage= {...page};  
//     console.log(tempPage.content[index])
//     tempPage.content[index][0] = e.target.value;
//     setPage(tempPage);
//   }

//   const getClass = (id)=>{
//       return styles[id]
//   }

//   return (
//    <>
//    <nav className='flex px-10 justify-center' >
//     <ul className='flex space-x-3'>
//       {paths.map((element, index)=>{
//         return <li><a href={`${element[1]}`}>{element[0]}</a></li>    
//       })}
//     </ul>
//    </nav>
//     <div>
//       {page.content.map((element, index)=>{
        
//         return <>
//         <textarea key={index} onChange={(e)=>OnChange(e, index)} className={`${getClass(element[1])}`} value={page.content[index][0]} /> <br />
//         </>
//       })}  
//     </div>
//     <button onClick={()=>console.log(page.content)}>check</button>

// </>
//   )
// }
