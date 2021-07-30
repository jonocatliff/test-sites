
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
            title="New York City lawn care companies | We'll Take Care Of Everything" 
            desc="New York City lawn care companies: a u"
            canonical={`${props.website}/new-york-city-lawn-care-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City lawn care companies" //KW
            />
            <Header
            title="New York City lawn care companies" //KW
            subtitle="a u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  o"
            image="/contractor.jpg"
            alt="New York City lawn care companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional New York City lawn care companies" //KW
            desc="  s x d"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="b"
            cardDesc3="n"
            />
            <Approach
            title="New York City lawn care companies" //KW
            desc="  e d u"
            />
            <Intro
            subtitle="Exceptional New York City lawn care companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="y u"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="r"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        