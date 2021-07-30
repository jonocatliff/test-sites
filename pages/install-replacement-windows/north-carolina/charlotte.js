
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
            title="Charlotte install replacement windows | We'll Take Care Of Everything" 
            desc="Charlotte install replacement windows: o w"
            canonical={`${props.website}/charlotte-install-replacement-windows`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte install replacement windows" //KW
            />
            <Header
            title="Charlotte install replacement windows" //KW
            subtitle="o w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc=", n"
            image="/contractor.jpg"
            alt="Charlotte install replacement windows"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Charlotte install replacement windows" //KW
            desc="s r   y"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="s"
            cardDesc3="w"
            />
            <Approach
            title="Charlotte install replacement windows" //KW
            desc="r u   g"
            />
            <Intro
            subtitle="Exceptional Charlotte install replacement windows" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="t w"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="o"
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
        