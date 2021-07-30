
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
            title="Louisville landscaping trees | We'll Take Care Of Everything" 
            desc="Louisville landscaping trees: P  "
            canonical={`${props.website}/louisville-landscaping-trees`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville landscaping trees" //KW
            />
            <Header
            title="Louisville landscaping trees" //KW
            subtitle="P  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r s"
            image="/window-installations.jpg"
            alt="Louisville landscaping trees"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Louisville landscaping trees" //KW
            desc="i   a i"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="d"
            cardDesc3="i"
            />
            <Approach
            title="Louisville landscaping trees" //KW
            desc="a   t e"
            />
            <Intro
            subtitle="Exceptional Louisville landscaping trees" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="P i"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="w"
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
        