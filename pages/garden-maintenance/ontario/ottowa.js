
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
            title="Ottowa garden maintenance | We'll Take Care Of Everything" 
            desc="Ottowa garden maintenance: u l"
            canonical={`${props.website}/ottowa-garden-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa garden maintenance" //KW
            />
            <Header
            title="Ottowa garden maintenance" //KW
            subtitle="u l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="n  "
            image="/contractor.jpg"
            alt="Ottowa garden maintenance"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Ottowa garden maintenance" //KW
            desc="r   s e"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="l"
            cardDesc3="w"
            />
            <Approach
            title="Ottowa garden maintenance" //KW
            desc="p t a t"
            />
            <Intro
            subtitle="Exceptional Ottowa garden maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="n t"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="a"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        