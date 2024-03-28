// import React from 'react'
import { FaCaretRight } from "react-icons/fa";

function Projetcs() {
  return (
    
    <div className="flex justify-center items-center gap-3 mt-5 ">
      <div className="h-[60vh] w-[40vw] border uppercase text-2xl text-center flex flex-col gap-5 text-green-500 bg-gray-200">Projects
      <div className="text-blue-700 mt-8">  
                       
                            <div className="h-3 w-3  bg-#84cc16 inline-block rounded-full mr-2"></div> <div className="mb-8 inline-block">   Random Password Generator   </div>
                               <div className="gap-5 pl-[-4vw] mb-8" > BackGround Color Changer  </div>
                            <div className="gap-5 pl-[5vw] mb-8" >   Animated website for Forest Saving Awareness</div> 
              
                              <div className="gap-5 mb-5" > Animated Mini Docs App </div> 
                               
                      </div>
      </div>
      <div className="h-[60vh] w-[40vw] border uppercase text-2xl text-center flex flex-col gap-5 text-green-500 bg-gray-200">Deployed Links
      <div className="text-gray-500 mt-8">  
                       
                             <div className="mb-8">   <a href="https://reacordkeepingapplication.netlify.app/" >Random Password Generator   </a></div>
                               <div className="gap-5 pl-[-4vw] mb-8" > <a href="https://backgroundchangerapplicationusingreac.netlify.app/" >BackGround Color Changer  </a></div>
                            <div className="gap-5 pl-[5vw] mb-8" >   <a href="https://animated-website-of-saving-forest.netlify.app/" >Animated website for Forest Saving Awareness</a></div> 
              
                              <div className="gap-5 mb-5" > <a href="https://docaminipp.netlify.app/" >Animated Mini Docs App </a></div> 
                               
                      </div>
      </div>
      {/* <div className="h-[60vh] w-[40vw] border bg-gray-200"></div> */}
     
    </div>
    
  )
}

export default Projetcs