import React, { useState } from 'react';
import {Post} from "./post";
import {posts} from "../../getAllPosts";

export default function BlogFeed(props) {
    const [feed, setFeed] = useState(20);

    function setRange(e) {
        setFeed(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="pt-24">
            <div className="px-6 py-16 lg:py-32 w-full lg:p-28">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h3 className="text-3xl font-bold">Our {props.industry} <span className="text-pink-500">Blog</span></h3>
                    </div>
                    <div className="">
                        <select onChange={setRange} defaultValue={20} name="" id="" className="bg-gray-50 rounded-xl shadow-xl px-4py-5 focus:outline-none">
                            <option selected value="20" className="">20</option>
                            <option value="50" className="">50</option>
                            <option value="100" className="">100</option>
                            <option value="200" className="">200</option>
                        </select>
                    </div>
                </div>
                <div className="w-full flex-wrap md:flex py-5">
                    {posts.slice(0, feed).map((post) => (<Post key={post.link} post={post}/>))}
                </div>
            </div>
        </div>
    );
}
