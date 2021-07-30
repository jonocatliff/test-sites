
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
            title="Detroit house window replacement near me | We'll Take Care Of Everything" 
            desc="Detroit house window replacement near me: i d"
            canonical={`${props.website}/detroit-house-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit house window replacement near me" //KW
            />
            <Header
            title="Detroit house window replacement near me" //KW
            subtitle="i d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  e"
            image="/window-installation.jpg"
            alt="Detroit house window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Detroit house window replacement near me" //KW
            desc="s , i  "
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2=" "
            cardDesc3="g"
            />
            <Approach
            title="Detroit house window replacement near me" //KW
            desc="t t w m"
            />
            <Intro
            subtitle="Exceptional Detroit house window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="   "
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        