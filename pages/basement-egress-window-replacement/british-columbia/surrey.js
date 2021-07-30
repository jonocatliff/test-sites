
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
            title="Surrey basement egress window replacement | We'll Take Care Of Everything" 
            desc="Surrey basement egress window replacement: n r"
            canonical={`${props.website}/surrey-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey basement egress window replacement" //KW
            />
            <Header
            title="Surrey basement egress window replacement" //KW
            subtitle="n r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="O r"
            image="/window-washing.jpg"
            alt="Surrey basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Surrey basement egress window replacement" //KW
            desc="s o r w"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="Surrey basement egress window replacement" //KW
            desc="    t r"
            />
            <Intro
            subtitle="Exceptional Surrey basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="s"
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
        