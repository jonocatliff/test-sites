
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
            title="Washington DC grass mowing service | We'll Take Care Of Everything" 
            desc="Washington DC grass mowing service: d o"
            canonical={`${props.website}/washington-dc-grass-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC grass mowing service" //KW
            />
            <Header
            title="Washington DC grass mowing service" //KW
            subtitle="d o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="w '"
            image="/window-installation.jpg"
            alt="Washington DC grass mowing service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Washington DC grass mowing service" //KW
            desc="    e  "
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Washington DC grass mowing service" //KW
            desc="  a d a"
            />
            <Intro
            subtitle="Exceptional Washington DC grass mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="w e"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="u"
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
        