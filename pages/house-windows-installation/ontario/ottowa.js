
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
            title="Ottowa house windows installation | We'll Take Care Of Everything" 
            desc="Ottowa house windows installation:   s"
            canonical={`${props.website}/ottowa-house-windows-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa house windows installation" //KW
            />
            <Header
            title="Ottowa house windows installation" //KW
            subtitle="  s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="i d"
            image="/window-installations.jpg"
            alt="Ottowa house windows installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Ottowa house windows installation" //KW
            desc="t o . i"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="e"
            cardDesc3="o"
            />
            <Approach
            title="Ottowa house windows installation" //KW
            desc="i   y f"
            />
            <Intro
            subtitle="Exceptional Ottowa house windows installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c i"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="i"
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
        