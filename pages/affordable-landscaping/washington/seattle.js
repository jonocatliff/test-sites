
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
            title="Seattle affordable landscaping | We'll Take Care Of Everything" 
            desc="Seattle affordable landscaping:   O"
            canonical={`${props.website}/seattle-affordable-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle affordable landscaping" //KW
            />
            <Header
            title="Seattle affordable landscaping" //KW
            subtitle="  O"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s g"
            image="/window-installations.jpg"
            alt="Seattle affordable landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Seattle affordable landscaping" //KW
            desc="W i f e"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="o"
            cardDesc3="s"
            />
            <Approach
            title="Seattle affordable landscaping" //KW
            desc="e O n o"
            />
            <Intro
            subtitle="Exceptional Seattle affordable landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="s v"
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2="n"
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
        