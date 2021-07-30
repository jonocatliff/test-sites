
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
            title="Indianapolis sod installation near me | We'll Take Care Of Everything" 
            desc="Indianapolis sod installation near me: i  "
            canonical={`${props.website}/indianapolis-sod-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis sod installation near me" //KW
            />
            <Header
            title="Indianapolis sod installation near me" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a m"
            image="/window-installations.jpg"
            alt="Indianapolis sod installation near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Indianapolis sod installation near me" //KW
            desc="e d o undefined"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="n"
            cardDesc3="h"
            />
            <Approach
            title="Indianapolis sod installation near me" //KW
            desc="p e , h"
            />
            <Intro
            subtitle="Exceptional Indianapolis sod installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="o undefined"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="i"
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
        