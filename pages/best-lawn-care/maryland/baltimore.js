
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
            title="Baltimore best lawn care | We'll Take Care Of Everything" 
            desc="Baltimore best lawn care: w o"
            canonical={`${props.website}/baltimore-best-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore best lawn care" //KW
            />
            <Header
            title="Baltimore best lawn care" //KW
            subtitle="w o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="p m"
            image="/window-installation.jpg"
            alt="Baltimore best lawn care"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Baltimore best lawn care" //KW
            desc="d a i n"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="v"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Baltimore best lawn care" //KW
            desc="h i c r"
            />
            <Intro
            subtitle="Exceptional Baltimore best lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="a i"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="y"
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
        