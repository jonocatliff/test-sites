
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
            title="Boston landscape services | We'll Take Care Of Everything" 
            desc="Boston landscape services: t a"
            canonical={`${props.website}/boston-landscape-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston landscape services" //KW
            />
            <Header
            title="Boston landscape services" //KW
            subtitle="t a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="d r"
            image="/window-installations.jpg"
            alt="Boston landscape services"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Boston landscape services" //KW
            desc="e o f s"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="v"
            cardDesc3="f"
            />
            <Approach
            title="Boston landscape services" //KW
            desc="  n e s"
            />
            <Intro
            subtitle="Exceptional Boston landscape services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="l n"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
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
        