import React, { useState } from 'react'
import Link from 'next/link';

export default function Navigationbar(props) {

    const [onHover, setOnHover] = useState(false)
    return (
        <div className="shadow-xl fixed w-full z-20">
            <div className="flex justify-center bg-pink-600 px-6 lg:px-28">
                <p className="text-white text-center text-xs md:text-base capitalize font-bold">{props.topbar || props.companyName ? `Hire ${props.companyName} Today!` : 'Get A Quote Today'}</p>
            </div>
            <div className="bg-white flex justify-between items-center py-5 px-6 lg:px-28">
                <div className="flex items-center justify-start">
                    <Link href="/">
                        <div className="flex cursor-pointer items-center">
                            <img loading="lazy" src="/logo.jpg" alt="" className="w-12 h-12 pr-2"/>
                            <h4 className="font-bold text-sm md:text-xl cursor-pointer transition-all mr-8 duration-500 hover:text-pink-600 hover:scale-110 transform">{props.companyName}</h4>
                        </div>
                    </Link>
                    <Link href="/blog"><a href="" className="hidden lg:flex px-8 cursor-pointer transition-all duration-500 hover:text-pink-600 hover:scale-110 hover:font-bold transform">Blog</a></Link>
                    <Link href={props.services ? "/#services" : "#services"}><a href="" className="hidden lg:flex pl-8 cursor-pointer transition-all duration-500 hover:text-pink-600 hover:scale-110 hover:font-bold transform">Services</a></Link>
                </div>
                <div className="flex items-center">
                </div>
                <div className="flex items-center">
                    <Link href={props.quote ? "/contact" : "#quote"}><button onMouseEnter={() => setOnHover(true)} onMouseLeave={()  => setOnHover(false)} className="py-3 flex items-center px-2 md:px-4 ring-2 ring-pink-500 ring-opacity-70 ring-offset-2 shadow-xl bg-pink-600 text-white cursor-pointer rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-pink-600">
                        <p className="text-xs md:text-base">Quote</p>
                    </button></Link>
                </div>
            </div>
        </div>
    )
}


// export default function Navigationbar(props) {

//     return (
//         <div className="shadow-xl z-40">
//             <div className="flex justify-center bg-pink-600 px-6 lg:px-28">
//                 <p className="text-white text-center text-xs md:text-base capitalize">{props.topbar || props.companyName ? `Hire ${props.companyName} Today!` : 'Get A Quote Today'}</p>
//             </div>
//                 <div className="flex bg-white items-center justify-between md:justify-center py-5 px-6 lg:px-28">
//                     <Link href={props.services ? "/#services" : "#services"}><a href="" className="hidden md:flex md:px-8 cursor-pointer transition-all duration-500 hover:text-pink-600 hover:scale-110 hover:font-bold transform">Services</a></Link>
//                     <Link href="/">
//                         <div className="flex cursor-pointer items-center md:px-8">
//                             <img loading="lazy" src="/logo.jpg" alt="" className="w-12 h-12"/>
//                             <h4 className="font-bold md:px-0 text-sm md:text-base md:text-xl cursor-pointer transition-allduration-500 hover:text-pink-600 hover:scale-110 transform">{props.companyName}</h4>
//                         </div>
//                     </Link>
//                     <Link href="#quote"><a href="" className="md:px-8 text-sm md:text-base cursor-pointer transition-all duration-500 hover:text-pink-600 hover:scale-110 hover:font-bold transform">Quote</a></Link>
//                 </div>
//         </div>
//     )
// }


// export default function Navigationbar(props) {

//     const [onHover, setOnHover] = useState(false)
//     const [click, setClick] = useState(false)
//     return (
//         <div className="shadow-xl fixed w-full z-20">
//             <div style={{display: click ? 'none' : 'flex'}} className="flex items-center justify-between bg-pink-100 px-6 lg:px-28">
//                 <div className=""></div>
//                 <div className="">
//                     <h5 className="text-pink-600 text-center text-xs md:text-lg capitalize font-bold">{props.topbar || props.companyName ? `Hire ${props.companyName} Today!` : 'Get A Quote Today'}</h5>
//                 </div>
//                 <div onClick={() => setClick(true)} className="flex cursor-pointer justify-end">
//                     <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M6 18L18 6M6 6l12 12" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
//                 </div>
//             </div>
//             <div className="">
//             </div>
//             <div className="bg-white flex justify-between items-center py-2 px-6 lg:px-28">
//                 <div className="flex items-center justify-start">
//                     <Link href="/">
//                         <div className="flex cursor-pointer items-center">
//                             <img loading="lazy" src="/logo.jpg" alt="" className="w-16 h-16 pr-2"/>
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="flex items-center">
//                     <Link href="/blog"><a href="" className="hidden lg:flex px-8 cursor-pointer transition-all duration-500 hover:text-pink-600 hover:scale-110 hover:font-bold transform">Blog</a></Link>
//                     <Link href={props.services ? "/#services" : "#services"}><a href="" className="hidden lg:flex px-8 cursor-pointer transition-all duration-500 hover:text-pink-600 hover:scale-110 hover:font-bold transform">Services</a></Link>
//                     <Link href={props.quote ? "/contact" : "#quote"}><a onMouseEnter={() => setOnHover(true)} onMouseLeave={()  => setOnHover(false)} className="py-3 ml-8 flex items-center px-2 md:px-4 ring-2 ring-pink-500 ring-opacity-70 ring-offset-2 shadow-xl bg-pink-600 text-white cursor-pointer rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-pink-600">
//                         <p className="text-xs md:text-base">Quote</p>
//                     </a></Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
