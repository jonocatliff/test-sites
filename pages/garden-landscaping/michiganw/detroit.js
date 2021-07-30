
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
            title="Detroit garden landscaping | We'll Take Care Of Everything" 
            desc="Detroit garden landscaping: o  "
            canonical={`${props.website}/detroit-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit garden landscaping" //KW
            />
            <Header
            title="Detroit garden landscaping" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a i"
            image="/window-installation.jpg"
            alt="Detroit garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Detroit garden landscaping" //KW
            desc="  n r n"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=" "
            cardDesc3="o"
            />
            <Approach
            title="Detroit garden landscaping" //KW
            desc="c r s t"
            />
            <Intro
            subtitle="Exceptional Detroit garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="n  "
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
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
        