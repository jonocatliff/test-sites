
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
            title="Brampton window replacement companies | We'll Take Care Of Everything" 
            desc="Brampton window replacement companies: c e"
            canonical={`${props.website}/brampton-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton window replacement companies" //KW
            />
            <Header
            title="Brampton window replacement companies" //KW
            subtitle="c e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r o"
            image="/window-installations.jpg"
            alt="Brampton window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Brampton window replacement companies" //KW
            desc="  n e r"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="i"
            cardDesc3="p"
            />
            <Approach
            title="Brampton window replacement companies" //KW
            desc="  l   d"
            />
            <Intro
            subtitle="Exceptional Brampton window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="  d"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="i"
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
        