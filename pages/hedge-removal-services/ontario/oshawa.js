
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
            title="Oshawa hedge removal services | We'll Take Care Of Everything" 
            desc="Oshawa hedge removal services: e e"
            canonical={`${props.website}/oshawa-hedge-removal-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa hedge removal services" //KW
            />
            <Header
            title="Oshawa hedge removal services" //KW
            subtitle="e e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e o"
            image="/window-installations.jpg"
            alt="Oshawa hedge removal services"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oshawa hedge removal services" //KW
            desc="r n i  "
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="r"
            cardDesc3="c"
            />
            <Approach
            title="Oshawa hedge removal services" //KW
            desc="t s h u"
            />
            <Intro
            subtitle="Exceptional Oshawa hedge removal services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="e x"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="s"
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
        