
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
            title="Halifax window replacement and installation | We'll Take Care Of Everything" 
            desc="Halifax window replacement and installation: r i"
            canonical={`${props.website}/halifax-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax window replacement and installation" //KW
            />
            <Header
            title="Halifax window replacement and installation" //KW
            subtitle="r i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="d o"
            image="/window-installations.jpg"
            alt="Halifax window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Halifax window replacement and installation" //KW
            desc="e r o y"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="s"
            cardDesc3="n"
            />
            <Approach
            title="Halifax window replacement and installation" //KW
            desc="t   w c"
            />
            <Intro
            subtitle="Exceptional Halifax window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t v"
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="p"
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
        