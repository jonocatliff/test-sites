
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
            title="Detroit landscaping trees | We'll Take Care Of Everything" 
            desc="Detroit landscaping trees: s i"
            canonical={`${props.website}/detroit-landscaping-trees`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit landscaping trees" //KW
            />
            <Header
            title="Detroit landscaping trees" //KW
            subtitle="s i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i n"
            image="/window-installations.jpg"
            alt="Detroit landscaping trees"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Detroit landscaping trees" //KW
            desc=". u   l"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="o"
            cardDesc3="o"
            />
            <Approach
            title="Detroit landscaping trees" //KW
            desc="P y    "
            />
            <Intro
            subtitle="Exceptional Detroit landscaping trees" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="s a"
            cardDesc3="W"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2=" "
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
        