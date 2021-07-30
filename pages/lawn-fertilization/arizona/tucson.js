
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
            title="Tucson lawn fertilization | We'll Take Care Of Everything" 
            desc="Tucson lawn fertilization: i r"
            canonical={`${props.website}/tucson-lawn-fertilization`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson lawn fertilization" //KW
            />
            <Header
            title="Tucson lawn fertilization" //KW
            subtitle="i r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i a"
            image="/contractor.jpg"
            alt="Tucson lawn fertilization"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Tucson lawn fertilization" //KW
            desc="t e   e"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="Tucson lawn fertilization" //KW
            desc="a   w r"
            />
            <Intro
            subtitle="Exceptional Tucson lawn fertilization" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="e t"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
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
        