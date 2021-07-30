
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
            title="Ottowa landscaping companies | We'll Take Care Of Everything" 
            desc="Ottowa landscaping companies: e n"
            canonical={`${props.website}/ottowa-landscaping-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa landscaping companies" //KW
            />
            <Header
            title="Ottowa landscaping companies" //KW
            subtitle="e n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t t"
            image="/window-installation.jpg"
            alt="Ottowa landscaping companies"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Ottowa landscaping companies" //KW
            desc="I l t  "
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Ottowa landscaping companies" //KW
            desc="a r i s"
            />
            <Intro
            subtitle="Exceptional Ottowa landscaping companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="v t"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="P"
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
        