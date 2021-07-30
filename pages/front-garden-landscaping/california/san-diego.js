
    import About from '../../../components/About';
    import Approach from '../../../components/Approach';
    import FAQ from '../../../components/FAQ';
    import Header from '../../../components/Header';
    import Intro from '../../../components/Intro';
    import Navigationbar from '../../../components/Navigationbar';
    import Savings from '../../../components/Savings';
    import Services from '../../../components/Services';
    import Testimonial from '../../../components/Testimonial';
    import Link from 'next/link';
    import CTABottom from '../../../components/CTABottom';
    import Footer from '../../../components/Footer';
    import Meta from '../../../partials/seo';
    
    
    export default function Home(props) {
        return (
        <div>
            <Meta 
            title="San Diego front garden landscaping | We'll Take Care Of Everything" 
            desc="San Diego front garden landscaping: i r"
            canonical={`${props.website}/san-diego-front-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego front garden landscaping" //KW
            />
            <Header
            title="San Diego front garden landscaping" //KW
            subtitle="i r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  s"
            image="/window-installation.jpg"
            alt="San Diego front garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Diego front garden landscaping" //KW
            desc="o   l  "
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="n"
            cardDesc3="o"
            />
            <Approach
            title="San Diego front garden landscaping" //KW
            desc="i   w a"
            />
            <Intro
            subtitle="Exceptional San Diego front garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="  e"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="t"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        