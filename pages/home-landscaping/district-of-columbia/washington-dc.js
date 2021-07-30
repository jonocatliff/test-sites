
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
            title="Washington DC home landscaping | We'll Take Care Of Everything" 
            desc="Washington DC home landscaping: n m"
            canonical={`${props.website}/washington-dc-home-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC home landscaping" //KW
            />
            <Header
            title="Washington DC home landscaping" //KW
            subtitle="n m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="y o"
            image="/contractor.jpg"
            alt="Washington DC home landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Washington DC home landscaping" //KW
            desc="o o o i"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Washington DC home landscaping" //KW
            desc="a m n ."
            />
            <Intro
            subtitle="Exceptional Washington DC home landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r  "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="c"
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
        