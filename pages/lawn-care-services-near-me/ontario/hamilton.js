
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
            title="Hamilton lawn care services near me | We'll Take Care Of Everything" 
            desc="Hamilton lawn care services near me: a  "
            canonical={`${props.website}/hamilton-lawn-care-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton lawn care services near me" //KW
            />
            <Header
            title="Hamilton lawn care services near me" //KW
            subtitle="a  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="l l"
            image="/window-washing.jpg"
            alt="Hamilton lawn care services near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Hamilton lawn care services near me" //KW
            desc="y   f e"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Hamilton lawn care services near me" //KW
            desc="c o t  "
            />
            <Intro
            subtitle="Exceptional Hamilton lawn care services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="  f"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
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
        