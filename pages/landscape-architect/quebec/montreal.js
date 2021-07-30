
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
            title="Montreal landscape architect | We'll Take Care Of Everything" 
            desc="Montreal landscape architect: d e"
            canonical={`${props.website}/montreal-landscape-architect`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal landscape architect" //KW
            />
            <Header
            title="Montreal landscape architect" //KW
            subtitle="d e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o a"
            image="/window-washing.jpg"
            alt="Montreal landscape architect"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Montreal landscape architect" //KW
            desc="e s r a"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="Montreal landscape architect" //KW
            desc="n t a r"
            />
            <Intro
            subtitle="Exceptional Montreal landscape architect" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="f  "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="n"
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
        