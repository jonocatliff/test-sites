
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
            title="Denver landscape services | We'll Take Care Of Everything" 
            desc="Denver landscape services: a m"
            canonical={`${props.website}/denver-landscape-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver landscape services" //KW
            />
            <Header
            title="Denver landscape services" //KW
            subtitle="a m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r e"
            image="/window-installation.jpg"
            alt="Denver landscape services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Denver landscape services" //KW
            desc="r W   n"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="n"
            />
            <Approach
            title="Denver landscape services" //KW
            desc="  r t  "
            />
            <Intro
            subtitle="Exceptional Denver landscape services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="d f"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="r"
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
        