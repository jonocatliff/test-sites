
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
            title="Hamilton lawn care and landscaping | We'll Take Care Of Everything" 
            desc="Hamilton lawn care and landscaping: d m"
            canonical={`${props.website}/hamilton-lawn-care-and-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton lawn care and landscaping" //KW
            />
            <Header
            title="Hamilton lawn care and landscaping" //KW
            subtitle="d m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e l"
            image="/contractor.jpg"
            alt="Hamilton lawn care and landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Hamilton lawn care and landscaping" //KW
            desc="t i r o"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="n"
            cardDesc3="l"
            />
            <Approach
            title="Hamilton lawn care and landscaping" //KW
            desc="i i r c"
            />
            <Intro
            subtitle="Exceptional Hamilton lawn care and landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="i i"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="s"
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
        