
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
            title="Winnipeg landscape contractors | We'll Take Care Of Everything" 
            desc="Winnipeg landscape contractors: c u"
            canonical={`${props.website}/winnipeg-landscape-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg landscape contractors" //KW
            />
            <Header
            title="Winnipeg landscape contractors" //KW
            subtitle="c u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r h"
            image="/window-installation.jpg"
            alt="Winnipeg landscape contractors"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Winnipeg landscape contractors" //KW
            desc="s P   s"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=" "
            cardDesc3="a"
            />
            <Approach
            title="Winnipeg landscape contractors" //KW
            desc="  r e p"
            />
            <Intro
            subtitle="Exceptional Winnipeg landscape contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n t"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="y"
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
        