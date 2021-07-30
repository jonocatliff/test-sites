
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
            title="Fresno house window replacement near me | We'll Take Care Of Everything" 
            desc="Fresno house window replacement near me: w o"
            canonical={`${props.website}/fresno-house-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno house window replacement near me" //KW
            />
            <Header
            title="Fresno house window replacement near me" //KW
            subtitle="w o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r t"
            image="/window-installations.jpg"
            alt="Fresno house window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Fresno house window replacement near me" //KW
            desc="i a   w"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="v"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="Fresno house window replacement near me" //KW
            desc="r   o o"
            />
            <Intro
            subtitle="Exceptional Fresno house window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="f F"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2="o"
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
        