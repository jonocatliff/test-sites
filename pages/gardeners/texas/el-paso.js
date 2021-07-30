
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
            title="El Paso gardeners | We'll Take Care Of Everything" 
            desc="El Paso gardeners: w f"
            canonical={`${props.website}/el-paso-gardeners`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso gardeners" //KW
            />
            <Header
            title="El Paso gardeners" //KW
            subtitle="w f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="w p"
            image="/contractor.jpg"
            alt="El Paso gardeners"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional El Paso gardeners" //KW
            desc="  s m h"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="d"
            cardDesc3="y"
            />
            <Approach
            title="El Paso gardeners" //KW
            desc="t     g"
            />
            <Intro
            subtitle="Exceptional El Paso gardeners" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="a l"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="c"
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
        