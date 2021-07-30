import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

export const companyName = "Wedding Planned"
export const email = "info@weddingplanned.co"
export const phone = ""
export const address = "1050 Burrard St"
export const industry = "Wedding Planning"
export const website = "https://www.weddingplanned.co"
const contactSubtitle = "We're here for all your wedding planning needs."
const contactDesc = "At Wedding Planned, we'll work alongside you to create a custom package that's perfect for you and your needs. We offer only the best wedding professionals to make sure your wedding day is everything you've dreamed of."
const aboutTitle = "Perfecting Weddings Is Our Mission."
const aboutDesc = "At Wedding Planned, our mission is to help you plan the wedding of your dreams. Our wedding planners will help you every step of the way, from the first time you contact us to when you walk down the aisle. It is our job to make your day as stress-free as possible and to make your family and friends feel welcome. We are committed to helping you plan a wedding that will be remembered for decades to come. Our wedding planners know what works and what doesn’t. We have planned weddings all over the world and have experience with all religions and cultural backgrounds. Our staff is composed of people from all around the world and we are dedicated to helping you plan a wedding in your own style."
const aboutDesc2 = "Our wedding planners have experience in all facets of the wedding industry, including wedding caterers, wedding planners, wedding florists, wedding photographers, wedding transportation, wedding cakes, wedding venues, wedding hair and makeup artists, wedding bands, wedding dress shops, wedding invitations, wedding photography, wedding videography, and wedding transportation. Our wedding planners have worked with all of the best wedding venues and wedding caterers and wedding planners."
const aboutTile1 = "At Wedding Planned, we're honest and dependable. We've worked in the wedding industry for years, and we have extensive knowledge and experience working with both venues, and vendors. We've worked hand-in-hand with countless couples and their families to plan their weddings, and we know how to make your wedding planning process take less time and stress."
const aboutTile2 = "At Wedding Planned we offer word-class customer service to all of our clients. We pride ourselves on our customer service and it’s one of the main reasons why we are one of the most successful wedding planning companies in the industry. We are committed to helping you make your wedding planning easy and stress free."
const aboutTile3 = "At Wedding Planned, we believe that your dream wedding is possible at any budget. By working with us, you will save thousands of dollars on your wedding. We will help you create a wedding that is affordable and customized to fit your needs and desires."


function MyApp({ Component, pageProps }) {
  
  return <Component 
          contactDesc={contactDesc}
          contactSubtitle={contactSubtitle}
          industry={industry}
          website={website}
          companyName={companyName}
          aboutTitle={aboutTitle}
          aboutDesc={aboutDesc}
          aboutDesc2={aboutDesc2}
          aboutTile1={aboutTile1}
          aboutTile2={aboutTile2}
          aboutTile3={aboutTile3}
          email={email}
          address={address}
          phone={phone}
          {...pageProps} 
          />
}

export default MyApp
