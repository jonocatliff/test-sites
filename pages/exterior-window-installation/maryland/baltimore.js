
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
            title="Baltimore exterior window installation | We'll Take Care Of Everything" 
            desc="Baltimore exterior window installation: t o"
            canonical={`${props.website}/baltimore-exterior-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore exterior window installation" //KW
            />
            <Header
            title="Baltimore exterior window installation" //KW
            subtitle="t o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a d"
            image="/window-installation.jpg"
            alt="Baltimore exterior window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Baltimore exterior window installation" //KW
            desc="  e t i"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="y"
            cardDesc3="h"
            />
            <Approach
            title="Baltimore exterior window installation" //KW
            desc="e u e a"
            />
            <Intro
            subtitle="Exceptional Baltimore exterior window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="l i"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="n"
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
        