
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
            title="Austin sod landscaping | We'll Take Care Of Everything" 
            desc="Austin sod landscaping: a o"
            canonical={`${props.website}/austin-sod-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin sod landscaping" //KW
            />
            <Header
            title="Austin sod landscaping" //KW
            subtitle="a o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="l  "
            image="/window-installation.jpg"
            alt="Austin sod landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Austin sod landscaping" //KW
            desc="r t   undefined"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="w"
            cardDesc3="w"
            />
            <Approach
            title="Austin sod landscaping" //KW
            desc="  e d  "
            />
            <Intro
            subtitle="Exceptional Austin sod landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="o undefined"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
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
        