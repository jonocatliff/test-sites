
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
            title="Montreal grass treatment for weeds | We'll Take Care Of Everything" 
            desc="Montreal grass treatment for weeds: t  "
            canonical={`${props.website}/montreal-grass-treatment-for-weeds`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal grass treatment for weeds" //KW
            />
            <Header
            title="Montreal grass treatment for weeds" //KW
            subtitle="t  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e a"
            image="/contractor.jpg"
            alt="Montreal grass treatment for weeds"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Montreal grass treatment for weeds" //KW
            desc="n   r u"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="b"
            cardDesc2="e"
            cardDesc3="r"
            />
            <Approach
            title="Montreal grass treatment for weeds" //KW
            desc="  r t u"
            />
            <Intro
            subtitle="Exceptional Montreal grass treatment for weeds" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="i n"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="r"
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
        