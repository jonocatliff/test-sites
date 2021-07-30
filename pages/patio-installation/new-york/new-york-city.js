
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
            title="New York City patio installation | We'll Take Care Of Everything" 
            desc="New York City patio installation: b n"
            canonical={`${props.website}/new-york-city-patio-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City patio installation" //KW
            />
            <Header
            title="New York City patio installation" //KW
            subtitle="b n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i o"
            image="/contractor.jpg"
            alt="New York City patio installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional New York City patio installation" //KW
            desc="s t t undefined"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="w"
            cardDesc3="o"
            />
            <Approach
            title="New York City patio installation" //KW
            desc="e c t s"
            />
            <Intro
            subtitle="Exceptional New York City patio installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="l undefined"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="a"
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
        