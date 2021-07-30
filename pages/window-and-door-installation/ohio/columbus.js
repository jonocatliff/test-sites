
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
            title="Columbus window and door installation | We'll Take Care Of Everything" 
            desc="Columbus window and door installation: t r"
            canonical={`${props.website}/columbus-window-and-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus window and door installation" //KW
            />
            <Header
            title="Columbus window and door installation" //KW
            subtitle="t r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="w  "
            image="/window-installation.jpg"
            alt="Columbus window and door installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Columbus window and door installation" //KW
            desc="  s c O"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="s"
            cardDesc3=" "
            />
            <Approach
            title="Columbus window and door installation" //KW
            desc="c h s e"
            />
            <Intro
            subtitle="Exceptional Columbus window and door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="t t"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="r"
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
        