
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
            title="Nashville vinyl window installation | We'll Take Care Of Everything" 
            desc="Nashville vinyl window installation: a  "
            canonical={`${props.website}/nashville-vinyl-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville vinyl window installation" //KW
            />
            <Header
            title="Nashville vinyl window installation" //KW
            subtitle="a  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o  "
            image="/contractor.jpg"
            alt="Nashville vinyl window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Nashville vinyl window installation" //KW
            desc="t i l p"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="d"
            cardDesc3=" "
            />
            <Approach
            title="Nashville vinyl window installation" //KW
            desc="l q d i"
            />
            <Intro
            subtitle="Exceptional Nashville vinyl window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="l y"
            cardDesc3="t"
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
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        