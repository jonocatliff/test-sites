
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
            title="Kitchener grass lawn care | We'll Take Care Of Everything" 
            desc="Kitchener grass lawn care: o m"
            canonical={`${props.website}/kitchener-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener grass lawn care" //KW
            />
            <Header
            title="Kitchener grass lawn care" //KW
            subtitle="o m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i i"
            image="/window-installation.jpg"
            alt="Kitchener grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Kitchener grass lawn care" //KW
            desc="o i h i"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="w"
            cardDesc3="n"
            />
            <Approach
            title="Kitchener grass lawn care" //KW
            desc="a h r  "
            />
            <Intro
            subtitle="Exceptional Kitchener grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="  f"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="c"
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
        