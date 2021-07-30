
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
            title="Halifax lawn care mowing | We'll Take Care Of Everything" 
            desc="Halifax lawn care mowing:   o"
            canonical={`${props.website}/halifax-lawn-care-mowing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax lawn care mowing" //KW
            />
            <Header
            title="Halifax lawn care mowing" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="l w"
            image="/window-installation.jpg"
            alt="Halifax lawn care mowing"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Halifax lawn care mowing" //KW
            desc="n h e i"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="b"
            cardDesc3="k"
            />
            <Approach
            title="Halifax lawn care mowing" //KW
            desc="  e u h"
            />
            <Intro
            subtitle="Exceptional Halifax lawn care mowing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t  "
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="n"
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
        