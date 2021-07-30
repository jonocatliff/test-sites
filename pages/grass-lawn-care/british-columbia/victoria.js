
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
            title="Victoria grass lawn care | We'll Take Care Of Everything" 
            desc="Victoria grass lawn care: , W"
            canonical={`${props.website}/victoria-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria grass lawn care" //KW
            />
            <Header
            title="Victoria grass lawn care" //KW
            subtitle=", W"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e e"
            image="/window-installation.jpg"
            alt="Victoria grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Victoria grass lawn care" //KW
            desc="  g   t"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2=" "
            cardDesc3="h"
            />
            <Approach
            title="Victoria grass lawn care" //KW
            desc="h o   h"
            />
            <Intro
            subtitle="Exceptional Victoria grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="x w"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
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
        