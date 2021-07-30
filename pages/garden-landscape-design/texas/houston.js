
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
            title="Houston garden landscape design | We'll Take Care Of Everything" 
            desc="Houston garden landscape design: c y"
            canonical={`${props.website}/houston-garden-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston garden landscape design" //KW
            />
            <Header
            title="Houston garden landscape design" //KW
            subtitle="c y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="w a"
            image="/window-installation.jpg"
            alt="Houston garden landscape design"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Houston garden landscape design" //KW
            desc="d t r  "
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="r"
            cardDesc3="t"
            />
            <Approach
            title="Houston garden landscape design" //KW
            desc="W g d n"
            />
            <Intro
            subtitle="Exceptional Houston garden landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="s o"
            cardDesc3="v"
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
        