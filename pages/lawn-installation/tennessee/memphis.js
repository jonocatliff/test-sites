
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
            title="Memphis lawn installation | We'll Take Care Of Everything" 
            desc="Memphis lawn installation: e n"
            canonical={`${props.website}/memphis-lawn-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis lawn installation" //KW
            />
            <Header
            title="Memphis lawn installation" //KW
            subtitle="e n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="p t"
            image="/window-washing.jpg"
            alt="Memphis lawn installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Memphis lawn installation" //KW
            desc="l i   d"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="m"
            cardDesc3="n"
            />
            <Approach
            title="Memphis lawn installation" //KW
            desc="n u f  "
            />
            <Intro
            subtitle="Exceptional Memphis lawn installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="o  "
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="r"
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
        