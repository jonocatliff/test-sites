
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
            title="Baltimore hedge removal services | We'll Take Care Of Everything" 
            desc="Baltimore hedge removal services: n r"
            canonical={`${props.website}/baltimore-hedge-removal-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore hedge removal services" //KW
            />
            <Header
            title="Baltimore hedge removal services" //KW
            subtitle="n r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="b m"
            image="/window-installation.jpg"
            alt="Baltimore hedge removal services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Baltimore hedge removal services" //KW
            desc="l l c  "
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="w"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="P"
            cardDesc3="l"
            />
            <Approach
            title="Baltimore hedge removal services" //KW
            desc="t f i  "
            />
            <Intro
            subtitle="Exceptional Baltimore hedge removal services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="y w"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="f"
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
        