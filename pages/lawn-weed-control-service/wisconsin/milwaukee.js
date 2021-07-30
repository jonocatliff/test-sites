
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
            title="Milwaukee lawn weed control service | We'll Take Care Of Everything" 
            desc="Milwaukee lawn weed control service: t v"
            canonical={`${props.website}/milwaukee-lawn-weed-control-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee lawn weed control service" //KW
            />
            <Header
            title="Milwaukee lawn weed control service" //KW
            subtitle="t v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc=", n"
            image="/window-washing.jpg"
            alt="Milwaukee lawn weed control service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Milwaukee lawn weed control service" //KW
            desc="d v t  "
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="e"
            cardDesc3="o"
            />
            <Approach
            title="Milwaukee lawn weed control service" //KW
            desc="a c    "
            />
            <Intro
            subtitle="Exceptional Milwaukee lawn weed control service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="s t"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="p"
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
        