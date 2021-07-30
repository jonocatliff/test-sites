
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
            title="San Diego lawn mowing service | We'll Take Care Of Everything" 
            desc="San Diego lawn mowing service: v i"
            canonical={`${props.website}/san-diego-lawn-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego lawn mowing service" //KW
            />
            <Header
            title="San Diego lawn mowing service" //KW
            subtitle="v i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i  "
            image="/window-installation.jpg"
            alt="San Diego lawn mowing service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Diego lawn mowing service" //KW
            desc="m o i w"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="O"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="San Diego lawn mowing service" //KW
            desc="o e r c"
            />
            <Intro
            subtitle="Exceptional San Diego lawn mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="v o"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="a"
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
        