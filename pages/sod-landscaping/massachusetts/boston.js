
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
            title="Boston sod landscaping | We'll Take Care Of Everything" 
            desc="Boston sod landscaping: i i"
            canonical={`${props.website}/boston-sod-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston sod landscaping" //KW
            />
            <Header
            title="Boston sod landscaping" //KW
            subtitle="i i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  f"
            image="/window-installations.jpg"
            alt="Boston sod landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Boston sod landscaping" //KW
            desc="  s   undefined"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2=" "
            cardDesc3="o"
            />
            <Approach
            title="Boston sod landscaping" //KW
            desc="r n d a"
            />
            <Intro
            subtitle="Exceptional Boston sod landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="e undefined"
            cardDesc3="a"
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
        