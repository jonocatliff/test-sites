
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
            title="Portland lawn and landscape | We'll Take Care Of Everything" 
            desc="Portland lawn and landscape: n ."
            canonical={`${props.website}/portland-lawn-and-landscape`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland lawn and landscape" //KW
            />
            <Header
            title="Portland lawn and landscape" //KW
            subtitle="n ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="i h"
            image="/window-washing.jpg"
            alt="Portland lawn and landscape"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Portland lawn and landscape" //KW
            desc="l   k o"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="d"
            cardDesc3="o"
            />
            <Approach
            title="Portland lawn and landscape" //KW
            desc="n w n  "
            />
            <Intro
            subtitle="Exceptional Portland lawn and landscape" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="c v"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="v"
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
        