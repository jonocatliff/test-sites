
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
            title="Fort Worth local landscaping | We'll Take Care Of Everything" 
            desc="Fort Worth local landscaping:   v"
            canonical={`${props.website}/fort-worth-local-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth local landscaping" //KW
            />
            <Header
            title="Fort Worth local landscaping" //KW
            subtitle="  v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i i"
            image="/contractor.jpg"
            alt="Fort Worth local landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fort Worth local landscaping" //KW
            desc="n A i u"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="t"
            cardDesc3="i"
            />
            <Approach
            title="Fort Worth local landscaping" //KW
            desc="e l w  "
            />
            <Intro
            subtitle="Exceptional Fort Worth local landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i v"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="a"
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
        