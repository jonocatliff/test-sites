
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
            title="Fort Worth lawn care and landscaping | We'll Take Care Of Everything" 
            desc="Fort Worth lawn care and landscaping: a t"
            canonical={`${props.website}/fort-worth-lawn-care-and-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth lawn care and landscaping" //KW
            />
            <Header
            title="Fort Worth lawn care and landscaping" //KW
            subtitle="a t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="l t"
            image="/window-installations.jpg"
            alt="Fort Worth lawn care and landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fort Worth lawn care and landscaping" //KW
            desc="c s m y"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="s"
            cardDesc3="t"
            />
            <Approach
            title="Fort Worth lawn care and landscaping" //KW
            desc="a s u  "
            />
            <Intro
            subtitle="Exceptional Fort Worth lawn care and landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="r l"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="e"
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
        