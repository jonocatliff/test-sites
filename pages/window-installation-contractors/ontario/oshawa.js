
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
            title="Oshawa window installation contractors | We'll Take Care Of Everything" 
            desc="Oshawa window installation contractors: r w"
            canonical={`${props.website}/oshawa-window-installation-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa window installation contractors" //KW
            />
            <Header
            title="Oshawa window installation contractors" //KW
            subtitle="r w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  i"
            image="/window-installations.jpg"
            alt="Oshawa window installation contractors"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Oshawa window installation contractors" //KW
            desc=". l   l"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="Oshawa window installation contractors" //KW
            desc="n   n p"
            />
            <Intro
            subtitle="Exceptional Oshawa window installation contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="z"
            cardDesc2=",  "
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="y"
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
        