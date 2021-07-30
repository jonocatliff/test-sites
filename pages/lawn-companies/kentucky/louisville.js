
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
            title="Louisville lawn companies | We'll Take Care Of Everything" 
            desc="Louisville lawn companies: d  "
            canonical={`${props.website}/louisville-lawn-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville lawn companies" //KW
            />
            <Header
            title="Louisville lawn companies" //KW
            subtitle="d  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a o"
            image="/contractor.jpg"
            alt="Louisville lawn companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Louisville lawn companies" //KW
            desc="d u t r"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="a"
            cardDesc3=" "
            />
            <Approach
            title="Louisville lawn companies" //KW
            desc="n   c w"
            />
            <Intro
            subtitle="Exceptional Louisville lawn companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="  w"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="-"
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
        