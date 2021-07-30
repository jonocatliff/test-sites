
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
            title="Surrey landscape installation | We'll Take Care Of Everything" 
            desc="Surrey landscape installation: n W"
            canonical={`${props.website}/surrey-landscape-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey landscape installation" //KW
            />
            <Header
            title="Surrey landscape installation" //KW
            subtitle="n W"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r r"
            image="/window-washing.jpg"
            alt="Surrey landscape installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Surrey landscape installation" //KW
            desc="n d s w"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="b"
            cardDesc2="i"
            cardDesc3="t"
            />
            <Approach
            title="Surrey landscape installation" //KW
            desc="g o r o"
            />
            <Intro
            subtitle="Exceptional Surrey landscape installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="d  "
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="i"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        