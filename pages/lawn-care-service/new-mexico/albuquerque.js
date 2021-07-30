
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
            title="Albuquerque lawn care service | We'll Take Care Of Everything" 
            desc="Albuquerque lawn care service: p i"
            canonical={`${props.website}/albuquerque-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque lawn care service" //KW
            />
            <Header
            title="Albuquerque lawn care service" //KW
            subtitle="p i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o  "
            image="/window-installations.jpg"
            alt="Albuquerque lawn care service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Albuquerque lawn care service" //KW
            desc="i o w u"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="p"
            cardDesc3="c"
            />
            <Approach
            title="Albuquerque lawn care service" //KW
            desc="i d t v"
            />
            <Intro
            subtitle="Exceptional Albuquerque lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="  e"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="t"
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
        