
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
            title="Dallas lawn care companies near me | We'll Take Care Of Everything" 
            desc="Dallas lawn care companies near me: m l"
            canonical={`${props.website}/dallas-lawn-care-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas lawn care companies near me" //KW
            />
            <Header
            title="Dallas lawn care companies near me" //KW
            subtitle="m l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="c t"
            image="/window-installations.jpg"
            alt="Dallas lawn care companies near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Dallas lawn care companies near me" //KW
            desc="    e o"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="W"
            cardDesc3="w"
            />
            <Approach
            title="Dallas lawn care companies near me" //KW
            desc="r   e  "
            />
            <Intro
            subtitle="Exceptional Dallas lawn care companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="  n"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="p"
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
        