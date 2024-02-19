import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import last from './last.png'

export default function Home() {

    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                       

                       <img src={last} alt="" style={{position:'relative', left:"250px", height:'340px'}}/>
                       <h2 className="text-4xl font-bold sm:text-5xl">
                            Rakshith K N
                            <span className="hidden sm:block text-2xl">Front-End Web Devloper</span>
                        </h2>
                        
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full " >
                    {/* <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" /> */}
                    <h1  style={{position:'absolute', top:'200px', color:'#92a8d1',fontSize:'30px',fontWeight:'bold'}}>My name is Rakshith K N , <br></br>A Passionate Frontend Devloper <br>
                    </br>I completed my BE in Computer Science.<br></br> I Am Looking Forward to get the opportunity <br></br>
                    in Web Devlopement</h1>
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium " style={{color:'gray'}}>Passionate Front-End Devloper</h1>
        </div>
    );
}
