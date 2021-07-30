
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
            title="San Jose local landscaping | We'll Take Care Of Everything" 
            desc="San Jose local landscaping: d e"
            canonical={`${props.website}/san-jose-local-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose local landscaping" //KW
            />
            <Header
            title="San Jose local landscaping" //KW
            subtitle="d e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r t"
            image="/window-installations.jpg"
            alt="San Jose local landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Jose local landscaping" //KW
            desc="  e k d"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="d"
            cardDesc3="v"
            />
            <Approach
            title="San Jose local landscaping" //KW
            desc="g r r w"
            />
            <Intro
            subtitle="Exceptional San Jose local landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="  r"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="n"
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
        