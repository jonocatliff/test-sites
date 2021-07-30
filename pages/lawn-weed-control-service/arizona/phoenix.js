
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
            title="Phoenix lawn weed control service | We'll Take Care Of Everything" 
            desc="Phoenix lawn weed control service: t d"
            canonical={`${props.website}/phoenix-lawn-weed-control-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix lawn weed control service" //KW
            />
            <Header
            title="Phoenix lawn weed control service" //KW
            subtitle="t d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  n"
            image="/contractor.jpg"
            alt="Phoenix lawn weed control service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Phoenix lawn weed control service" //KW
            desc="  v .  "
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="i"
            cardDesc3="a"
            />
            <Approach
            title="Phoenix lawn weed control service" //KW
            desc="i   x a"
            />
            <Intro
            subtitle="Exceptional Phoenix lawn weed control service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="   "
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
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
        