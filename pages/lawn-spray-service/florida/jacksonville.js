
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
            title="Jacksonville lawn spray service | We'll Take Care Of Everything" 
            desc="Jacksonville lawn spray service: l d"
            canonical={`${props.website}/jacksonville-lawn-spray-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville lawn spray service" //KW
            />
            <Header
            title="Jacksonville lawn spray service" //KW
            subtitle="l d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e b"
            image="/window-washing.jpg"
            alt="Jacksonville lawn spray service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Jacksonville lawn spray service" //KW
            desc="d s    "
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="o"
            cardDesc3="w"
            />
            <Approach
            title="Jacksonville lawn spray service" //KW
            desc="n d e n"
            />
            <Intro
            subtitle="Exceptional Jacksonville lawn spray service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n e"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2=" "
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
        