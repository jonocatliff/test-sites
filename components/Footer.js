import React from 'react'
import Link from 'next/link';
import styles from './Patterns.module.css';

export default function Footer(props) {
    return (
        <div className="">
            <div className="md:flex w-full lg:px-28 px-6 py-16 border-b border-white">
                <div className="md:w-1/4 px-4">
                    <h4 className="text-xl py-5 font-bold">Services</h4>
                    <p className="text-sm py-5 text-gray-700 cursor-pointer">Wedding Planning</p>
                    <p className="text-sm py-5 text-gray-700 cursor-pointer">Day Of Coordinator</p>
                    <p className="text-sm py-5 text-gray-700 cursor-pointer">Special Requests</p>
                </div>
                <div className="md:w-1/4 px-4">
                    <h4 className="text-xl py-5 font-bold">Contact Us</h4>
                    <Link href={`mailto:${props.email}`}><p className="break-all text-sm py-5 text-gray-700 cursor-pointer">{props.email}</p></Link>
                    <p className="text-sm py-5 text-gray-700 cursor-pointer">{props.address}</p>
                </div>
                <div className="md:w-1/4 px-4">
                    <h4 className="text-xl py-5 font-bold">About Us</h4>
                    <Link href="/blog"><p className="text-sm py-5 text-gray-700 cursor-pointer">Blog</p></Link>
                    <Link href="/about"><p className="text-sm py-5 text-gray-700 cursor-pointer">About</p></Link>
                    <Link href="/contact"><p className="text-sm py-5 text-gray-700 cursor-pointer">Contact</p></Link>
                </div>
                <div className="md:w-1/4 px-4">
                    <h4 className="text-xl py-5 font-bold">{props.companyName}</h4>
                    <p className={`${props.desc ? '' : 'hidden'} text-sm py-5 text-gray-700 cursor-pointer`}>{props.desc}</p>
                    <p className="text-sm py-5 text-gray-700 cursor-pointer">© {props.companyName} 2021</p>
                    <Link href="/privacy-policy"><p className="text-sm py-5 text-gray-700 cursor-pointer">Privacy Policy</p></Link>
                    <Link href="/terms-of-service"><p className="text-sm py-5 text-gray-700 cursor-pointer">Terms Of Service</p></Link>
                </div>
            </div>
        </div>
    )
}


// export default function Footer(props) {
//     return (
//         <div id={styles.primary} className="">
//             <div className="md:flex w-full lg:px-28 px-6 py-16 border-b border-white">
//                 <div className="md:w-1/4 px-4">
//                     <h4 className="text-xl py-5 font-bold">Services</h4>
//                     <p className="text-sm py-5 text-gray-700 cursor-pointer">Wedding Planning</p>
//                     <p className="text-sm py-5 text-gray-700 cursor-pointer">Day Of Coordinator</p>
//                     <p className="text-sm py-5 text-gray-700 cursor-pointer">Special Requests</p>
//                 </div>
//                 <div className="md:w-1/4 px-4">
//                     <h4 className="text-xl py-5 font-bold">Contact Us</h4>
//                     <Link href={`mailto:${props.email}`}><p className="break-all text-sm py-5 text-gray-700 cursor-pointer">{props.email}</p></Link>
//                     <p className="text-sm py-5 text-gray-700 cursor-pointer">{props.address}</p>
//                     <Link href="#quote"><button className="text-sm py-5 text-pink-600 rounded-lg border border-pink-600  px-10 xl:px-20 hover:scale-110 transition-all duration-400 transform cursor-pointer">Quote</button></Link>
//                 </div>
//                 <div className="md:w-1/4 px-4">
//                     <h4 className="text-xl py-5 font-bold">About Us</h4>
//                     <Link href="/about"><p className="text-sm py-5 text-gray-700 cursor-pointer">About</p></Link>
//                     <Link href="/contact"><p className="text-sm py-5 text-gray-700 cursor-pointer">Contact</p></Link>
//                     <Link href="/blog"><p className="text-sm py-5 text-gray-700 cursor-pointer">Blog</p></Link>
//                 </div>
//                 <div className="md:w-1/4 px-4">
//                     <h4 className="text-xl py-5 font-bold">{props.companyName}</h4>
//                     <Link href="/terms-of-service"><p className="text-sm py-5 text-gray-700 cursor-pointer">Terms Of Service</p></Link>
//                     <Link href="/privacy-policy"><p className="text-sm py-5 text-gray-700 cursor-pointer">Privacy Policy</p></Link>
//                     <p className={`${props.desc ? '' : 'hidden'} text-sm py-5 text-gray-700 cursor-pointer`}>{props.desc}</p>
//                 </div>
//             </div>
//             <div className="text-center">
//                 <p className="text-sm py-5 text-gray-700 cursor-pointer">© {props.companyName} 2021</p>
//             </div>
//         </div>
//     )
// }


// export default function Footer(props) {
//     return (
//         <div className="bg-pink-50">
//             <div className="md:flex w-full lg:px-28 px-6 py-16 border-b border-white">
//                 <div className="md:w-1/4 px-4">
//                     <h4 className="text-xl text-pink-600 py-5 font-bold">{props.companyName}</h4>
//                     <Link href="/terms-of-service"><p className="text-sm py-5 text-pink-600 cursor-pointer">Terms Of Service</p></Link>
//                     <Link href="/privacy-policy"><p className="text-sm py-5 text-pink-600 cursor-pointer">Privacy Policy</p></Link>
//                     <p className={`${props.desc ? '' : 'hidden'} text-sm py-5 text-pink-600 cursor-pointer`}>{props.desc}</p>
//                 </div>
//                 <div className="md:w-1/4 px-4">
//                     <h4 className="text-xl text-pink-600 py-5 font-bold">Contact Us</h4>
//                     <Link href={`mailto:${props.email}`}><p className="break-all text-sm py-5 text-pink-600 cursor-pointer">{props.email}</p></Link>
//                     <p className="text-sm py-5 text-pink-600 cursor-pointer">{props.address}</p>
//                     <Link href="#quote"><button className="text-sm py-5 text-pink-600 rounded-lg border border-pink-600  px-10  xl:px-20 hover:scale-110 transition-all duration-400 transform cursor-pointer">Quote</button></Link>
//                 </div>
//                 <div className="md:w-1/4 px-4">
//                     <h4 className="text-xl text-pink-600 py-5 font-bold">About Us</h4>
//                     <Link href="/about"><p className="text-sm py-5 text-pink-600 cursor-pointer">About</p></Link>
//                     <Link href="/contact"><p className="text-sm py-5 text-pink-600 cursor-pointer">Contact</p></Link>
//                     <Link href="/blog"><p className="text-sm py-5 text-pink-600 cursor-pointer">Blog</p></Link>
//                 </div>
//                 <div className="md:w-1/4 px-4">
//                     <h4 className="text-xl text-pink-600 py-5 font-bold">Services</h4>
//                     <p className="text-sm py-5 text-pink-600 cursor-pointer">Wedding Planning</p>
//                     <p className="text-sm py-5 text-pink-600 cursor-pointer">Day Of Coordinator</p>
//                     <p className="text-sm py-5 text-pink-600 cursor-pointer">Special Requests</p>
//                 </div>
//             </div>
//             <div className="text-center">
//                 <p className="text-sm py-5 text-pink-600 cursor-pointer">© {props.companyName} 2021</p>
//             </div>
//         </div>
//     )
// }