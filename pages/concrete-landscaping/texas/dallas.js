
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
            title="Dallas concrete landscaping | We'll Take Care Of Everything" 
            desc="Dallas concrete landscaping: t y"
            canonical={`${props.website}/dallas-concrete-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas concrete landscaping" //KW
            />
            <Header
            title="Dallas concrete landscaping" //KW
            subtitle="t y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="m  "
            image="/window-installations.jpg"
            alt="Dallas concrete landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Dallas concrete landscaping" //KW
            desc="d n a  "
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2=" "
            cardDesc3="a"
            />
            <Approach
            title="Dallas concrete landscaping" //KW
            desc="y o   u"
            />
            <Intro
            subtitle="Exceptional Dallas concrete landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="o e"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="i"
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
        