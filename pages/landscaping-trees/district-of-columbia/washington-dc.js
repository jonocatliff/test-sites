
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
            title="Washington DC landscaping trees | We'll Take Care Of Everything" 
            desc="Washington DC landscaping trees: t d"
            canonical={`${props.website}/washington-dc-landscaping-trees`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC landscaping trees" //KW
            />
            <Header
            title="Washington DC landscaping trees" //KW
            subtitle="t d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n i"
            image="/window-installations.jpg"
            alt="Washington DC landscaping trees"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Washington DC landscaping trees" //KW
            desc="    s e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="r"
            cardDesc3="m"
            />
            <Approach
            title="Washington DC landscaping trees" //KW
            desc="r   w y"
            />
            <Intro
            subtitle="Exceptional Washington DC landscaping trees" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="t r"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="b"
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
        