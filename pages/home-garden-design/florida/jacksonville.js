
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
            title="Jacksonville home garden design | We'll Take Care Of Everything" 
            desc="Jacksonville home garden design:   o"
            canonical={`${props.website}/jacksonville-home-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville home garden design" //KW
            />
            <Header
            title="Jacksonville home garden design" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="n o"
            image="/window-installations.jpg"
            alt="Jacksonville home garden design"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Jacksonville home garden design" //KW
            desc="o w e s"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="o"
            cardDesc3="a"
            />
            <Approach
            title="Jacksonville home garden design" //KW
            desc="  o c h"
            />
            <Intro
            subtitle="Exceptional Jacksonville home garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="z"
            cardDesc2="i r"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="o"
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
        