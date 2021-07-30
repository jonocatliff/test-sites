
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
            title="Boston lawn companies | We'll Take Care Of Everything" 
            desc="Boston lawn companies: t a"
            canonical={`${props.website}/boston-lawn-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston lawn companies" //KW
            />
            <Header
            title="Boston lawn companies" //KW
            subtitle="t a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  r"
            image="/window-washing.jpg"
            alt="Boston lawn companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Boston lawn companies" //KW
            desc="  s e w"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="n"
            cardDesc3="a"
            />
            <Approach
            title="Boston lawn companies" //KW
            desc="t h e w"
            />
            <Intro
            subtitle="Exceptional Boston lawn companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="n w"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="g"
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
        