
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
            title="San Francisco vinyl window installation | We'll Take Care Of Everything" 
            desc="San Francisco vinyl window installation: r f"
            canonical={`${props.website}/san-francisco-vinyl-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco vinyl window installation" //KW
            />
            <Header
            title="San Francisco vinyl window installation" //KW
            subtitle="r f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="d n"
            image="/contractor.jpg"
            alt="San Francisco vinyl window installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Francisco vinyl window installation" //KW
            desc="t t d  "
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="e"
            cardDesc3="m"
            />
            <Approach
            title="San Francisco vinyl window installation" //KW
            desc="W s a o"
            />
            <Intro
            subtitle="Exceptional San Francisco vinyl window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="o  "
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="r"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        