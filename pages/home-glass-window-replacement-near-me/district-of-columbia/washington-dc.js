
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
            title="Washington DC home glass window replacement near me | We'll Take Care Of Everything" 
            desc="Washington DC home glass window replacement near me: a o"
            canonical={`${props.website}/washington-dc-home-glass-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC home glass window replacement near me" //KW
            />
            <Header
            title="Washington DC home glass window replacement near me" //KW
            subtitle="a o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  o"
            image="/window-washing.jpg"
            alt="Washington DC home glass window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Washington DC home glass window replacement near me" //KW
            desc="o   n e"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="v"
            cardDesc3="w"
            />
            <Approach
            title="Washington DC home glass window replacement near me" //KW
            desc="o m   t"
            />
            <Intro
            subtitle="Exceptional Washington DC home glass window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="w"
            cardDesc2="i f"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="p"
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
        