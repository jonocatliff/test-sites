
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
            title="Philadelphia local landscaping | We'll Take Care Of Everything" 
            desc="Philadelphia local landscaping: h w"
            canonical={`${props.website}/philadelphia-local-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia local landscaping" //KW
            />
            <Header
            title="Philadelphia local landscaping" //KW
            subtitle="h w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e o"
            image="/window-installation.jpg"
            alt="Philadelphia local landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Philadelphia local landscaping" //KW
            desc="h   d  "
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="a"
            cardDesc3="a"
            />
            <Approach
            title="Philadelphia local landscaping" //KW
            desc="r s o u"
            />
            <Intro
            subtitle="Exceptional Philadelphia local landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="a  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="A" //KW
            desc2="c"
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
        