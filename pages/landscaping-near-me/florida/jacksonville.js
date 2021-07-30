
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
            title="Jacksonville landscaping near me | We'll Take Care Of Everything" 
            desc="Jacksonville landscaping near me: n o"
            canonical={`${props.website}/jacksonville-landscaping-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville landscaping near me" //KW
            />
            <Header
            title="Jacksonville landscaping near me" //KW
            subtitle="n o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e ."
            image="/contractor.jpg"
            alt="Jacksonville landscaping near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Jacksonville landscaping near me" //KW
            desc="s n s o"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="i"
            cardDesc3="a"
            />
            <Approach
            title="Jacksonville landscaping near me" //KW
            desc="    p g"
            />
            <Intro
            subtitle="Exceptional Jacksonville landscaping near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  l"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="e"
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
        