
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
            title="San Diego grass mowing service | We'll Take Care Of Everything" 
            desc="San Diego grass mowing service: t i"
            canonical={`${props.website}/san-diego-grass-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego grass mowing service" //KW
            />
            <Header
            title="San Diego grass mowing service" //KW
            subtitle="t i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="v r"
            image="/window-installation.jpg"
            alt="San Diego grass mowing service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Diego grass mowing service" //KW
            desc="t i   a"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="t"
            cardDesc3=" "
            />
            <Approach
            title="San Diego grass mowing service" //KW
            desc="  o   y"
            />
            <Intro
            subtitle="Exceptional San Diego grass mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="r d"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="l"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        