
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
            title="Hamilton lawn repair near me | We'll Take Care Of Everything" 
            desc="Hamilton lawn repair near me: u l"
            canonical={`${props.website}/hamilton-lawn-repair-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton lawn repair near me" //KW
            />
            <Header
            title="Hamilton lawn repair near me" //KW
            subtitle="u l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a d"
            image="/contractor.jpg"
            alt="Hamilton lawn repair near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Hamilton lawn repair near me" //KW
            desc="r n v i"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Hamilton lawn repair near me" //KW
            desc="l d   t"
            />
            <Intro
            subtitle="Exceptional Hamilton lawn repair near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o  "
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="."
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
        