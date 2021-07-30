
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
            title="Surrey backyard landscaping | We'll Take Care Of Everything" 
            desc="Surrey backyard landscaping: e a"
            canonical={`${props.website}/surrey-backyard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey backyard landscaping" //KW
            />
            <Header
            title="Surrey backyard landscaping" //KW
            subtitle="e a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o t"
            image="/window-washing.jpg"
            alt="Surrey backyard landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Surrey backyard landscaping" //KW
            desc="n d e t"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3="."
            />
            <Approach
            title="Surrey backyard landscaping" //KW
            desc="e i i t"
            />
            <Intro
            subtitle="Exceptional Surrey backyard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="a e"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="a"
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
        