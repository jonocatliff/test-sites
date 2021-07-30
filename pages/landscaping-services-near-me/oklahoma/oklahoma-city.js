
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
            title="Oklahoma City landscaping services near me | We'll Take Care Of Everything" 
            desc="Oklahoma City landscaping services near me: o d"
            canonical={`${props.website}/oklahoma-city-landscaping-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City landscaping services near me" //KW
            />
            <Header
            title="Oklahoma City landscaping services near me" //KW
            subtitle="o d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="   "
            image="/window-installations.jpg"
            alt="Oklahoma City landscaping services near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Oklahoma City landscaping services near me" //KW
            desc="  e s s"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="i"
            cardDesc3="o"
            />
            <Approach
            title="Oklahoma City landscaping services near me" //KW
            desc="e O e v"
            />
            <Intro
            subtitle="Exceptional Oklahoma City landscaping services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e e"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        