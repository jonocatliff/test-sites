import React, { useState } from 'react'
import FAQCloseIcon from '../public/icons/FAQCloseIcon'
import FAQOpenIcon from '../public/icons/FAQOpenIcon'
import FAQQuestionMarkIcon from '../public/icons/FAQQuestionMarkIcon'

export default function FAQComponent(props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="py-5 md:p-4 text-pink-600 transition-500 font-bold">
            <div className={` w-full border  border-pink-500 transition-all duration-500 rounded-xl shadow-xl bg-pink-50 transform hover:scale-105`}>
                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer hover:bg-pink-100 transition-all duration-500 p-4 rounded-xl flex justify-between items-center">
                    <div className="flex items-center">
                        <FAQQuestionMarkIcon />
                        <h4 className="pl-2 duration-all">{props.title}</h4>
                    </div>
                    <div style={{display: isOpen ? 'none' : 'block'}} className="">
                        <FAQOpenIcon />
                    </div>
                    <div style={{display: isOpen ? 'block' : 'none'}} className="">
                        <FAQCloseIcon />
                    </div>
                </div>
                <div style={{display: isOpen ? 'block' : 'none'}} className="p-5">
                    <p className="">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}


// export default function FAQComponent(props) {

//     const [isOpen, setIsOpen] = useState(false)

//     return (
//         <div className="py-5 md:p-4 transition-500">
//             <div onClick={() => setIsOpen(!isOpen)}  className={`bg-white w-full border-b-4  border-pink-500 transition-all duration-500  shadow-xl cursor-pointer transform hover:scale-105`}>
//                 <div className="p-4 flex justify-between items-center">
//                     <div className="flex items-center">
//                         <FAQQuestionMarkIcon />
//                         <h4 className="pl-2 duration-all font-bold">{props.title}</h4>
//                     </div>
//                     <div style={{display: isOpen ? 'none' : 'block'}} className="">
//                         <FAQOpenIcon />
//                     </div>
//                     <div style={{display: isOpen ? 'block' : 'none'}} className="">
//                         <FAQCloseIcon />
//                     </div>
//                 </div>
//                 <div style={{display: isOpen ? 'block' : 'none'}} className="p-5">
//                     <p className="">{props.desc}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default function FAQComponent(props) {

//     const [isOpen, setIsOpen] = useState(false)

//     return (
//         <div className="py-5 md:p-4 transition-500">
//             <div onClick={() => setIsOpen(!isOpen)}  className={` w-full border bg-pink-50 rounded-xl border-pink-600 transition-all duration-500  shadow-xl cursor-pointer hover:shadow-2xl transform hover:scale-105`}>
//                 <div className="p-4 flex justify-between items-center">
//                     <div className="flex items-center">
//                         <FAQQuestionMarkIcon />
//                         <h4 className="pl-2 font-bold">{props.title}</h4>
//                     </div>
//                     <div className="">
//                         <div style={{display: isOpen ? 'none' : 'block'}} className="">
//                             <FAQOpenIcon />
//                         </div>
//                         <div style={{display: isOpen ? 'block' : 'none'}} className="">
//                             <FAQCloseIcon />
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{display: isOpen ? 'block' : 'none'}} className="p-5">
//                     <p className="">{props.desc}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }