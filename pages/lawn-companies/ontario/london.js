
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
            title="London lawn companies | We'll Take Care Of Everything" 
            desc="London lawn companies: i t"
            canonical={`${props.website}/london-lawn-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London lawn companies" //KW
            />
            <Header
            title="London lawn companies" //KW
            subtitle="i t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e  "
            image="/window-installations.jpg"
            alt="London lawn companies"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional London lawn companies" //KW
            desc="h s e t"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="i"
            cardDesc3="l"
            />
            <Approach
            title="London lawn companies" //KW
            desc="h e , f"
            />
            <Intro
            subtitle="Exceptional London lawn companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="o s"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="n"
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
        