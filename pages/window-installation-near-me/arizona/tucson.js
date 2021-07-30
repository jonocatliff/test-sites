
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
            title="Tucson window installation near me | We'll Take Care Of Everything" 
            desc="Tucson window installation near me: a s"
            canonical={`${props.website}/tucson-window-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson window installation near me" //KW
            />
            <Header
            title="Tucson window installation near me" //KW
            subtitle="a s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r  "
            image="/window-installation.jpg"
            alt="Tucson window installation near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Tucson window installation near me" //KW
            desc="  e d o"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="o"
            cardDesc3="n"
            />
            <Approach
            title="Tucson window installation near me" //KW
            desc="a i r h"
            />
            <Intro
            subtitle="Exceptional Tucson window installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o F"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2=" "
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
        