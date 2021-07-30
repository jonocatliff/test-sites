
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
            title="Houston landscaping bushes | We'll Take Care Of Everything" 
            desc="Houston landscaping bushes: s  "
            canonical={`${props.website}/houston-landscaping-bushes`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston landscaping bushes" //KW
            />
            <Header
            title="Houston landscaping bushes" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i  "
            image="/window-installation.jpg"
            alt="Houston landscaping bushes"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Houston landscaping bushes" //KW
            desc="e   o p"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="p"
            cardDesc3="t"
            />
            <Approach
            title="Houston landscaping bushes" //KW
            desc="r   w  "
            />
            <Intro
            subtitle="Exceptional Houston landscaping bushes" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="A v"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="e"
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
        