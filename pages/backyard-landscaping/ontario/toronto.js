
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
            title="Toronto backyard landscaping | We'll Take Care Of Everything" 
            desc="Toronto backyard landscaping: n  "
            canonical={`${props.website}/toronto-backyard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto backyard landscaping" //KW
            />
            <Header
            title="Toronto backyard landscaping" //KW
            subtitle="n  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="l e"
            image="/window-installations.jpg"
            alt="Toronto backyard landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Toronto backyard landscaping" //KW
            desc="  u y l"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="y"
            cardDesc3=" "
            />
            <Approach
            title="Toronto backyard landscaping" //KW
            desc="i f t  "
            />
            <Intro
            subtitle="Exceptional Toronto backyard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="a f"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="r"
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
        