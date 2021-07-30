
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
            title="Hamilton yard drainage | We'll Take Care Of Everything" 
            desc="Hamilton yard drainage: s m"
            canonical={`${props.website}/hamilton-yard-drainage`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton yard drainage" //KW
            />
            <Header
            title="Hamilton yard drainage" //KW
            subtitle="s m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="v o"
            image="/window-installation.jpg"
            alt="Hamilton yard drainage"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Hamilton yard drainage" //KW
            desc="h s e undefined"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="Hamilton yard drainage" //KW
            desc="h y f  "
            />
            <Intro
            subtitle="Exceptional Hamilton yard drainage" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="w undefined"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="e"
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
        