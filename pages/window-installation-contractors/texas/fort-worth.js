
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
            title="Fort Worth window installation contractors | We'll Take Care Of Everything" 
            desc="Fort Worth window installation contractors: e o"
            canonical={`${props.website}/fort-worth-window-installation-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth window installation contractors" //KW
            />
            <Header
            title="Fort Worth window installation contractors" //KW
            subtitle="e o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  i"
            image="/window-installation.jpg"
            alt="Fort Worth window installation contractors"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fort Worth window installation contractors" //KW
            desc="u d f r"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="."
            cardDesc3="t"
            />
            <Approach
            title="Fort Worth window installation contractors" //KW
            desc="e o y ."
            />
            <Intro
            subtitle="Exceptional Fort Worth window installation contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="i i"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="b"
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
        