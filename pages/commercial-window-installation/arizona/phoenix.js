
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
            title="Phoenix commercial window installation | We'll Take Care Of Everything" 
            desc="Phoenix commercial window installation: e ’"
            canonical={`${props.website}/phoenix-commercial-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix commercial window installation" //KW
            />
            <Header
            title="Phoenix commercial window installation" //KW
            subtitle="e ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e r"
            image="/window-installations.jpg"
            alt="Phoenix commercial window installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Phoenix commercial window installation" //KW
            desc="g t r e"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Phoenix commercial window installation" //KW
            desc="  i d s"
            />
            <Intro
            subtitle="Exceptional Phoenix commercial window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="e r"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="l"
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
        