
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
            title="Columbus concrete curbing | We'll Take Care Of Everything" 
            desc="Columbus concrete curbing: h  "
            canonical={`${props.website}/columbus-concrete-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus concrete curbing" //KW
            />
            <Header
            title="Columbus concrete curbing" //KW
            subtitle="h  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="c n"
            image="/window-installation.jpg"
            alt="Columbus concrete curbing"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Columbus concrete curbing" //KW
            desc="n w f o"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="Columbus concrete curbing" //KW
            desc="d a t  "
            />
            <Intro
            subtitle="Exceptional Columbus concrete curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="o n"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        