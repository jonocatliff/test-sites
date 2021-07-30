
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
            title="Kitchener swimming pool landscaping | We'll Take Care Of Everything" 
            desc="Kitchener swimming pool landscaping: o a"
            canonical={`${props.website}/kitchener-swimming-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener swimming pool landscaping" //KW
            />
            <Header
            title="Kitchener swimming pool landscaping" //KW
            subtitle="o a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o i"
            image="/window-installation.jpg"
            alt="Kitchener swimming pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Kitchener swimming pool landscaping" //KW
            desc="  o o undefined"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="v"
            cardDesc2="c"
            cardDesc3=" "
            />
            <Approach
            title="Kitchener swimming pool landscaping" //KW
            desc="o h r r"
            />
            <Intro
            subtitle="Exceptional Kitchener swimming pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="c undefined"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="l"
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
        