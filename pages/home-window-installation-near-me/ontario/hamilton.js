
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
            title="Hamilton home window installation near me | We'll Take Care Of Everything" 
            desc="Hamilton home window installation near me: f a"
            canonical={`${props.website}/hamilton-home-window-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton home window installation near me" //KW
            />
            <Header
            title="Hamilton home window installation near me" //KW
            subtitle="f a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc=", o"
            image="/window-washing.jpg"
            alt="Hamilton home window installation near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Hamilton home window installation near me" //KW
            desc="o i i e"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="t"
            cardDesc3="f"
            />
            <Approach
            title="Hamilton home window installation near me" //KW
            desc="c l a o"
            />
            <Intro
            subtitle="Exceptional Hamilton home window installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e t"
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="c"
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
        