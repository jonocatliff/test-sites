
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
            title="Detroit lawn care companies near me | We'll Take Care Of Everything" 
            desc="Detroit lawn care companies near me: o  "
            canonical={`${props.website}/detroit-lawn-care-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit lawn care companies near me" //KW
            />
            <Header
            title="Detroit lawn care companies near me" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  a"
            image="/contractor.jpg"
            alt="Detroit lawn care companies near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Detroit lawn care companies near me" //KW
            desc="d l e e"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="l"
            cardDesc3="r"
            />
            <Approach
            title="Detroit lawn care companies near me" //KW
            desc="r r   e"
            />
            <Intro
            subtitle="Exceptional Detroit lawn care companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="o e"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="n"
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
        