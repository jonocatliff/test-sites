
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
            title="Memphis best lawn service | We'll Take Care Of Everything" 
            desc="Memphis best lawn service: e r"
            canonical={`${props.website}/memphis-best-lawn-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis best lawn service" //KW
            />
            <Header
            title="Memphis best lawn service" //KW
            subtitle="e r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a l"
            image="/window-washing.jpg"
            alt="Memphis best lawn service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Memphis best lawn service" //KW
            desc="a o e  "
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="n"
            cardDesc3="I"
            />
            <Approach
            title="Memphis best lawn service" //KW
            desc="r o a o"
            />
            <Intro
            subtitle="Exceptional Memphis best lawn service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="a  "
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="e"
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
        