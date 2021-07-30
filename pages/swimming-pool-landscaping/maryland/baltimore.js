
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
            title="Baltimore swimming pool landscaping | We'll Take Care Of Everything" 
            desc="Baltimore swimming pool landscaping: e m"
            canonical={`${props.website}/baltimore-swimming-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore swimming pool landscaping" //KW
            />
            <Header
            title="Baltimore swimming pool landscaping" //KW
            subtitle="e m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="P d"
            image="/window-installation.jpg"
            alt="Baltimore swimming pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Baltimore swimming pool landscaping" //KW
            desc="o e   undefined"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="Baltimore swimming pool landscaping" //KW
            desc="y v   e"
            />
            <Intro
            subtitle="Exceptional Baltimore swimming pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t undefined"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="o"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        