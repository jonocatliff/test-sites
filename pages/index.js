import About from '../components/About';
import Approach from '../components/Approach';
import FAQ from '../components/FAQ';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Navigationbar from '../components/Navigationbar';
import Savings from '../components/Savings';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import CTABottom from '../components/CTABottom';
import Footer from '../components/Footer';
import Meta from '../partials/seo';


export default function Home(props) {
  return (
    <div>
        <Meta 
        title={`${props.companyName} | We'll Take Care Of Everything`}
        desc="At Wedding Planned, our mission is help you plan the wedding of your dreams with the tools you need to make it happen. Your wedding day should be filled with love, laughter, and joy. Let's make sure it is!"
        canonical={`${props.website}/`}
        />
        <Navigationbar
        phone={props.phone}
        companyName={props.companyName}
        topbar="Planning your wedding? Hire our wedding planners" //KW
        />
        <Header
        city={"" || __dirname === '/' ? '' : __dirname}
        title="Wedding Planners" //KW
        subtitle="At Wedding Planned, our mission is help you plan the wedding of your dreams with the tools you need to make it happen. Your wedding day should be filled with love, laughter, and joy. Let's make sure it is!"
        />
        <Testimonial
        title="Changing The Lives Of People Like You"
        subtitle="For all your needs - hire our wedding planners"
        desc="Our Wedding Planners are experienced, skillful and professional with a reputation for excellence. We specialize in creating unique, fun and memorable weddings. We will work with you to create that special unique event that will be remembered for years to come. We can help you design and plan your entire event, or just a piece of it. We’ll make sure that your day is everything you’ve ever dreamed of."
        />
        <About 
        subtitle="For all your needs, hire our wedding planners" //KW
        title="About Our Wedding Planners" //KW
        desc="Wedding Planned is a full-service wedding planning company that helps couples plan their dream wedding. Our team will take care of all your wedding day needs. From the moment you get engaged, we'll be there every step of the way. We'll help you plan your wedding from start to finish. Our goal is to make your wedding planning process as efficient and stress-free as possible. We offer a range of wedding planning services to fit your budget and timeline."
        />
        <Services
        subtitle="We've got you covered when it comes to wedding planning" //KW
        title="Our Wedding Planning Services"
        cardTitle1="Full Planning"
        cardTitle2="Day Of Coordination"
        cardTitle3="Everything In Between"
        cardDesc1="At Wedding Planned, we'll help you plan your entire wedding from start to finish. We'll help you find the right venues, create an amazing guest list and help you make sure your wedding costs are under control."
        cardDesc2="We'll be there for day of coordination to ensure your special day goes smoothly! We'll keep the day flowing smoothly, help with last minute details, and be your go-to resource for questions!"
        cardDesc3="Our team will be there every step of the way to make sure your wedding day is as perfect as you've always imagined. Our goal is to provide the best and most professional service in the industry so you can relax and enjoy your wedding day."
        />
        <Savings
        subtitle="Professional. Affordable. Reliable."
        desc="This is a test"
        cardTitle1="Save Time"
        cardTitle2="Save Money"
        cardTitle3="Save Effort"
        cardDesc1="At InteriorDesignPros, we'll have you save time on home improvement projects. We can help you evaluate options, choose products and services, and find the best deals available."
        cardDesc2="At InteriorDesignPros, we'll have you save money on all of your design and renovation projects. Our vast network of professionals offer interior design and renovation services for homes and businesses near you."
        cardDesc3="Our goal is to provide you with the best quality products at the most affordable prices, and with InteriorDesignPros, you'll get just that. We'll make finding high quality products easy to find, easy to use, and easy to shop for."
        />
        <FAQ
        subtitle="Our personal trainers get these questions all the time" //KW
        title="Frequently Asked Questions" //KW
        cardTitle1="How often should I have personal training sessions?"
        cardTitle2="How long of a period should I commit to?"
        cardTitle3="How long will it take before I see results?"
        cardTitle4="Do I need to buy equipment?"
        cardTitle5="How often should I be working out per week?"
        cardTitle6="How do I sign up?"
        cardDesc1="The amount that you should be seeing a personal trainer varies from person to person. If you're struggling to show up at the gym on your own, we recommend seeing our personal trainer 1-2 times per week. Once you've shown consistency in your training routine we can move towards more infrequent sessions, such as bi-weekly."
        cardDesc2="We recommend committing to a personal trainer for 3-6 months to get the most out of your training and results. This is a great way to really personalize your training and get to know your trainer. We offer competitive rates for one-on-one training."
        cardDesc3="Expect to feel the results of your training program before you see the results. If you're consistent with your workout routine, you should expect to see an results in approximately 2-3 weeks, such as improvements in your sleep, energy levels and mood. Changes to your body composition often take much longer. Generally it takes 8-12 months to start seeing results!"
        cardDesc4="If you are training at the gym during our in-person sessions, this is not necessary! Our team will train you at a local gym. If you're taking our online personal training classes, we will advise you on the proper equipment to purchase."
        cardDesc5="This depends on your fitness goals and health. Our team recommends that you work out at a minimum 3 days per week. If you work out less than this, you will find it hard to see results and it will feel as if you're having to start over ever single time."
        cardDesc6="You can sign up by filling out our quote form on this page!"
        />
        <Approach
        title="Wedding Planning" //KW
        desc="We believe that each wedding is different and that is why we provide a customized, creative, and unique service for each of our clients. We work with you to create a wedding that is based on your unique vision and budget. Wedding Planned approach to wedding planning is unlike any other in the industry. We'll manage the entire planning process, giving you the freedom to live your life and make your wedding as memorable as it deserves to be. We'll take care of the details and make sure your day is exactly how you imagined it. You'll have the best day of your life and we'll be there to share it with you."
        />
        <Intro
        subtitle="More about our wedding planners" //KW
        title="Let's Plan your perfect wedding"
        cardTitle1="All About You"
        cardTitle2="Stress-free"
        cardTitle3="Taking Care Of Everything"
        cardDesc1="At Wedding Planned, we'll make your wedding all about you and how you want it to be. We'll create a wedding that is an expression of who you are and who you would like to be."
        cardDesc2="We'll make planning your wedding stress-free and fun. We'll connect you with the best vendors and help you to build an amazing wedding package within your budget."
        cardDesc3="At Wedding Planned, we'll take care of your wedding. We'll help you with everything you need to plan the wedding of your dreams, so your only obligation is to show up."
        />
        <CTABottom
        city={"" || __dirname === '/' ? '' : __dirname}
        title="Ready To Get Started?"
        desc2="Let the Wedding Planners at Wedding Planned help you draw up a plan for your special day. From the invitations to the reception, we coordinate every aspect of the wedding to ensure that you get everything you've ever wanted. We can't wait to celebrate with you!" //KW
        desc="We'll work with you to create the wedding you've always dreamed of at an affordable price. Fill out our form hire our wedding planners."
        />
        <Footer 
        companyName={props.companyName}
        email={props.email}
        address={props.address}
        phone={props.phone}
        desc="Hire our wedding planners!" //KW
        />
    </div>
  )
}


