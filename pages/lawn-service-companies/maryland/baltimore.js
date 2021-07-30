
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
            title="Baltimore lawn service companies | We'll Take Care Of Everything" 
            desc="Baltimore lawn service companies: ,  "
            canonical={`${props.website}/baltimore-lawn-service-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore lawn service companies" //KW
            />
            <Header
            title="Baltimore lawn service companies" //KW
            subtitle=",  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  t"
            image="/window-installation.jpg"
            alt="Baltimore lawn service companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Baltimore lawn service companies" //KW
            desc="e u l t"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="d"
            cardDesc3=" "
            />
            <Approach
            title="Baltimore lawn service companies" //KW
            desc="w a , r"
            />
            <Intro
            subtitle="Exceptional Baltimore lawn service companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="l n"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2=","
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
        