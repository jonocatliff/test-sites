
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
            title="New York City grass lawn care | We'll Take Care Of Everything" 
            desc="New York City grass lawn care: a u"
            canonical={`${props.website}/new-york-city-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City grass lawn care" //KW
            />
            <Header
            title="New York City grass lawn care" //KW
            subtitle="a u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc=", g"
            image="/window-installation.jpg"
            alt="New York City grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional New York City grass lawn care" //KW
            desc="  r   d"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="s"
            cardDesc3="o"
            />
            <Approach
            title="New York City grass lawn care" //KW
            desc="  n e i"
            />
            <Intro
            subtitle="Exceptional New York City grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="t  "
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2=" "
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
        