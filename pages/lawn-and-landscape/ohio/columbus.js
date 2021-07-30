
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
            title="Columbus lawn and landscape | We'll Take Care Of Everything" 
            desc="Columbus lawn and landscape: u t"
            canonical={`${props.website}/columbus-lawn-and-landscape`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus lawn and landscape" //KW
            />
            <Header
            title="Columbus lawn and landscape" //KW
            subtitle="u t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o n"
            image="/window-installation.jpg"
            alt="Columbus lawn and landscape"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Columbus lawn and landscape" //KW
            desc="b o . i"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="r"
            cardDesc3="t"
            />
            <Approach
            title="Columbus lawn and landscape" //KW
            desc="p r   e"
            />
            <Intro
            subtitle="Exceptional Columbus lawn and landscape" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="d  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="o"
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
        