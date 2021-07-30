
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
            title="Washington DC cheap window replacement | We'll Take Care Of Everything" 
            desc="Washington DC cheap window replacement: e m"
            canonical={`${props.website}/washington-dc-cheap-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC cheap window replacement" //KW
            />
            <Header
            title="Washington DC cheap window replacement" //KW
            subtitle="e m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o e"
            image="/contractor.jpg"
            alt="Washington DC cheap window replacement"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Washington DC cheap window replacement" //KW
            desc="r r f t"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="g"
            cardDesc3="o"
            />
            <Approach
            title="Washington DC cheap window replacement" //KW
            desc="  b e o"
            />
            <Intro
            subtitle="Exceptional Washington DC cheap window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o v"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="e"
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
        