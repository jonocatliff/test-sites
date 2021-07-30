
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
            title="Kitchener lawn maintenance services | We'll Take Care Of Everything" 
            desc="Kitchener lawn maintenance services:   o"
            canonical={`${props.website}/kitchener-lawn-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener lawn maintenance services" //KW
            />
            <Header
            title="Kitchener lawn maintenance services" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="i n"
            image="/window-washing.jpg"
            alt="Kitchener lawn maintenance services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Kitchener lawn maintenance services" //KW
            desc="u s n t"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="e"
            cardDesc3="n"
            />
            <Approach
            title="Kitchener lawn maintenance services" //KW
            desc=": , e r"
            />
            <Intro
            subtitle="Exceptional Kitchener lawn maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i f"
            cardDesc3="I"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="d"
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
        