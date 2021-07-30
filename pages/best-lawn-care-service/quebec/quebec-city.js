
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
            title="Quebec City best lawn care service | We'll Take Care Of Everything" 
            desc="Quebec City best lawn care service: h  "
            canonical={`${props.website}/quebec-city-best-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City best lawn care service" //KW
            />
            <Header
            title="Quebec City best lawn care service" //KW
            subtitle="h  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a t"
            image="/contractor.jpg"
            alt="Quebec City best lawn care service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Quebec City best lawn care service" //KW
            desc="e o a o"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="s"
            cardDesc3="o"
            />
            <Approach
            title="Quebec City best lawn care service" //KW
            desc="o a r e"
            />
            <Intro
            subtitle="Exceptional Quebec City best lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="h w"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2="o"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        