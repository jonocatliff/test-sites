
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
            title="Vancouver best landscape designers | We'll Take Care Of Everything" 
            desc="Vancouver best landscape designers: f a"
            canonical={`${props.website}/vancouver-best-landscape-designers`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver best landscape designers" //KW
            />
            <Header
            title="Vancouver best landscape designers" //KW
            subtitle="f a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  e"
            image="/contractor.jpg"
            alt="Vancouver best landscape designers"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Vancouver best landscape designers" //KW
            desc="w A s f"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="Vancouver best landscape designers" //KW
            desc="i e o e"
            />
            <Intro
            subtitle="Exceptional Vancouver best landscape designers" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="a o"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="f" //KW
            desc2="a"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        