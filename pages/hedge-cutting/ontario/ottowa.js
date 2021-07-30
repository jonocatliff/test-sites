
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
            title="Ottowa hedge cutting | We'll Take Care Of Everything" 
            desc="Ottowa hedge cutting:   r"
            canonical={`${props.website}/ottowa-hedge-cutting`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa hedge cutting" //KW
            />
            <Header
            title="Ottowa hedge cutting" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a e"
            image="/window-installations.jpg"
            alt="Ottowa hedge cutting"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Ottowa hedge cutting" //KW
            desc="e     e"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="r"
            cardDesc3="i"
            />
            <Approach
            title="Ottowa hedge cutting" //KW
            desc="h r y u"
            />
            <Intro
            subtitle="Exceptional Ottowa hedge cutting" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="  s"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="y"
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
        