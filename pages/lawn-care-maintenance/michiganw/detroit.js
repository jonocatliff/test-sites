
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
            title="Detroit lawn care maintenance | We'll Take Care Of Everything" 
            desc="Detroit lawn care maintenance: e e"
            canonical={`${props.website}/detroit-lawn-care-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit lawn care maintenance" //KW
            />
            <Header
            title="Detroit lawn care maintenance" //KW
            subtitle="e e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="u e"
            image="/window-installation.jpg"
            alt="Detroit lawn care maintenance"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Detroit lawn care maintenance" //KW
            desc="P , e w"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2=" "
            cardDesc3="o"
            />
            <Approach
            title="Detroit lawn care maintenance" //KW
            desc="  s    "
            />
            <Intro
            subtitle="Exceptional Detroit lawn care maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r x"
            cardDesc3="I"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
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
        