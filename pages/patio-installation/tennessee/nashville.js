
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
            title="Nashville patio installation | We'll Take Care Of Everything" 
            desc="Nashville patio installation: . e"
            canonical={`${props.website}/nashville-patio-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville patio installation" //KW
            />
            <Header
            title="Nashville patio installation" //KW
            subtitle=". e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e e"
            image="/contractor.jpg"
            alt="Nashville patio installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Nashville patio installation" //KW
            desc="c   o undefined"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="I"
            cardDesc3="n"
            />
            <Approach
            title="Nashville patio installation" //KW
            desc="e   e i"
            />
            <Intro
            subtitle="Exceptional Nashville patio installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="  undefined"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="l"
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
        