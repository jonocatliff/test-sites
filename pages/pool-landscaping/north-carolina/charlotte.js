
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
            title="Charlotte pool landscaping | We'll Take Care Of Everything" 
            desc="Charlotte pool landscaping: l w"
            canonical={`${props.website}/charlotte-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte pool landscaping" //KW
            />
            <Header
            title="Charlotte pool landscaping" //KW
            subtitle="l w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a  "
            image="/window-installations.jpg"
            alt="Charlotte pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Charlotte pool landscaping" //KW
            desc="  p y undefined"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="x"
            cardDesc3=" "
            />
            <Approach
            title="Charlotte pool landscaping" //KW
            desc="e u h p"
            />
            <Intro
            subtitle="Exceptional Charlotte pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="u undefined"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="w"
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
        