
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
            title="Ottowa new window installation | We'll Take Care Of Everything" 
            desc="Ottowa new window installation: t o"
            canonical={`${props.website}/ottowa-new-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa new window installation" //KW
            />
            <Header
            title="Ottowa new window installation" //KW
            subtitle="t o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e i"
            image="/window-installations.jpg"
            alt="Ottowa new window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Ottowa new window installation" //KW
            desc="o   t i"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="Ottowa new window installation" //KW
            desc="  c r r"
            />
            <Intro
            subtitle="Exceptional Ottowa new window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2=". n"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2=" "
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
        