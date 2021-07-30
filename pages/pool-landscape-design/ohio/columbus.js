
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
            title="Columbus pool landscape design | We'll Take Care Of Everything" 
            desc="Columbus pool landscape design: o  "
            canonical={`${props.website}/columbus-pool-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus pool landscape design" //KW
            />
            <Header
            title="Columbus pool landscape design" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s a"
            image="/window-installations.jpg"
            alt="Columbus pool landscape design"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Columbus pool landscape design" //KW
            desc="y o a undefined"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Columbus pool landscape design" //KW
            desc="  c i h"
            />
            <Intro
            subtitle="Exceptional Columbus pool landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="t undefined"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="y"
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
        