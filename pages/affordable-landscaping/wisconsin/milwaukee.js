
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
            title="Milwaukee affordable landscaping | We'll Take Care Of Everything" 
            desc="Milwaukee affordable landscaping: e v"
            canonical={`${props.website}/milwaukee-affordable-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee affordable landscaping" //KW
            />
            <Header
            title="Milwaukee affordable landscaping" //KW
            subtitle="e v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a y"
            image="/window-washing.jpg"
            alt="Milwaukee affordable landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Milwaukee affordable landscaping" //KW
            desc="t   o l"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="W"
            cardDesc3=","
            />
            <Approach
            title="Milwaukee affordable landscaping" //KW
            desc="w n r l"
            />
            <Intro
            subtitle="Exceptional Milwaukee affordable landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="c  "
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="u"
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
        