
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
            title="Las Vegas garden maintenance | We'll Take Care Of Everything" 
            desc="Las Vegas garden maintenance: c r"
            canonical={`${props.website}/las-vegas-garden-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas garden maintenance" //KW
            />
            <Header
            title="Las Vegas garden maintenance" //KW
            subtitle="c r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s o"
            image="/window-installations.jpg"
            alt="Las Vegas garden maintenance"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Las Vegas garden maintenance" //KW
            desc="a l s n"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="c"
            cardDesc3="f"
            />
            <Approach
            title="Las Vegas garden maintenance" //KW
            desc="s y o i"
            />
            <Intro
            subtitle="Exceptional Las Vegas garden maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="t y"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
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
        