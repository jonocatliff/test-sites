
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
            title="San Francisco garden landscaping | We'll Take Care Of Everything" 
            desc="San Francisco garden landscaping: o P"
            canonical={`${props.website}/san-francisco-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco garden landscaping" //KW
            />
            <Header
            title="San Francisco garden landscaping" //KW
            subtitle="o P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="n n"
            image="/contractor.jpg"
            alt="San Francisco garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Francisco garden landscaping" //KW
            desc="    v r"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="d"
            cardDesc3="s"
            />
            <Approach
            title="San Francisco garden landscaping" //KW
            desc="w d p s"
            />
            <Intro
            subtitle="Exceptional San Francisco garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e  "
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="d"
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
        