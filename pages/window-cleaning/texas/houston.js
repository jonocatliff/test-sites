
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
            title="Houston window cleaning | We'll Take Care Of Everything" 
            desc="Houston window cleaning:   s"
            canonical={`${props.website}/houston-window-cleaning`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston window cleaning" //KW
            />
            <Header
            title="Houston window cleaning" //KW
            subtitle="  s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="s  "
            image="/contractor.jpg"
            alt="Houston window cleaning"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Houston window cleaning" //KW
            desc="  a a i"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="t"
            cardDesc3="n"
            />
            <Approach
            title="Houston window cleaning" //KW
            desc="a h   w"
            />
            <Intro
            subtitle="Exceptional Houston window cleaning" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e a"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="e"
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
        