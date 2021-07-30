
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
            title="Montreal grass lawn care | We'll Take Care Of Everything" 
            desc="Montreal grass lawn care: n  "
            canonical={`${props.website}/montreal-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal grass lawn care" //KW
            />
            <Header
            title="Montreal grass lawn care" //KW
            subtitle="n  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r p"
            image="/contractor.jpg"
            alt="Montreal grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Montreal grass lawn care" //KW
            desc="r p f w"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="i"
            cardDesc3="w"
            />
            <Approach
            title="Montreal grass lawn care" //KW
            desc="o     r"
            />
            <Intro
            subtitle="Exceptional Montreal grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="l o"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="e"
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
        