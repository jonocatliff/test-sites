
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
            title="Charlotte landscaping trees | We'll Take Care Of Everything" 
            desc="Charlotte landscaping trees: o p"
            canonical={`${props.website}/charlotte-landscaping-trees`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte landscaping trees" //KW
            />
            <Header
            title="Charlotte landscaping trees" //KW
            subtitle="o p"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o n"
            image="/window-washing.jpg"
            alt="Charlotte landscaping trees"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Charlotte landscaping trees" //KW
            desc="e p h c"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="b"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="r"
            cardDesc3="o"
            />
            <Approach
            title="Charlotte landscaping trees" //KW
            desc="t a w w"
            />
            <Intro
            subtitle="Exceptional Charlotte landscaping trees" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="o m"
            cardDesc3="."
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        