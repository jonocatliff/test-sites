
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
            title="Tucson landscaping contractors | We'll Take Care Of Everything" 
            desc="Tucson landscaping contractors: t  "
            canonical={`${props.website}/tucson-landscaping-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson landscaping contractors" //KW
            />
            <Header
            title="Tucson landscaping contractors" //KW
            subtitle="t  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r e"
            image="/contractor.jpg"
            alt="Tucson landscaping contractors"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Tucson landscaping contractors" //KW
            desc="a e u  "
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="t"
            cardDesc3="a"
            />
            <Approach
            title="Tucson landscaping contractors" //KW
            desc=",   w o"
            />
            <Intro
            subtitle="Exceptional Tucson landscaping contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="d i"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
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
        