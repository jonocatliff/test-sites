
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
            title="Surrey lawn cutting near me | We'll Take Care Of Everything" 
            desc="Surrey lawn cutting near me: W h"
            canonical={`${props.website}/surrey-lawn-cutting-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey lawn cutting near me" //KW
            />
            <Header
            title="Surrey lawn cutting near me" //KW
            subtitle="W h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="u n"
            image="/window-installation.jpg"
            alt="Surrey lawn cutting near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Surrey lawn cutting near me" //KW
            desc="r d m y"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2=" "
            cardDesc3="p"
            />
            <Approach
            title="Surrey lawn cutting near me" //KW
            desc="w o e c"
            />
            <Intro
            subtitle="Exceptional Surrey lawn cutting near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="o f"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="r"
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
        