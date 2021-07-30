
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
            title="Calgary house window replacement near me | We'll Take Care Of Everything" 
            desc="Calgary house window replacement near me: e  "
            canonical={`${props.website}/calgary-house-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary house window replacement near me" //KW
            />
            <Header
            title="Calgary house window replacement near me" //KW
            subtitle="e  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="w p"
            image="/window-washing.jpg"
            alt="Calgary house window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Calgary house window replacement near me" //KW
            desc="u h i e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="y"
            cardDesc3=","
            />
            <Approach
            title="Calgary house window replacement near me" //KW
            desc="c o i y"
            />
            <Intro
            subtitle="Exceptional Calgary house window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="  e"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        