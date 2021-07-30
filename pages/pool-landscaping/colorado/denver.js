
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
            title="Denver pool landscaping | We'll Take Care Of Everything" 
            desc="Denver pool landscaping: , s"
            canonical={`${props.website}/denver-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver pool landscaping" //KW
            />
            <Header
            title="Denver pool landscaping" //KW
            subtitle=", s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r n"
            image="/window-installation.jpg"
            alt="Denver pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Denver pool landscaping" //KW
            desc="u y u undefined"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="e"
            cardDesc3="o"
            />
            <Approach
            title="Denver pool landscaping" //KW
            desc="s b y  "
            />
            <Intro
            subtitle="Exceptional Denver pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t undefined"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="n"
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
        