
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
            title="Philadelphia home glass window replacement near me | We'll Take Care Of Everything" 
            desc="Philadelphia home glass window replacement near me: u p"
            canonical={`${props.website}/philadelphia-home-glass-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia home glass window replacement near me" //KW
            />
            <Header
            title="Philadelphia home glass window replacement near me" //KW
            subtitle="u p"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r o"
            image="/window-installation.jpg"
            alt="Philadelphia home glass window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Philadelphia home glass window replacement near me" //KW
            desc="x o   t"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="a"
            cardDesc3="r"
            />
            <Approach
            title="Philadelphia home glass window replacement near me" //KW
            desc="t   o  "
            />
            <Intro
            subtitle="Exceptional Philadelphia home glass window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="c w"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="t"
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
        