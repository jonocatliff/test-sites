
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
            title="Oshawa grass lawn care | We'll Take Care Of Everything" 
            desc="Oshawa grass lawn care: w w"
            canonical={`${props.website}/oshawa-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa grass lawn care" //KW
            />
            <Header
            title="Oshawa grass lawn care" //KW
            subtitle="w w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e i"
            image="/contractor.jpg"
            alt="Oshawa grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Oshawa grass lawn care" //KW
            desc="o l l r"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="t"
            cardDesc3="o"
            />
            <Approach
            title="Oshawa grass lawn care" //KW
            desc="w n   a"
            />
            <Intro
            subtitle="Exceptional Oshawa grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="t s"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="r"
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
        