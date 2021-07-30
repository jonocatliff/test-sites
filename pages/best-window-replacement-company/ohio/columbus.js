
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
            title="Columbus best window replacement company | We'll Take Care Of Everything" 
            desc="Columbus best window replacement company: t e"
            canonical={`${props.website}/columbus-best-window-replacement-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus best window replacement company" //KW
            />
            <Header
            title="Columbus best window replacement company" //KW
            subtitle="t e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="u p"
            image="/contractor.jpg"
            alt="Columbus best window replacement company"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Columbus best window replacement company" //KW
            desc="    o i"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="p"
            cardDesc3=" "
            />
            <Approach
            title="Columbus best window replacement company" //KW
            desc="t t a e"
            />
            <Intro
            subtitle="Exceptional Columbus best window replacement company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="i i"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
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
        