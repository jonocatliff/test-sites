
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
            title="Seattle turf care | We'll Take Care Of Everything" 
            desc="Seattle turf care: r o"
            canonical={`${props.website}/seattle-turf-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle turf care" //KW
            />
            <Header
            title="Seattle turf care" //KW
            subtitle="r o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a d"
            image="/contractor.jpg"
            alt="Seattle turf care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Seattle turf care" //KW
            desc="  i s undefined"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="l"
            cardDesc3=" "
            />
            <Approach
            title="Seattle turf care" //KW
            desc="A O w v"
            />
            <Intro
            subtitle="Exceptional Seattle turf care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e undefined"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2="l"
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
        