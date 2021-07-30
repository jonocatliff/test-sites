
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
            title="Chicago window installation contractors | We'll Take Care Of Everything" 
            desc="Chicago window installation contractors: w a"
            canonical={`${props.website}/chicago-window-installation-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago window installation contractors" //KW
            />
            <Header
            title="Chicago window installation contractors" //KW
            subtitle="w a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t e"
            image="/contractor.jpg"
            alt="Chicago window installation contractors"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Chicago window installation contractors" //KW
            desc="c s o r"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="e"
            cardDesc3="e"
            />
            <Approach
            title="Chicago window installation contractors" //KW
            desc="s   s a"
            />
            <Intro
            subtitle="Exceptional Chicago window installation contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="o i"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="'" //KW
            desc2="e"
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
        