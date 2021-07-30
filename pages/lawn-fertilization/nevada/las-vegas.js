
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
            title="Las Vegas lawn fertilization | We'll Take Care Of Everything" 
            desc="Las Vegas lawn fertilization: w r"
            canonical={`${props.website}/las-vegas-lawn-fertilization`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas lawn fertilization" //KW
            />
            <Header
            title="Las Vegas lawn fertilization" //KW
            subtitle="w r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e e"
            image="/contractor.jpg"
            alt="Las Vegas lawn fertilization"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Las Vegas lawn fertilization" //KW
            desc="o   w s"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="u"
            cardDesc3="r"
            />
            <Approach
            title="Las Vegas lawn fertilization" //KW
            desc="r e w ."
            />
            <Intro
            subtitle="Exceptional Las Vegas lawn fertilization" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="l"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        