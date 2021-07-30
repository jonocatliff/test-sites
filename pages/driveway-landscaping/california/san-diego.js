
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
            title="San Diego driveway landscaping | We'll Take Care Of Everything" 
            desc="San Diego driveway landscaping: w o"
            canonical={`${props.website}/san-diego-driveway-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego driveway landscaping" //KW
            />
            <Header
            title="San Diego driveway landscaping" //KW
            subtitle="w o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  a"
            image="/window-installation.jpg"
            alt="San Diego driveway landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Diego driveway landscaping" //KW
            desc="g   d u"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="n"
            cardDesc3="r"
            />
            <Approach
            title="San Diego driveway landscaping" //KW
            desc="  o r n"
            />
            <Intro
            subtitle="Exceptional San Diego driveway landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c  "
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="l"
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
        