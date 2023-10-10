  const formate = {
      heading:'text-[23px] text-gray-700 font-bold ',
      p:"",
      ul:"list-disc ml-10 space-y-2"
  }
  
  const Content = ({content, admin=false, setContent=(e)=>{}}) => {

    
  const onChangeContent = (e, index)=>{
    let tempContent= [...content];
    tempContent[index][0] = e.target.value;
    setContent(tempContent);
  }

    return (<>
    {admin?
      <section  className={`my-10 w-10/12 sm:w-3/6 mx-auto space-y-5 text-[18px] text-gray-700`}>
            
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
          return  <textarea value={element[0]} onChange={(e)=>onChangeContent(e, index)} key={index} className={"block w-full overflow-visible" + formate[element[1]]}  />
        }
        
      }):"Loading..."}
</section>
      :<section  className={`my-10 w-10/12 sm:w-3/6 mx-auto space-y-5 text-[18px] text-gray-700`}>
            
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