import React from 'react'
import styles from './Patterns.module.css'
import TextTiles from './TextTiles'

export default function Intro(props) {
    return (
        <div id={styles.primary} className="">
            <div className="px-6 md:px-28 py-8">
                <h4 className="text-base uppercase text-gray-500 text-center font-bold">{props.subtitle}</h4>
                <h2 className="text-4xl font-extrabold text-center capitalize">{props.title}</h2>  
                <div className="lg:flex justify-center py-8">
                    <TextTiles title={props.cardTitle1} desc={props.cardDesc1} />
                    <TextTiles rated={true} open={true} title={props.cardTitle2} desc={props.cardDesc2} />
                    <TextTiles title={props.cardTitle3} desc={props.cardDesc3} />
                </div>
            </div>
        </div>
    )
}


// export default function Intro(props) {
//     return (
//         <div id={styles.primary} className="">
//             <div className="px-6 md:px-28 py-24">
//                 <h5 className="text-sm uppercase text-gray-500 font-bold">{props.subtitle}</h5>
//                 <h2 className="text-4xl font-extrabold capitalize">{props.title}</h2>  
//                 <div className="lg:flex justify-center py-8">
//                     <TextTiles title={props.cardTitle1} desc={props.cardDesc1} />
//                     <TextTiles rated={true} open={true} title={props.cardTitle2} desc={props.cardDesc2} />
//                     <TextTiles title={props.cardTitle3} desc={props.cardDesc3} />
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default function Intro(props) {
//     return (
//         <div id={styles.primary} className="">
//             <div className="px-6 md:px-28 py-24">
//                 <h2 className="text-4xl font-extrabold text-center capitalize">{props.title}</h2>  
//                 <div className="flex pt-4 justify-center">
//                     <div className="border-2 shadow-lg ring-2 ring-pink-500 ring-opacity-20 ring-offset-2 border-pink-400 rounded-lg p-4">
//                         <h5 className="text-sm uppercase text-center text-gray-500 font-bold">{props.subtitle}</h5>
//                     </div>
//                 </div>
//                 <div className="lg:flex justify-center py-8">
//                     <TextTiles title={props.cardTitle1} desc={props.cardDesc1} />
//                     <TextTiles rated={true} open={true} title={props.cardTitle2} desc={props.cardDesc2} />
//                     <TextTiles title={props.cardTitle3} desc={props.cardDesc3} />
//                 </div>
//             </div>
//         </div>
//     )
// }