import React from 'react'
import QuoteForm from './QuoteForm'
import styles from './Patterns.module.css';


export default function Header(props) {
    return (
        <div className="pt-24 bg-cover shadow-xl" id={styles.headerBG}>
            <div className="w-full px-6 lg:px-28 md:flex justify-between items-center pt-28 md:py-28" >
                <div className="w-full md:w-1/2 md:pr-4 xl:pr-0 text-white">
                    <div className="flex">
                        <h4 className="font-bold capitalize">Let's plan your <span className="px-2 py-1 bg-pink-600 rounded-xl">dream wedding</span></h4>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold">{props.title}</h1>
                    <h4 className="text-md font-bold py-5">{props.subtitle}</h4>
                    <div className="lg:flex items-center">
                        <div className="flex items-center pl-5">
                            <div className="relative flex">
                                <div className="absolute top-0 right-0 flex h-3 w-3 -mt-1.5 ">
                                    <div
                                        className="animate-ping absolute flex h-full w-full  bg-pink-500 opacity-80"></div>
                                    <div className="relative shadow-xl flex  h-3 w-3 bg-pink-600"></div>
                                </div>
                            </div>
                            <div className="pl-2">
                                <p className="text-white">Experienced</p>
                            </div>
                        </div>
                        <div className="flex items-center pl-5">
                            <div className="relative flex">
                                <div className="absolute top-0 right-0 flex h-3 w-3 -mt-1.5 ">
                                    <div
                                        className="animate-ping absolute flex h-full w-full  bg-pink-500 opacity-80"></div>
                                    <div className="relative shadow-xl flex  h-3 w-3 bg-pink-600"></div>
                                </div>
                            </div>
                            <div className="pl-2">
                                <p className="text-white">Professional</p>
                            </div>
                        </div>
                        <div className="flex items-center pl-5">
                            <div className="relative flex">
                                <div className="absolute top-0 right-0 flex h-3 w-3 -mt-1.5 ">
                                    <div
                                        className="animate-ping absolute flex h-full w-full  bg-pink-500 opacity-80"></div>
                                    <div className="relative shadow-xl flex  h-3 w-3 bg-pink-600"></div>
                                </div>
                            </div>
                            <div className="pl-2">
                                <p className="text-white">Affordable</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 md:py-0 md:w-1/2 xl:w-1/3">
                    <QuoteForm />
                </div>
            </div>
        </div>
    )
}


// export default function Header(props) {
//     return (
//         <div className="pt-24 bg-cover" id={styles.headerBG}>
//             <div className="w-full px-6 lg:px-28 md:flex justify-between items-center pt-28 md:py-28" style={{background: 'linear-gradient(357deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 20%)'}}>
//                 <div className="w-full md:w-1/2 md:pr-4 xl:pr-0 text-white">
//                     <h1 className="text-5xl lg:text-6xl font-extrabold">{props.title}</h1>
//                     <h4 className="text-lg font-bold py-5">{props.subtitle}</h4>
//                 </div>
//                 <div className="md:py-0 md:w-1/2 xl:w-1/3">
//                     <QuoteForm />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default function Header(props) {
//     return (
//         <div className="pt-24 w-full bg-cover" id={styles.headerBG}>
//             <div className="w-full flex md:flex-none flex-wrap-reverse px-6 lg:px-28 md:flex justify-between items-center pt-28 md:py-28" style={{background: 'linear-gradient(1deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 20%)'}}>
//                 <div className="md:py-0 pt-16 md:pt-0 md:w-1/2 xl:w-1/3">
//                     <QuoteForm />
//                 </div>
//                 <div className="w-full md:w-1/2 md:pl-4 xl:pr-0 text-white">
//                     <h1 className="text-5xl lg:text-6xl font-extrabold">{props.title}</h1>
//                     <div className="lg:flex py-2 items-center">
//                         <div className="flex items-center pl-5">
//                             <div className="relative flex">
//                                 <div className="absolute top-0 right-0 flex h-3 w-3 -mt-1.5 ">
//                                     <div
//                                         className="animate-ping absolute flex h-full w-full  bg-pink-600 opacity-70"></div>
//                                     <div className="relative shadow-xl flex  h-3 w-3 bg-pink-500"></div>
//                                 </div>
//                             </div>
//                             <div className="pl-2">
//                                 <p className="text-white">Experienced</p>
//                             </div>
//                         </div>
//                         <div className="flex items-center pl-5">
//                             <div className="relative flex">
//                                 <div className="absolute top-0 right-0 flex h-3 w-3 -mt-1.5 ">
//                                     <div
//                                         className="animate-ping absolute flex h-full w-full  bg-pink-600 opacity-70"></div>
//                                     <div className="relative shadow-xl flex  h-3 w-3 bg-pink-500"></div>
//                                 </div>
//                             </div>
//                             <div className="pl-2">
//                                 <p className="text-white">Professional</p>
//                             </div>
//                         </div>
//                         <div className="flex items-center pl-5">
//                             <div className="relative flex">
//                                 <div className="absolute top-0 right-0 flex h-3 w-3 -mt-1.5 ">
//                                     <div
//                                         className="animate-ping absolute flex h-full w-full  bg-pink-600 opacity-70"></div>
//                                     <div className="relative shadow-xl flex  h-3 w-3 bg-pink-500"></div>
//                                 </div>
//                             </div>
//                             <div className="pl-2">
//                                 <p className="text-white">Affordable</p>
//                             </div>
//                         </div>
//                     </div>
//                     <h4 className="text-md font-bold">{props.subtitle}</h4>
//                 </div>
//             </div>
//         </div>
//     )
// }