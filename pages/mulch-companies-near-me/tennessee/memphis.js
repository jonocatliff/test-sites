
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
            title="Memphis mulch companies near me | We'll Take Care Of Everything" 
            desc="Memphis mulch companies near me: s n"
            canonical={`${props.website}/memphis-mulch-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis mulch companies near me" //KW
            />
            <Header
            title="Memphis mulch companies near me" //KW
            subtitle="s n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s  "
            image="/window-washing.jpg"
            alt="Memphis mulch companies near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Memphis mulch companies near me" //KW
            desc="t n ,  "
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="s"
            cardDesc3="J"
            />
            <Approach
            title="Memphis mulch companies near me" //KW
            desc="o d w r"
            />
            <Intro
            subtitle="Exceptional Memphis mulch companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="h undefined"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="e"
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
        