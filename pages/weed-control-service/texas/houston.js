
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
            title="Houston weed control service | We'll Take Care Of Everything" 
            desc="Houston weed control service: t s"
            canonical={`${props.website}/houston-weed-control-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston weed control service" //KW
            />
            <Header
            title="Houston weed control service" //KW
            subtitle="t s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="p  "
            image="/window-washing.jpg"
            alt="Houston weed control service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Houston weed control service" //KW
            desc="d s o undefined"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="o"
            cardDesc3="f"
            />
            <Approach
            title="Houston weed control service" //KW
            desc="c e t n"
            />
            <Intro
            subtitle="Exceptional Houston weed control service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o undefined"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="s"
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
        