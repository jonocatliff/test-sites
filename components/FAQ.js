import React from 'react'
import FAQComponent from './FAQComponent'
import styles from './Patterns.module.css';


// export default function FAQ(props) {
//     return (
//         <div id={styles.primary} className="">
//             <div className="md:pt-24 py-24 px-6 lg:px-28 bg-no-repeat bg-right">
//                 <div className="">
//                     <h4 className="uppercase lg:text-start text-sm text-gray-600 font-bold">{props.subtitle}</h4>
//                     <h2 className="text-3xl md:text-4xl flex justify font-extrabold lg:text-start">{props.title}</h2>
//                 </div>
//                 <div  className="md:py-16 w-full">
//                         <FAQComponent title={props.cardTitle1} desc={props.cardDesc1} />
//                         <FAQComponent title={props.cardTitle2} desc={props.cardDesc2} />
//                         <FAQComponent title={props.cardTitle3} desc={props.cardDesc3} />
//                         <FAQComponent title={props.cardTitle4} desc={props.cardDesc4} />
//                         <FAQComponent title={props.cardTitle5} desc={props.cardDesc5} />
//                         <FAQComponent title={props.cardTitle6} desc={props.cardDesc6} />
//                 </div>
//             </div>
//         </div>
//     )
// }


export default function FAQ(props) {
    return (
        <div id={styles.primary} className="">
            <div className="md:pt-24 py-8 px-6 lg:px-28 bg-no-repeat bg-right">
                <div className="text-center">
                    <h4 className="uppercase text-sm text-gray-600 font-bold">{props.subtitle}</h4>
                    <h2 className="text-3xl md:text-4xl flex justify-center font-extrabold text-center">{props.title}</h2>
                </div>
                <div  className="md:py-8 md:flex w-full">
                    <div className="md:w-1/2">
                        <FAQComponent title={props.cardTitle1} desc={props.cardDesc1} />
                        <FAQComponent title={props.cardTitle2} desc={props.cardDesc2} />
                        <FAQComponent title={props.cardTitle3} desc={props.cardDesc3} />
                    </div>
                    <div className="md:w-1/2">
                        <FAQComponent title={props.cardTitle4} desc={props.cardDesc4} />
                        <FAQComponent title={props.cardTitle5} desc={props.cardDesc5} />
                        <FAQComponent title={props.cardTitle6} desc={props.cardDesc6} />
                    </div>
                </div>
            </div>
        </div>
    )
}