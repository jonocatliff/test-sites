
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
            title="Austin lawn cutting service | We'll Take Care Of Everything" 
            desc="Austin lawn cutting service: r o"
            canonical={`${props.website}/austin-lawn-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin lawn cutting service" //KW
            />
            <Header
            title="Austin lawn cutting service" //KW
            subtitle="r o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="w t"
            image="/window-installations.jpg"
            alt="Austin lawn cutting service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Austin lawn cutting service" //KW
            desc="c r   o"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="o"
            cardDesc3="s"
            />
            <Approach
            title="Austin lawn cutting service" //KW
            desc="u s c e"
            />
            <Intro
            subtitle="Exceptional Austin lawn cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="n e"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2=" "
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
        