
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
            title="Charlotte landscaping bushes | We'll Take Care Of Everything" 
            desc="Charlotte landscaping bushes:   ,"
            canonical={`${props.website}/charlotte-landscaping-bushes`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte landscaping bushes" //KW
            />
            <Header
            title="Charlotte landscaping bushes" //KW
            subtitle="  ,"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o n"
            image="/contractor.jpg"
            alt="Charlotte landscaping bushes"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Charlotte landscaping bushes" //KW
            desc="n o e o"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="i"
            cardDesc3="c"
            />
            <Approach
            title="Charlotte landscaping bushes" //KW
            desc="  f a s"
            />
            <Intro
            subtitle="Exceptional Charlotte landscaping bushes" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="P n"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="n"
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
        