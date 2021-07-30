
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
            title="Chicago grass cutting companies | We'll Take Care Of Everything" 
            desc="Chicago grass cutting companies: c e"
            canonical={`${props.website}/chicago-grass-cutting-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago grass cutting companies" //KW
            />
            <Header
            title="Chicago grass cutting companies" //KW
            subtitle="c e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t w"
            image="/window-installation.jpg"
            alt="Chicago grass cutting companies"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Chicago grass cutting companies" //KW
            desc="  o l l"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Chicago grass cutting companies" //KW
            desc="n o r  "
            />
            <Intro
            subtitle="Exceptional Chicago grass cutting companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="e  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
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
        