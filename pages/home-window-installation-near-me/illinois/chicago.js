
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
            title="Chicago home window installation near me | We'll Take Care Of Everything" 
            desc="Chicago home window installation near me:   a"
            canonical={`${props.website}/chicago-home-window-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago home window installation near me" //KW
            />
            <Header
            title="Chicago home window installation near me" //KW
            subtitle="  a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i w"
            image="/window-installation.jpg"
            alt="Chicago home window installation near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Chicago home window installation near me" //KW
            desc="e   i d"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="t"
            cardDesc3="t"
            />
            <Approach
            title="Chicago home window installation near me" //KW
            desc="t a a e"
            />
            <Intro
            subtitle="Exceptional Chicago home window installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="k"
            cardDesc2="e  "
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="a"
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
        