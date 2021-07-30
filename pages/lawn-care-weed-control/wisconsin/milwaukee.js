
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
            title="Milwaukee lawn care weed control | We'll Take Care Of Everything" 
            desc="Milwaukee lawn care weed control: i n"
            canonical={`${props.website}/milwaukee-lawn-care-weed-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee lawn care weed control" //KW
            />
            <Header
            title="Milwaukee lawn care weed control" //KW
            subtitle="i n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s t"
            image="/window-washing.jpg"
            alt="Milwaukee lawn care weed control"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Milwaukee lawn care weed control" //KW
            desc="o i b l"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=" "
            cardDesc3="s"
            />
            <Approach
            title="Milwaukee lawn care weed control" //KW
            desc=", c e w"
            />
            <Intro
            subtitle="Exceptional Milwaukee lawn care weed control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="f y"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="i"
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
        