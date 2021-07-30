
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
            title="San Antonio install replacement windows | We'll Take Care Of Everything" 
            desc="San Antonio install replacement windows: h p"
            canonical={`${props.website}/san-antonio-install-replacement-windows`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio install replacement windows" //KW
            />
            <Header
            title="San Antonio install replacement windows" //KW
            subtitle="h p"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t t"
            image="/window-installation.jpg"
            alt="San Antonio install replacement windows"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Antonio install replacement windows" //KW
            desc="e   o  "
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="l"
            cardDesc3="s"
            />
            <Approach
            title="San Antonio install replacement windows" //KW
            desc="  a f  "
            />
            <Intro
            subtitle="Exceptional San Antonio install replacement windows" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="c r"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="s"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        