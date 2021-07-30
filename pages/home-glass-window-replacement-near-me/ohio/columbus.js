
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
            title="Columbus home glass window replacement near me | We'll Take Care Of Everything" 
            desc="Columbus home glass window replacement near me: p e"
            canonical={`${props.website}/columbus-home-glass-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus home glass window replacement near me" //KW
            />
            <Header
            title="Columbus home glass window replacement near me" //KW
            subtitle="p e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s p"
            image="/contractor.jpg"
            alt="Columbus home glass window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Columbus home glass window replacement near me" //KW
            desc="  e   o"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="d"
            cardDesc3="f"
            />
            <Approach
            title="Columbus home glass window replacement near me" //KW
            desc="a o e n"
            />
            <Intro
            subtitle="Exceptional Columbus home glass window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="c e"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="v"
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
        