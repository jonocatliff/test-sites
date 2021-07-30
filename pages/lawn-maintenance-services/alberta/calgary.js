
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
            title="Calgary lawn maintenance services | We'll Take Care Of Everything" 
            desc="Calgary lawn maintenance services: l e"
            canonical={`${props.website}/calgary-lawn-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary lawn maintenance services" //KW
            />
            <Header
            title="Calgary lawn maintenance services" //KW
            subtitle="l e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o t"
            image="/window-washing.jpg"
            alt="Calgary lawn maintenance services"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Calgary lawn maintenance services" //KW
            desc="  r   s"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="h"
            cardDesc3="e"
            />
            <Approach
            title="Calgary lawn maintenance services" //KW
            desc="e   e  "
            />
            <Intro
            subtitle="Exceptional Calgary lawn maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="v u"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="e"
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
        