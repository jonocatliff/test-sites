import React from 'react'
import QuoteForm from './QuoteForm'
import styles from './Patterns.module.css';

// export default function CTABottom(props) {
//     return (
//         <div id="quote" className="">
//             <div id={styles.ctaBG} className="">
//                 <div className="" style={{background: 'linear-gradient(3deg, rgba(255,255,255,1) 10%, rgba(250,250,250,0) 10%)'}}>
//                     <div className="">
//                         <div  className=" px-6 lg:px-28 pt-24 pb-56 md:flex items-center bg-no-repeat bg-cover bg-bottom md:bg-left justify-between">
//                             <div className="md:w-1/2 xl:w-1/3 pt-10 md:pt-0">
//                                 <QuoteForm city={props.city} />   
//                             </div>
//                             <div className="md:w-1/2 text-white xl:w-2/3 pt-4 md:pt-0 md:pl-10">
//                                 <h2 className="text-3xl capitalize md:text-4xl font-extrabold">{props.title}</h2>
//                                 <h3 className="text-lg py-5">{props.desc}</h3>
//                                 <p className="text-lg">{props.desc2}</p>
//                             </div> 
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default function CTABottom(props) {
//     return (
//         <div id="quote" className="">
//             <div id={styles.ctaBG} className="">
//                 <div className="" style={{background: 'linear-gradient(3deg, rgba(255,255,255,1) 10%, rgba(250,250,250,0) 10%)'}}>
//                     <div className="px-6 lg:px-28">
//                         <div  className=" pt-24 pb-32 md:flex items-center justify-between">
//                             <div className="md:w-1/2 text-white xl:w-2/3 pt-4 md:pt-0 md:pr-10">
//                                 <h2 className="text-3xl capitalize md:text-4xl font-extrabold">{props.title}</h2>
//                                 <h5 className="text-lg py-5">{props.desc}</h5>
//                                 <p className="text-lg">{props.desc2}</p>
//                             </div> 
//                             <div className="md:w-1/2 xl:w-1/3 pt-10 md:pt-0">
//                                 <QuoteForm city={props.city} />   
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



export default function CTABottom(props) {
    return (
        <div id="quote" className="">
            <div id={styles.primary} className="">
                <div style={{backgroundImage: 'url("/blob.svg")'}} className="px-6 lg:px-28 bg-right bg-no-repeat">
                    <div  className="text py-8 md:flex items-center justify-between">
                        <div className="md:w-1/2 xl:w-2/3 pt-4 md:pt-0 md:pr-10">
                            <h2 className="text-3xl capitalize md:text-4xl font-extrabold">{props.title}</h2>
                            <h5 className="text-lg py-5">{props.desc}</h5>
                            <p className="text-lg">{props.desc2}</p>
                        </div> 
                        <div className="w-full md:w-1/2 xl:w-1/3 pt-10 md:pt-0">
                            <QuoteForm city={props.city} />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}