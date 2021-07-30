
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
            title="Albuquerque retaining wall installation | We'll Take Care Of Everything" 
            desc="Albuquerque retaining wall installation: a P"
            canonical={`${props.website}/albuquerque-retaining-wall-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque retaining wall installation" //KW
            />
            <Header
            title="Albuquerque retaining wall installation" //KW
            subtitle="a P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r  "
            image="/contractor.jpg"
            alt="Albuquerque retaining wall installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Albuquerque retaining wall installation" //KW
            desc="O r e undefined"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="d"
            cardDesc3="o"
            />
            <Approach
            title="Albuquerque retaining wall installation" //KW
            desc="h h a y"
            />
            <Intro
            subtitle="Exceptional Albuquerque retaining wall installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="W undefined"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="w"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        