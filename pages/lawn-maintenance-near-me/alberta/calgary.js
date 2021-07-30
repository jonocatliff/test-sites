
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
            title="Calgary lawn maintenance near me | We'll Take Care Of Everything" 
            desc="Calgary lawn maintenance near me: i  "
            canonical={`${props.website}/calgary-lawn-maintenance-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary lawn maintenance near me" //KW
            />
            <Header
            title="Calgary lawn maintenance near me" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="u g"
            image="/window-installations.jpg"
            alt="Calgary lawn maintenance near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Calgary lawn maintenance near me" //KW
            desc="c s e s"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="s"
            cardDesc3="f"
            />
            <Approach
            title="Calgary lawn maintenance near me" //KW
            desc="d s   w"
            />
            <Intro
            subtitle="Exceptional Calgary lawn maintenance near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="W u"
            cardDesc3="e"
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
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        