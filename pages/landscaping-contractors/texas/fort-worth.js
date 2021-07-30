
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
            title="Fort Worth landscaping contractors | We'll Take Care Of Everything" 
            desc="Fort Worth landscaping contractors: d o"
            canonical={`${props.website}/fort-worth-landscaping-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth landscaping contractors" //KW
            />
            <Header
            title="Fort Worth landscaping contractors" //KW
            subtitle="d o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r t"
            image="/contractor.jpg"
            alt="Fort Worth landscaping contractors"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Fort Worth landscaping contractors" //KW
            desc="s o s m"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="g"
            cardDesc3="e"
            />
            <Approach
            title="Fort Worth landscaping contractors" //KW
            desc="y   o b"
            />
            <Intro
            subtitle="Exceptional Fort Worth landscaping contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="x e"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="t"
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
        