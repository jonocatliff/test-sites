
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
            title="Jacksonville grass mowing service | We'll Take Care Of Everything" 
            desc="Jacksonville grass mowing service:   t"
            canonical={`${props.website}/jacksonville-grass-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville grass mowing service" //KW
            />
            <Header
            title="Jacksonville grass mowing service" //KW
            subtitle="  t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="s e"
            image="/window-washing.jpg"
            alt="Jacksonville grass mowing service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Jacksonville grass mowing service" //KW
            desc="n     c"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="a"
            cardDesc3="p"
            />
            <Approach
            title="Jacksonville grass mowing service" //KW
            desc="h s t s"
            />
            <Intro
            subtitle="Exceptional Jacksonville grass mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  y"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="i"
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
        