
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
            title="Brampton install replacement windows | We'll Take Care Of Everything" 
            desc="Brampton install replacement windows: i e"
            canonical={`${props.website}/brampton-install-replacement-windows`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton install replacement windows" //KW
            />
            <Header
            title="Brampton install replacement windows" //KW
            subtitle="i e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="c e"
            image="/window-washing.jpg"
            alt="Brampton install replacement windows"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Brampton install replacement windows" //KW
            desc="d i i i"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2=" "
            cardDesc3="w"
            />
            <Approach
            title="Brampton install replacement windows" //KW
            desc="o d n  "
            />
            <Intro
            subtitle="Exceptional Brampton install replacement windows" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="l y"
            cardDesc3="g"
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
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        