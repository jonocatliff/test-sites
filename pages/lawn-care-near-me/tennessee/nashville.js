
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
            title="Nashville lawn care near me | We'll Take Care Of Everything" 
            desc="Nashville lawn care near me: r e"
            canonical={`${props.website}/nashville-lawn-care-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville lawn care near me" //KW
            />
            <Header
            title="Nashville lawn care near me" //KW
            subtitle="r e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a  "
            image="/window-installations.jpg"
            alt="Nashville lawn care near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Nashville lawn care near me" //KW
            desc="c   e n"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="m"
            cardDesc2="c"
            cardDesc3="o"
            />
            <Approach
            title="Nashville lawn care near me" //KW
            desc="t m u o"
            />
            <Intro
            subtitle="Exceptional Nashville lawn care near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="y  "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="y"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        