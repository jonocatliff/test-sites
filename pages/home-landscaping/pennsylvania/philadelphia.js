
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
            title="Philadelphia home landscaping | We'll Take Care Of Everything" 
            desc="Philadelphia home landscaping: i  "
            canonical={`${props.website}/philadelphia-home-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia home landscaping" //KW
            />
            <Header
            title="Philadelphia home landscaping" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e  "
            image="/window-washing.jpg"
            alt="Philadelphia home landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Philadelphia home landscaping" //KW
            desc="x n t t"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="l"
            cardDesc3="r"
            />
            <Approach
            title="Philadelphia home landscaping" //KW
            desc="    l  "
            />
            <Intro
            subtitle="Exceptional Philadelphia home landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="s  "
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="s"
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
        