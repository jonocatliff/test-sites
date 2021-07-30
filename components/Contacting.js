import React from 'react'
import QuoteForm from './QuoteForm';
import styles from './Patterns.module.css';



export default function Contacting(props) {
    return (
        <div id={styles.primary} className="pt-24">
                <div
                    className="md:flex items-center px-6 lg:px-28 py-16 lg:py-32 bg-left bg-no-repeat">
                    <div className="w-full md:w-1/2 xl:px-8">
                        <div className=" md:px-8">
                            <QuoteForm classes="bg-white"/>
                        </div>
                    </div>
                    <div className="w-full pt-4 md:pt-0 md:w-1/2">
                        <div className="flex w-full ">
                            <div className="flex justify-center py-5 px-6 rounded-xl bg-pink-50 border-2 border-pink-300 uppercase">
                                <p className="text-xs font-bold capitalize text-pink-600">{props.contactSubtitle}</p>
                            </div>
                        </div>
                        <h1 className="text-3xl lg:text-4xl py-5 font-extrabold">How Can {props.companyName} Help?</h1>
                        <p className="text-lg">{props.contactDesc}</p>
                        <p className="text-gray-300">We respond in minutes</p>
                    </div>
                </div>
            </div>
    )
}

// export default function Contacting(props) {
//     return (
//         <div id={styles.primary} className="pt-24">
//                 <div
//                     style={{
//                     backgroundImage: 'url("/blob.svg")',
//                     backgroundSize: '60%'
//                 }}
//                     className="md:flex items-center px-6 lg:px-28 py-16 lg:py-32 bg-right bg-no-repeat">
//                     <div className="w-full pt-4 md:pt-0 md:w-1/2">
//                         <div className="flex w-full ">
//                             <div className="flex transform hover:scale-110 transition-all duration-400 ring-2 ring-pink-600 ring-opacity-20 ring-offset-4 justify-center py-5 px-6 rounded-xl bg-pink-50 border-2 border-pink-300 uppercase">
//                                 <p className="text-xs font-bold capitalize text-pink-600">{props.contactSubtitle}</p>
//                             </div>
//                         </div>
//                         <h1 className="text-3xl lg:text-4xl py-5 font-extrabold">How Can {props.companyName} Help?</h1>
//                         <p className="text-lg">{props.contactDesc}</p>
//                     </div>
//                     <div className="w-full mt-4 md:mt-0 md:w-1/2 xl:px-8">
//                         <div className=" md:px-8">
//                             <QuoteForm classes="bg-white"/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }


// export default function Contacting(props) {
//     return (
//         <div id={styles.primary} className="pt-24">
//                 <div
//                     style={{
//                     backgroundImage: 'url("/blob.svg")',
//                     backgroundSize: '60%'
//                 }}
//                     className="lg:flex items-center px-6 lg:px-28 py-16 lg:py-32 bg-right bg-no-repeat">
//                     <div className="w-full pt-4 md:pt-0 lg:w-1/2">
//                         <p className="text-sm text-gray-600 uppercase font-bold">{props.contactSubtitle}</p>
//                         <h1 className="text-3xl lg:text-4xl py-5 font-extrabold">How Can {props.companyName} Help?</h1>
//                         <p className="text-lg">{props.contactDesc}</p>
//                     </div>
//                     <div className="w-full mt-4 lg:mt-0 lg:w-1/2 md:px-16">
//                         <QuoteForm classes="bg-white"/>
//                     </div>
//                 </div>
//             </div>
//     )
// }