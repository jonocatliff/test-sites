
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
            title="Calgary swimming pool landscaping | We'll Take Care Of Everything" 
            desc="Calgary swimming pool landscaping: s i"
            canonical={`${props.website}/calgary-swimming-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary swimming pool landscaping" //KW
            />
            <Header
            title="Calgary swimming pool landscaping" //KW
            subtitle="s i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e i"
            image="/window-washing.jpg"
            alt="Calgary swimming pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Calgary swimming pool landscaping" //KW
            desc="u l   undefined"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3="t"
            />
            <Approach
            title="Calgary swimming pool landscaping" //KW
            desc="e o e a"
            />
            <Intro
            subtitle="Exceptional Calgary swimming pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="o undefined"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="W"
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
        