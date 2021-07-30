
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
            title="Chicago lawn care near me | We'll Take Care Of Everything" 
            desc="Chicago lawn care near me: . a"
            canonical={`${props.website}/chicago-lawn-care-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago lawn care near me" //KW
            />
            <Header
            title="Chicago lawn care near me" //KW
            subtitle=". a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="l w"
            image="/window-washing.jpg"
            alt="Chicago lawn care near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Chicago lawn care near me" //KW
            desc="  e a e"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="s"
            cardDesc3="a"
            />
            <Approach
            title="Chicago lawn care near me" //KW
            desc=", a l i"
            />
            <Intro
            subtitle="Exceptional Chicago lawn care near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="   "
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
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
        