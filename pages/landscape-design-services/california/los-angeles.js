
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
            title="Los Angeles landscape design services | We'll Take Care Of Everything" 
            desc="Los Angeles landscape design services: t c"
            canonical={`${props.website}/los-angeles-landscape-design-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles landscape design services" //KW
            />
            <Header
            title="Los Angeles landscape design services" //KW
            subtitle="t c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s  "
            image="/window-installations.jpg"
            alt="Los Angeles landscape design services"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Los Angeles landscape design services" //KW
            desc="p n f y"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="a"
            cardDesc3="o"
            />
            <Approach
            title="Los Angeles landscape design services" //KW
            desc="  c h t"
            />
            <Intro
            subtitle="Exceptional Los Angeles landscape design services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="f o"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="t"
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
        