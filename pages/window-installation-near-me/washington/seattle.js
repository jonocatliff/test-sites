
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
            title="Seattle window installation near me | We'll Take Care Of Everything" 
            desc="Seattle window installation near me: A o"
            canonical={`${props.website}/seattle-window-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle window installation near me" //KW
            />
            <Header
            title="Seattle window installation near me" //KW
            subtitle="A o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="v o"
            image="/window-installations.jpg"
            alt="Seattle window installation near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Seattle window installation near me" //KW
            desc="m   e s"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=","
            cardDesc2="d"
            cardDesc3="c"
            />
            <Approach
            title="Seattle window installation near me" //KW
            desc="h   v n"
            />
            <Intro
            subtitle="Exceptional Seattle window installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e d"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="r"
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
        