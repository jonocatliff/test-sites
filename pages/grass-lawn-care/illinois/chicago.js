
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
            title="Chicago grass lawn care | We'll Take Care Of Everything" 
            desc="Chicago grass lawn care: l h"
            canonical={`${props.website}/chicago-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago grass lawn care" //KW
            />
            <Header
            title="Chicago grass lawn care" //KW
            subtitle="l h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o p"
            image="/window-installation.jpg"
            alt="Chicago grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Chicago grass lawn care" //KW
            desc="o o o w"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="Chicago grass lawn care" //KW
            desc="u o    "
            />
            <Intro
            subtitle="Exceptional Chicago grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="  e"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="a"
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
        