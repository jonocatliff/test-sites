
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
            title="Columbus landscaping front of house | We'll Take Care Of Everything" 
            desc="Columbus landscaping front of house: l o"
            canonical={`${props.website}/columbus-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus landscaping front of house" //KW
            />
            <Header
            title="Columbus landscaping front of house" //KW
            subtitle="l o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="l  "
            image="/window-installation.jpg"
            alt="Columbus landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Columbus landscaping front of house" //KW
            desc="i l e a"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="p"
            cardDesc3="o"
            />
            <Approach
            title="Columbus landscaping front of house" //KW
            desc="  a   r"
            />
            <Intro
            subtitle="Exceptional Columbus landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="   "
            cardDesc3="o"
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
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        