
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
            title="Albuquerque lawn spray service | We'll Take Care Of Everything" 
            desc="Albuquerque lawn spray service: a f"
            canonical={`${props.website}/albuquerque-lawn-spray-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque lawn spray service" //KW
            />
            <Header
            title="Albuquerque lawn spray service" //KW
            subtitle="a f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="f  "
            image="/window-washing.jpg"
            alt="Albuquerque lawn spray service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Albuquerque lawn spray service" //KW
            desc="e e r i"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="n"
            cardDesc3="r"
            />
            <Approach
            title="Albuquerque lawn spray service" //KW
            desc="b o h i"
            />
            <Intro
            subtitle="Exceptional Albuquerque lawn spray service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="i  "
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="t"
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
        