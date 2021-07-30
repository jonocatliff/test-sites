
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
            title="Montreal lawn maintenance services | We'll Take Care Of Everything" 
            desc="Montreal lawn maintenance services: b u"
            canonical={`${props.website}/montreal-lawn-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal lawn maintenance services" //KW
            />
            <Header
            title="Montreal lawn maintenance services" //KW
            subtitle="b u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r  "
            image="/window-washing.jpg"
            alt="Montreal lawn maintenance services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Montreal lawn maintenance services" //KW
            desc="p e f  "
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="h"
            />
            <Approach
            title="Montreal lawn maintenance services" //KW
            desc="c o r g"
            />
            <Intro
            subtitle="Exceptional Montreal lawn maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="l"
            cardDesc2="o o"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="'" //KW
            desc2="s"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        