
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
            title="Brampton lawn repair near me | We'll Take Care Of Everything" 
            desc="Brampton lawn repair near me:   f"
            canonical={`${props.website}/brampton-lawn-repair-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton lawn repair near me" //KW
            />
            <Header
            title="Brampton lawn repair near me" //KW
            subtitle="  f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e i"
            image="/window-installations.jpg"
            alt="Brampton lawn repair near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Brampton lawn repair near me" //KW
            desc="y e f i"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="e"
            cardDesc3="d"
            />
            <Approach
            title="Brampton lawn repair near me" //KW
            desc="o f   c"
            />
            <Intro
            subtitle="Exceptional Brampton lawn repair near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="n s"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="’"
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
        