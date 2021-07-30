
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
            title="Toronto best lawn care | We'll Take Care Of Everything" 
            desc="Toronto best lawn care: t r"
            canonical={`${props.website}/toronto-best-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto best lawn care" //KW
            />
            <Header
            title="Toronto best lawn care" //KW
            subtitle="t r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i e"
            image="/window-installations.jpg"
            alt="Toronto best lawn care"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Toronto best lawn care" //KW
            desc="w h t r"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="r"
            cardDesc3="a"
            />
            <Approach
            title="Toronto best lawn care" //KW
            desc="a u t d"
            />
            <Intro
            subtitle="Exceptional Toronto best lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c w"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="t"
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
        