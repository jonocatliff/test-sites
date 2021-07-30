
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
            title="Ottowa window repair | We'll Take Care Of Everything" 
            desc="Ottowa window repair: m l"
            canonical={`${props.website}/ottowa-window-repair`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa window repair" //KW
            />
            <Header
            title="Ottowa window repair" //KW
            subtitle="m l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="p e"
            image="/contractor.jpg"
            alt="Ottowa window repair"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Ottowa window repair" //KW
            desc="w n h ."
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="n"
            cardDesc3="r"
            />
            <Approach
            title="Ottowa window repair" //KW
            desc="u d h  "
            />
            <Intro
            subtitle="Exceptional Ottowa window repair" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r i"
            cardDesc3="W"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="v"
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
        