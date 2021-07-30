
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
            title="Denver front yard landscaping | We'll Take Care Of Everything" 
            desc="Denver front yard landscaping: e o"
            canonical={`${props.website}/denver-front-yard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver front yard landscaping" //KW
            />
            <Header
            title="Denver front yard landscaping" //KW
            subtitle="e o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a a"
            image="/window-installations.jpg"
            alt="Denver front yard landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Denver front yard landscaping" //KW
            desc="  l a ."
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="y"
            cardDesc3="e"
            />
            <Approach
            title="Denver front yard landscaping" //KW
            desc="  f d i"
            />
            <Intro
            subtitle="Exceptional Denver front yard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="u"
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
        