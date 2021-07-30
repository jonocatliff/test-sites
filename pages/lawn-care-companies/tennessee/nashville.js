
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
            title="Nashville lawn care companies | We'll Take Care Of Everything" 
            desc="Nashville lawn care companies: n o"
            canonical={`${props.website}/nashville-lawn-care-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville lawn care companies" //KW
            />
            <Header
            title="Nashville lawn care companies" //KW
            subtitle="n o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="   "
            image="/window-washing.jpg"
            alt="Nashville lawn care companies"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Nashville lawn care companies" //KW
            desc="  l f  "
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="e"
            cardDesc3=","
            />
            <Approach
            title="Nashville lawn care companies" //KW
            desc="  o s i"
            />
            <Intro
            subtitle="Exceptional Nashville lawn care companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="n"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        