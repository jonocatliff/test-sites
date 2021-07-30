
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
            title="Vancouver lawn care maintenance | We'll Take Care Of Everything" 
            desc="Vancouver lawn care maintenance: h o"
            canonical={`${props.website}/vancouver-lawn-care-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver lawn care maintenance" //KW
            />
            <Header
            title="Vancouver lawn care maintenance" //KW
            subtitle="h o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="d e"
            image="/window-washing.jpg"
            alt="Vancouver lawn care maintenance"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Vancouver lawn care maintenance" //KW
            desc="s w e e"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Vancouver lawn care maintenance" //KW
            desc="e l w g"
            />
            <Intro
            subtitle="Exceptional Vancouver lawn care maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="o o"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2=" "
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
        