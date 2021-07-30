
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
            title="Las Vegas landscape installation | We'll Take Care Of Everything" 
            desc="Las Vegas landscape installation: o r"
            canonical={`${props.website}/las-vegas-landscape-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas landscape installation" //KW
            />
            <Header
            title="Las Vegas landscape installation" //KW
            subtitle="o r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o i"
            image="/window-installation.jpg"
            alt="Las Vegas landscape installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Las Vegas landscape installation" //KW
            desc=". n   o"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="c"
            cardDesc3="n"
            />
            <Approach
            title="Las Vegas landscape installation" //KW
            desc="    i s"
            />
            <Intro
            subtitle="Exceptional Las Vegas landscape installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c t"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="n"
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
        