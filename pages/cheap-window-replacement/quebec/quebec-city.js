
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
            title="Quebec City cheap window replacement | We'll Take Care Of Everything" 
            desc="Quebec City cheap window replacement: w  "
            canonical={`${props.website}/quebec-city-cheap-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City cheap window replacement" //KW
            />
            <Header
            title="Quebec City cheap window replacement" //KW
            subtitle="w  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="y w"
            image="/window-washing.jpg"
            alt="Quebec City cheap window replacement"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Quebec City cheap window replacement" //KW
            desc=". r u e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="n"
            cardDesc3="i"
            />
            <Approach
            title="Quebec City cheap window replacement" //KW
            desc="n y e  "
            />
            <Intro
            subtitle="Exceptional Quebec City cheap window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="w  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="t"
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
        