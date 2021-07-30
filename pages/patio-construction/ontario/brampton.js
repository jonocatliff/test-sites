
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
            title="Brampton patio construction | We'll Take Care Of Everything" 
            desc="Brampton patio construction: s r"
            canonical={`${props.website}/brampton-patio-construction`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton patio construction" //KW
            />
            <Header
            title="Brampton patio construction" //KW
            subtitle="s r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="b i"
            image="/contractor.jpg"
            alt="Brampton patio construction"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Brampton patio construction" //KW
            desc="p n z undefined"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2=" "
            cardDesc3="f"
            />
            <Approach
            title="Brampton patio construction" //KW
            desc="e e n y"
            />
            <Intro
            subtitle="Exceptional Brampton patio construction" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="e undefined"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="v"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        