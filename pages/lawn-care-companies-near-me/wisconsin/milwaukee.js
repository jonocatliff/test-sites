
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
            title="Milwaukee lawn care companies near me | We'll Take Care Of Everything" 
            desc="Milwaukee lawn care companies near me: o i"
            canonical={`${props.website}/milwaukee-lawn-care-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee lawn care companies near me" //KW
            />
            <Header
            title="Milwaukee lawn care companies near me" //KW
            subtitle="o i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  n"
            image="/window-washing.jpg"
            alt="Milwaukee lawn care companies near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Milwaukee lawn care companies near me" //KW
            desc="d p o o"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Milwaukee lawn care companies near me" //KW
            desc="n o r e"
            />
            <Intro
            subtitle="Exceptional Milwaukee lawn care companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="e t"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="A" //KW
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
        