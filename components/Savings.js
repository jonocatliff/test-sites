import React from 'react';
import styles from './Patterns.module.css';
import TextTiles from './TextTiles';
import Link from 'next/link';

export default function Savings(props) {

        return (
            <div
                id={styles.primary}
                className="px-6 md:px-28 py-8 lg:py-32"
               >
                <div className="w-full">
                        <div className="text-center">
                            <h2 className="capitalize text-3xl md:text-4xl font-extrabold py-5">We’re here to help you every step of the way</h2>
                            <p className="text-lg">{props.desc}</p>
                        </div>
                </div>
                <div className="lg:flex py-8 -mx-2">
                    <TextTiles title={props.cardTitle1} desc={props.cardDesc1} />
                    <TextTiles open={true} rated={true} title={props.cardTitle2} desc={props.cardDesc2} />
                    <TextTiles title={props.cardTitle3} desc={props.cardDesc3} />
                </div>
                <div className="flex">
                    <div className="flex justify-center py-5 md:py-8 w-full md:px-6 border-t-2 uppercase border-pink-600">
                        <h4 className="text-lg text-center md:text-start font-bold capitalize text-pink-600">{props.subtitle}</h4>
                    </div>
                </div>

            </div>
        )
}


// export default function Savings(props) {

//     return (
//         <div
//             id={styles.primary}
//             className="px-6 md:px-28 py-8 md:py-32"
//            >
//             <h4 className="text-lg py-5 md:py-8 w-full md:px-6 border-t-2 border-pink-600 text-center md:text-start font-bold capitalize text-pink-600">{props.subtitle}</h4>
//             <h2 className="capitalize text-center text-3xl md:text-4xl font-extrabold py-5">We’re here to help you every step of the way</h2>
//             <p className="text-lg text-center">{props.desc}</p>
//             <div className="lg:flex py-8 -mx-2">
//                 <TextTiles title={props.cardTitle1} desc={props.cardDesc1} />
//                 <TextTiles open={true} rated={true} title={props.cardTitle2} desc={props.cardDesc2} />
//                 <TextTiles title={props.cardTitle3} desc={props.cardDesc3} />
//             </div>
//         </div>
//     )
// }

// export default function Savings(props) {

//     return (
//         <div
//             id={styles.primary}
//             className="px-6 lg:px-28 py-8 md:py-32"
//            >
//                 <div  className="flex justify-center">
//                     <div className="flex ring-4 px-4 rounded-xl ring-pink-500 ring-opacity-20 ring-offset-4 transform transition-all duration-400 hover:scale-110 bg-pink-50 border border-pink-600 py-4 justify-center">
//                         <h4 className="text-lg text-center md:text-start font-bold capitalize text-pink-600">{props.subtitle}</h4>
//                     </div>
//                 </div>
//                 <h2 className="capitalize text-center text-3xl md:text-4xl font-extrabold py-5">We’re here to help you every step of the way</h2>
//                 <p className="text-lg text-center">{props.desc}</p>
//                 <div className="md:flex py-8 -mx-2">
//                     <TextTiles title={props.cardTitle1} desc={props.cardDesc1} />
//                     <TextTiles open={true} rated={true} title={props.cardTitle2} desc={props.cardDesc2} />
//                     <TextTiles title={props.cardTitle3} desc={props.cardDesc3} />
//                 </div>
//         </div>
//     )
// }