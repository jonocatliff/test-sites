
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
            title="Surrey driveway landscaping | We'll Take Care Of Everything" 
            desc="Surrey driveway landscaping: t y"
            canonical={`${props.website}/surrey-driveway-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey driveway landscaping" //KW
            />
            <Header
            title="Surrey driveway landscaping" //KW
            subtitle="t y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e f"
            image="/window-washing.jpg"
            alt="Surrey driveway landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Surrey driveway landscaping" //KW
            desc="n o w s"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Surrey driveway landscaping" //KW
            desc="r t a  "
            />
            <Intro
            subtitle="Exceptional Surrey driveway landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="c s"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="r"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        