
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
            title="El Paso hedge cutting services | We'll Take Care Of Everything" 
            desc="El Paso hedge cutting services: i n"
            canonical={`${props.website}/el-paso-hedge-cutting-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso hedge cutting services" //KW
            />
            <Header
            title="El Paso hedge cutting services" //KW
            subtitle="i n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s e"
            image="/window-installations.jpg"
            alt="El Paso hedge cutting services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional El Paso hedge cutting services" //KW
            desc="r l o u"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="r"
            cardDesc3="l"
            />
            <Approach
            title="El Paso hedge cutting services" //KW
            desc="t w y v"
            />
            <Intro
            subtitle="Exceptional El Paso hedge cutting services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="l"
            cardDesc2="o o"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="i"
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
        