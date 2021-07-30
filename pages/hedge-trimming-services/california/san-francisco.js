
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
            title="San Francisco hedge trimming services | We'll Take Care Of Everything" 
            desc="San Francisco hedge trimming services: h P"
            canonical={`${props.website}/san-francisco-hedge-trimming-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco hedge trimming services" //KW
            />
            <Header
            title="San Francisco hedge trimming services" //KW
            subtitle="h P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="d c"
            image="/window-installations.jpg"
            alt="San Francisco hedge trimming services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Francisco hedge trimming services" //KW
            desc="g w e e"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="i"
            cardDesc3="a"
            />
            <Approach
            title="San Francisco hedge trimming services" //KW
            desc="o p f  "
            />
            <Intro
            subtitle="Exceptional San Francisco hedge trimming services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="s  "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="n"
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
        