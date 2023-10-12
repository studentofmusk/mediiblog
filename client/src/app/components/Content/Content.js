import { useState } from "react";

const formate = {
  heading:'text-[23px] text-gray-700 font-bold ',
  p:"",
  ul:"list-disc ml-10 space-y-2"
}

const Content = ({content, admin=false, setContent=(e)=>{}, images=[]}) => {

  const [active, setActive] = useState(false);
  const [idx, setIdx] = useState(null);
  
  const ChangeListContent = (e, index, childIndex)=>{
      let tempContent= [...content];
      tempContent[index][0][childIndex] = e.target.value; 
      setContent(tempContent);
  }

      const onChangeContent = (e, index)=>{
      let tempContent= [...content];
      tempContent[index][0] = e.target.value;
      setContent(tempContent);
      }

      const AddLine = (index, formatetype="p" )=>{
        let tempContent= [...content];
        if(formatetype==="ul"){
          tempContent.splice(index+1, 0, [["type here"],formatetype])

        }
        else if(formatetype==="img"){
          tempContent.splice(index+1, 0, [["/unknown.jpg"],formatetype])

        }
        else{
          tempContent.splice(index+1, 0, ["type here",formatetype])
        }
        setContent(tempContent);
        setActive(false);
        
      }

      const RemoveLine = (index)=>{
        if(content.length >2)
        {
        let tempContent= [...content];
        tempContent.splice(index, 1);
        setContent(tempContent);}
        else{
          alert("You are unable to Delete all. If you want delete add one Element and delete one. Because minimum 2 element should be there!")
        }
      }


  
      return (<>
      {admin?
        <section  className={` my-10 w-10/12 sm:w-3/6 mx-auto space-y-5 text-[18px] text-gray-700`}>
          <div className={`${active?"block":"hidden"} top-0 left-0 fixed flex justify-center items-center w-full h-full`}>

          <div class="relative block w-full max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.7),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              {/* Cross bar */}
                <div onClick={()=>setActive(false)} className="absolute -top-6 -right-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {/* Options */}
                <ul class="w-full">
                  <li
                    onClick={()=>AddLine(idx,"p")}
                    class="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    Paragraph
                  </li>
                  <li
                    onClick={()=>AddLine(idx, "heading")}
                    class="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    Heading
                  </li>
                  <li
                    onClick={()=>AddLine(idx, "img")}
                    class="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    Image
                  </li>
                  <li 
                    onClick={()=>AddLine(idx, "ul")}
                    class="w-full p-4 dark:border-opacity-50">
                    List
                  </li>
                </ul>
          </div>
              
          </div>
        {content?content.map((element, index)=>{
          if(element[1] === "img"){
            return <div key={index} className="flex flex-col md:flex-row space-x-1">
            <div>

            <img key={index} src={element[0]} alt={element[2]} />
            <select name="" onChange={(e)=>onChangeContent(e, index)} id="">
              <option  defaultValue={element[0]} >{element[0]}</option>
              {images.map((image, index)=>{
                return <option key={index} value={`/${image}`}>{image}</option>
              })}
            </select>
            </div>
            <div className="flex sm:flex-col items-center">
            <button  onClick={()=>RemoveLine(index)} className="p-1 text-xs rounded-sm m-2 bg-red-500 text-white">remove</button>
            <button onClick={()=>{setIdx(index);setActive(true)}} className="w-6 h-6 rounded-full text-xs m-2 bg-color-1 text-white" >+</button>
            </div>

          </div>

          } 
          else if(element[1] === "ul") {
            return <div key={index} className="flex flex-col md:flex-row space-x-1">
            <ul key={index} className={formate["ul"]}>
                      {element[0].map((item, Idx)=>{
                        return <li key={Idx} ><input  type="text" onChange={(e)=>ChangeListContent(e, index, Idx)} value={item}/></li>
                      } )}
                    </ul>
            <div className="flex sm:flex-col items-center">
            <button  onClick={()=>RemoveLine(index)} className="p-1 text-xs rounded-sm m-2 bg-red-500 text-white">remove</button>
            <button onClick={()=>{setIdx(index);setActive(true)}} className="w-6 h-6 rounded-full text-xs m-2 bg-color-1 text-white" >+</button>
            </div>
          </div>

          }
          else{
            return  <div key={index} className="flex flex-col md:flex-row space-x-1">
                      <textarea value={element[0]} onChange={(e)=>onChangeContent(e, index)} className={"block w-full overflow-visible" + formate[element[1]]}  />
                      <div className="flex sm:flex-col items-center">
                      <button  onClick={()=>RemoveLine(index)} className="p-1 text-xs rounded-sm m-2 bg-red-500 text-white">remove</button>
                      <button onClick={()=>{setIdx(index);setActive(true)}} className="w-6 h-6 rounded-full text-xs m-2 bg-color-1 text-white" >+</button>
                      </div>
                    </div>
          }
          
        }):"Loading..."}
      </section>
        :<section  className={` font-serif text-base leading-7 tracking-wider my-10 w-10/12 sm:w-3/6 mx-auto space-y-5  text-gray-700`}>
              
              {content?content.map((element, index)=>{
                if(element[1] === "img"){
                  return <img key={index} src={element[0]} alt={element[2]} />
                } 
                else if(element[1] === "ul") {
                  return <ul key={index} className={formate["ul"]}>
                    {element[0].map((item, index)=>{
                      return <li key={index} >{item}</li>
                    } )}
                  </ul>
                }
                else{
                  return  <div key={index} className={formate[element[1]]}  >{element[0]}</div> 
                }
                
              }):"null"}
        </section>
            }
              </>
)
}

export default Content