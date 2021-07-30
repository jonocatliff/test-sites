
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
            title="Albuquerque window installation contractors | We'll Take Care Of Everything" 
            desc="Albuquerque window installation contractors: a e"
            canonical={`${props.website}/albuquerque-window-installation-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque window installation contractors" //KW
            />
            <Header
            title="Albuquerque window installation contractors" //KW
            subtitle="a e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="v o"
            image="/window-washing.jpg"
            alt="Albuquerque window installation contractors"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Albuquerque window installation contractors" //KW
            desc="n   t  "
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="a"
            cardDesc3="w"
            />
            <Approach
            title="Albuquerque window installation contractors" //KW
            desc="o w o i"
            />
            <Intro
            subtitle="Exceptional Albuquerque window installation contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="P e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="h"
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
        