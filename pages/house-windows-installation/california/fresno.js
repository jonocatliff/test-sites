
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
            title="Fresno house windows installation | We'll Take Care Of Everything" 
            desc="Fresno house windows installation: i s"
            canonical={`${props.website}/fresno-house-windows-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno house windows installation" //KW
            />
            <Header
            title="Fresno house windows installation" //KW
            subtitle="i s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t  "
            image="/window-washing.jpg"
            alt="Fresno house windows installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Fresno house windows installation" //KW
            desc="  c d o"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="a"
            cardDesc3="W"
            />
            <Approach
            title="Fresno house windows installation" //KW
            desc="u   e r"
            />
            <Intro
            subtitle="Exceptional Fresno house windows installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c s"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="n"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        