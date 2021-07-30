
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
            title="Memphis landscaping companies near me | We'll Take Care Of Everything" 
            desc="Memphis landscaping companies near me: A k"
            canonical={`${props.website}/memphis-landscaping-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis landscaping companies near me" //KW
            />
            <Header
            title="Memphis landscaping companies near me" //KW
            subtitle="A k"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s g"
            image="/window-installation.jpg"
            alt="Memphis landscaping companies near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Memphis landscaping companies near me" //KW
            desc="u   i o"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="s"
            cardDesc3="l"
            />
            <Approach
            title="Memphis landscaping companies near me" //KW
            desc="w o v g"
            />
            <Intro
            subtitle="Exceptional Memphis landscaping companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="s ’"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="w"
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
        