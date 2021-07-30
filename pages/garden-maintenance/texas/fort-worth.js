
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
            title="Fort Worth garden maintenance | We'll Take Care Of Everything" 
            desc="Fort Worth garden maintenance: x v"
            canonical={`${props.website}/fort-worth-garden-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth garden maintenance" //KW
            />
            <Header
            title="Fort Worth garden maintenance" //KW
            subtitle="x v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a a"
            image="/window-installation.jpg"
            alt="Fort Worth garden maintenance"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Fort Worth garden maintenance" //KW
            desc="a s d r"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="i"
            cardDesc3="t"
            />
            <Approach
            title="Fort Worth garden maintenance" //KW
            desc="  p d c"
            />
            <Intro
            subtitle="Exceptional Fort Worth garden maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t o"
            cardDesc3="A"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="e"
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
        