// export default function Home(props) {
//   return (
//     <div>
//         <Meta 
//         title={`${props.companyName} | We'll Take Care Of Everything`}
//         desc="At Wedding Planned, our mission is help you plan the wedding of your dreams with the tools you need to make it happen. Your wedding day should be filled with love, laughter, and joy. Let's make sure it is!"
//         canonical={`${props.website}/`}
//         />
//         <Navigationbar
//         phone={props.phone}
//         companyName={props.companyName}
//         topbar="Planning your wedding? Hire our wedding planners" //KW
//         />
//         <Header
//         city={"" || __dirname === '/' ? '' : __dirname}
//         title="Wedding Planners" //KW
//         subtitle="At Wedding Planned, our mission is help you plan the wedding of your dreams with the tools you need to make it happen. Your wedding day should be filled with love, laughter, and joy. Let's make sure it is!"
//         />
//         <Testimonial
//         title="Changing The Lives Of People Like You"
//         subtitle="For all your needs - hire our wedding planners"
//         desc="Our Wedding Planners are experienced, skillful and professional with a reputation for excellence. We specialize in creating unique, fun and memorable weddings. We will work with you to create that special unique event that will be remembered for years to come. We can help you design and plan your entire event, or just a piece of it. We’ll make sure that your day is everything you’ve ever dreamed of."
//         />
//         <About 
//         subtitle="For all your needs, hire our wedding planners" //KW
//         title="About Our Wedding Planners" //KW
//         desc="Wedding Planned is a full-service wedding planning company that helps couples plan their dream wedding. Our team will take care of all your wedding day needs. From the moment you get engaged, we'll be there every step of the way. We'll help you plan your wedding from start to finish. Our goal is to make your wedding planning process as efficient and stress-free as possible. We offer a range of wedding planning services to fit your budget and timeline."
//         />
//         <Services
//         subtitle="We've got you covered when it comes to wedding planning" //KW
//         title="Our Wedding Planning Services"
//         cardTitle1="Full Planning"
//         cardTitle2="Day Of Coordination"
//         cardTitle3="Everything In Between"
//         cardDesc1="At Wedding Planned, we'll help you plan your entire wedding from start to finish. We'll help you find the right venues, create an amazing guest list and help you make sure your wedding costs are under control."
//         cardDesc2="We'll be there for day of coordination to ensure your special day goes smoothly! We'll keep the day flowing smoothly, help with last minute details, and be your go-to resource for questions!"
//         cardDesc3="Our team will be there every step of the way to make sure your wedding day is as perfect as you've always imagined. Our goal is to provide the best and most professional service in the industry so you can relax and enjoy your wedding day."
//         />
//         <Savings
//         subtitle="Professional. Affordable. Reliable."
//         desc="This is a test"
//         cardTitle1="Save Time"
//         cardTitle2="Save Money"
//         cardTitle3="Save Effort"
//         cardDesc1="At InteriorDesignPros, we'll have you save time on home improvement projects. We can help you evaluate options, choose products and services, and find the best deals available."
//         cardDesc2="At InteriorDesignPros, we'll have you save money on all of your design and renovation projects. Our vast network of professionals offer interior design and renovation services for homes and businesses near you."
//         cardDesc3="Our goal is to provide you with the best quality products at the most affordable prices, and with InteriorDesignPros, you'll get just that. We'll make finding high quality products easy to find, easy to use, and easy to shop for."
//         />
//         <FAQ
//         subtitle="Our personal trainers get these questions all the time" //KW
//         title="Frequently Asked Questions" //KW
//         cardTitle1="How often should I have personal training sessions?"
//         cardTitle2="How long of a period should I commit to?"
//         cardTitle3="How long will it take before I see results?"
//         cardTitle4="Do I need to buy equipment?"
//         cardTitle5="How often should I be working out per week?"
//         cardTitle6="How do I sign up?"
//         cardDesc1="The amount that you should be seeing a personal trainer varies from person to person. If you're struggling to show up at the gym on your own, we recommend seeing our personal trainer 1-2 times per week. Once you've shown consistency in your training routine we can move towards more infrequent sessions, such as bi-weekly."
//         cardDesc2="We recommend committing to a personal trainer for 3-6 months to get the most out of your training and results. This is a great way to really personalize your training and get to know your trainer. We offer competitive rates for one-on-one training."
//         cardDesc3="Expect to feel the results of your training program before you see the results. If you're consistent with your workout routine, you should expect to see an results in approximately 2-3 weeks, such as improvements in your sleep, energy levels and mood. Changes to your body composition often take much longer. Generally it takes 8-12 months to start seeing results!"
//         cardDesc4="If you are training at the gym during our in-person sessions, this is not necessary! Our team will train you at a local gym. If you're taking our online personal training classes, we will advise you on the proper equipment to purchase."
//         cardDesc5="This depends on your fitness goals and health. Our team recommends that you work out at a minimum 3 days per week. If you work out less than this, you will find it hard to see results and it will feel as if you're having to start over ever single time."
//         cardDesc6="You can sign up by filling out our quote form on this page!"
//         />
//         <Approach
//         title="Wedding Planning" //KW
//         desc="We believe that each wedding is different and that is why we provide a customized, creative, and unique service for each of our clients. We work with you to create a wedding that is based on your unique vision and budget. Wedding Planned approach to wedding planning is unlike any other in the industry. We'll manage the entire planning process, giving you the freedom to live your life and make your wedding as memorable as it deserves to be. We'll take care of the details and make sure your day is exactly how you imagined it. You'll have the best day of your life and we'll be there to share it with you."
//         />
//         <Intro
//         subtitle="" //KW
//         title=""
//         cardTitle1=""
//         cardTitle2=""
//         cardTitle3=""
//         cardDesc1=""
//         cardDesc2=""
//         cardDesc3=""
//         />
//         <CTABottom
//         city={"" || __dirname === '/' ? '' : __dirname}
//         title="Ready To Get Started?"
//         desc2="" //KW
//         desc=""
//         />
//         <Footer 
//         companyName={props.companyName}
//         email={props.email}
//         address={props.address}
//         phone={props.phone}
//         desc="" //KW
//         />
//     </div>
//   )
// }