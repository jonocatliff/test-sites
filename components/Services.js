import React from 'react'
import TextTiles from './TextTiles'
import styles from './Patterns.module.css';
import Link from 'next/link';


export default function Services(props) {
    return (
        <div id="services" className="bg-no-repeat bg-left">
            <div id={styles.stars} className="px-6 lg:px-28 py-8 md:py-32">
                <div className="py-5 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold">{props.title}</h2>
                </div>
                <div className="lg:flex flex-wrap justify-center py-16">
                    <TextTiles open={true} rated={true} title={props.cardTitle1} desc={props.cardDesc1} />
                    <TextTiles title={props.cardTitle2} desc={props.cardDesc2} />
                    <TextTiles title={props.cardTitle3} desc={props.cardDesc3} />
                </div>
                <div className="md:flex  justify-between ">
                    <div className="flex items-center justify-between pt-4 px-6 w-full  border-t-2  border-pink-500 uppercase">
                        <div className="">
                            <p className="text-lg text-center md:text-left font-bold capitalize  text-pink-600">{props.subtitle}</p>
                        </div>
                        <div className="">
                            <Link href="#quote"><button className="py-5 animate-pulse hidden md:flex w-full md:w-auto mt-4 md:mt-0 px-4 shadow-xl bg-pink-600 text-white border-4 cursor-pointer border-pink-500 rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-pink-600 hover:border-pink-600">Estimate</button></Link>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}



// export default function Services(props) {
//     return (
//         <div id="services" className="bg-no-repeat bg-left">
//             <div id={styles.primary} className="px-6 lg:px-28 py-8 md:py-32">
//                 <div className="py-5 text-center">
//                     <div className="flex justify-center pb-10">
//                         <div className="py-3 flex bg-pink-50 px-10 rounded-lg ring-4 ring-pink-500 ring-opacity-20 ring-offset-4">
//                             <p className="text-lg text-center afont-bold capitalize  text-pink-600">{props.subtitle}</p>
//                         </div>
//                     </div>
//                     <h2 className="text-3xl md:text-4xl font-extrabold">{props.title}</h2>
//                 </div>
//                 <div className="lg:flex flex-wrap justify-center py-8">
//                     <TextTiles open={true} rated={true} title={props.cardTitle1} desc={props.cardDesc1} />
//                     <TextTiles title={props.cardTitle2} desc={props.cardDesc2} />
//                     <TextTiles title={props.cardTitle3} desc={props.cardDesc3} />
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default function Services(props) {
//     return (
//         <div id="services" className="bg-no-repeat bg-left">
//             <div style={{backgroundImage: 'url("/blob.svg")'}} className="bg-right bg-contain bg-no-repeat">
//                 <div id={styles.primary} className="px-6 lg:px-28 py-16 md:py-32">
//                     <div className="py-5">
//                         <div className="flex pb-4">
//                             <div className="rounded-full ring-4 ring-pink-500 ring-opacity-20 ring-offset-4">
//                                 <img loading="lazy" src="/logo.jpg" alt="" className="w-14 h-14 rounded-full"/>
//                             </div>
//                         </div>
//                         <h2 className="text-3xl md:text-4xl font-extrabold">{props.title}</h2>
//                         <p className="text-lg afont-bold capitalize  text-pink-600">{props.subtitle}</p>
//                     </div>
//                     <div className="lg:flex flex-wrap justify-center md:-mx-3 md:py-16">
//                         <TextTiles title={props.cardTitle1} desc={props.cardDesc1} />
//                         <TextTiles open={true} rated={true} title={props.cardTitle2} desc={props.cardDesc2} />
//                         <TextTiles title={props.cardTitle3} desc={props.cardDesc3} />
//                     </div>
//                     <div className="flex justify-end">
//                         <Link href="#quote"><button className="bg-pink-600 w p-4 rounded-xl shadow-xl text-white border-4 border-pink-500 font-bold transform transition-all duration-400 hover:bg-white hover:text-pink-600 hover:border-pink-600 hover:scale-110">Get Quote</button></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }