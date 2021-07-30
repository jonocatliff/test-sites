
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
            title="Portland lawn installation | We'll Take Care Of Everything" 
            desc="Portland lawn installation:   y"
            canonical={`${props.website}/portland-lawn-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland lawn installation" //KW
            />
            <Header
            title="Portland lawn installation" //KW
            subtitle="  y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r w"
            image="/window-installations.jpg"
            alt="Portland lawn installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Portland lawn installation" //KW
            desc="  n n w"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="n"
            cardDesc3="p"
            />
            <Approach
            title="Portland lawn installation" //KW
            desc="c   t h"
            />
            <Intro
            subtitle="Exceptional Portland lawn installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="i e"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="p"
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
        