
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
            title="Chicago swimming pool landscaping | We'll Take Care Of Everything" 
            desc="Chicago swimming pool landscaping: l s"
            canonical={`${props.website}/chicago-swimming-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago swimming pool landscaping" //KW
            />
            <Header
            title="Chicago swimming pool landscaping" //KW
            subtitle="l s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r p"
            image="/window-installation.jpg"
            alt="Chicago swimming pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Chicago swimming pool landscaping" //KW
            desc="t o w undefined"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="w"
            cardDesc3=" "
            />
            <Approach
            title="Chicago swimming pool landscaping" //KW
            desc="o a a  "
            />
            <Intro
            subtitle="Exceptional Chicago swimming pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="o undefined"
            cardDesc3=" "
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
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        