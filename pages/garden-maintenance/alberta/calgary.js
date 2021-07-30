
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
            title="Calgary garden maintenance | We'll Take Care Of Everything" 
            desc="Calgary garden maintenance: n i"
            canonical={`${props.website}/calgary-garden-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary garden maintenance" //KW
            />
            <Header
            title="Calgary garden maintenance" //KW
            subtitle="n i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  p"
            image="/window-installation.jpg"
            alt="Calgary garden maintenance"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Calgary garden maintenance" //KW
            desc=".   u n"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="o"
            cardDesc3="o"
            />
            <Approach
            title="Calgary garden maintenance" //KW
            desc="s y   r"
            />
            <Intro
            subtitle="Exceptional Calgary garden maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="v o"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="v"
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
        