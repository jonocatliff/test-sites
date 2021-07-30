
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
            title="Jacksonville window installation contractor | We'll Take Care Of Everything" 
            desc="Jacksonville window installation contractor: a g"
            canonical={`${props.website}/jacksonville-window-installation-contractor`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville window installation contractor" //KW
            />
            <Header
            title="Jacksonville window installation contractor" //KW
            subtitle="a g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  ."
            image="/window-installation.jpg"
            alt="Jacksonville window installation contractor"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Jacksonville window installation contractor" //KW
            desc="o r o a"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="c"
            cardDesc3="J"
            />
            <Approach
            title="Jacksonville window installation contractor" //KW
            desc="c o t h"
            />
            <Intro
            subtitle="Exceptional Jacksonville window installation contractor" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="s d"
            cardDesc3="O"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="d"
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
        