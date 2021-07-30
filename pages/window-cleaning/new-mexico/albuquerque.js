
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
            title="Albuquerque window cleaning | We'll Take Care Of Everything" 
            desc="Albuquerque window cleaning: i a"
            canonical={`${props.website}/albuquerque-window-cleaning`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque window cleaning" //KW
            />
            <Header
            title="Albuquerque window cleaning" //KW
            subtitle="i a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  o"
            image="/window-washing.jpg"
            alt="Albuquerque window cleaning"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Albuquerque window cleaning" //KW
            desc="y o v  "
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="u"
            cardDesc3="w"
            />
            <Approach
            title="Albuquerque window cleaning" //KW
            desc="o   d  "
            />
            <Intro
            subtitle="Exceptional Albuquerque window cleaning" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="u u"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="u"
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
        