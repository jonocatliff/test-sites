import React from 'react';
import BlogPostHeader from './blogPostHeader';
import { HeadPost } from './headPost'
import Navigationbar from '../Navigationbar';
import Footer from '../Footer';
import { companyName, email, phone, address, industry } from '../../pages/_app'

export default function BlogPost({ children, meta}) {
  return (
    <div className="">
      <Navigationbar
      companyName={companyName}
      
      />
      <BlogPostHeader meta={meta} />
      <div className="px-14 lg:px-28 py-16 lg:py-52">
        <HeadPost meta={meta} isBlogPost />
        <article className="prose md:prose-lg">{children}</article>
      </div>
      <Footer 
      companyName={companyName} 
      email={email}
      phone={phone}
      address={address}
      industry={industry}
      />
    </div>
  )
}
