
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
            title="Seattle pruning hedges | We'll Take Care Of Everything" 
            desc="Seattle pruning hedges: e  "
            canonical={`${props.website}/seattle-pruning-hedges`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle pruning hedges" //KW
            />
            <Header
            title="Seattle pruning hedges" //KW
            subtitle="e  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="g d"
            image="/contractor.jpg"
            alt="Seattle pruning hedges"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Seattle pruning hedges" //KW
            desc="  r o undefined"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="a"
            cardDesc3="t"
            />
            <Approach
            title="Seattle pruning hedges" //KW
            desc="s i n k"
            />
            <Intro
            subtitle="Exceptional Seattle pruning hedges" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="v undefined"
            cardDesc3="n"
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
        