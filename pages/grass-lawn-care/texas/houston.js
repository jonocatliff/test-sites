
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
            title="Houston grass lawn care | We'll Take Care Of Everything" 
            desc="Houston grass lawn care: a i"
            canonical={`${props.website}/houston-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston grass lawn care" //KW
            />
            <Header
            title="Houston grass lawn care" //KW
            subtitle="a i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="u e"
            image="/window-installations.jpg"
            alt="Houston grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Houston grass lawn care" //KW
            desc="  r m s"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="Houston grass lawn care" //KW
            desc="r w w a"
            />
            <Intro
            subtitle="Exceptional Houston grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="m t"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
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
        