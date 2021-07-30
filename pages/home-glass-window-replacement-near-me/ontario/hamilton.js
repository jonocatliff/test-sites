
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
            title="Hamilton home glass window replacement near me | We'll Take Care Of Everything" 
            desc="Hamilton home glass window replacement near me: h d"
            canonical={`${props.website}/hamilton-home-glass-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton home glass window replacement near me" //KW
            />
            <Header
            title="Hamilton home glass window replacement near me" //KW
            subtitle="h d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="v e"
            image="/window-installation.jpg"
            alt="Hamilton home glass window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Hamilton home glass window replacement near me" //KW
            desc="s i r k"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="P"
            cardDesc3="o"
            />
            <Approach
            title="Hamilton home glass window replacement near me" //KW
            desc="W i e I"
            />
            <Intro
            subtitle="Exceptional Hamilton home glass window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t o"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="u"
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
        