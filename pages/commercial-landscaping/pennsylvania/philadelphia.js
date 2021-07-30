
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
            title="Philadelphia commercial landscaping | We'll Take Care Of Everything" 
            desc="Philadelphia commercial landscaping: w t"
            canonical={`${props.website}/philadelphia-commercial-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia commercial landscaping" //KW
            />
            <Header
            title="Philadelphia commercial landscaping" //KW
            subtitle="w t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s '"
            image="/contractor.jpg"
            alt="Philadelphia commercial landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Philadelphia commercial landscaping" //KW
            desc="  v c  "
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="w"
            cardDesc3="t"
            />
            <Approach
            title="Philadelphia commercial landscaping" //KW
            desc="e u a s"
            />
            <Intro
            subtitle="Exceptional Philadelphia commercial landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t y"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
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
        