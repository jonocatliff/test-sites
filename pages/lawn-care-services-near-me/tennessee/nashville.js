
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
            title="Nashville lawn care services near me | We'll Take Care Of Everything" 
            desc="Nashville lawn care services near me: a a"
            canonical={`${props.website}/nashville-lawn-care-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville lawn care services near me" //KW
            />
            <Header
            title="Nashville lawn care services near me" //KW
            subtitle="a a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e  "
            image="/window-installations.jpg"
            alt="Nashville lawn care services near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Nashville lawn care services near me" //KW
            desc="i n n  "
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="Nashville lawn care services near me" //KW
            desc="v a e p"
            />
            <Intro
            subtitle="Exceptional Nashville lawn care services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="t w"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="I"
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
        