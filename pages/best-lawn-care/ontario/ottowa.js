
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
            title="Ottowa best lawn care | We'll Take Care Of Everything" 
            desc="Ottowa best lawn care: o y"
            canonical={`${props.website}/ottowa-best-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa best lawn care" //KW
            />
            <Header
            title="Ottowa best lawn care" //KW
            subtitle="o y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="i  "
            image="/window-installations.jpg"
            alt="Ottowa best lawn care"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Ottowa best lawn care" //KW
            desc="e u i e"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="Ottowa best lawn care" //KW
            desc="e   p e"
            />
            <Intro
            subtitle="Exceptional Ottowa best lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r  "
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2=" "
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
        