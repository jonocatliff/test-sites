
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
            title="Ottowa lawn fertilization | We'll Take Care Of Everything" 
            desc="Ottowa lawn fertilization: d l"
            canonical={`${props.website}/ottowa-lawn-fertilization`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa lawn fertilization" //KW
            />
            <Header
            title="Ottowa lawn fertilization" //KW
            subtitle="d l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r e"
            image="/window-installations.jpg"
            alt="Ottowa lawn fertilization"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Ottowa lawn fertilization" //KW
            desc="i   e o"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="A"
            cardDesc3="l"
            />
            <Approach
            title="Ottowa lawn fertilization" //KW
            desc="t e n  "
            />
            <Intro
            subtitle="Exceptional Ottowa lawn fertilization" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i e"
            cardDesc3="."
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="m"
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
        