
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
            title="Oklahoma City window replacement near me | We'll Take Care Of Everything" 
            desc="Oklahoma City window replacement near me: t a"
            canonical={`${props.website}/oklahoma-city-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City window replacement near me" //KW
            />
            <Header
            title="Oklahoma City window replacement near me" //KW
            subtitle="t a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="i m"
            image="/window-installations.jpg"
            alt="Oklahoma City window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Oklahoma City window replacement near me" //KW
            desc="e i r e"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="r"
            />
            <Approach
            title="Oklahoma City window replacement near me" //KW
            desc="n   d s"
            />
            <Intro
            subtitle="Exceptional Oklahoma City window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="d i"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="'" //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        