
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
            title="Portland hedge trimming services | We'll Take Care Of Everything" 
            desc="Portland hedge trimming services: d o"
            canonical={`${props.website}/portland-hedge-trimming-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland hedge trimming services" //KW
            />
            <Header
            title="Portland hedge trimming services" //KW
            subtitle="d o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n o"
            image="/window-washing.jpg"
            alt="Portland hedge trimming services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Portland hedge trimming services" //KW
            desc="d s e a"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3="r"
            />
            <Approach
            title="Portland hedge trimming services" //KW
            desc="w d u  "
            />
            <Intro
            subtitle="Exceptional Portland hedge trimming services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  o"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
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
        