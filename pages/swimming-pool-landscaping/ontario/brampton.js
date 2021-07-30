
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
            title="Brampton swimming pool landscaping | We'll Take Care Of Everything" 
            desc="Brampton swimming pool landscaping: c  "
            canonical={`${props.website}/brampton-swimming-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton swimming pool landscaping" //KW
            />
            <Header
            title="Brampton swimming pool landscaping" //KW
            subtitle="c  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r o"
            image="/window-washing.jpg"
            alt="Brampton swimming pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Brampton swimming pool landscaping" //KW
            desc="n s m undefined"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="P"
            cardDesc3=" "
            />
            <Approach
            title="Brampton swimming pool landscaping" //KW
            desc="o e t s"
            />
            <Intro
            subtitle="Exceptional Brampton swimming pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="i undefined"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="v"
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
        