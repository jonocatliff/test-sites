
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
            title="Hamilton lawn fertilization | We'll Take Care Of Everything" 
            desc="Hamilton lawn fertilization:   t"
            canonical={`${props.website}/hamilton-lawn-fertilization`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton lawn fertilization" //KW
            />
            <Header
            title="Hamilton lawn fertilization" //KW
            subtitle="  t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o t"
            image="/contractor.jpg"
            alt="Hamilton lawn fertilization"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Hamilton lawn fertilization" //KW
            desc="o l t n"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="b"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="W"
            cardDesc3="a"
            />
            <Approach
            title="Hamilton lawn fertilization" //KW
            desc="i c r r"
            />
            <Intro
            subtitle="Exceptional Hamilton lawn fertilization" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="a l"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="t"
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
        