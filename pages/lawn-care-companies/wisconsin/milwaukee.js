
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
            title="Milwaukee lawn care companies | We'll Take Care Of Everything" 
            desc="Milwaukee lawn care companies: i w"
            canonical={`${props.website}/milwaukee-lawn-care-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee lawn care companies" //KW
            />
            <Header
            title="Milwaukee lawn care companies" //KW
            subtitle="i w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="I t"
            image="/window-washing.jpg"
            alt="Milwaukee lawn care companies"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Milwaukee lawn care companies" //KW
            desc="e P e d"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="w"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="n"
            cardDesc3="e"
            />
            <Approach
            title="Milwaukee lawn care companies" //KW
            desc="i a e o"
            />
            <Intro
            subtitle="Exceptional Milwaukee lawn care companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r v"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="t"
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
        