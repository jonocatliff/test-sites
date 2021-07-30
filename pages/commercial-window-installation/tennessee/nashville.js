
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
            title="Nashville commercial window installation | We'll Take Care Of Everything" 
            desc="Nashville commercial window installation: t W"
            canonical={`${props.website}/nashville-commercial-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville commercial window installation" //KW
            />
            <Header
            title="Nashville commercial window installation" //KW
            subtitle="t W"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a  "
            image="/window-installation.jpg"
            alt="Nashville commercial window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Nashville commercial window installation" //KW
            desc="n n f o"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="e"
            cardDesc3="o"
            />
            <Approach
            title="Nashville commercial window installation" //KW
            desc="u o c i"
            />
            <Intro
            subtitle="Exceptional Nashville commercial window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="u h"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="o"
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
        