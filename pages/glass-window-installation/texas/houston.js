
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
            title="Houston glass window installation | We'll Take Care Of Everything" 
            desc="Houston glass window installation: i i"
            canonical={`${props.website}/houston-glass-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston glass window installation" //KW
            />
            <Header
            title="Houston glass window installation" //KW
            subtitle="i i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  n"
            image="/window-washing.jpg"
            alt="Houston glass window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Houston glass window installation" //KW
            desc="a A d f"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="Houston glass window installation" //KW
            desc="s p   n"
            />
            <Intro
            subtitle="Exceptional Houston glass window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="c ’"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="o"
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
        