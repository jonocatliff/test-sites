
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
            title="Vancouver install replacement windows | We'll Take Care Of Everything" 
            desc="Vancouver install replacement windows: h O"
            canonical={`${props.website}/vancouver-install-replacement-windows`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver install replacement windows" //KW
            />
            <Header
            title="Vancouver install replacement windows" //KW
            subtitle="h O"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o e"
            image="/window-installations.jpg"
            alt="Vancouver install replacement windows"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Vancouver install replacement windows" //KW
            desc="e   w l"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="t"
            cardDesc3="n"
            />
            <Approach
            title="Vancouver install replacement windows" //KW
            desc="  x , v"
            />
            <Intro
            subtitle="Exceptional Vancouver install replacement windows" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e o"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="t"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        