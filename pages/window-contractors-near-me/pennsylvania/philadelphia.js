
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
            title="Philadelphia window contractors near me | We'll Take Care Of Everything" 
            desc="Philadelphia window contractors near me: l y"
            canonical={`${props.website}/philadelphia-window-contractors-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia window contractors near me" //KW
            />
            <Header
            title="Philadelphia window contractors near me" //KW
            subtitle="l y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="v '"
            image="/contractor.jpg"
            alt="Philadelphia window contractors near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Philadelphia window contractors near me" //KW
            desc="t r h s"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="e"
            cardDesc3="n"
            />
            <Approach
            title="Philadelphia window contractors near me" //KW
            desc="s a o v"
            />
            <Intro
            subtitle="Exceptional Philadelphia window contractors near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="z"
            cardDesc2="  f"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2=" "
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
        