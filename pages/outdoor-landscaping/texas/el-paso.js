
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
            title="El Paso outdoor landscaping | We'll Take Care Of Everything" 
            desc="El Paso outdoor landscaping: a w"
            canonical={`${props.website}/el-paso-outdoor-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso outdoor landscaping" //KW
            />
            <Header
            title="El Paso outdoor landscaping" //KW
            subtitle="a w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o w"
            image="/window-installation.jpg"
            alt="El Paso outdoor landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional El Paso outdoor landscaping" //KW
            desc="n o   undefined"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3="w"
            />
            <Approach
            title="El Paso outdoor landscaping" //KW
            desc="s e   y"
            />
            <Intro
            subtitle="Exceptional El Paso outdoor landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="i undefined"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2=" "
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
        