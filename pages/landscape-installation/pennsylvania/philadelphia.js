
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
            title="Philadelphia landscape installation | We'll Take Care Of Everything" 
            desc="Philadelphia landscape installation: t ’"
            canonical={`${props.website}/philadelphia-landscape-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia landscape installation" //KW
            />
            <Header
            title="Philadelphia landscape installation" //KW
            subtitle="t ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o o"
            image="/window-installations.jpg"
            alt="Philadelphia landscape installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Philadelphia landscape installation" //KW
            desc="a w e i"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="c"
            cardDesc3="J"
            />
            <Approach
            title="Philadelphia landscape installation" //KW
            desc="n y i s"
            />
            <Intro
            subtitle="Exceptional Philadelphia landscape installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="z"
            cardDesc2="e h"
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="-"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        