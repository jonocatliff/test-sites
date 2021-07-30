// import React from 'react'
// import Link from 'next/link';
// import Router, { withRouter } from 'next/router'
// import QuoteFormIcon from '../public/icons/QuoteFormIcon';

// const encode = (data) => {
//     return Object
//         .keys(data)
//         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//         .join("&");
// }

// export default class QuoteForm extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: '',
//             email: '',
//             phone: '',
//             city: this.props.city,
//         }
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         fetch("/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             body: encode({
//                 "form-name": "Quote",
//                 ...this.state
//             })
//         }).then((e) => {
//             Router.push({
//                 pathname: '/thank-you',
//                 query: {
//                     name: this.state.firstName,
//                     email: this.state.email,
//                     phone: this.state.phone
//                 }
//             })
//         })
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <form
//                     name="Quote"
//                     netlify-honeypot="bot-field"
//                     method="POST" 
//                     data-netlify="true"
//                     onSubmit={this.handleSubmit}
//                     action=""
//                     className="rounded-xl shadow-xl border-2 border-gray-100 transition-all duration-500 bg-white p-10">
//                     <input type="hidden" name="form-name" value="Quote Form" />
//                     <div className="flex -mt-14 justify-start pb-4">
//                         <div
//                             className="flex animate-pulse px-3 py-0.5 border-2 bg-white border-pink-600 rounded-xl-tr-xl rounded-xl-bl-xl items-center rounded-xl shadow-xl">
//                             <QuoteFormIcon />
//                             <h3 className="font-bold text-center text-pink-600 uppercase pl-2 text-sm">Quote Form</h3>
//                         </div>
//                     </div>
//                     <div className="flex">
//                         <div className="block pr-2 w-1/2">
//                             <p htmlFor="" className="text-xs duration-1000 pt-2">First Name</p>
//                             <input
//                                 name="firstName"
//                                 required
//                                 onChange={this.handleChange}
//                                 type="text"
//                                 placeholder="First name..."
//                                 className="w-full focus:ring-2 transition-all duration-500 focus:scale-110 transform text-sm ring-offset-2 ring-pink-500 ring-opacity-70 focus:outline-none px-4 py-5 border-2 border-gray-100 bg-gray-100  rounded-xl shadow-xl my-2"/>
//                         </div>
//                         <div className="block pl-2 w-1/2">
//                             <p htmlFor="" className="text-xs duration-1000 pt-2">Last Name</p>
//                             <input
//                                 name="lastName"
//                                 required
//                                 onChange={this.handleChange}
//                                 type="text"
//                                 placeholder="Last name..."
//                                 className="w-full focus:ring-2 transition-all duration-500 focus:scale-110 transform text-sm ring-offset-2 ring-pink-500 ring-opacity-70 focus:outline-none px-4 py-5 border-2 border-gray-100 bg-gray-100  rounded-xl shadow-xl my-2"/>
//                         </div>

//                     </div>
//                     <p className="text-xs duration-1000 pt-2">Email</p>
//                     <input
//                         name="email"
//                         required
//                         onChange={this.handleChange}
//                         type="email"
//                         placeholder="Email..."
//                         className="w-full focus:ring-2 transition-all duration-500 focus:scale-110 transform text-sm ring-offset-2 ring-pink-500 ring-opacity-70 focus:outline-none px-4 py-5 border-2 border-gray-100 bg-gray-100 rounded-xl shadow-xl my-2"/>
//                     <p className="text-xs duration-1000 pt-2">Phone Number</p>
//                     <input
//                         name="phone"
//                         required
//                         type="tel"
//                         onChange={this.handleChange}
//                         placeholder="Phone number..."
//                         className="w-full focus:ring-2 transition-all duration-500 focus:scale-110 transform text-sm ring-offset-2 ring-pink-500 ring-opacity-70 focus:outline-none px-4 py-5 border-2 border-gray-100 bg-gray-100 rounded-xl shadow-xl my-2"/>
//                     <button
//                         className="py-5 my-2 w-full px-4 shadow-xl bg-pink-600 text-white border-4 cursor-pointer border-pink-500 rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-pink-600 hover:border-pink-600">Submit</button>
//                     <p className="text-xs text-gray-300">By submitting, you agree to our <Link href="/terms-of-service">terms of service</Link> & <Link href="/privacy-policy">privacy policy</Link>
//                     </p>
//                 </form>
//             </div>
//         )
//     }
// }



import React from 'react'
import Link from 'next/link';
import Router, { withRouter } from 'next/router'
import QuoteFormIcon from '../public/icons/QuoteFormIcon';

const encode = (data) => {
    return Object
        .keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class QuoteForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: this.props.city,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encode({
                "form-name": "Quote",
                ...this.state
            })
        }).then((e) => {
            Router.push({
                pathname: '/thank-you',
                query: {
                    name: this.state.firstName,
                    email: this.state.email,
                    phone: this.state.phone
                }
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form
                    name="Quote"
                    netlify-honeypot="bot-field"
                    method="POST" 
                    data-netlify="true"
                    onSubmit={this.handleSubmit}
                    action=""
                    className="rounded-xl shadow-xl border-2 border-gray-100 transition-all duration-500 bg-white p-10">
                    <h5 className="pb-4 text-lg">Quote Form</h5>
                    <input type="hidden" name="form-name" value="Quote Form" />
                    <div className="flex">
                        <div className="block pr-2 w-1/2">
                            <p htmlFor="" className="text-xs uppercase pl-2 duration-1000 pt-2">First Name</p>
                            <input
                                name="firstName"
                                required
                                onChange={this.handleChange}
                                type="text"
                                placeholder="First name..."
                                className="w-full focus:ring-2 transition-all duration-500 focus:scale-110 transform text-sm ring-offset-2 ring-pink-500 ring-opacity-70 focus:outline-none px-4 py-5 border-2 border-gray-100 bg-gray-100  rounded-xl shadow-xl my-2"/>
                        </div>
                        <div className="block pl-2 w-1/2">
                            <p htmlFor="" className="text-xs uppercase pl-2 duration-1000 pt-2">Last Name</p>
                            <input
                                name="lastName"
                                required
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Last name..."
                                className="w-full focus:ring-2 transition-all duration-500 focus:scale-110 transform text-sm ring-offset-2 ring-pink-500 ring-opacity-70 focus:outline-none px-4 py-5 border-2 border-gray-100 bg-gray-100  rounded-xl shadow-xl my-2"/>
                        </div>

                    </div>
                    <p className="text-xs uppercase pl-2 duration-1000 pt-2">Email</p>
                    <input
                        name="email"
                        required
                        onChange={this.handleChange}
                        type="email"
                        placeholder="Email..."
                        className="w-full focus:ring-2 transition-all duration-500 focus:scale-110 transform text-sm ring-offset-2 ring-pink-500 ring-opacity-70 focus:outline-none px-4 py-5 border-2 border-gray-100 bg-gray-100 rounded-xl shadow-xl my-2"/>
                    <p className="text-xs uppercase pl-2 duration-1000 pt-2">Phone Number</p>
                    <input
                        name="phone"
                        required
                        type="tel"
                        onChange={this.handleChange}
                        placeholder="Phone number..."
                        className="w-full focus:ring-2 transition-all duration-500 focus:scale-110 transform text-sm ring-offset-2 ring-pink-500 ring-opacity-70 focus:outline-none px-4 py-5 border-2 border-gray-100 bg-gray-100 rounded-xl shadow-xl my-2"/>
                    <button
                        className="py-5 my-2 w-full px-4 shadow-xl bg-pink-600 text-white border-4 cursor-pointer border-pink-500 rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:bg-white hover:text-pink-600 hover:border-pink-600">Submit</button>
                    <p className="text-xs text-gray-300">By submitting our quote form, you are agreeing to both our <Link href="/terms-of-service">terms of service</Link> & <Link href="/privacy-policy">privacy policy</Link>.
                    </p>
                </form>
            </div>
        )
    }
}
