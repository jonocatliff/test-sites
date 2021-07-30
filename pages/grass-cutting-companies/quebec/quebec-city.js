
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
            title="Quebec City grass cutting companies | We'll Take Care Of Everything" 
            desc="Quebec City grass cutting companies: o h"
            canonical={`${props.website}/quebec-city-grass-cutting-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City grass cutting companies" //KW
            />
            <Header
            title="Quebec City grass cutting companies" //KW
            subtitle="o h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="s c"
            image="/window-installation.jpg"
            alt="Quebec City grass cutting companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Quebec City grass cutting companies" //KW
            desc="u , c f"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="w"
            cardDesc3="a"
            />
            <Approach
            title="Quebec City grass cutting companies" //KW
            desc="h t p s"
            />
            <Intro
            subtitle="Exceptional Quebec City grass cutting companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i n"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="A" //KW
            desc2="i"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        