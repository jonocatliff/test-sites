
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
            title="Victoria backyard landscaping | We'll Take Care Of Everything" 
            desc="Victoria backyard landscaping:    "
            canonical={`${props.website}/victoria-backyard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria backyard landscaping" //KW
            />
            <Header
            title="Victoria backyard landscaping" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e i"
            image="/contractor.jpg"
            alt="Victoria backyard landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Victoria backyard landscaping" //KW
            desc="  l e  "
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="c"
            cardDesc3="e"
            />
            <Approach
            title="Victoria backyard landscaping" //KW
            desc="s o i e"
            />
            <Intro
            subtitle="Exceptional Victoria backyard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="r s"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        