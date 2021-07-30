
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
            title="Oklahoma City lawn landscaping | We'll Take Care Of Everything" 
            desc="Oklahoma City lawn landscaping: u d"
            canonical={`${props.website}/oklahoma-city-lawn-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City lawn landscaping" //KW
            />
            <Header
            title="Oklahoma City lawn landscaping" //KW
            subtitle="u d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  m"
            image="/window-installations.jpg"
            alt="Oklahoma City lawn landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oklahoma City lawn landscaping" //KW
            desc="m   f e"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Oklahoma City lawn landscaping" //KW
            desc="n x   o"
            />
            <Intro
            subtitle="Exceptional Oklahoma City lawn landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r n"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="h"
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
        