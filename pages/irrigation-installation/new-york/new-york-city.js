
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
            title="New York City irrigation installation | We'll Take Care Of Everything" 
            desc="New York City irrigation installation: i P"
            canonical={`${props.website}/new-york-city-irrigation-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City irrigation installation" //KW
            />
            <Header
            title="New York City irrigation installation" //KW
            subtitle="i P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a o"
            image="/contractor.jpg"
            alt="New York City irrigation installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional New York City irrigation installation" //KW
            desc="n o n o"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="r"
            cardDesc3="t"
            />
            <Approach
            title="New York City irrigation installation" //KW
            desc="u p   e"
            />
            <Intro
            subtitle="Exceptional New York City irrigation installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="s  "
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="g"
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
        