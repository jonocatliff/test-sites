
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
            title="Nashville best window replacement company | We'll Take Care Of Everything" 
            desc="Nashville best window replacement company: w  "
            canonical={`${props.website}/nashville-best-window-replacement-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville best window replacement company" //KW
            />
            <Header
            title="Nashville best window replacement company" //KW
            subtitle="w  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o e"
            image="/window-installation.jpg"
            alt="Nashville best window replacement company"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Nashville best window replacement company" //KW
            desc="o s t r"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="w"
            cardDesc3=" "
            />
            <Approach
            title="Nashville best window replacement company" //KW
            desc="s w . e"
            />
            <Intro
            subtitle="Exceptional Nashville best window replacement company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="n  "
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="r"
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
        