
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
            title="Phoenix lawn installation | We'll Take Care Of Everything" 
            desc="Phoenix lawn installation: c l"
            canonical={`${props.website}/phoenix-lawn-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix lawn installation" //KW
            />
            <Header
            title="Phoenix lawn installation" //KW
            subtitle="c l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  e"
            image="/window-washing.jpg"
            alt="Phoenix lawn installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Phoenix lawn installation" //KW
            desc="i e e i"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="k"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="t"
            cardDesc3=" "
            />
            <Approach
            title="Phoenix lawn installation" //KW
            desc="  d s y"
            />
            <Intro
            subtitle="Exceptional Phoenix lawn installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="r u"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="d"
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
        