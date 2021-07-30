
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
            title="Dallas lawn care weed control | We'll Take Care Of Everything" 
            desc="Dallas lawn care weed control: i  "
            canonical={`${props.website}/dallas-lawn-care-weed-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas lawn care weed control" //KW
            />
            <Header
            title="Dallas lawn care weed control" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r  "
            image="/window-installations.jpg"
            alt="Dallas lawn care weed control"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Dallas lawn care weed control" //KW
            desc="r e m p"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Dallas lawn care weed control" //KW
            desc="t d   c"
            />
            <Intro
            subtitle="Exceptional Dallas lawn care weed control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="o r"
            cardDesc3="W"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="i"
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
        