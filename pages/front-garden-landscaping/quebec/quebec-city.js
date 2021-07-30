
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
            title="Quebec City front garden landscaping | We'll Take Care Of Everything" 
            desc="Quebec City front garden landscaping: , r"
            canonical={`${props.website}/quebec-city-front-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City front garden landscaping" //KW
            />
            <Header
            title="Quebec City front garden landscaping" //KW
            subtitle=", r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o w"
            image="/window-installations.jpg"
            alt="Quebec City front garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Quebec City front garden landscaping" //KW
            desc="  s s i"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="s"
            cardDesc3="u"
            />
            <Approach
            title="Quebec City front garden landscaping" //KW
            desc="h s e m"
            />
            <Intro
            subtitle="Exceptional Quebec City front garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="y e"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="c"
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
        