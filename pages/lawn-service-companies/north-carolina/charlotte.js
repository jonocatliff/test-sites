
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
            title="Charlotte lawn service companies | We'll Take Care Of Everything" 
            desc="Charlotte lawn service companies: a ,"
            canonical={`${props.website}/charlotte-lawn-service-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte lawn service companies" //KW
            />
            <Header
            title="Charlotte lawn service companies" //KW
            subtitle="a ,"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc=", r"
            image="/window-installation.jpg"
            alt="Charlotte lawn service companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Charlotte lawn service companies" //KW
            desc="n n d r"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="m"
            cardDesc3="u"
            />
            <Approach
            title="Charlotte lawn service companies" //KW
            desc="  r i  "
            />
            <Intro
            subtitle="Exceptional Charlotte lawn service companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o w"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="W" //KW
            desc2="a"
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
        