
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
            title="Milwaukee install replacement windows | We'll Take Care Of Everything" 
            desc="Milwaukee install replacement windows: s o"
            canonical={`${props.website}/milwaukee-install-replacement-windows`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee install replacement windows" //KW
            />
            <Header
            title="Milwaukee install replacement windows" //KW
            subtitle="s o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e y"
            image="/window-installation.jpg"
            alt="Milwaukee install replacement windows"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Milwaukee install replacement windows" //KW
            desc="r d e h"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3="c"
            />
            <Approach
            title="Milwaukee install replacement windows" //KW
            desc="I b   h"
            />
            <Intro
            subtitle="Exceptional Milwaukee install replacement windows" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="a h"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
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
        