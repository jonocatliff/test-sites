
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
            title="Philadelphia window replacement companies | We'll Take Care Of Everything" 
            desc="Philadelphia window replacement companies: a w"
            canonical={`${props.website}/philadelphia-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia window replacement companies" //KW
            />
            <Header
            title="Philadelphia window replacement companies" //KW
            subtitle="a w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e o"
            image="/contractor.jpg"
            alt="Philadelphia window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Philadelphia window replacement companies" //KW
            desc="  s   w"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="."
            cardDesc3="o"
            />
            <Approach
            title="Philadelphia window replacement companies" //KW
            desc="l u t u"
            />
            <Intro
            subtitle="Exceptional Philadelphia window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="b a"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="r"
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
        