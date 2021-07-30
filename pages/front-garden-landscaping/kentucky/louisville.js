
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
            title="Louisville front garden landscaping | We'll Take Care Of Everything" 
            desc="Louisville front garden landscaping: u  "
            canonical={`${props.website}/louisville-front-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville front garden landscaping" //KW
            />
            <Header
            title="Louisville front garden landscaping" //KW
            subtitle="u  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e e"
            image="/window-installations.jpg"
            alt="Louisville front garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Louisville front garden landscaping" //KW
            desc="    a l"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="u"
            cardDesc3=" "
            />
            <Approach
            title="Louisville front garden landscaping" //KW
            desc="i a i s"
            />
            <Intro
            subtitle="Exceptional Louisville front garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="  n"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="l"
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
        