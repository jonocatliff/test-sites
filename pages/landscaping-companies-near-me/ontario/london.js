
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
            title="London landscaping companies near me | We'll Take Care Of Everything" 
            desc="London landscaping companies near me: i c"
            canonical={`${props.website}/london-landscaping-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London landscaping companies near me" //KW
            />
            <Header
            title="London landscaping companies near me" //KW
            subtitle="i c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s m"
            image="/window-washing.jpg"
            alt="London landscaping companies near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional London landscaping companies near me" //KW
            desc="w l e e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="t"
            cardDesc3=" "
            />
            <Approach
            title="London landscaping companies near me" //KW
            desc="u i u h"
            />
            <Intro
            subtitle="Exceptional London landscaping companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="s l"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="n"
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
        