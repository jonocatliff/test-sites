
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
            title="Kitchener backyard landscaping | We'll Take Care Of Everything" 
            desc="Kitchener backyard landscaping: w w"
            canonical={`${props.website}/kitchener-backyard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener backyard landscaping" //KW
            />
            <Header
            title="Kitchener backyard landscaping" //KW
            subtitle="w w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="t  "
            image="/window-washing.jpg"
            alt="Kitchener backyard landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Kitchener backyard landscaping" //KW
            desc="s d p t"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="n"
            cardDesc3="a"
            />
            <Approach
            title="Kitchener backyard landscaping" //KW
            desc="t r i r"
            />
            <Intro
            subtitle="Exceptional Kitchener backyard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="w"
            cardDesc2="n n"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="g"
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
        