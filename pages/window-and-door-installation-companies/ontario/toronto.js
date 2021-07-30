
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
            title="Toronto window and door installation companies | We'll Take Care Of Everything" 
            desc="Toronto window and door installation companies: p e"
            canonical={`${props.website}/toronto-window-and-door-installation-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto window and door installation companies" //KW
            />
            <Header
            title="Toronto window and door installation companies" //KW
            subtitle="p e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="n o"
            image="/window-installation.jpg"
            alt="Toronto window and door installation companies"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Toronto window and door installation companies" //KW
            desc="y i n h"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="r"
            cardDesc3="m"
            />
            <Approach
            title="Toronto window and door installation companies" //KW
            desc="o h    "
            />
            <Intro
            subtitle="Exceptional Toronto window and door installation companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="n  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="l"
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
        