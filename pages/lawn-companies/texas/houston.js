
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
            title="Houston lawn companies | We'll Take Care Of Everything" 
            desc="Houston lawn companies: i o"
            canonical={`${props.website}/houston-lawn-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston lawn companies" //KW
            />
            <Header
            title="Houston lawn companies" //KW
            subtitle="i o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  n"
            image="/window-installations.jpg"
            alt="Houston lawn companies"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Houston lawn companies" //KW
            desc="c s e u"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="Houston lawn companies" //KW
            desc="j w w  "
            />
            <Intro
            subtitle="Exceptional Houston lawn companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="o o"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="l"
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
        