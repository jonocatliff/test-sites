
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
            title="Ottowa garden maintenance services | We'll Take Care Of Everything" 
            desc="Ottowa garden maintenance services: d  "
            canonical={`${props.website}/ottowa-garden-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa garden maintenance services" //KW
            />
            <Header
            title="Ottowa garden maintenance services" //KW
            subtitle="d  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e o"
            image="/window-washing.jpg"
            alt="Ottowa garden maintenance services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Ottowa garden maintenance services" //KW
            desc="s   r s"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Ottowa garden maintenance services" //KW
            desc="t c y y"
            />
            <Intro
            subtitle="Exceptional Ottowa garden maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="."
            cardDesc2="o l"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="m"
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
        