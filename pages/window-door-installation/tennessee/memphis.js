
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
            title="Memphis window door installation | We'll Take Care Of Everything" 
            desc="Memphis window door installation: d r"
            canonical={`${props.website}/memphis-window-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis window door installation" //KW
            />
            <Header
            title="Memphis window door installation" //KW
            subtitle="d r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="   "
            image="/contractor.jpg"
            alt="Memphis window door installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Memphis window door installation" //KW
            desc="i h i  "
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="w"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="c"
            cardDesc3="i"
            />
            <Approach
            title="Memphis window door installation" //KW
            desc="l i o n"
            />
            <Intro
            subtitle="Exceptional Memphis window door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="c a"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="P" //KW
            desc2="l"
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
        