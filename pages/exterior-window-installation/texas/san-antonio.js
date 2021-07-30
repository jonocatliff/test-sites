
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
            title="San Antonio exterior window installation | We'll Take Care Of Everything" 
            desc="San Antonio exterior window installation: c r"
            canonical={`${props.website}/san-antonio-exterior-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio exterior window installation" //KW
            />
            <Header
            title="San Antonio exterior window installation" //KW
            subtitle="c r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i y"
            image="/window-installations.jpg"
            alt="San Antonio exterior window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Antonio exterior window installation" //KW
            desc="o n r  "
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="i"
            cardDesc3="l"
            />
            <Approach
            title="San Antonio exterior window installation" //KW
            desc="n f a v"
            />
            <Intro
            subtitle="Exceptional San Antonio exterior window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e e"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="a"
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
        