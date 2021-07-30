
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
            title="Los Angeles green lawn care | We'll Take Care Of Everything" 
            desc="Los Angeles green lawn care: e h"
            canonical={`${props.website}/los-angeles-green-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles green lawn care" //KW
            />
            <Header
            title="Los Angeles green lawn care" //KW
            subtitle="e h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a n"
            image="/window-washing.jpg"
            alt="Los Angeles green lawn care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Los Angeles green lawn care" //KW
            desc="w e o r"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="s"
            cardDesc3="l"
            />
            <Approach
            title="Los Angeles green lawn care" //KW
            desc="o   d f"
            />
            <Intro
            subtitle="Exceptional Los Angeles green lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="s e"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="n"
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
        