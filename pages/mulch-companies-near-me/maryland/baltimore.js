
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
            title="Baltimore mulch companies near me | We'll Take Care Of Everything" 
            desc="Baltimore mulch companies near me: i a"
            canonical={`${props.website}/baltimore-mulch-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore mulch companies near me" //KW
            />
            <Header
            title="Baltimore mulch companies near me" //KW
            subtitle="i a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="t t"
            image="/window-installation.jpg"
            alt="Baltimore mulch companies near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Baltimore mulch companies near me" //KW
            desc="a w e c"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="m"
            cardDesc3="l"
            />
            <Approach
            title="Baltimore mulch companies near me" //KW
            desc="d b w  "
            />
            <Intro
            subtitle="Exceptional Baltimore mulch companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="c undefined"
            cardDesc3="W"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="l"
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
        