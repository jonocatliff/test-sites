
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
            title="Brampton grass cutting service | We'll Take Care Of Everything" 
            desc="Brampton grass cutting service: A l"
            canonical={`${props.website}/brampton-grass-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton grass cutting service" //KW
            />
            <Header
            title="Brampton grass cutting service" //KW
            subtitle="A l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="t e"
            image="/window-installations.jpg"
            alt="Brampton grass cutting service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Brampton grass cutting service" //KW
            desc="i l m  "
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=","
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="h"
            cardDesc3="t"
            />
            <Approach
            title="Brampton grass cutting service" //KW
            desc="a l   y"
            />
            <Intro
            subtitle="Exceptional Brampton grass cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="i o"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="i"
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
        