
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
            title="Las Vegas organic lawn care | We'll Take Care Of Everything" 
            desc="Las Vegas organic lawn care: r w"
            canonical={`${props.website}/las-vegas-organic-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas organic lawn care" //KW
            />
            <Header
            title="Las Vegas organic lawn care" //KW
            subtitle="r w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r e"
            image="/window-washing.jpg"
            alt="Las Vegas organic lawn care"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Las Vegas organic lawn care" //KW
            desc="o l u undefined"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="r"
            cardDesc3="k"
            />
            <Approach
            title="Las Vegas organic lawn care" //KW
            desc="a v e e"
            />
            <Intro
            subtitle="Exceptional Las Vegas organic lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="e undefined"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
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
        