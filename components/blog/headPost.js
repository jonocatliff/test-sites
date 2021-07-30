import Meta from '../../partials/seo';


export const HeadPost = ({ meta, isBlogPost }) => (
    <>
      <Meta
            title={meta.title}
            desc={meta.description}
            canonical="https://www.tutornearme.ca/" />
      <h1 className={`${isBlogPost ? 'great-title' : null} text-2xl font-bold text-pink-500`} >{meta.title}</h1>
      <div className='details'>
      {
          isBlogPost? null: <p>{meta.description}</p>
      }  
        <span className="text-gray-400">{meta.date}</span>
        <span className="text-gray-400" role='img' aria-label='one coffee'>
          ☕ {meta.readTime + ' min read'}
        </span>
      </div>
    </>
  )
  