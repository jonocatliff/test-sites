
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
            title="Edmonton lawn cutting near me | We'll Take Care Of Everything" 
            desc="Edmonton lawn cutting near me:   m"
            canonical={`${props.website}/edmonton-lawn-cutting-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton lawn cutting near me" //KW
            />
            <Header
            title="Edmonton lawn cutting near me" //KW
            subtitle="  m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e h"
            image="/window-washing.jpg"
            alt="Edmonton lawn cutting near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Edmonton lawn cutting near me" //KW
            desc="d o e o"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Edmonton lawn cutting near me" //KW
            desc="y l r e"
            />
            <Intro
            subtitle="Exceptional Edmonton lawn cutting near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  r"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="i"
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
        