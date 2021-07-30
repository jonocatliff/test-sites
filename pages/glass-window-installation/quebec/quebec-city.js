
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
            title="Quebec City glass window installation | We'll Take Care Of Everything" 
            desc="Quebec City glass window installation: I r"
            canonical={`${props.website}/quebec-city-glass-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City glass window installation" //KW
            />
            <Header
            title="Quebec City glass window installation" //KW
            subtitle="I r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e t"
            image="/window-installations.jpg"
            alt="Quebec City glass window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Quebec City glass window installation" //KW
            desc="P n f w"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="x"
            cardDesc3=" "
            />
            <Approach
            title="Quebec City glass window installation" //KW
            desc="  s r s"
            />
            <Intro
            subtitle="Exceptional Quebec City glass window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="  n"
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
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
        