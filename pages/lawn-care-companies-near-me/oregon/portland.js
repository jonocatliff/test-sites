
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
            title="Portland lawn care companies near me | We'll Take Care Of Everything" 
            desc="Portland lawn care companies near me: n v"
            canonical={`${props.website}/portland-lawn-care-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland lawn care companies near me" //KW
            />
            <Header
            title="Portland lawn care companies near me" //KW
            subtitle="n v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r u"
            image="/window-washing.jpg"
            alt="Portland lawn care companies near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Portland lawn care companies near me" //KW
            desc="a l    "
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="Portland lawn care companies near me" //KW
            desc="  f r a"
            />
            <Intro
            subtitle="Exceptional Portland lawn care companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="u F"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="t"
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
        