
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
            title="Dallas landscaping front of house | We'll Take Care Of Everything" 
            desc="Dallas landscaping front of house: f t"
            canonical={`${props.website}/dallas-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas landscaping front of house" //KW
            />
            <Header
            title="Dallas landscaping front of house" //KW
            subtitle="f t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="s  "
            image="/window-installation.jpg"
            alt="Dallas landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Dallas landscaping front of house" //KW
            desc="f i s t"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="o"
            cardDesc3="t"
            />
            <Approach
            title="Dallas landscaping front of house" //KW
            desc="g t o  "
            />
            <Intro
            subtitle="Exceptional Dallas landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="w a"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="v"
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
        