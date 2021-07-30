
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
            title="Boston lawn maintenance services | We'll Take Care Of Everything" 
            desc="Boston lawn maintenance services: n t"
            canonical={`${props.website}/boston-lawn-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston lawn maintenance services" //KW
            />
            <Header
            title="Boston lawn maintenance services" //KW
            subtitle="n t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="v r"
            image="/window-washing.jpg"
            alt="Boston lawn maintenance services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Boston lawn maintenance services" //KW
            desc="e   x O"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="r"
            cardDesc3="n"
            />
            <Approach
            title="Boston lawn maintenance services" //KW
            desc="t e a  "
            />
            <Intro
            subtitle="Exceptional Boston lawn maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="f e"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="n"
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
        