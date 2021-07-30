
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
            title="San Francisco basement egress window installation | We'll Take Care Of Everything" 
            desc="San Francisco basement egress window installation: , e"
            canonical={`${props.website}/san-francisco-basement-egress-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco basement egress window installation" //KW
            />
            <Header
            title="San Francisco basement egress window installation" //KW
            subtitle=", e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc=", e"
            image="/window-installations.jpg"
            alt="San Francisco basement egress window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Francisco basement egress window installation" //KW
            desc="  e p s"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2=","
            cardDesc3=","
            />
            <Approach
            title="San Francisco basement egress window installation" //KW
            desc=", s e  "
            />
            <Intro
            subtitle="Exceptional San Francisco basement egress window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2=",  "
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2=","
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
        