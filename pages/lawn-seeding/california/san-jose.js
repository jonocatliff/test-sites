
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
            title="San Jose lawn seeding | We'll Take Care Of Everything" 
            desc="San Jose lawn seeding: e r"
            canonical={`${props.website}/san-jose-lawn-seeding`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose lawn seeding" //KW
            />
            <Header
            title="San Jose lawn seeding" //KW
            subtitle="e r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o u"
            image="/contractor.jpg"
            alt="San Jose lawn seeding"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Jose lawn seeding" //KW
            desc="n s e r"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2=" "
            cardDesc3="r"
            />
            <Approach
            title="San Jose lawn seeding" //KW
            desc="d e w u"
            />
            <Intro
            subtitle="Exceptional San Jose lawn seeding" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="h  "
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="v"
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
        