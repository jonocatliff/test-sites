
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
            title="Los Angeles window replacement | We'll Take Care Of Everything" 
            desc="Los Angeles window replacement: i n"
            canonical={`${props.website}/los-angeles-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles window replacement" //KW
            />
            <Header
            title="Los Angeles window replacement" //KW
            subtitle="i n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="f a"
            image="/window-installation.jpg"
            alt="Los Angeles window replacement"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Los Angeles window replacement" //KW
            desc="r o e t"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="c"
            cardDesc3="u"
            />
            <Approach
            title="Los Angeles window replacement" //KW
            desc="a   r w"
            />
            <Intro
            subtitle="Exceptional Los Angeles window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="p e"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2=","
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
        