
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
            title="Seattle hedge maintenance | We'll Take Care Of Everything" 
            desc="Seattle hedge maintenance:   d"
            canonical={`${props.website}/seattle-hedge-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle hedge maintenance" //KW
            />
            <Header
            title="Seattle hedge maintenance" //KW
            subtitle="  d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  e"
            image="/window-installations.jpg"
            alt="Seattle hedge maintenance"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Seattle hedge maintenance" //KW
            desc="v   a e"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="f"
            cardDesc3="A"
            />
            <Approach
            title="Seattle hedge maintenance" //KW
            desc="o o    "
            />
            <Intro
            subtitle="Exceptional Seattle hedge maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t o"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="u"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        