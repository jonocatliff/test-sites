
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
            title="Tucson landscaping bushes | We'll Take Care Of Everything" 
            desc="Tucson landscaping bushes: t  "
            canonical={`${props.website}/tucson-landscaping-bushes`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson landscaping bushes" //KW
            />
            <Header
            title="Tucson landscaping bushes" //KW
            subtitle="t  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i u"
            image="/window-installations.jpg"
            alt="Tucson landscaping bushes"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Tucson landscaping bushes" //KW
            desc="a h t  "
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Tucson landscaping bushes" //KW
            desc="n r n s"
            />
            <Intro
            subtitle="Exceptional Tucson landscaping bushes" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="t  "
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="d"
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
        