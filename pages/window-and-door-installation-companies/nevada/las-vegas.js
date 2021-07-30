
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
            title="Las Vegas window and door installation companies | We'll Take Care Of Everything" 
            desc="Las Vegas window and door installation companies:   n"
            canonical={`${props.website}/las-vegas-window-and-door-installation-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas window and door installation companies" //KW
            />
            <Header
            title="Las Vegas window and door installation companies" //KW
            subtitle="  n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  t"
            image="/window-washing.jpg"
            alt="Las Vegas window and door installation companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Las Vegas window and door installation companies" //KW
            desc="i y w e"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3="t"
            />
            <Approach
            title="Las Vegas window and door installation companies" //KW
            desc="l e i s"
            />
            <Intro
            subtitle="Exceptional Las Vegas window and door installation companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r i"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="s"
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
        