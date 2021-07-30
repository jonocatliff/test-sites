
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
            title="San Antonio lawn care maintenance | We'll Take Care Of Everything" 
            desc="San Antonio lawn care maintenance: h  "
            canonical={`${props.website}/san-antonio-lawn-care-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio lawn care maintenance" //KW
            />
            <Header
            title="San Antonio lawn care maintenance" //KW
            subtitle="h  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o t"
            image="/window-installations.jpg"
            alt="San Antonio lawn care maintenance"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Antonio lawn care maintenance" //KW
            desc="o w w y"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="d"
            cardDesc3="s"
            />
            <Approach
            title="San Antonio lawn care maintenance" //KW
            desc="w f r v"
            />
            <Intro
            subtitle="Exceptional San Antonio lawn care maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="l r"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2=" "
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
        