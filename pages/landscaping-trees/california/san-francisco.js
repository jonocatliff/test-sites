
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
            title="San Francisco landscaping trees | We'll Take Care Of Everything" 
            desc="San Francisco landscaping trees: W i"
            canonical={`${props.website}/san-francisco-landscaping-trees`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco landscaping trees" //KW
            />
            <Header
            title="San Francisco landscaping trees" //KW
            subtitle="W i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o  "
            image="/window-washing.jpg"
            alt="San Francisco landscaping trees"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Francisco landscaping trees" //KW
            desc="u   s a"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="c"
            cardDesc3="w"
            />
            <Approach
            title="San Francisco landscaping trees" //KW
            desc="a p i i"
            />
            <Intro
            subtitle="Exceptional San Francisco landscaping trees" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="W ."
            cardDesc3="a"
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
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        