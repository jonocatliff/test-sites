import React from 'react'
import styles from '../Patterns.module.css';

export default function BlogPostHeader(props) {
    return (
        <div  className="pt-24">
            <div id={styles.stars} className="bg-pink-200 text-4xl md:text-5xl px-6 lg:px-28 py-52 text-pink-500 text-center">
                <h1 className="font-extrabold">{props.meta.title}</h1>
                <p style={{display: props.meta.author ? 'block' : 'none'}} className="">Written by {props.meta.author}</p>
            </div>
        </div>
    )
}

