
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
            title="San Antonio window installation company | We'll Take Care Of Everything" 
            desc="San Antonio window installation company: o  "
            canonical={`${props.website}/san-antonio-window-installation-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio window installation company" //KW
            />
            <Header
            title="San Antonio window installation company" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e i"
            image="/window-washing.jpg"
            alt="San Antonio window installation company"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Antonio window installation company" //KW
            desc="y o r p"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="b"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="a"
            cardDesc3=","
            />
            <Approach
            title="San Antonio window installation company" //KW
            desc="o f    "
            />
            <Intro
            subtitle="Exceptional San Antonio window installation company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="n f"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="p"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        