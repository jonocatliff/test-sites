
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
            title="Los Angeles skylight window replacement | We'll Take Care Of Everything" 
            desc="Los Angeles skylight window replacement: n  "
            canonical={`${props.website}/los-angeles-skylight-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles skylight window replacement" //KW
            />
            <Header
            title="Los Angeles skylight window replacement" //KW
            subtitle="n  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="n e"
            image="/window-installations.jpg"
            alt="Los Angeles skylight window replacement"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Los Angeles skylight window replacement" //KW
            desc="e   O r"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="x"
            cardDesc3="h"
            />
            <Approach
            title="Los Angeles skylight window replacement" //KW
            desc="h i   b"
            />
            <Intro
            subtitle="Exceptional Los Angeles skylight window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="s l"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2=" "
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
        