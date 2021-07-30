
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
            title="Baltimore landscaping bushes | We'll Take Care Of Everything" 
            desc="Baltimore landscaping bushes: p  "
            canonical={`${props.website}/baltimore-landscaping-bushes`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore landscaping bushes" //KW
            />
            <Header
            title="Baltimore landscaping bushes" //KW
            subtitle="p  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="m k"
            image="/window-installations.jpg"
            alt="Baltimore landscaping bushes"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Baltimore landscaping bushes" //KW
            desc="t w e e"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="m"
            cardDesc2="e"
            cardDesc3="t"
            />
            <Approach
            title="Baltimore landscaping bushes" //KW
            desc="y i h u"
            />
            <Intro
            subtitle="Exceptional Baltimore landscaping bushes" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="n w"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="t"
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
        