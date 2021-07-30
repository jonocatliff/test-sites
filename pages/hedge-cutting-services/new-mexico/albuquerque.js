
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
            title="Albuquerque hedge cutting services | We'll Take Care Of Everything" 
            desc="Albuquerque hedge cutting services: t t"
            canonical={`${props.website}/albuquerque-hedge-cutting-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque hedge cutting services" //KW
            />
            <Header
            title="Albuquerque hedge cutting services" //KW
            subtitle="t t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="   "
            image="/window-washing.jpg"
            alt="Albuquerque hedge cutting services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Albuquerque hedge cutting services" //KW
            desc="o o p n"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="i"
            cardDesc3="s"
            />
            <Approach
            title="Albuquerque hedge cutting services" //KW
            desc="e s i o"
            />
            <Intro
            subtitle="Exceptional Albuquerque hedge cutting services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i e"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="r"
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
        