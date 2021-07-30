
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
            title="Detroit lawn maintenance | We'll Take Care Of Everything" 
            desc="Detroit lawn maintenance: e i"
            canonical={`${props.website}/detroit-lawn-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit lawn maintenance" //KW
            />
            <Header
            title="Detroit lawn maintenance" //KW
            subtitle="e i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="l a"
            image="/window-installation.jpg"
            alt="Detroit lawn maintenance"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Detroit lawn maintenance" //KW
            desc="s a a i"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="t"
            cardDesc3="i"
            />
            <Approach
            title="Detroit lawn maintenance" //KW
            desc="o a i e"
            />
            <Intro
            subtitle="Exceptional Detroit lawn maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="o  "
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="."
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
        