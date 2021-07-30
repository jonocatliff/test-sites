
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
            title="Calgary hedge maintenance | We'll Take Care Of Everything" 
            desc="Calgary hedge maintenance: ,  "
            canonical={`${props.website}/calgary-hedge-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary hedge maintenance" //KW
            />
            <Header
            title="Calgary hedge maintenance" //KW
            subtitle=",  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  i"
            image="/window-installation.jpg"
            alt="Calgary hedge maintenance"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Calgary hedge maintenance" //KW
            desc="y o f e"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="t"
            cardDesc3="h"
            />
            <Approach
            title="Calgary hedge maintenance" //KW
            desc="A t n o"
            />
            <Intro
            subtitle="Exceptional Calgary hedge maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="m e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="t"
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
        