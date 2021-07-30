
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
            title="Kitchener landscaping front of house | We'll Take Care Of Everything" 
            desc="Kitchener landscaping front of house: a s"
            canonical={`${props.website}/kitchener-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener landscaping front of house" //KW
            />
            <Header
            title="Kitchener landscaping front of house" //KW
            subtitle="a s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="   "
            image="/window-installation.jpg"
            alt="Kitchener landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Kitchener landscaping front of house" //KW
            desc="s   t c"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=","
            cardDesc2=" "
            cardDesc3="s"
            />
            <Approach
            title="Kitchener landscaping front of house" //KW
            desc="o p t s"
            />
            <Intro
            subtitle="Exceptional Kitchener landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2=", r"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="o"
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
        