
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
            title="Phoenix landscape design services | We'll Take Care Of Everything" 
            desc="Phoenix landscape design services:   r"
            canonical={`${props.website}/phoenix-landscape-design-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix landscape design services" //KW
            />
            <Header
            title="Phoenix landscape design services" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o r"
            image="/window-installations.jpg"
            alt="Phoenix landscape design services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Phoenix landscape design services" //KW
            desc="  s d  "
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="r"
            cardDesc3="i"
            />
            <Approach
            title="Phoenix landscape design services" //KW
            desc="d o w g"
            />
            <Intro
            subtitle="Exceptional Phoenix landscape design services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="u n"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="a"
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
        