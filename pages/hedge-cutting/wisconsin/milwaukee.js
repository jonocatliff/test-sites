
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
            title="Milwaukee hedge cutting | We'll Take Care Of Everything" 
            desc="Milwaukee hedge cutting: f n"
            canonical={`${props.website}/milwaukee-hedge-cutting`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee hedge cutting" //KW
            />
            <Header
            title="Milwaukee hedge cutting" //KW
            subtitle="f n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o t"
            image="/window-installations.jpg"
            alt="Milwaukee hedge cutting"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Milwaukee hedge cutting" //KW
            desc="o   n t"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Milwaukee hedge cutting" //KW
            desc="  s n s"
            />
            <Intro
            subtitle="Exceptional Milwaukee hedge cutting" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="l l"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="o"
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
        