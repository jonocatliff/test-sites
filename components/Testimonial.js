import React from 'react';
import styles from './Patterns.module.css';
import Link from 'next/link';
import TestimonyIcon from '../public/icons/TestimonyIcon'


export default function Testimonial(props) {
    return (
        <div id={styles.primary} className="w-full md:flex">
            <div
                className="px-6 py-16 lg:px-28 md:flex justify-center items-center w-full">
                <div className="w-full md:w-1/2 md:pr-10">
                    <div className="">
                        <h4 className="pb-10  uppercase opacity-60 font-bold">{props.subtitle}</h4>
                    </div>
                    <h2 className="font-extrabold text-3xl md:text-4xl">{props.title}</h2>
                    <p className="text-lg py-5 ">{props.desc}</p>
                    <div className="">
                        <Link href="#quote"><button className="bg-pink-600 p-4 rounded shadow text-white border-4 border-pink-500 font-bold transform transition-all duration-500 hover:bg-white hover:text-pink-600 hover:border-pink-600 hover:scale-110">Get Quote</button></Link>
                    </div>

                </div>
                <div className="w-full pt-16 md:pt-0 md:w-1/2  lg:m-10 bg-no-repeat   bg-center md:bg-center">
                    <div className="md:flex items-center bg-pink-50 p-12 rounded shadow hover:shadow-xl transform hover:scale-110 transition-all duration-500 hover:bg-pink-100 ring-2 ring-pink-500 ring-opacity-20 ring-offset-4">
                        <div className="md:w-1/5 flex justify-center md:justify-start">
                            <img loading="lazy" src="/Megan.jpeg" alt="" className="w-16 md:w-16 rounded-full shadow"/>
                        </div>
                        <div className="md:w-4/5 pt-4 md:pt-0 md:pl-2 text-center md:text-left">
                            <h4 className="">Megan</h4>
                            <p className="flex justify-center md:justify-start"><TestimonyIcon /><TestimonyIcon /><TestimonyIcon /><TestimonyIcon /><TestimonyIcon /></p>
                            <p className="text-sm italic">""
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


// export default function Testimonial(props) {
//     return (
//         <div id={styles.primary} className="w-full md:flex">
//             <div
//                 className="px-6 py-16 lg:px-28 md:flex justify-center items-center w-full">
//                 <div className="w-full md:w-1/2  md:p-4 md:mr-4">
//                     <div className="md:flex items-center bg-pink-50 p-12 rounded shadow hover:shadow-xl transform hover:scale-110 transition-all duration-500 hover:bg-pink-100 ring-4 ring-pink-500 ring-opacity-20 ring-offset-4">
//                         <div className="md:w-2/3 md:pl-2 text-center md:text-left">
//                             <p className="flex items-center justify-around md:justify-start"><TestimonyIcon /><TestimonyIcon /><TestimonyIcon /><TestimonyIcon /><TestimonyIcon /></p>
//                             <h4 className="">Megan</h4>
//                             <p className="text-sm italic">""</p>
//                         </div>
//                         <div className="md:w-1/3 pt-4 md:pt-0 flex justify-center md:justify-end">
//                             <img loading="lazy" src="/Megan.jpeg" alt="" className="w-24 md:w-24 rounded-full shadow-xl ring-4 ring-pink-500 ring-opacity-20 ring-offset-4"/>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full md:w-1/2 pt-16 md:pt-0 md:pr-10">
//                     <h2 className="font-extrabold text-3xl md:text-4xl">{props.title}</h2>
//                     <h4 className="pb-4  text-xs uppercase opacity-60 font-bold">{props.subtitle}</h4>
//                     <h5 className="text-lg py-5">{props.desc}</h5>
//                     <div className="">
//                         <Link href="#quote"><button className="bg-pink-600 p-4 rounded shadow text-white border-4 border-pink-500 font-bold transform transition-all duration-500 hover:bg-white hover:text-pink-600 hover:border-pink-600 hover:scale-110">Get Quote</button></Link>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }


// export default function Testimonial(props) {
//     return (
//         <div id={styles.primary} className="w-full px-6 lg:px-28 justify-center items-center py-24">
//                 <div className="w-full pt-4 px-2 bg-no-repeat">
//                     <div className="md:flex items-center bg-pink-50 p-12 rounded shadow hover:shadow-xl transform hover:scale-110 transition-all duration-500 hover:bg-pink-100 ring-4 ring-pink-500 ring-opacity-20 ring-offset-4">
//                         <div className="md:w-1/3 flex justify-center md:justify-start">
//                             <img loading="lazy" src="/Megan.jpeg" alt="" className="w-24 md:w-24 rounded-full shadow-xl ring-4 ring-pink-500 ring-opacity-20 ring-offset-4"/>
//                         </div>
//                         <div className="md:w-2/3 pt-4 md:pt-0 md:pl-2 text-center md:text-left">
//                             <p className="flex items-center justify-around md:justify-start"><TestimonyIcon /><TestimonyIcon /><TestimonyIcon /><TestimonyIcon /><TestimonyIcon /></p>
//                             <h4 className="">Megan</h4>
//                             <p className="text-sm italic">""</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full text-center pt-14">
//                     <h4 className="pb-4  text-sm uppercase opacity-60 font-bold">{props.subtitle}</h4>
//                     <h2 className="font-extrabold text-3xl md:text-4xl">{props.title}</h2>
//                     <h5 className="text-lg py-5">{props.desc}</h5>
//                     <div className="">
//                         <Link href="#quote"><button className="bg-pink-600 p-4 rounded shadow text-white border-4 border-pink-500 font-bold transform transition-all duration-500 hover:bg-white hover:text-pink-600 hover:border-pink-600 hover:scale-110">Get Quote</button></Link>
//                     </div>
//                 </div>
//         </div>
//     )
// }

