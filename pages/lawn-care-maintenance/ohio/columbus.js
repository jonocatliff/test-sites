
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
            title="Columbus lawn care maintenance | We'll Take Care Of Everything" 
            desc="Columbus lawn care maintenance: p t"
            canonical={`${props.website}/columbus-lawn-care-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus lawn care maintenance" //KW
            />
            <Header
            title="Columbus lawn care maintenance" //KW
            subtitle="p t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="c p"
            image="/window-installation.jpg"
            alt="Columbus lawn care maintenance"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Columbus lawn care maintenance" //KW
            desc="l l o  "
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="l"
            cardDesc3="o"
            />
            <Approach
            title="Columbus lawn care maintenance" //KW
            desc="c   y y"
            />
            <Intro
            subtitle="Exceptional Columbus lawn care maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="l"
            cardDesc2="o n"
            cardDesc3="W"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="o"
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
        