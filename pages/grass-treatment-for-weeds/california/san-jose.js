
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
            title="San Jose grass treatment for weeds | We'll Take Care Of Everything" 
            desc="San Jose grass treatment for weeds: r u"
            canonical={`${props.website}/san-jose-grass-treatment-for-weeds`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose grass treatment for weeds" //KW
            />
            <Header
            title="San Jose grass treatment for weeds" //KW
            subtitle="r u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  u"
            image="/contractor.jpg"
            alt="San Jose grass treatment for weeds"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Jose grass treatment for weeds" //KW
            desc="  o z i"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="p"
            cardDesc3="r"
            />
            <Approach
            title="San Jose grass treatment for weeds" //KW
            desc="  e n O"
            />
            <Intro
            subtitle="Exceptional San Jose grass treatment for weeds" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e  "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="i"
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
        