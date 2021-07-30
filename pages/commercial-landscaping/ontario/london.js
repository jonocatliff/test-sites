
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
            title="London commercial landscaping | We'll Take Care Of Everything" 
            desc="London commercial landscaping: w s"
            canonical={`${props.website}/london-commercial-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London commercial landscaping" //KW
            />
            <Header
            title="London commercial landscaping" //KW
            subtitle="w s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="s m"
            image="/window-installation.jpg"
            alt="London commercial landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional London commercial landscaping" //KW
            desc="r h e e"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="l"
            cardDesc3="f"
            />
            <Approach
            title="London commercial landscaping" //KW
            desc="j e e f"
            />
            <Intro
            subtitle="Exceptional London commercial landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="l ’"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2=" "
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
        