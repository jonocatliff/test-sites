
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
            title="Washington DC lawn fertilization | We'll Take Care Of Everything" 
            desc="Washington DC lawn fertilization: v i"
            canonical={`${props.website}/washington-dc-lawn-fertilization`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC lawn fertilization" //KW
            />
            <Header
            title="Washington DC lawn fertilization" //KW
            subtitle="v i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e o"
            image="/window-installations.jpg"
            alt="Washington DC lawn fertilization"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Washington DC lawn fertilization" //KW
            desc="s v r t"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="o"
            cardDesc3="n"
            />
            <Approach
            title="Washington DC lawn fertilization" //KW
            desc="s c w h"
            />
            <Intro
            subtitle="Exceptional Washington DC lawn fertilization" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="c n"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="n"
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
        