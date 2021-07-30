
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
            title="Louisville hedge maintenance | We'll Take Care Of Everything" 
            desc="Louisville hedge maintenance: i o"
            canonical={`${props.website}/louisville-hedge-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville hedge maintenance" //KW
            />
            <Header
            title="Louisville hedge maintenance" //KW
            subtitle="i o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="l w"
            image="/window-installation.jpg"
            alt="Louisville hedge maintenance"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Louisville hedge maintenance" //KW
            desc="c u s e"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="r"
            cardDesc3="a"
            />
            <Approach
            title="Louisville hedge maintenance" //KW
            desc="t s i h"
            />
            <Intro
            subtitle="Exceptional Louisville hedge maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="c w"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="o"
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
        