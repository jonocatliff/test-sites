
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
            title="Las Vegas new window installation | We'll Take Care Of Everything" 
            desc="Las Vegas new window installation: a v"
            canonical={`${props.website}/las-vegas-new-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas new window installation" //KW
            />
            <Header
            title="Las Vegas new window installation" //KW
            subtitle="a v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e r"
            image="/window-installations.jpg"
            alt="Las Vegas new window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Las Vegas new window installation" //KW
            desc=". o f  "
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="w"
            cardDesc3="t"
            />
            <Approach
            title="Las Vegas new window installation" //KW
            desc="i   r e"
            />
            <Intro
            subtitle="Exceptional Las Vegas new window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="t f"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="c"
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
        