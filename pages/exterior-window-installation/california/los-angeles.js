
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
            title="Los Angeles exterior window installation | We'll Take Care Of Everything" 
            desc="Los Angeles exterior window installation: e  "
            canonical={`${props.website}/los-angeles-exterior-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles exterior window installation" //KW
            />
            <Header
            title="Los Angeles exterior window installation" //KW
            subtitle="e  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  i"
            image="/window-installations.jpg"
            alt="Los Angeles exterior window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Los Angeles exterior window installation" //KW
            desc="b i r t"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="q"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="r"
            cardDesc3="J"
            />
            <Approach
            title="Los Angeles exterior window installation" //KW
            desc="u r   c"
            />
            <Intro
            subtitle="Exceptional Los Angeles exterior window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="l  "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="y"
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
        