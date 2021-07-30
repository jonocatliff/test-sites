
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
            title="Winnipeg lawn landscaping | We'll Take Care Of Everything" 
            desc="Winnipeg lawn landscaping: A l"
            canonical={`${props.website}/winnipeg-lawn-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg lawn landscaping" //KW
            />
            <Header
            title="Winnipeg lawn landscaping" //KW
            subtitle="A l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="c f"
            image="/window-washing.jpg"
            alt="Winnipeg lawn landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Winnipeg lawn landscaping" //KW
            desc="r n l g"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=","
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="y"
            cardDesc3="w"
            />
            <Approach
            title="Winnipeg lawn landscaping" //KW
            desc="i   O p"
            />
            <Intro
            subtitle="Exceptional Winnipeg lawn landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t y"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="o"
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
        