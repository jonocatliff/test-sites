
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
            title="Washington DC lawn installation | We'll Take Care Of Everything" 
            desc="Washington DC lawn installation: b m"
            canonical={`${props.website}/washington-dc-lawn-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC lawn installation" //KW
            />
            <Header
            title="Washington DC lawn installation" //KW
            subtitle="b m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e g"
            image="/window-installations.jpg"
            alt="Washington DC lawn installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Washington DC lawn installation" //KW
            desc="h a s i"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="v"
            cardDesc2="e"
            cardDesc3="e"
            />
            <Approach
            title="Washington DC lawn installation" //KW
            desc="o y y e"
            />
            <Intro
            subtitle="Exceptional Washington DC lawn installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="p o"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2=","
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        