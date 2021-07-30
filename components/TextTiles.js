import React from 'react'
import TextTilesIcon from '../public/icons/TextTilesIcon'

export default function TextTiles(props) {
    return (
        <div className="w-full lg:w-1/3 flex p-6">
            <div className={`${props.open ? 'scale-110 bg-pink-600 text-white' : ''} rounded-xl transform hover:scale-110 w-full transition-all  duration-500 hover:bg-pink-600 border border-pink-600 hover:border-pink-600 p-8 bg-pink-50 hover:text-white shadow-xl rounded-tl-2xl rounded-br-2xl ring-2 ring-pink-600 ring-opacity-20 ring-offset-4`}>
                <div className="flex items-center justify-between">   
                    <h3 className="font-bold text-lg">{props.title}</h3>    
                    <div className="">
                        <div style={{display: props.rated ? 'flex' : 'none'}} className="flex items-center bg-white border border-pink-600 text-xs md:text-base rounded-xl text-pink-600 px-3 py-2"> 
                            <TextTilesIcon />
                        </div>
                    </div>
                </div>
                <p className="pt-4">{props.desc}</p>
            </div>
        </div>
    )
}

// export default function TextTiles(props) {
//     return (
//         <div className="w-full lg:w-1/3 flex p-6">
//             <div className={`${props.open ? 'scale-110 bg-pink-600 text-white' : ''} rounded-xl transform hover:scale-110 w-full transition-all  duration-500 hover:bg-pink-600 border border-pink-600 hover:border-pink-600 p-8 bg-pink-50 hover:text-white shadow-xl rounded-tl-2xl rounded-br-2xl ring-2 ring-pink-600 ring-opacity-20 ring-offset-4`}>
//                 <div className={`flex ${props.rated ? '-mt-12 pb-5' : ''}`}>
//                     <div style={{display: props.rated ? 'flex' : 'none'}} className="flex items-center bg-white border border-pink-600 text-xs rounded-xl text-pink-600 px-3 py-2"> 
//                         <TextTilesIcon />
//                         <p className="text-xs pl-2">Top Rated</p>
//                     </div>
//                 </div>
//                 <h3 className="font-bold  text-lg">{props.title}</h3>    
//                 <p className="pt-5">{props.desc}</p>
//             </div>
//         </div>
//     )
// }


// export default function TextTiles(props) {
//     return (
//         <div className={`${props.open ? 'scale-105' : ''} w-full transform p-6 lg:w-1/3 flex`}>
//             <div className={`${props.open ? 'lg:scale-110 bg-pink-600 text-white' : ''} rounded-xl transform hover:scale-110 w-full transition-all  duration-500 hover:bg-pink-600 border border-pink-600 hover:border-pink-600 p-4 md:p-8 bg-pink-50 hover:text-white shadow-xl`}>
//                 <div className={`flex ${props.rated ? '-mt-8 md:-mt-12 md:pb-5 flex justify-end animate-pulse' : ''}`}>
//                     <div style={{display: props.rated ? 'flex' : 'none'}} className="flex items-center bg-white border border-pink-600 text-xs rounded-xl text-pink-600 px-3 py-2"> 
//                         <TextTilesIcon />
//                         <p className="text-xs pl-2">Top Rated</p>
//                     </div>
//                 </div>
//                 <h3 className="font-bold  text-lg">{props.title}</h3>    
//                 <p className="pt-5">{props.desc}</p>
//             </div>
//         </div>
//     )
// }