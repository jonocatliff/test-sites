
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
            title="Washington DC lawn cutting near me | We'll Take Care Of Everything" 
            desc="Washington DC lawn cutting near me: e g"
            canonical={`${props.website}/washington-dc-lawn-cutting-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC lawn cutting near me" //KW
            />
            <Header
            title="Washington DC lawn cutting near me" //KW
            subtitle="e g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="t e"
            image="/window-installation.jpg"
            alt="Washington DC lawn cutting near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Washington DC lawn cutting near me" //KW
            desc="o   c t"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Washington DC lawn cutting near me" //KW
            desc="s o h e"
            />
            <Intro
            subtitle="Exceptional Washington DC lawn cutting near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="r o"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="l"
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
        