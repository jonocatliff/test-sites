
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
            title="Boston landscaping company | We'll Take Care Of Everything" 
            desc="Boston landscaping company: e a"
            canonical={`${props.website}/boston-landscaping-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston landscaping company" //KW
            />
            <Header
            title="Boston landscaping company" //KW
            subtitle="e a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="w f"
            image="/window-installation.jpg"
            alt="Boston landscaping company"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Boston landscaping company" //KW
            desc="m   r o"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Boston landscaping company" //KW
            desc="  o   p"
            />
            <Intro
            subtitle="Exceptional Boston landscaping company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="n e"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
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
        