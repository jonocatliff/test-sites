
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
            title="Jacksonville garden landscape design | We'll Take Care Of Everything" 
            desc="Jacksonville garden landscape design: o a"
            canonical={`${props.website}/jacksonville-garden-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville garden landscape design" //KW
            />
            <Header
            title="Jacksonville garden landscape design" //KW
            subtitle="o a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="y b"
            image="/window-installations.jpg"
            alt="Jacksonville garden landscape design"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Jacksonville garden landscape design" //KW
            desc="r t o o"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="p"
            />
            <Approach
            title="Jacksonville garden landscape design" //KW
            desc="o y e h"
            />
            <Intro
            subtitle="Exceptional Jacksonville garden landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="c  "
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2=" "
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
        