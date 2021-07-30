
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
            title="Vancouver basement window installation | We'll Take Care Of Everything" 
            desc="Vancouver basement window installation: w o"
            canonical={`${props.website}/vancouver-basement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver basement window installation" //KW
            />
            <Header
            title="Vancouver basement window installation" //KW
            subtitle="w o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  c"
            image="/window-washing.jpg"
            alt="Vancouver basement window installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Vancouver basement window installation" //KW
            desc="O r c i"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="b"
            cardDesc3="r"
            />
            <Approach
            title="Vancouver basement window installation" //KW
            desc="r t r o"
            />
            <Intro
            subtitle="Exceptional Vancouver basement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t  "
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
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
        