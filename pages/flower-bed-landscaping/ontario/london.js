
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
            title="London flower bed landscaping | We'll Take Care Of Everything" 
            desc="London flower bed landscaping: e  "
            canonical={`${props.website}/london-flower-bed-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London flower bed landscaping" //KW
            />
            <Header
            title="London flower bed landscaping" //KW
            subtitle="e  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a b"
            image="/contractor.jpg"
            alt="London flower bed landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional London flower bed landscaping" //KW
            desc="a w a  "
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="k"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="London flower bed landscaping" //KW
            desc="w   f l"
            />
            <Intro
            subtitle="Exceptional London flower bed landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="e n"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2=" "
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
        