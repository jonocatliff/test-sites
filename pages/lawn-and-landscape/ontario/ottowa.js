
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
            title="Ottowa lawn and landscape | We'll Take Care Of Everything" 
            desc="Ottowa lawn and landscape: n  "
            canonical={`${props.website}/ottowa-lawn-and-landscape`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa lawn and landscape" //KW
            />
            <Header
            title="Ottowa lawn and landscape" //KW
            subtitle="n  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s  "
            image="/contractor.jpg"
            alt="Ottowa lawn and landscape"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Ottowa lawn and landscape" //KW
            desc="  d r l"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="o"
            cardDesc3="k"
            />
            <Approach
            title="Ottowa lawn and landscape" //KW
            desc="r o s r"
            />
            <Intro
            subtitle="Exceptional Ottowa lawn and landscape" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="v f"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="d"
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
        