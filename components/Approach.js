import React from 'react'
import styles from './Patterns.module.css';
import Link from 'next/link';

export default function Approach(props) {
    return (
        <div id={styles.approachBG} className="">
            <div className="py-32" style={{background: 'linear-gradient(356deg, rgba(249,249,249,0) 85%, rgba(255,255,255,1) 85%)'}}>
                <div className=" md:flex justify-center items-center px-6 lg:px-28 pt-40 md:py-32" >
                    <div className="w-full text-center text-white">
                        <h2 className="text-3xl md:text-4xl capitalize font-extrabold transform">Our <span className="white bg-pink-600 rounded-xl px-3 py-1 shadow-xl transform transition-all duration-500 hover:scale-105 ring-2 ring-pink-500 ring-opacity-20 ">Approach</span> To {props.title}</h2>
                        <p className="text-lg py-5">{props.desc}</p>
                        <div className="">
                            <Link href="#quote"><button className="bg-white p-4 rounded-xl shadow-xl text-pink-600 border-4 border-white font-bold transform transition-all duration-500 hover:bg-pink-600 hover:text-white hover:border-pink-300 hover:scale-110">Get Quote</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// export default function Approach(props) {
//     return (
//         <div id={styles.approachBG} className="">
//             <div className="" style={{background: 'linear-gradient(356deg, rgba(249,249,249,0) 85%, rgba(255,255,255,1) 85%)'}}>
//                 <div className=" md:flex justify-center items-center px-6 lg:px-28 pt-48 md:pt-32 pb-16" >
//                     <div className="hidden md:flex w-1/2"></div>
//                     <div className="w-full md:w-1/2 text-start text-white">
//                         <h2 className="text-3xl md:text-4xl capitalize font-extrabold transform">Our <span className="white bg-pink-600 rounded-xl px-3 py-1 shadow-xl transform transition-all duration-500 hover:scale-105 ring-2 ring-pink-500 ring-opacity-20 ">Approach</span> To {props.title}</h2>
//                         <p className="text-lg py-5">{props.desc}</p>
//                         <div className="flex justify-start">
//                             <Link href="#quote"><button className="bg-white p-4 rounded-xl shadow-xl text-pink-600 border-4 border-white font-bold transform transition-all duration-500 hover:bg-pink-600 hover:text-white hover:border-pink-300 hover:scale-110">Get Quote</button></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default function Approach(props) {
//     return (
//             <div id={styles.primary} className="">
//                 <div className=" md:flex justify-center items-center px-6 lg:px-28 py-8 " >
//                     <div style={{background: 'linear-gradient(14deg, #FDF2F8 0%, rgba(255,255,255,0) 100%)'}} className="rounded-3xl md:flex md:w-1/2 md:p-14">
//                         <img loading="lazy" src="/aerial.jpg" alt="" className="rounded-lg shadow-lg border-t-8 border-l-8 border-pink-600"/>
//                     </div>
//                     <div className="w-full pt-8 md:pt-0 pl-4 md:w-1/2 text-start">
//                         <h2 className="text-3xl md:text-4xl capitalize font-extrabold transform">Our <span className="white mx-2 leading-loose bg-pink-600 rounded-xl px-3 py-1 shadow-xl transform transition-all duration-500 hover:scale-105 ring-4 ring-pink-500 ring-opacity-20 ring-offset-4 text-white">Approach</span> To {props.title}</h2>
//                         <p className="text-lg py-5">{props.desc}</p>
//                         <div className="flex justify-start">
//                             <Link href="#quote"><button className="bg-pink-600 p-4 rounded-xl shadow-xl text-white border-4 border-pink-500 font-bold transform transition-all duration-500 hover:bg-white hover:text-pink-600 hover:border-pink-600 hover:scale-110">Get Quote</button></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }