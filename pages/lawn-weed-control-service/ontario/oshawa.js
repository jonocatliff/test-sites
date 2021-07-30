
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
            title="Oshawa lawn weed control service | We'll Take Care Of Everything" 
            desc="Oshawa lawn weed control service: s p"
            canonical={`${props.website}/oshawa-lawn-weed-control-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa lawn weed control service" //KW
            />
            <Header
            title="Oshawa lawn weed control service" //KW
            subtitle="s p"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a b"
            image="/window-installation.jpg"
            alt="Oshawa lawn weed control service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Oshawa lawn weed control service" //KW
            desc="x   t s"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="n"
            cardDesc3="i"
            />
            <Approach
            title="Oshawa lawn weed control service" //KW
            desc="o   e c"
            />
            <Intro
            subtitle="Exceptional Oshawa lawn weed control service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="W  "
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="m"
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
        