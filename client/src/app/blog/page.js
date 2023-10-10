'use client'

import { useSearchParams } from "next/navigation"
import Heading from "../components/Content/Heading";
import Pagedetail from "../components/Content/Pagedetail";
import Content from "../components/Content/Content";
import { useEffect, useState } from "react";


export default function Page({}){
  const params = useSearchParams();
  const id = params.get('id');
  const [Data, setData] = useState({
    title:"Will AI Take Your Job ?",
    category:"Learning Science",
    page: "Learning Science | Will AI Take Your Job ?",
    author:"Alyson Newby",
    designation:"Senior Content Strategy Lead",
    time:"September 15, 2023",
    authorImgSrc:"authordemo.jpg",
    description:"AI is an evolving technology that will impact many professions and industries. But will AI replace our jobs and which job markets are most exposed to AI tech?",
    content:[
      ["AI can’t replace your job (yet). But there are certain professions where it’s useful, applicable, and already being plugged in.", "p"],
      ["While AI has been at the forefront of many of our minds recently, the term has actually been around since the 1950s. In 1955, the term ‘artificial intelligence’ was coined by J. McCarthy, L. Minsky, N. Rochester, and C.E. Shannon in a proposal submitted to the Dartmouth Summer Research Project.","p"],
      ["The evolution of AI has been moving at a steady pace since then (you can read Forbes’s article about it) and today, there’s a lot of discussion around how it will affect the security of jobs.", "p"],
      ["As someone with a background in writing, I find myself wondering how AI will put me out of a job. Afterall, why does an employer need me when they can ask ChatGPT to write articles and snazzy headlines?", "p"],
      ["It’s clear some careers will be more affected than others by the use of AI. My hope is that it becomes a tool for us writers rather than a proverbial nail in my career coffin.", "p"],
      ["So who should be worried?", "p"],
      ["To answer this question, we have to look at how this technology has the potential to be used. AI isn’t going to change your oil, do carpentry work,  or administer CPR. It could, however, help diagnose or provide suggestions for mechanical issues or provide information about medication contraindications.", "p"], 
      ["Job exposure to AI", "heading"],
      ["tvman.jpg", "img", "AI Domination"],
      ["Pew Research looked at the effects of AI mainly through how certain professions or jobs are exposed to the technology. They categorized jobs as having either high or low exposure to AI.", "p"],
      [["Firefighters", "Barbers", "Childcare workers"], "ul" ]

    ]
  })



  const fetchPageContent = async()=>{
    try {
      const res = await fetch('/api/get-blog?id='+id); 
      const response = await res.json();
      if(response.success){
        // alert("Data fetched!");
        setData(response.data)
        console.log(response.data);
      }else{
        console.log(response.message);
      }
  
    } catch (error) {
        console.log(error.message);
    }
  }
  
 

  useEffect(()=>{fetchPageContent()}, []);
  
  
  return (
    <>
      <Heading category={Data.category} title={Data.title} />
      <Pagedetail 
        author={Data.author} 
        designation={Data.designation} 
        authorImgSrc={Data.authorImgSrc} 
        time={Data.time}
        description={Data.description}
      />
      <Content content={Data.content} />

      
    </>
  )
}