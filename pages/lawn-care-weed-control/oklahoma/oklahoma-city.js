
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
            title="Oklahoma City lawn care weed control | We'll Take Care Of Everything" 
            desc="Oklahoma City lawn care weed control: l a"
            canonical={`${props.website}/oklahoma-city-lawn-care-weed-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City lawn care weed control" //KW
            />
            <Header
            title="Oklahoma City lawn care weed control" //KW
            subtitle="l a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="v m"
            image="/window-installations.jpg"
            alt="Oklahoma City lawn care weed control"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Oklahoma City lawn care weed control" //KW
            desc="e   o  "
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="f"
            cardDesc3="n"
            />
            <Approach
            title="Oklahoma City lawn care weed control" //KW
            desc="e s t O"
            />
            <Intro
            subtitle="Exceptional Oklahoma City lawn care weed control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i d"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="r"
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
        