
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
            title="Hamilton lawn maintenance services | We'll Take Care Of Everything" 
            desc="Hamilton lawn maintenance services: e m"
            canonical={`${props.website}/hamilton-lawn-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton lawn maintenance services" //KW
            />
            <Header
            title="Hamilton lawn maintenance services" //KW
            subtitle="e m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="v i"
            image="/contractor.jpg"
            alt="Hamilton lawn maintenance services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Hamilton lawn maintenance services" //KW
            desc="o   n i"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="v"
            cardDesc3="a"
            />
            <Approach
            title="Hamilton lawn maintenance services" //KW
            desc="e m g a"
            />
            <Intro
            subtitle="Exceptional Hamilton lawn maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="t o"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="i"
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
        