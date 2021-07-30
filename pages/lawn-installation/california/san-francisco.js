
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
            title="San Francisco lawn installation | We'll Take Care Of Everything" 
            desc="San Francisco lawn installation: e f"
            canonical={`${props.website}/san-francisco-lawn-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco lawn installation" //KW
            />
            <Header
            title="San Francisco lawn installation" //KW
            subtitle="e f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="f n"
            image="/window-installations.jpg"
            alt="San Francisco lawn installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Francisco lawn installation" //KW
            desc="p o o l"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="p"
            cardDesc3=" "
            />
            <Approach
            title="San Francisco lawn installation" //KW
            desc="p     e"
            />
            <Intro
            subtitle="Exceptional San Francisco lawn installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="   "
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
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        