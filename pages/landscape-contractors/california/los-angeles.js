
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
            title="Los Angeles landscape contractors | We'll Take Care Of Everything" 
            desc="Los Angeles landscape contractors: s o"
            canonical={`${props.website}/los-angeles-landscape-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles landscape contractors" //KW
            />
            <Header
            title="Los Angeles landscape contractors" //KW
            subtitle="s o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i n"
            image="/contractor.jpg"
            alt="Los Angeles landscape contractors"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Los Angeles landscape contractors" //KW
            desc="d o o w"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2=" "
            cardDesc3="h"
            />
            <Approach
            title="Los Angeles landscape contractors" //KW
            desc="u u   c"
            />
            <Intro
            subtitle="Exceptional Los Angeles landscape contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="i t"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="w"
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
        