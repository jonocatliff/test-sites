
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
            title="Detroit landscape contractors | We'll Take Care Of Everything" 
            desc="Detroit landscape contractors: t h"
            canonical={`${props.website}/detroit-landscape-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit landscape contractors" //KW
            />
            <Header
            title="Detroit landscape contractors" //KW
            subtitle="t h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  e"
            image="/window-installations.jpg"
            alt="Detroit landscape contractors"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Detroit landscape contractors" //KW
            desc="a s e w"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="y"
            cardDesc3="t"
            />
            <Approach
            title="Detroit landscape contractors" //KW
            desc="d w r w"
            />
            <Intro
            subtitle="Exceptional Detroit landscape contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="o e"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2=" "
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
        