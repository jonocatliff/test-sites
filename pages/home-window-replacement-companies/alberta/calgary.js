
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
            title="Calgary home window replacement companies | We'll Take Care Of Everything" 
            desc="Calgary home window replacement companies: p m"
            canonical={`${props.website}/calgary-home-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary home window replacement companies" //KW
            />
            <Header
            title="Calgary home window replacement companies" //KW
            subtitle="p m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e k"
            image="/contractor.jpg"
            alt="Calgary home window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Calgary home window replacement companies" //KW
            desc="l c   m"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Calgary home window replacement companies" //KW
            desc="i p   a"
            />
            <Intro
            subtitle="Exceptional Calgary home window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="I w"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
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
        