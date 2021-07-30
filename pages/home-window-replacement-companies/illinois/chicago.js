
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
            title="Chicago home window replacement companies | We'll Take Care Of Everything" 
            desc="Chicago home window replacement companies: i a"
            canonical={`${props.website}/chicago-home-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago home window replacement companies" //KW
            />
            <Header
            title="Chicago home window replacement companies" //KW
            subtitle="i a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n  "
            image="/window-installations.jpg"
            alt="Chicago home window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Chicago home window replacement companies" //KW
            desc="y i   o"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="n"
            cardDesc3="c"
            />
            <Approach
            title="Chicago home window replacement companies" //KW
            desc="d o b e"
            />
            <Intro
            subtitle="Exceptional Chicago home window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="s r"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="-"
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
        