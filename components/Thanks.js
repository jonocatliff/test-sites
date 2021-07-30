import React from 'react';
import {useRouter} from 'next/router'
import styles from './Patterns.module.css';

// export default function Thanks() {

//     const router = useRouter()
//     const {name} = router.query
//     const {email} = router.query
//     const {phone} = router.query

//     return (
//         <div id={styles.primary} className="pt-24">
//             <div className="p-x6 lg:p-28 py-32 md:flex items-center justify-between bg-center bg-no-repeat">
//                 <div className="w-full md:w-1/2 py-16 capitalize pr-12">
//                     <h1 className="text-3xl lg:text-4xl font-extrabold">Thanks {name}!</h1>
//                     <p className="text-lg">Our team has received your inquiry. We'll get back to you as quickly as possible!</p>
//                 </div>
//                 <div className="w-full md:w-1/2">
//                     <div className="shadow-xl bg-pink-50 rounded-xl p-8 transition-all duration-500 hover:bg-pink-100 hover:shadow-xl hover:text-pink-600">   
//                         <h3 className="font-bold text-lg pb-4">We'll be in touch</h3>
//                         <p className="">We'll send you an email to {email} and/or phone you at {phone}.</p>
//                         <p className="pt-4">Talk soon!</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default function Thanks() {

//     const router = useRouter()
//     const {name} = router.query
//     const {email} = router.query
//     const {phone} = router.query

//     return (
//         <div id={styles.primary} className="pt-24">
//             <div className="px-6 py-32 w-full lg:px-28">
//                 <div className="w-full py-16 text-center capitalize pr-12">
//                     <h1 className="text-3xl lg:text-4xl font-extrabold">Thank You {name}!</h1>
//                     <p className="text-lg">We've received your inquiry. Our team will be in touch with you very shortly.</p>
//                 </div>
//                 <div className="shadow-xl bg-pink-50 rounded-xl p-8 transition-all duration-500 border border-pink-600 hover:bg-pink-100 hover:shadow-xl hover:text-pink-600 transform hover:scale-110"> 
//                     <h3 className="font-bold text-lg pb-4">We'll be in touch</h3>
//                     <p className="">We'll send you an email to {email} and/or phone you at {phone}.</p>
//                     <p className="pt-4">Talk soon!</p>
//                 </div>
//             </div>
//         </div>
//     )
// }


export default function Thanks() {

    const router = useRouter()
    const {name} = router.query
    const {email} = router.query
    const {phone} = router.query

    return (
        <div id={styles.secondary} className="pt-24 bg-pink-600">
            <div  style={{backgroundImage: 'url("/blobSecondary.svg")'}} className="px-6 py-32 w-full bg-no-repeat lg:px-28">
                <div className="w-full text-white py-16 text-center capitalize pr-12">
                    <h1 className="text-3xl lg:text-4xl font-extrabold">Thank You {name}!</h1>
                    <p className="text-lg">We've received your inquiry. Our team will be in touch with you very shortly.</p>
                </div>
                <div className="shadow-xl bg-pink-50 rounded-xl p-8 transition-all duration-500 border border-pink-600 hover:bg-pink-100 hover:shadow-xl hover:text-pink-600 transform hover:scale-110"> 
                    <h3 className="font-bold text-lg pb-4">We'll be in touch</h3>
                    <p className="">We'll send you an email to {email} and/or phone you at {phone}.</p>
                    <p className="pt-4">Talk soon!</p>
                </div>
            </div>
        </div>
    )
}