
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
            title="Ottowa install replacement windows | We'll Take Care Of Everything" 
            desc="Ottowa install replacement windows: e s"
            canonical={`${props.website}/ottowa-install-replacement-windows`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa install replacement windows" //KW
            />
            <Header
            title="Ottowa install replacement windows" //KW
            subtitle="e s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o  "
            image="/window-installation.jpg"
            alt="Ottowa install replacement windows"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Ottowa install replacement windows" //KW
            desc="h h    "
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="w"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="d"
            cardDesc3="a"
            />
            <Approach
            title="Ottowa install replacement windows" //KW
            desc="  r t  "
            />
            <Intro
            subtitle="Exceptional Ottowa install replacement windows" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o e"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="o"
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
        