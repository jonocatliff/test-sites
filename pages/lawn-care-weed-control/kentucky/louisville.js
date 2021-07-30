
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
            title="Louisville lawn care weed control | We'll Take Care Of Everything" 
            desc="Louisville lawn care weed control: t o"
            canonical={`${props.website}/louisville-lawn-care-weed-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville lawn care weed control" //KW
            />
            <Header
            title="Louisville lawn care weed control" //KW
            subtitle="t o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e t"
            image="/window-installation.jpg"
            alt="Louisville lawn care weed control"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Louisville lawn care weed control" //KW
            desc="r   a a"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="m"
            cardDesc3="o"
            />
            <Approach
            title="Louisville lawn care weed control" //KW
            desc="s e h  "
            />
            <Intro
            subtitle="Exceptional Louisville lawn care weed control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  n"
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="a"
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
        