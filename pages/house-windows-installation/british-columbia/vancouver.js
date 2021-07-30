
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
            title="Vancouver house windows installation | We'll Take Care Of Everything" 
            desc="Vancouver house windows installation: n ’"
            canonical={`${props.website}/vancouver-house-windows-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver house windows installation" //KW
            />
            <Header
            title="Vancouver house windows installation" //KW
            subtitle="n ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="v  "
            image="/window-installation.jpg"
            alt="Vancouver house windows installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Vancouver house windows installation" //KW
            desc="  i e n"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="c"
            cardDesc3="l"
            />
            <Approach
            title="Vancouver house windows installation" //KW
            desc="i o e e"
            />
            <Intro
            subtitle="Exceptional Vancouver house windows installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="c o"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="r"
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
        