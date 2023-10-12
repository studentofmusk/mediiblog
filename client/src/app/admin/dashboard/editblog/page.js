'use client'
import Heading from '@/app/components/Content/Heading';
import Pagedetail from '@/app/components/Content/Pagedetail';
import Content from '@/app/components/Content/Content';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Page() {
  const params = useSearchParams();
  const id = params.get('id');

  const [Data, setData] = useState(false)
  const [category, setCategory] = useState(Data.category);
  const [title, setTitle] = useState(Data.title);
  const [author, setAuthor] = useState(Data.author);
  const [authorImgSrc, setAuthorImgSrc] = useState(Data.authorImgSrc);
  const [time, setTime] = useState(Data.time);
  const [coverpic, setCoverpic] = useState(Data.coverpic)
  const [description, setDescription] = useState(Data.description);
  const [designation, setDesignation] = useState(Data.designation);
  const [page, setPage] = useState(Data.page);
  const [content, setContent] = useState(Data.content);
  const [images, setImages] = useState([]);

  
    const fetchImages = async()=>{
      try {
        const res = await fetch('/api/admin/get-uploads');
        const response = await res.json();
        if(response.success) setImages(response.files)
        else alert("Unable to get Images");
        
      } catch (error) {
        console.log(error.message);
      }
    }


  const UpdateDocument = async()=>{
    try {
      const res = await fetch("/api/admin/update-blog", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({
          id, 
          title, 
          category, 
          page, 
          author, 
          designation, 
          time, 
          authorImgSrc, 
          description, 
          content, 
          coverpic
        })
      });

      const response = await res.json();
      if(response.success){
        alert(response.message);
        window.location.href = "/admin/dashboard"
      }else{
        alert(response.message);

      }

    } catch (error) {
      alert("Something Went wrong");
      console.log(error.message);
    }
  }


  const fetchPageContent = async()=>{
    try {
      const res = await fetch('/api/get-blog?id='+id); 
      const response = await res.json();
      if(response.success){
        setData(response.data);
        
        setCategory(response.data.category)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDesignation(response.data.designation)
        setPage(response.data.page)
        setContent(response.data.content)
        setTime(response.data.time)
        setAuthor(response.data.author)
        setAuthorImgSrc(response.data.authorImgSrc)
        setCoverpic(response.data.coverpic)
      }else{
        console.log(response.message);
      }
  
    } catch (error) {
        console.log(error.message);
    }
  }

  useEffect(()=>{
    fetchPageContent()
    fetchImages();
  },[])
  return (
   <>
   {Data?<>
   <div className='bg-color-1 w-full flex justify-end pr-10'>
          <button onClick={()=>window.history.back()} className='mx-3 p-2 rounded-lg bg-red-300 text-white'>Cancel</button>
          <button onClick={UpdateDocument} className='mx-3 p-2 rounded-lg bg-blue-700 text-white'>Save</button>
   </div>
    <Heading category={category} title={title} admin={true} setCategory={setCategory} setTitle={setTitle} />
    <Pagedetail 
        admin={true}
        author={author} 
        designation={designation} 
        authorImgSrc={authorImgSrc} 
        time={time}
        description={description}
        images={images}

        setAuthor={setAuthor}
        setAuthorImgSrc={setAuthorImgSrc}
        setDescription={setDescription}
        setDesignation={setDesignation}
        setTime={setTime}
      />
        </>
        :"Loading...."}

    <Content content={content} admin={true} setContent={setContent} images={images}/>
    <div className="flex">
    <div className="font-bold">Cover Image:</div>
    <select name="" onChange={(e)=>setCoverpic(e.target.value)} id="">
              <option  defaultValue={coverpic} >{coverpic}</option>
              {images.map((image, index)=>{
                return <option key={index} value={`/${image}`}>{image}</option>
              })}
    </select>
    </div>

</>
  )
}