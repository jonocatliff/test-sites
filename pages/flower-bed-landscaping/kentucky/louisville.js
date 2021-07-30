
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
            title="Louisville flower bed landscaping | We'll Take Care Of Everything" 
            desc="Louisville flower bed landscaping: n o"
            canonical={`${props.website}/louisville-flower-bed-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville flower bed landscaping" //KW
            />
            <Header
            title="Louisville flower bed landscaping" //KW
            subtitle="n o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i  "
            image="/window-installation.jpg"
            alt="Louisville flower bed landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Louisville flower bed landscaping" //KW
            desc="n o t  "
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="e"
            cardDesc3="w"
            />
            <Approach
            title="Louisville flower bed landscaping" //KW
            desc="n   i s"
            />
            <Intro
            subtitle="Exceptional Louisville flower bed landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="p  "
            cardDesc3="I"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="r"
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
        