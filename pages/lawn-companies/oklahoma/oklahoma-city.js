
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
            title="Oklahoma City lawn companies | We'll Take Care Of Everything" 
            desc="Oklahoma City lawn companies: w a"
            canonical={`${props.website}/oklahoma-city-lawn-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City lawn companies" //KW
            />
            <Header
            title="Oklahoma City lawn companies" //KW
            subtitle="w a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="i a"
            image="/window-installation.jpg"
            alt="Oklahoma City lawn companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Oklahoma City lawn companies" //KW
            desc="n     y"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="n"
            cardDesc3="a"
            />
            <Approach
            title="Oklahoma City lawn companies" //KW
            desc="t a r n"
            />
            <Intro
            subtitle="Exceptional Oklahoma City lawn companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="O o"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="b"
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
        