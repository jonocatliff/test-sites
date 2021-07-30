
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
            title="Hamilton hedge removal services | We'll Take Care Of Everything" 
            desc="Hamilton hedge removal services:   v"
            canonical={`${props.website}/hamilton-hedge-removal-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton hedge removal services" //KW
            />
            <Header
            title="Hamilton hedge removal services" //KW
            subtitle="  v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o r"
            image="/window-washing.jpg"
            alt="Hamilton hedge removal services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Hamilton hedge removal services" //KW
            desc="  w   d"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="c"
            cardDesc3="w"
            />
            <Approach
            title="Hamilton hedge removal services" //KW
            desc="  y t o"
            />
            <Intro
            subtitle="Exceptional Hamilton hedge removal services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="r"
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
        