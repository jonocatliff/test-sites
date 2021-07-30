
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
            title="Brampton hedge cutting services | We'll Take Care Of Everything" 
            desc="Brampton hedge cutting services: l w"
            canonical={`${props.website}/brampton-hedge-cutting-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton hedge cutting services" //KW
            />
            <Header
            title="Brampton hedge cutting services" //KW
            subtitle="l w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="O e"
            image="/window-installation.jpg"
            alt="Brampton hedge cutting services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Brampton hedge cutting services" //KW
            desc="p s c  "
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="g"
            cardDesc3=" "
            />
            <Approach
            title="Brampton hedge cutting services" //KW
            desc="d e y k"
            />
            <Intro
            subtitle="Exceptional Brampton hedge cutting services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="a e"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="t"
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
        