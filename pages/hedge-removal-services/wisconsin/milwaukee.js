
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
            title="Milwaukee hedge removal services | We'll Take Care Of Everything" 
            desc="Milwaukee hedge removal services: e o"
            canonical={`${props.website}/milwaukee-hedge-removal-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee hedge removal services" //KW
            />
            <Header
            title="Milwaukee hedge removal services" //KW
            subtitle="e o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t t"
            image="/contractor.jpg"
            alt="Milwaukee hedge removal services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Milwaukee hedge removal services" //KW
            desc="t n . s"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="s"
            cardDesc3="t"
            />
            <Approach
            title="Milwaukee hedge removal services" //KW
            desc="  i   p"
            />
            <Intro
            subtitle="Exceptional Milwaukee hedge removal services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="o d"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="i"
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
        