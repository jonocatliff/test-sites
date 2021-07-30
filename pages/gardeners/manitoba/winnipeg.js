
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
            title="Winnipeg gardeners | We'll Take Care Of Everything" 
            desc="Winnipeg gardeners: d l"
            canonical={`${props.website}/winnipeg-gardeners`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg gardeners" //KW
            />
            <Header
            title="Winnipeg gardeners" //KW
            subtitle="d l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="O t"
            image="/contractor.jpg"
            alt="Winnipeg gardeners"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Winnipeg gardeners" //KW
            desc="e l w o"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="e"
            cardDesc3="e"
            />
            <Approach
            title="Winnipeg gardeners" //KW
            desc="n f t h"
            />
            <Intro
            subtitle="Exceptional Winnipeg gardeners" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="o e"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2=" "
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
        