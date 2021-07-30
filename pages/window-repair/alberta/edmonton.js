
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
            title="Edmonton window repair | We'll Take Care Of Everything" 
            desc="Edmonton window repair: t e"
            canonical={`${props.website}/edmonton-window-repair`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton window repair" //KW
            />
            <Header
            title="Edmonton window repair" //KW
            subtitle="t e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e p"
            image="/window-installations.jpg"
            alt="Edmonton window repair"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Edmonton window repair" //KW
            desc="  o   o"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="e"
            cardDesc3="d"
            />
            <Approach
            title="Edmonton window repair" //KW
            desc="P r o e"
            />
            <Intro
            subtitle="Exceptional Edmonton window repair" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="o o"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="t"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        