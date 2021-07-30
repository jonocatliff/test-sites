
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
            title="Vancouver best lawn care | We'll Take Care Of Everything" 
            desc="Vancouver best lawn care: a a"
            canonical={`${props.website}/vancouver-best-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver best lawn care" //KW
            />
            <Header
            title="Vancouver best lawn care" //KW
            subtitle="a a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="w c"
            image="/window-installations.jpg"
            alt="Vancouver best lawn care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Vancouver best lawn care" //KW
            desc="  t s a"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="u"
            cardDesc3="p"
            />
            <Approach
            title="Vancouver best lawn care" //KW
            desc="  O   n"
            />
            <Intro
            subtitle="Exceptional Vancouver best lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i  "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="n"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        