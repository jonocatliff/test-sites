
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
            title="Victoria cheap window replacement | We'll Take Care Of Everything" 
            desc="Victoria cheap window replacement: o t"
            canonical={`${props.website}/victoria-cheap-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria cheap window replacement" //KW
            />
            <Header
            title="Victoria cheap window replacement" //KW
            subtitle="o t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  o"
            image="/window-installation.jpg"
            alt="Victoria cheap window replacement"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Victoria cheap window replacement" //KW
            desc="r a m r"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="Victoria cheap window replacement" //KW
            desc="  o a t"
            />
            <Intro
            subtitle="Exceptional Victoria cheap window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="o e"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="o"
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
        