
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
            title="Jacksonville landscaping trees | We'll Take Care Of Everything" 
            desc="Jacksonville landscaping trees:   v"
            canonical={`${props.website}/jacksonville-landscaping-trees`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville landscaping trees" //KW
            />
            <Header
            title="Jacksonville landscaping trees" //KW
            subtitle="  v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="w o"
            image="/window-installation.jpg"
            alt="Jacksonville landscaping trees"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Jacksonville landscaping trees" //KW
            desc="o l e  "
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Jacksonville landscaping trees" //KW
            desc="t o w k"
            />
            <Intro
            subtitle="Exceptional Jacksonville landscaping trees" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  e"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2=","
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
        