
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
            title="San Antonio pool landscaping | We'll Take Care Of Everything" 
            desc="San Antonio pool landscaping: e ."
            canonical={`${props.website}/san-antonio-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio pool landscaping" //KW
            />
            <Header
            title="San Antonio pool landscaping" //KW
            subtitle="e ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s n"
            image="/window-washing.jpg"
            alt="San Antonio pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Antonio pool landscaping" //KW
            desc="o s e undefined"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="f"
            cardDesc3=" "
            />
            <Approach
            title="San Antonio pool landscaping" //KW
            desc="r f l t"
            />
            <Intro
            subtitle="Exceptional San Antonio pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="a undefined"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="d"
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
        