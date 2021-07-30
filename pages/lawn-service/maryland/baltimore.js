
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
            title="Baltimore lawn service | We'll Take Care Of Everything" 
            desc="Baltimore lawn service: ,  "
            canonical={`${props.website}/baltimore-lawn-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore lawn service" //KW
            />
            <Header
            title="Baltimore lawn service" //KW
            subtitle=",  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  k"
            image="/window-installation.jpg"
            alt="Baltimore lawn service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Baltimore lawn service" //KW
            desc="h n   u"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2=" "
            cardDesc3="o"
            />
            <Approach
            title="Baltimore lawn service" //KW
            desc="n r   i"
            />
            <Intro
            subtitle="Exceptional Baltimore lawn service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="   "
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="h"
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
        