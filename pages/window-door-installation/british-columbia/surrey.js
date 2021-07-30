
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
            title="Surrey window door installation | We'll Take Care Of Everything" 
            desc="Surrey window door installation: n d"
            canonical={`${props.website}/surrey-window-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey window door installation" //KW
            />
            <Header
            title="Surrey window door installation" //KW
            subtitle="n d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e t"
            image="/contractor.jpg"
            alt="Surrey window door installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Surrey window door installation" //KW
            desc="c t o y"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="."
            cardDesc3="l"
            />
            <Approach
            title="Surrey window door installation" //KW
            desc="d o p i"
            />
            <Intro
            subtitle="Exceptional Surrey window door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="d s"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
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
        