
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
            title="Quebec City window installation contractor | We'll Take Care Of Everything" 
            desc="Quebec City window installation contractor: t h"
            canonical={`${props.website}/quebec-city-window-installation-contractor`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City window installation contractor" //KW
            />
            <Header
            title="Quebec City window installation contractor" //KW
            subtitle="t h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="u t"
            image="/contractor.jpg"
            alt="Quebec City window installation contractor"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Quebec City window installation contractor" //KW
            desc="  t e o"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="h"
            cardDesc3="l"
            />
            <Approach
            title="Quebec City window installation contractor" //KW
            desc="e r   t"
            />
            <Intro
            subtitle="Exceptional Quebec City window installation contractor" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="e u"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="y"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        