
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
            title="San Antonio lawn care weed control | We'll Take Care Of Everything" 
            desc="San Antonio lawn care weed control: i r"
            canonical={`${props.website}/san-antonio-lawn-care-weed-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio lawn care weed control" //KW
            />
            <Header
            title="San Antonio lawn care weed control" //KW
            subtitle="i r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e i"
            image="/window-installations.jpg"
            alt="San Antonio lawn care weed control"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Antonio lawn care weed control" //KW
            desc="o n t e"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="s"
            cardDesc3="."
            />
            <Approach
            title="San Antonio lawn care weed control" //KW
            desc="r v t s"
            />
            <Intro
            subtitle="Exceptional San Antonio lawn care weed control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="w"
            cardDesc2="n s"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="o"
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
        