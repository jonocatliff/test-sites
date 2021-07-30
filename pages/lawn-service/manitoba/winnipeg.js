
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
            title="Winnipeg lawn service | We'll Take Care Of Everything" 
            desc="Winnipeg lawn service:   e"
            canonical={`${props.website}/winnipeg-lawn-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg lawn service" //KW
            />
            <Header
            title="Winnipeg lawn service" //KW
            subtitle="  e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="b t"
            image="/contractor.jpg"
            alt="Winnipeg lawn service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Winnipeg lawn service" //KW
            desc="i i r  "
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="w"
            cardDesc3=" "
            />
            <Approach
            title="Winnipeg lawn service" //KW
            desc="n r f r"
            />
            <Intro
            subtitle="Exceptional Winnipeg lawn service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r f"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        