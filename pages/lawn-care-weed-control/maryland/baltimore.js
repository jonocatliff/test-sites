
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
            title="Baltimore lawn care weed control | We'll Take Care Of Everything" 
            desc="Baltimore lawn care weed control: l t"
            canonical={`${props.website}/baltimore-lawn-care-weed-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore lawn care weed control" //KW
            />
            <Header
            title="Baltimore lawn care weed control" //KW
            subtitle="l t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i m"
            image="/window-washing.jpg"
            alt="Baltimore lawn care weed control"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Baltimore lawn care weed control" //KW
            desc="  d r g"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="r"
            cardDesc3="P"
            />
            <Approach
            title="Baltimore lawn care weed control" //KW
            desc="e e   u"
            />
            <Intro
            subtitle="Exceptional Baltimore lawn care weed control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="d  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="e"
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
        