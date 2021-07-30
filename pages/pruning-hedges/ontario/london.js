
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
            title="London pruning hedges | We'll Take Care Of Everything" 
            desc="London pruning hedges: h o"
            canonical={`${props.website}/london-pruning-hedges`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London pruning hedges" //KW
            />
            <Header
            title="London pruning hedges" //KW
            subtitle="h o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s t"
            image="/window-installations.jpg"
            alt="London pruning hedges"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional London pruning hedges" //KW
            desc="s   e undefined"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="i"
            cardDesc3="e"
            />
            <Approach
            title="London pruning hedges" //KW
            desc="n T t f"
            />
            <Intro
            subtitle="Exceptional London pruning hedges" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i undefined"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="t"
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
        