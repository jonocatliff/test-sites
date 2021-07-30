
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
            title="Vancouver lawn seeding | We'll Take Care Of Everything" 
            desc="Vancouver lawn seeding:   d"
            canonical={`${props.website}/vancouver-lawn-seeding`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver lawn seeding" //KW
            />
            <Header
            title="Vancouver lawn seeding" //KW
            subtitle="  d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="n  "
            image="/window-installation.jpg"
            alt="Vancouver lawn seeding"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Vancouver lawn seeding" //KW
            desc="n   e u"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="e"
            cardDesc3="l"
            />
            <Approach
            title="Vancouver lawn seeding" //KW
            desc="a a u  "
            />
            <Intro
            subtitle="Exceptional Vancouver lawn seeding" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c a"
            cardDesc3="A"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="h"
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
        