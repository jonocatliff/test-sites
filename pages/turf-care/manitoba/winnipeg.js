
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
            title="Winnipeg turf care | We'll Take Care Of Everything" 
            desc="Winnipeg turf care:   u"
            canonical={`${props.website}/winnipeg-turf-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg turf care" //KW
            />
            <Header
            title="Winnipeg turf care" //KW
            subtitle="  u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="v f"
            image="/window-installation.jpg"
            alt="Winnipeg turf care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Winnipeg turf care" //KW
            desc="h o u undefined"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="v"
            cardDesc3="t"
            />
            <Approach
            title="Winnipeg turf care" //KW
            desc="h t b w"
            />
            <Intro
            subtitle="Exceptional Winnipeg turf care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t undefined"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="r"
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
        