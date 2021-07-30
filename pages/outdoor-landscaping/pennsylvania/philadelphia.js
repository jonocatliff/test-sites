
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
            title="Philadelphia outdoor landscaping | We'll Take Care Of Everything" 
            desc="Philadelphia outdoor landscaping: i y"
            canonical={`${props.website}/philadelphia-outdoor-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia outdoor landscaping" //KW
            />
            <Header
            title="Philadelphia outdoor landscaping" //KW
            subtitle="i y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc=", e"
            image="/window-installations.jpg"
            alt="Philadelphia outdoor landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Philadelphia outdoor landscaping" //KW
            desc="  a c undefined"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="e"
            cardDesc3="a"
            />
            <Approach
            title="Philadelphia outdoor landscaping" //KW
            desc="o   e w"
            />
            <Intro
            subtitle="Exceptional Philadelphia outdoor landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="w undefined"
            cardDesc3="y"
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
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        