
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
            title="Fresno lawn care near me | We'll Take Care Of Everything" 
            desc="Fresno lawn care near me: s  "
            canonical={`${props.website}/fresno-lawn-care-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno lawn care near me" //KW
            />
            <Header
            title="Fresno lawn care near me" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a s"
            image="/window-washing.jpg"
            alt="Fresno lawn care near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Fresno lawn care near me" //KW
            desc="d n   i"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="."
            cardDesc3="s"
            />
            <Approach
            title="Fresno lawn care near me" //KW
            desc="t   e o"
            />
            <Intro
            subtitle="Exceptional Fresno lawn care near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t f"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2=" "
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
        