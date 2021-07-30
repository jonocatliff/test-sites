
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
            title="Tucson backyard garden design | We'll Take Care Of Everything" 
            desc="Tucson backyard garden design:   r"
            canonical={`${props.website}/tucson-backyard-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson backyard garden design" //KW
            />
            <Header
            title="Tucson backyard garden design" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="   "
            image="/window-installations.jpg"
            alt="Tucson backyard garden design"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Tucson backyard garden design" //KW
            desc="e t o i"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="x"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Tucson backyard garden design" //KW
            desc="d e   d"
            />
            <Intro
            subtitle="Exceptional Tucson backyard garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="o k"
            cardDesc3="d"
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
        