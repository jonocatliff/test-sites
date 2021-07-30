
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
            title="Las Vegas window cleaning | We'll Take Care Of Everything" 
            desc="Las Vegas window cleaning: n w"
            canonical={`${props.website}/las-vegas-window-cleaning`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas window cleaning" //KW
            />
            <Header
            title="Las Vegas window cleaning" //KW
            subtitle="n w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e l"
            image="/window-washing.jpg"
            alt="Las Vegas window cleaning"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Las Vegas window cleaning" //KW
            desc="a . n i"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="r"
            cardDesc3="r"
            />
            <Approach
            title="Las Vegas window cleaning" //KW
            desc="  h c o"
            />
            <Intro
            subtitle="Exceptional Las Vegas window cleaning" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="u i"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="i"
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
        