
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
            title="Vancouver hedge cutting | We'll Take Care Of Everything" 
            desc="Vancouver hedge cutting: v i"
            canonical={`${props.website}/vancouver-hedge-cutting`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver hedge cutting" //KW
            />
            <Header
            title="Vancouver hedge cutting" //KW
            subtitle="v i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="n d"
            image="/window-installations.jpg"
            alt="Vancouver hedge cutting"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Vancouver hedge cutting" //KW
            desc="s v    "
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="s"
            cardDesc3="c"
            />
            <Approach
            title="Vancouver hedge cutting" //KW
            desc="      t"
            />
            <Intro
            subtitle="Exceptional Vancouver hedge cutting" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="c a"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
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
        