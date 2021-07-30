
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
            title="Jacksonville grass cutting service | We'll Take Care Of Everything" 
            desc="Jacksonville grass cutting service: b  "
            canonical={`${props.website}/jacksonville-grass-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville grass cutting service" //KW
            />
            <Header
            title="Jacksonville grass cutting service" //KW
            subtitle="b  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="m b"
            image="/contractor.jpg"
            alt="Jacksonville grass cutting service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Jacksonville grass cutting service" //KW
            desc="t y t e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="e"
            cardDesc3="l"
            />
            <Approach
            title="Jacksonville grass cutting service" //KW
            desc="i y e d"
            />
            <Intro
            subtitle="Exceptional Jacksonville grass cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n  "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="s"
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
        