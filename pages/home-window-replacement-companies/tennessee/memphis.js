
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
            title="Memphis home window replacement companies | We'll Take Care Of Everything" 
            desc="Memphis home window replacement companies: w c"
            canonical={`${props.website}/memphis-home-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis home window replacement companies" //KW
            />
            <Header
            title="Memphis home window replacement companies" //KW
            subtitle="w c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i  "
            image="/window-installation.jpg"
            alt="Memphis home window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Memphis home window replacement companies" //KW
            desc="l a o  "
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="t"
            cardDesc3="n"
            />
            <Approach
            title="Memphis home window replacement companies" //KW
            desc="  T v o"
            />
            <Intro
            subtitle="Exceptional Memphis home window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="c  "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="a"
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
        