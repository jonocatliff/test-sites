
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
            title="Washington DC hedge cutting services | We'll Take Care Of Everything" 
            desc="Washington DC hedge cutting services: d  "
            canonical={`${props.website}/washington-dc-hedge-cutting-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC hedge cutting services" //KW
            />
            <Header
            title="Washington DC hedge cutting services" //KW
            subtitle="d  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r o"
            image="/contractor.jpg"
            alt="Washington DC hedge cutting services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Washington DC hedge cutting services" //KW
            desc="s a    "
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="i"
            cardDesc3="c"
            />
            <Approach
            title="Washington DC hedge cutting services" //KW
            desc="t n p d"
            />
            <Intro
            subtitle="Exceptional Washington DC hedge cutting services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="z"
            cardDesc2="i  "
            cardDesc3="o"
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
        