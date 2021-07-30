
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
            title="Quebec City mulch companies near me | We'll Take Care Of Everything" 
            desc="Quebec City mulch companies near me: s  "
            canonical={`${props.website}/quebec-city-mulch-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City mulch companies near me" //KW
            />
            <Header
            title="Quebec City mulch companies near me" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="t w"
            image="/window-installation.jpg"
            alt="Quebec City mulch companies near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Quebec City mulch companies near me" //KW
            desc="c o o h"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="Quebec City mulch companies near me" //KW
            desc="i   n w"
            />
            <Intro
            subtitle="Exceptional Quebec City mulch companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="  e"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="n"
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
        