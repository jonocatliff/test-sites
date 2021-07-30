
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
            title="Nashville lawn mowing service | We'll Take Care Of Everything" 
            desc="Nashville lawn mowing service: l e"
            canonical={`${props.website}/nashville-lawn-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville lawn mowing service" //KW
            />
            <Header
            title="Nashville lawn mowing service" //KW
            subtitle="l e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o t"
            image="/contractor.jpg"
            alt="Nashville lawn mowing service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Nashville lawn mowing service" //KW
            desc="y l   d"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="l"
            cardDesc3="r"
            />
            <Approach
            title="Nashville lawn mowing service" //KW
            desc="W o r  "
            />
            <Intro
            subtitle="Exceptional Nashville lawn mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="e  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="r"
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
        