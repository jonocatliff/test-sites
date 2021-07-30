import React from 'react';
import Link from 'next/link'
import {HeadPost} from './headPost'

export const Post = ({post}) => {
    const {link, module: {
            meta
        }} = post

    return (
        <Link href={'/blog' + link}>
            <div className="w-full flex">
                <article
                    className="rounded-xl bg-white shadow-xl p-4 md:p-12 md:m-2 w-full cursor-pointer transition-all duration-500 hover:shadow-xl  transform hover:scale-110 hover:bg-pink-50">
                    <HeadPost meta={meta}/>
                    <a>Read Our Post →</a>
                </article>
            </div>
        </Link>
    )
}
