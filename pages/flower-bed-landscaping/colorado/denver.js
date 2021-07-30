
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
            title="Denver flower bed landscaping | We'll Take Care Of Everything" 
            desc="Denver flower bed landscaping: i o"
            canonical={`${props.website}/denver-flower-bed-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver flower bed landscaping" //KW
            />
            <Header
            title="Denver flower bed landscaping" //KW
            subtitle="i o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="s  "
            image="/contractor.jpg"
            alt="Denver flower bed landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Denver flower bed landscaping" //KW
            desc="h o e s"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="u"
            cardDesc3="e"
            />
            <Approach
            title="Denver flower bed landscaping" //KW
            desc="i i   e"
            />
            <Intro
            subtitle="Exceptional Denver flower bed landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="u r"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="t"
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
        