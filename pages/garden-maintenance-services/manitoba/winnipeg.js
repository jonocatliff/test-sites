
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
            title="Winnipeg garden maintenance services | We'll Take Care Of Everything" 
            desc="Winnipeg garden maintenance services: a u"
            canonical={`${props.website}/winnipeg-garden-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg garden maintenance services" //KW
            />
            <Header
            title="Winnipeg garden maintenance services" //KW
            subtitle="a u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="s  "
            image="/window-installation.jpg"
            alt="Winnipeg garden maintenance services"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Winnipeg garden maintenance services" //KW
            desc="n r e y"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="y"
            cardDesc3="f"
            />
            <Approach
            title="Winnipeg garden maintenance services" //KW
            desc="s   o c"
            />
            <Intro
            subtitle="Exceptional Winnipeg garden maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="g  "
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2=" "
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
        