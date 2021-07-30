
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
            title="Los Angeles patio landscaping | We'll Take Care Of Everything" 
            desc="Los Angeles patio landscaping: i r"
            canonical={`${props.website}/los-angeles-patio-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles patio landscaping" //KW
            />
            <Header
            title="Los Angeles patio landscaping" //KW
            subtitle="i r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a  "
            image="/window-installations.jpg"
            alt="Los Angeles patio landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Los Angeles patio landscaping" //KW
            desc="  c   undefined"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="u"
            cardDesc3="c"
            />
            <Approach
            title="Los Angeles patio landscaping" //KW
            desc="b p w e"
            />
            <Intro
            subtitle="Exceptional Los Angeles patio landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="g undefined"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        