
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
            title="Montreal landscape curbing | We'll Take Care Of Everything" 
            desc="Montreal landscape curbing:    "
            canonical={`${props.website}/montreal-landscape-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal landscape curbing" //KW
            />
            <Header
            title="Montreal landscape curbing" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i  "
            image="/window-installation.jpg"
            alt="Montreal landscape curbing"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Montreal landscape curbing" //KW
            desc="b o   h"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="s"
            cardDesc3=" "
            />
            <Approach
            title="Montreal landscape curbing" //KW
            desc="  r n  "
            />
            <Intro
            subtitle="Exceptional Montreal landscape curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="n c"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2=" "
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
        