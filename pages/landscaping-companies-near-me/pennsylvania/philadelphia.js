
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
            title="Philadelphia landscaping companies near me | We'll Take Care Of Everything" 
            desc="Philadelphia landscaping companies near me: o y"
            canonical={`${props.website}/philadelphia-landscaping-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia landscaping companies near me" //KW
            />
            <Header
            title="Philadelphia landscaping companies near me" //KW
            subtitle="o y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="i o"
            image="/window-installations.jpg"
            alt="Philadelphia landscaping companies near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Philadelphia landscaping companies near me" //KW
            desc="d e   g"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="s"
            cardDesc3="s"
            />
            <Approach
            title="Philadelphia landscaping companies near me" //KW
            desc="w . e e"
            />
            <Intro
            subtitle="Exceptional Philadelphia landscaping companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="s e"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="O" //KW
            desc2="l"
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
        