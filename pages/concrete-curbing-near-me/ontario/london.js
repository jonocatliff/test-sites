
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
            title="London concrete curbing near me | We'll Take Care Of Everything" 
            desc="London concrete curbing near me:    "
            canonical={`${props.website}/london-concrete-curbing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London concrete curbing near me" //KW
            />
            <Header
            title="London concrete curbing near me" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r t"
            image="/window-installations.jpg"
            alt="London concrete curbing near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional London concrete curbing near me" //KW
            desc="h u i f"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="London concrete curbing near me" //KW
            desc="s d g l"
            />
            <Intro
            subtitle="Exceptional London concrete curbing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="v s"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        