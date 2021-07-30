
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
            title="Columbus hardscape | We'll Take Care Of Everything" 
            desc="Columbus hardscape: d d"
            canonical={`${props.website}/columbus-hardscape`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus hardscape" //KW
            />
            <Header
            title="Columbus hardscape" //KW
            subtitle="d d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="u  "
            image="/contractor.jpg"
            alt="Columbus hardscape"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Columbus hardscape" //KW
            desc="c e n  "
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="c"
            cardDesc3=" "
            />
            <Approach
            title="Columbus hardscape" //KW
            desc="  o e v"
            />
            <Intro
            subtitle="Exceptional Columbus hardscape" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="  f"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="u"
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
        