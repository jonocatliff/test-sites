
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
            title="Quebec City irrigation installation | We'll Take Care Of Everything" 
            desc="Quebec City irrigation installation: o  "
            canonical={`${props.website}/quebec-city-irrigation-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City irrigation installation" //KW
            />
            <Header
            title="Quebec City irrigation installation" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  o"
            image="/contractor.jpg"
            alt="Quebec City irrigation installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Quebec City irrigation installation" //KW
            desc="d l m l"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="w"
            cardDesc3=","
            />
            <Approach
            title="Quebec City irrigation installation" //KW
            desc="a      "
            />
            <Intro
            subtitle="Exceptional Quebec City irrigation installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="o o"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="-"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        