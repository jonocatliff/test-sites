import React from 'react'
import Link from 'next/link'
import styles from './Patterns.module.css';


export default function About(props) {
    return (
        <div id={styles.aboutBG} className="">
            <div className="px-6 lg:px-28 w-full " style={{background: 'linear-gradient(0deg, rgba(250,250,250,0) 50%, rgba(255,255,255,1) 50%)'}}>
                <div className="flex w-full ">
                    <div className="flex w-full justify-center py-5 px-6 rounded-xl bg-pink-50 border-2 border-pink-300 uppercase">
                        <p className="text-xs font-bold capitalize text-pink-600">{props.subtitle}</p>
                    </div>
                </div>
            </div>
            <div className="px-6 lg:px-28 md:py-0 flex items-center" style={{background: 'linear-gradient(356deg, rgba(255,255,255,1) 15%, rgba(250,250,250,0) 15%)'}}>
                <div className="w-full pb-40 pt-24 md:py-50 lg:w-1/2">
                    <h2 className="text-white md:pt-0 text-3xl md:text-4xl font-extrabold">{props.title}</h2>
                    <p className="text-lg py-5 text-white">{props.desc}</p>
                    <div className="">
                        <Link href="#quote"><button className="bg-white w p-4 rounded-xl shadow-xl text-pink-600 border-4 border-white font-bold transform transition-all duration-400 hover:bg-pink-600 hover:text-white hover:border-pink-300 hover:scale-115">Get Quote</button></Link>
                    </div>
                </div>
                <div className="w-full hidden lg:flex md:w-1/2"></div>      
            </div>
        </div>
    )
}


// export default function About(props) {
//     return (
//         <div id={styles.aboutBG} className="">
//             <div className="px-6 lg:px-28 w-full " style={{background: 'linear-gradient(0deg, rgba(250,250,250,0) 50%, rgba(255,255,255,1) 50%)'}}>
//                 <div className="flex w-full justify-end">
//                     <div className="flex py-5 animate-pulse px-10 rounded-xl ring-4 ring-pink-500 ring-opacity-20 ring-offset-4 transform transition-all duration-400 hover:scale-110 bg-pink-50 uppercase">
//                         <p className="text-xs text-center font-bold text-pink-600">{props.subtitle}</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="px-6 lg:px-28 md:py-0 flex items-center" style={{background: 'linear-gradient(356deg, rgba(255,255,255,1) 15%, rgba(250,250,250,0) 15%)'}}>
//                 <div className="w-full py-32 lg:w-1/2">
//                     <h2 className="text-white md:pt-0 text-3xl md:text-4xl font-extrabold">{props.title}</h2>
//                     <div style={{background: 'linear-gradient(90deg, #EC4899 0%, rgba(255,255,255,0) 100%)'}} className="py-2 bg-pink-500"></div>
//                     <p className="text-lg py-5 text-white">{props.desc}</p>
//                     <Link href="#quote"><button className="bg-white w p-4 rounded-xl shadow-xl text-pink-600 border-4 border-white font-bold transform transition-all duration-400 hover:bg-pink-600 hover:text-white hover:border-pink-300 hover:scale-110">Get Quote</button></Link>
//                 </div>
//                 <div className="w-full hidden lg:flex md:w-1/2"></div>      
//             </div>
//         </div>
//     )
// }


// export default function About(props) {
//     return (
//         <div id={styles.primary} className="">
//             <div style={{backgroundImage: "url('/blob.svg')"}} className="px-6 lg:px-28 py-32  md:py-0 bg-right bg-no-repeat md:flex items-center">
//                 <div className="md:w-1/2 md:pr-4">
//                     <div className="flex w-full justify-start pb-10">
//                         <div className="flex py-5 animate-pulse px-10 rounded-xl ring-4 ring-pink-500 ring-opacity-20 ring-offset-4 transform transition-all duration-400 hover:scale-110 bg-pink-50 uppercase">
//                             <p className="text-xs font-bold text-pink-600">{props.subtitle}</p>
//                         </div>
//                     </div>
//                     <div className="w-full">
//                         <h2 className="md:pt-0 text-3xl md:text-4xl font-extrabold">{props.title}</h2>
//                         <div style={{background: 'linear-gradient(90deg, #EC4899 0%, rgba(255,255,255,0) 100%)'}} className="py-2 bg-pink-500"></div>
//                         <p className="text-lg py-5 ">{props.desc}</p>
//                         <Link href="#quote"><button className="bg-pink-600 w p-4 rounded-xl shadow-xl text-white border-4 border-pink-500 font-bold transform transition-all duration-400 hover:bg-white hover:text-pink-600 hover:border-pink-600 hover:scale-110">Get Quote</button></Link>
//                     </div>
//                 </div>
//                 <div className="w-full pt-4 md:pt-0 md:p-10 md:w-1/2">
//                     <img loading="lazy" src="/Champagne.jpg" alt="" className="rounded-lg shadow-lg border-b-8 border-r-8 border-pink-200"/>
//                 </div>      
//             </div>
//         </div>
//     )
// }