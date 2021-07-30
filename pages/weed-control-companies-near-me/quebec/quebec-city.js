
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
            title="Quebec City weed control companies near me | We'll Take Care Of Everything" 
            desc="Quebec City weed control companies near me: e  "
            canonical={`${props.website}/quebec-city-weed-control-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City weed control companies near me" //KW
            />
            <Header
            title="Quebec City weed control companies near me" //KW
            subtitle="e  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e t"
            image="/window-installations.jpg"
            alt="Quebec City weed control companies near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Quebec City weed control companies near me" //KW
            desc="y a c undefined"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="e"
            cardDesc3="h"
            />
            <Approach
            title="Quebec City weed control companies near me" //KW
            desc="p t   t"
            />
            <Intro
            subtitle="Exceptional Quebec City weed control companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="t undefined"
            cardDesc3="t"
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
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        