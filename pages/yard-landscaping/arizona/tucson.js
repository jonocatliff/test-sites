
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
            title="Tucson yard landscaping | We'll Take Care Of Everything" 
            desc="Tucson yard landscaping: i n"
            canonical={`${props.website}/tucson-yard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson yard landscaping" //KW
            />
            <Header
            title="Tucson yard landscaping" //KW
            subtitle="i n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="f a"
            image="/window-installations.jpg"
            alt="Tucson yard landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Tucson yard landscaping" //KW
            desc="a u r undefined"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="m"
            cardDesc3="c"
            />
            <Approach
            title="Tucson yard landscaping" //KW
            desc="t r o n"
            />
            <Intro
            subtitle="Exceptional Tucson yard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="h undefined"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="a"
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
        