
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
            title="Houston lawn and landscape | We'll Take Care Of Everything" 
            desc="Houston lawn and landscape: o v"
            canonical={`${props.website}/houston-lawn-and-landscape`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston lawn and landscape" //KW
            />
            <Header
            title="Houston lawn and landscape" //KW
            subtitle="o v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="p a"
            image="/window-installations.jpg"
            alt="Houston lawn and landscape"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Houston lawn and landscape" //KW
            desc="a s d r"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="P"
            cardDesc3="f"
            />
            <Approach
            title="Houston lawn and landscape" //KW
            desc="d p y t"
            />
            <Intro
            subtitle="Exceptional Houston lawn and landscape" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="w k"
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="’"
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
        