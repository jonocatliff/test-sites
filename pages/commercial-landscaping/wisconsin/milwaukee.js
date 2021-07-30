
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
            title="Milwaukee commercial landscaping | We'll Take Care Of Everything" 
            desc="Milwaukee commercial landscaping: d m"
            canonical={`${props.website}/milwaukee-commercial-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee commercial landscaping" //KW
            />
            <Header
            title="Milwaukee commercial landscaping" //KW
            subtitle="d m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  t"
            image="/window-installations.jpg"
            alt="Milwaukee commercial landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Milwaukee commercial landscaping" //KW
            desc="a t d y"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="x"
            cardDesc2="s"
            cardDesc3="g"
            />
            <Approach
            title="Milwaukee commercial landscaping" //KW
            desc="a t t I"
            />
            <Intro
            subtitle="Exceptional Milwaukee commercial landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="s t"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="n"
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
        