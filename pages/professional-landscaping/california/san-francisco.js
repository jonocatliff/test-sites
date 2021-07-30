
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
            title="San Francisco professional landscaping | We'll Take Care Of Everything" 
            desc="San Francisco professional landscaping: o n"
            canonical={`${props.website}/san-francisco-professional-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco professional landscaping" //KW
            />
            <Header
            title="San Francisco professional landscaping" //KW
            subtitle="o n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o n"
            image="/contractor.jpg"
            alt="San Francisco professional landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Francisco professional landscaping" //KW
            desc="g r e undefined"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="a"
            cardDesc3="t"
            />
            <Approach
            title="San Francisco professional landscaping" //KW
            desc="d p a i"
            />
            <Intro
            subtitle="Exceptional San Francisco professional landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="  undefined"
            cardDesc3="."
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="A" //KW
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
        