
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
            title="Dallas lawn companies | We'll Take Care Of Everything" 
            desc="Dallas lawn companies: c o"
            canonical={`${props.website}/dallas-lawn-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas lawn companies" //KW
            />
            <Header
            title="Dallas lawn companies" //KW
            subtitle="c o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="p t"
            image="/window-installation.jpg"
            alt="Dallas lawn companies"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Dallas lawn companies" //KW
            desc="  d a e"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="t"
            cardDesc3="m"
            />
            <Approach
            title="Dallas lawn companies" //KW
            desc="t f d o"
            />
            <Intro
            subtitle="Exceptional Dallas lawn companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="f i"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="n"
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
        