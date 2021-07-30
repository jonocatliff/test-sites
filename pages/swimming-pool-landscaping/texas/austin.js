
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
            title="Austin swimming pool landscaping | We'll Take Care Of Everything" 
            desc="Austin swimming pool landscaping: m  "
            canonical={`${props.website}/austin-swimming-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin swimming pool landscaping" //KW
            />
            <Header
            title="Austin swimming pool landscaping" //KW
            subtitle="m  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="W f"
            image="/contractor.jpg"
            alt="Austin swimming pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Austin swimming pool landscaping" //KW
            desc="d o   undefined"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="i"
            />
            <Approach
            title="Austin swimming pool landscaping" //KW
            desc="n   h t"
            />
            <Intro
            subtitle="Exceptional Austin swimming pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2=". undefined"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="o"
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
        