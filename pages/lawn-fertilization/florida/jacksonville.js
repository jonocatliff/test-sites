
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
            title="Jacksonville lawn fertilization | We'll Take Care Of Everything" 
            desc="Jacksonville lawn fertilization: a o"
            canonical={`${props.website}/jacksonville-lawn-fertilization`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville lawn fertilization" //KW
            />
            <Header
            title="Jacksonville lawn fertilization" //KW
            subtitle="a o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  b"
            image="/contractor.jpg"
            alt="Jacksonville lawn fertilization"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Jacksonville lawn fertilization" //KW
            desc="t e r a"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="v"
            cardDesc2="a"
            cardDesc3="f"
            />
            <Approach
            title="Jacksonville lawn fertilization" //KW
            desc="l i u o"
            />
            <Intro
            subtitle="Exceptional Jacksonville lawn fertilization" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e t"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="A"
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
        