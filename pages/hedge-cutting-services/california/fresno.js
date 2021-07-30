
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
            title="Fresno hedge cutting services | We'll Take Care Of Everything" 
            desc="Fresno hedge cutting services: n o"
            canonical={`${props.website}/fresno-hedge-cutting-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno hedge cutting services" //KW
            />
            <Header
            title="Fresno hedge cutting services" //KW
            subtitle="n o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t  "
            image="/window-installation.jpg"
            alt="Fresno hedge cutting services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fresno hedge cutting services" //KW
            desc="w   i w"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Fresno hedge cutting services" //KW
            desc="i f y a"
            />
            <Intro
            subtitle="Exceptional Fresno hedge cutting services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="c s"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="e"
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
        