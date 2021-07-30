
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
            title="Phoenix lawn maintenance | We'll Take Care Of Everything" 
            desc="Phoenix lawn maintenance: n O"
            canonical={`${props.website}/phoenix-lawn-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix lawn maintenance" //KW
            />
            <Header
            title="Phoenix lawn maintenance" //KW
            subtitle="n O"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  n"
            image="/contractor.jpg"
            alt="Phoenix lawn maintenance"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Phoenix lawn maintenance" //KW
            desc="s i e  "
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Phoenix lawn maintenance" //KW
            desc="u l f n"
            />
            <Intro
            subtitle="Exceptional Phoenix lawn maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="m  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
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
        