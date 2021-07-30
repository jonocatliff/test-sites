
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
            title="Las Vegas home glass window replacement near me | We'll Take Care Of Everything" 
            desc="Las Vegas home glass window replacement near me: n e"
            canonical={`${props.website}/las-vegas-home-glass-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas home glass window replacement near me" //KW
            />
            <Header
            title="Las Vegas home glass window replacement near me" //KW
            subtitle="n e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  l"
            image="/contractor.jpg"
            alt="Las Vegas home glass window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Las Vegas home glass window replacement near me" //KW
            desc="e   t e"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="p"
            cardDesc3="p"
            />
            <Approach
            title="Las Vegas home glass window replacement near me" //KW
            desc="u l    "
            />
            <Intro
            subtitle="Exceptional Las Vegas home glass window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="w"
            cardDesc2="   "
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="c"
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
        