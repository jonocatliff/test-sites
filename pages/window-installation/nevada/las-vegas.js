
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
            title="Las Vegas window installation | We'll Take Care Of Everything" 
            desc="Las Vegas window installation: r e"
            canonical={`${props.website}/las-vegas-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas window installation" //KW
            />
            <Header
            title="Las Vegas window installation" //KW
            subtitle="r e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="f i"
            image="/window-washing.jpg"
            alt="Las Vegas window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Las Vegas window installation" //KW
            desc="o   l  "
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="v"
            cardDesc3="s"
            />
            <Approach
            title="Las Vegas window installation" //KW
            desc="  n e r"
            />
            <Intro
            subtitle="Exceptional Las Vegas window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="i s"
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="I"
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
        