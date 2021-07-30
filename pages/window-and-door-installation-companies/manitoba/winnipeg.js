
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
            title="Winnipeg window and door installation companies | We'll Take Care Of Everything" 
            desc="Winnipeg window and door installation companies: o l"
            canonical={`${props.website}/winnipeg-window-and-door-installation-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg window and door installation companies" //KW
            />
            <Header
            title="Winnipeg window and door installation companies" //KW
            subtitle="o l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="   "
            image="/contractor.jpg"
            alt="Winnipeg window and door installation companies"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Winnipeg window and door installation companies" //KW
            desc="i a d t"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="c"
            cardDesc3="u"
            />
            <Approach
            title="Winnipeg window and door installation companies" //KW
            desc="e l v  "
            />
            <Intro
            subtitle="Exceptional Winnipeg window and door installation companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="l"
            cardDesc2="o p"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="u"
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
        