
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
            title="Chicago lawn spray service | We'll Take Care Of Everything" 
            desc="Chicago lawn spray service: i d"
            canonical={`${props.website}/chicago-lawn-spray-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago lawn spray service" //KW
            />
            <Header
            title="Chicago lawn spray service" //KW
            subtitle="i d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="v  "
            image="/window-installations.jpg"
            alt="Chicago lawn spray service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Chicago lawn spray service" //KW
            desc="h e r n"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="e"
            cardDesc3="w"
            />
            <Approach
            title="Chicago lawn spray service" //KW
            desc="a a w a"
            />
            <Intro
            subtitle="Exceptional Chicago lawn spray service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="i f"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="w"
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
        