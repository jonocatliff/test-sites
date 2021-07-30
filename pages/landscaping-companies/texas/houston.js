
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
            title="Houston landscaping companies | We'll Take Care Of Everything" 
            desc="Houston landscaping companies: v w"
            canonical={`${props.website}/houston-landscaping-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston landscaping companies" //KW
            />
            <Header
            title="Houston landscaping companies" //KW
            subtitle="v w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="l i"
            image="/window-installations.jpg"
            alt="Houston landscaping companies"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Houston landscaping companies" //KW
            desc="d h o e"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="t"
            cardDesc3="o"
            />
            <Approach
            title="Houston landscaping companies" //KW
            desc="s f n o"
            />
            <Intro
            subtitle="Exceptional Houston landscaping companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="p t"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="i"
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
        