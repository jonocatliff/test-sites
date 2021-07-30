
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
            title="New York City skylight window replacement | We'll Take Care Of Everything" 
            desc="New York City skylight window replacement: n m"
            canonical={`${props.website}/new-york-city-skylight-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City skylight window replacement" //KW
            />
            <Header
            title="New York City skylight window replacement" //KW
            subtitle="n m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o v"
            image="/window-washing.jpg"
            alt="New York City skylight window replacement"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional New York City skylight window replacement" //KW
            desc="p r . u"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="New York City skylight window replacement" //KW
            desc="w   s  "
            />
            <Intro
            subtitle="Exceptional New York City skylight window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="n e"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="r"
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
        