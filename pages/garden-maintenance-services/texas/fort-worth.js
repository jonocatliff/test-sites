
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
            title="Fort Worth garden maintenance services | We'll Take Care Of Everything" 
            desc="Fort Worth garden maintenance services: s  "
            canonical={`${props.website}/fort-worth-garden-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth garden maintenance services" //KW
            />
            <Header
            title="Fort Worth garden maintenance services" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o h"
            image="/window-installation.jpg"
            alt="Fort Worth garden maintenance services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fort Worth garden maintenance services" //KW
            desc="s a i  "
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="n"
            cardDesc3="r"
            />
            <Approach
            title="Fort Worth garden maintenance services" //KW
            desc="o n k k"
            />
            <Intro
            subtitle="Exceptional Fort Worth garden maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="i"
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
        