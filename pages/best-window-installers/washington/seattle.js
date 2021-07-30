
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
            title="Seattle best window installers | We'll Take Care Of Everything" 
            desc="Seattle best window installers: t O"
            canonical={`${props.website}/seattle-best-window-installers`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle best window installers" //KW
            />
            <Header
            title="Seattle best window installers" //KW
            subtitle="t O"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="u v"
            image="/window-washing.jpg"
            alt="Seattle best window installers"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Seattle best window installers" //KW
            desc="i a n y"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="."
            cardDesc3="t"
            />
            <Approach
            title="Seattle best window installers" //KW
            desc="  o t i"
            />
            <Intro
            subtitle="Exceptional Seattle best window installers" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="p c"
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="h"
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
        