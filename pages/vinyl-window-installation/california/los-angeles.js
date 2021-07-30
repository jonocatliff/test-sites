
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
            title="Los Angeles vinyl window installation | We'll Take Care Of Everything" 
            desc="Los Angeles vinyl window installation: d r"
            canonical={`${props.website}/los-angeles-vinyl-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles vinyl window installation" //KW
            />
            <Header
            title="Los Angeles vinyl window installation" //KW
            subtitle="d r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r  "
            image="/window-installation.jpg"
            alt="Los Angeles vinyl window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Los Angeles vinyl window installation" //KW
            desc="i e m h"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="n"
            cardDesc3="e"
            />
            <Approach
            title="Los Angeles vinyl window installation" //KW
            desc="  s t d"
            />
            <Intro
            subtitle="Exceptional Los Angeles vinyl window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="g p"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="u"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        