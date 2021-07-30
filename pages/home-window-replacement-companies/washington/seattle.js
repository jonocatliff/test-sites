
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
            title="Seattle home window replacement companies | We'll Take Care Of Everything" 
            desc="Seattle home window replacement companies: i  "
            canonical={`${props.website}/seattle-home-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle home window replacement companies" //KW
            />
            <Header
            title="Seattle home window replacement companies" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  o"
            image="/contractor.jpg"
            alt="Seattle home window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Seattle home window replacement companies" //KW
            desc="  o a h"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="d"
            cardDesc3="l"
            />
            <Approach
            title="Seattle home window replacement companies" //KW
            desc="h i c d"
            />
            <Intro
            subtitle="Exceptional Seattle home window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="d y"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2=","
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        