
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
            title="Fresno landscaping services near me | We'll Take Care Of Everything" 
            desc="Fresno landscaping services near me:   l"
            canonical={`${props.website}/fresno-landscaping-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno landscaping services near me" //KW
            />
            <Header
            title="Fresno landscaping services near me" //KW
            subtitle="  l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n e"
            image="/window-installation.jpg"
            alt="Fresno landscaping services near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Fresno landscaping services near me" //KW
            desc="e f e t"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="r"
            cardDesc3="l"
            />
            <Approach
            title="Fresno landscaping services near me" //KW
            desc="o   e v"
            />
            <Intro
            subtitle="Exceptional Fresno landscaping services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="l o"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="b"
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
        