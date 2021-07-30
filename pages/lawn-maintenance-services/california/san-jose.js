
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
            title="San Jose lawn maintenance services | We'll Take Care Of Everything" 
            desc="San Jose lawn maintenance services: f n"
            canonical={`${props.website}/san-jose-lawn-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose lawn maintenance services" //KW
            />
            <Header
            title="San Jose lawn maintenance services" //KW
            subtitle="f n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="v r"
            image="/window-washing.jpg"
            alt="San Jose lawn maintenance services"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Jose lawn maintenance services" //KW
            desc="s o e  "
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="s"
            />
            <Approach
            title="San Jose lawn maintenance services" //KW
            desc="n f w e"
            />
            <Intro
            subtitle="Exceptional San Jose lawn maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="o w"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="n"
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
        