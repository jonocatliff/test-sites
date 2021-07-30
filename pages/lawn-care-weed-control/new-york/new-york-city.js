
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
            title="New York City lawn care weed control | We'll Take Care Of Everything" 
            desc="New York City lawn care weed control: l e"
            canonical={`${props.website}/new-york-city-lawn-care-weed-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City lawn care weed control" //KW
            />
            <Header
            title="New York City lawn care weed control" //KW
            subtitle="l e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="v o"
            image="/contractor.jpg"
            alt="New York City lawn care weed control"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional New York City lawn care weed control" //KW
            desc="e r   i"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="New York City lawn care weed control" //KW
            desc="    w t"
            />
            <Intro
            subtitle="Exceptional New York City lawn care weed control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="o e"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="o"
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
        