
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
            title="Louisville lawn care services near me | We'll Take Care Of Everything" 
            desc="Louisville lawn care services near me: f h"
            canonical={`${props.website}/louisville-lawn-care-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville lawn care services near me" //KW
            />
            <Header
            title="Louisville lawn care services near me" //KW
            subtitle="f h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i w"
            image="/window-installations.jpg"
            alt="Louisville lawn care services near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Louisville lawn care services near me" //KW
            desc="e a v i"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="v"
            cardDesc3="h"
            />
            <Approach
            title="Louisville lawn care services near me" //KW
            desc="r a . t"
            />
            <Intro
            subtitle="Exceptional Louisville lawn care services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="o  "
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="l"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        