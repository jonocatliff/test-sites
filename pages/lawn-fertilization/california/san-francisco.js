
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
            title="San Francisco lawn fertilization | We'll Take Care Of Everything" 
            desc="San Francisco lawn fertilization: t f"
            canonical={`${props.website}/san-francisco-lawn-fertilization`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco lawn fertilization" //KW
            />
            <Header
            title="San Francisco lawn fertilization" //KW
            subtitle="t f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a e"
            image="/contractor.jpg"
            alt="San Francisco lawn fertilization"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Francisco lawn fertilization" //KW
            desc="i r   r"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="l"
            cardDesc3=" "
            />
            <Approach
            title="San Francisco lawn fertilization" //KW
            desc="l n   r"
            />
            <Intro
            subtitle="Exceptional San Francisco lawn fertilization" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="  a"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="t"
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
        