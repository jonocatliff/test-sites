import React from 'react'
import styles from './Patterns.module.css';
import Link from 'next/link';
import TextTiles from './TextTiles';


export default function AboutPage(props) {
    return (
        <div id={styles.primary} className="pt-24">
                <div className="py-16 lg:py-28 px-6 lg:px-28">
                    <div className="md:flex items-center">
                        <div className="w-full md:w-1/2">
                            <div className="">
                                <div className="md:flex md:flex-wrap">
                                    <h1 className="text-3xl md:text-4xl font-extrabold">{props.aboutTitle}</h1>
                                </div>
                                <div className="flex flex-wrap">
                                    <p className="text-lg py-5">{props.aboutDesc}</p>
                                    <p
                                        className={`${props.aboutDesc2
                                        ? 'flex'
                                        : 'hidden'} text-lg`}>{props.aboutDesc2}</p>
                                </div>
                                <div className="md:flex py-2">
                                    <Link href="/contact">
                                        <button
                                            className="py-5 my-2  px-4 shadow-xl bg-pink-600 text-white border-4 cursor-pointer border-pink-500 rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-pink-600 hover:border-pink-600">Contact</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex md:p-14 justify-end md:w-1/2">
                            <img loading="lazy" src="/wedding-photos.jpg" className="rounded-xl shadow-xl"/>
                        </div>
                    </div>
                    <div className="bg-contain bg-center">
                        <div className="flex justify-center py-16">
                            <h2 className="text center text-3xl md:text-4xl font-extrabold">About {props.companyName}</h2>
                        </div>
                        <div>
                            <div className="lg:flex w-full">
                                <TextTiles title="Dependable & Honest" desc={props.aboutTile1}/>
                                <TextTiles title="World-Class Customer Service" desc={props.aboutTile2}/>
                                <TextTiles title="Ahead Of Schedule, Under Budget" desc={props.aboutTile3}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


// export default function AboutPage(props) {
//     return (
//         <div id={styles.primary} className="pt-24">
//             <div className="py-16 lg:py-32 px-6 lg:px-28">
//                     <div style={{backgroundImage: 'url("/blob.svg")', backgroundSize: '70%'}} className="md:flex bg-right bg-no-repeat bg-cover items-center">
//                         <div className="w-full md:w-1/2">
//                             <h1 className="text-3xl md:text-4xl font-extrabold">{props.aboutTitle}</h1>
//                             <p className="text-lg py-5">{props.aboutDesc}</p>
//                             <p
//                                 className={`${props.aboutDesc2
//                                 ? 'flex pb-5'
//                                 : 'hidden'} text-lg`}>{props.aboutDesc2}</p>
//                             <Link href="/contact">
//                                 <button
//                                     className="py-5 my-2  px-4 shadow-xl bg-pink-600 text-white border-4 cursor-pointer border-pink-500 rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-pink-600 hover:border-pink-600">Contact</button>
//                             </Link>
//                         </div>
//                         <div className="w-full mt-4 md:mt-0 flex md:p-14 justify-end md:w-1/2">
//                             <img loading="lazy" src="/wedding-photos.jpg" className="rounded-xl shadow-xl border-r-8 border-b-8 border-pink-600"/>
//                         </div>
//                     </div>
//                     <div className="bg-contain bg-center">
//                         <div className="flex justify-center py-16">
//                             <h2 className="text center text-3xl md:text-4xl font-extrabold">About {props.companyName}</h2>
//                         </div>
//                         <div>
//                             <div className="lg:flex w-full">
//                                 <TextTiles title="Dependable & Honest" desc={props.aboutTile1}/>
//                                 <TextTiles title="World-Class Customer Service" desc={props.aboutTile2}/>
//                                 <TextTiles title="Ahead Of Schedule, Under Budget" desc={props.aboutTile3}/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }



// export default function AboutPage(props) {
//     return (
//         <div id={styles.primary} className="pt-24">
//             <div className="py-16 lg:py-32 px-6 lg:px-28">
//                     <div className="bg-contain bg-center pb-16 md:pb-32">
//                         <div className="flex justify-center pb-16">
//                             <h2 className="text center text-3xl md:text-4xl font-extrabold">About {props.companyName}</h2>
//                         </div>
//                         <div>
//                             <div className="lg:flex w-full">
//                                 <TextTiles title="Dependable & Honest" desc={props.aboutTile1}/>
//                                 <TextTiles title="World-Class Customer Service" desc={props.aboutTile2}/>
//                                 <TextTiles title="Ahead Of Schedule, Under Budget" desc={props.aboutTile3}/>
//                             </div>
//                         </div>
//                     </div>
//                     <div style={{backgroundImage: 'url("/blob.svg")', backgroundSize: '70%'}} className="md:flex bg-right bg-no-repeat bg-cover items-center">
//                         <div className="w-full flex md:p-14 justify-end md:w-1/2">
//                             <img loading="lazy" src="/wedding-photos.jpg" className="rounded-xl mb-4 md:mb-0 shadow-xl rounded-tl-3xl border-t-8 border-l-8 border-pink-600"/>
//                         </div>
//                         <div className="w-full md:w-1/2">
//                             <h1 className="text-3xl md:text-4xl font-extrabold">{props.aboutTitle}</h1>
//                             <p className="text-lg py-5">{props.aboutDesc}</p>
//                             <p
//                                 className={`${props.aboutDesc2
//                                 ? 'flex pb-5'
//                                 : 'hidden'} text-lg`}>{props.aboutDesc2}</p>
//                             <Link href="/contact">
//                                 <button
//                                     className="py-5 my-2  px-4 shadow-xl bg-pink-600 text-white border-4 cursor-pointer border-pink-500 rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-pink-600 hover:border-pink-600">Contact</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }