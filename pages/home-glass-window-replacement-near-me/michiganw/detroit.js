
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
            title="Detroit home glass window replacement near me | We'll Take Care Of Everything" 
            desc="Detroit home glass window replacement near me: h  "
            canonical={`${props.website}/detroit-home-glass-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit home glass window replacement near me" //KW
            />
            <Header
            title="Detroit home glass window replacement near me" //KW
            subtitle="h  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r e"
            image="/window-installations.jpg"
            alt="Detroit home glass window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Detroit home glass window replacement near me" //KW
            desc="y u i  "
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="r"
            cardDesc3="o"
            />
            <Approach
            title="Detroit home glass window replacement near me" //KW
            desc="r o .  "
            />
            <Intro
            subtitle="Exceptional Detroit home glass window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="v f"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2=" "
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
        