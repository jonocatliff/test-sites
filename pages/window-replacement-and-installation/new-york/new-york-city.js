
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
            title="New York City window replacement and installation | We'll Take Care Of Everything" 
            desc="New York City window replacement and installation: r e"
            canonical={`${props.website}/new-york-city-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City window replacement and installation" //KW
            />
            <Header
            title="New York City window replacement and installation" //KW
            subtitle="r e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e v"
            image="/window-washing.jpg"
            alt="New York City window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional New York City window replacement and installation" //KW
            desc="e r e a"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="c"
            cardDesc3="s"
            />
            <Approach
            title="New York City window replacement and installation" //KW
            desc="  p i t"
            />
            <Intro
            subtitle="Exceptional New York City window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="e  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2=" "
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
        