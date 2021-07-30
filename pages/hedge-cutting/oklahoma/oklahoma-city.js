
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
            title="Oklahoma City hedge cutting | We'll Take Care Of Everything" 
            desc="Oklahoma City hedge cutting: r o"
            canonical={`${props.website}/oklahoma-city-hedge-cutting`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City hedge cutting" //KW
            />
            <Header
            title="Oklahoma City hedge cutting" //KW
            subtitle="r o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e a"
            image="/window-washing.jpg"
            alt="Oklahoma City hedge cutting"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Oklahoma City hedge cutting" //KW
            desc="  t e m"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="d"
            cardDesc3="f"
            />
            <Approach
            title="Oklahoma City hedge cutting" //KW
            desc="w o e u"
            />
            <Intro
            subtitle="Exceptional Oklahoma City hedge cutting" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n r"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        