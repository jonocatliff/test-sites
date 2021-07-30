
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
            title="Philadelphia lawn cutting service | We'll Take Care Of Everything" 
            desc="Philadelphia lawn cutting service: l n"
            canonical={`${props.website}/philadelphia-lawn-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia lawn cutting service" //KW
            />
            <Header
            title="Philadelphia lawn cutting service" //KW
            subtitle="l n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="m '"
            image="/contractor.jpg"
            alt="Philadelphia lawn cutting service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Philadelphia lawn cutting service" //KW
            desc="o t a d"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3="n"
            />
            <Approach
            title="Philadelphia lawn cutting service" //KW
            desc="a f   c"
            />
            <Intro
            subtitle="Exceptional Philadelphia lawn cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="c e"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="v"
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
        