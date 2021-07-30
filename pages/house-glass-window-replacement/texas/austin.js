
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
            title="Austin house glass window replacement | We'll Take Care Of Everything" 
            desc="Austin house glass window replacement:   h"
            canonical={`${props.website}/austin-house-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin house glass window replacement" //KW
            />
            <Header
            title="Austin house glass window replacement" //KW
            subtitle="  h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  f"
            image="/window-installations.jpg"
            alt="Austin house glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Austin house glass window replacement" //KW
            desc="r r d t"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="v"
            cardDesc3="s"
            />
            <Approach
            title="Austin house glass window replacement" //KW
            desc=", e t h"
            />
            <Intro
            subtitle="Exceptional Austin house glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="s r"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="e"
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
        