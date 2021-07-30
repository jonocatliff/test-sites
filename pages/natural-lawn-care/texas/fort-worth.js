
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
            title="Fort Worth natural lawn care | We'll Take Care Of Everything" 
            desc="Fort Worth natural lawn care: t i"
            canonical={`${props.website}/fort-worth-natural-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth natural lawn care" //KW
            />
            <Header
            title="Fort Worth natural lawn care" //KW
            subtitle="t i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="W i"
            image="/window-installation.jpg"
            alt="Fort Worth natural lawn care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Fort Worth natural lawn care" //KW
            desc="c s e n"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="u"
            cardDesc3="n"
            />
            <Approach
            title="Fort Worth natural lawn care" //KW
            desc="u f p h"
            />
            <Intro
            subtitle="Exceptional Fort Worth natural lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="  undefined"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="h"
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
        