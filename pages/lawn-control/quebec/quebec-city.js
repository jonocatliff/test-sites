
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
            title="Quebec City lawn control | We'll Take Care Of Everything" 
            desc="Quebec City lawn control: p s"
            canonical={`${props.website}/quebec-city-lawn-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City lawn control" //KW
            />
            <Header
            title="Quebec City lawn control" //KW
            subtitle="p s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o h"
            image="/window-washing.jpg"
            alt="Quebec City lawn control"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Quebec City lawn control" //KW
            desc="P n w s"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="Quebec City lawn control" //KW
            desc="t   a  "
            />
            <Intro
            subtitle="Exceptional Quebec City lawn control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="n  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="i"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        