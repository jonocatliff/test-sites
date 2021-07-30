
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
            title="San Diego window door installation | We'll Take Care Of Everything" 
            desc="San Diego window door installation: t d"
            canonical={`${props.website}/san-diego-window-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego window door installation" //KW
            />
            <Header
            title="San Diego window door installation" //KW
            subtitle="t d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc=".  "
            image="/contractor.jpg"
            alt="San Diego window door installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Diego window door installation" //KW
            desc="O f o k"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="e"
            cardDesc3="e"
            />
            <Approach
            title="San Diego window door installation" //KW
            desc="s t    "
            />
            <Intro
            subtitle="Exceptional San Diego window door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="u w"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="p"
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
        