
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
            title="Edmonton landscaping contractors | We'll Take Care Of Everything" 
            desc="Edmonton landscaping contractors: o m"
            canonical={`${props.website}/edmonton-landscaping-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton landscaping contractors" //KW
            />
            <Header
            title="Edmonton landscaping contractors" //KW
            subtitle="o m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r n"
            image="/contractor.jpg"
            alt="Edmonton landscaping contractors"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Edmonton landscaping contractors" //KW
            desc="  s i  "
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="y"
            cardDesc3="n"
            />
            <Approach
            title="Edmonton landscaping contractors" //KW
            desc="a a j h"
            />
            <Intro
            subtitle="Exceptional Edmonton landscaping contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="  p"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="f" //KW
            desc2="t"
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
        