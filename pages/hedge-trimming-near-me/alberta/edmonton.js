
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
            title="Edmonton hedge trimming near me | We'll Take Care Of Everything" 
            desc="Edmonton hedge trimming near me: w m"
            canonical={`${props.website}/edmonton-hedge-trimming-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton hedge trimming near me" //KW
            />
            <Header
            title="Edmonton hedge trimming near me" //KW
            subtitle="w m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="m  "
            image="/window-installations.jpg"
            alt="Edmonton hedge trimming near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Edmonton hedge trimming near me" //KW
            desc="h   o m"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="w"
            cardDesc3="h"
            />
            <Approach
            title="Edmonton hedge trimming near me" //KW
            desc="r y o n"
            />
            <Intro
            subtitle="Exceptional Edmonton hedge trimming near me" //KW
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
            desc="," //KW
            desc2="w"
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
        