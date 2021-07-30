
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
            title="Vancouver window replacement and installation | We'll Take Care Of Everything" 
            desc="Vancouver window replacement and installation:   ’"
            canonical={`${props.website}/vancouver-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver window replacement and installation" //KW
            />
            <Header
            title="Vancouver window replacement and installation" //KW
            subtitle="  ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  W"
            image="/window-installations.jpg"
            alt="Vancouver window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Vancouver window replacement and installation" //KW
            desc="O h o i"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="t"
            cardDesc3="p"
            />
            <Approach
            title="Vancouver window replacement and installation" //KW
            desc="e r b i"
            />
            <Intro
            subtitle="Exceptional Vancouver window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e f"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2=" "
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
        