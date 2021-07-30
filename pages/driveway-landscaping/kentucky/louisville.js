
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
            title="Louisville driveway landscaping | We'll Take Care Of Everything" 
            desc="Louisville driveway landscaping:   h"
            canonical={`${props.website}/louisville-driveway-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville driveway landscaping" //KW
            />
            <Header
            title="Louisville driveway landscaping" //KW
            subtitle="  h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  o"
            image="/window-installations.jpg"
            alt="Louisville driveway landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Louisville driveway landscaping" //KW
            desc="d t   s"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="x"
            cardDesc2=" "
            cardDesc3="n"
            />
            <Approach
            title="Louisville driveway landscaping" //KW
            desc=",   e  "
            />
            <Intro
            subtitle="Exceptional Louisville driveway landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="e e"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        