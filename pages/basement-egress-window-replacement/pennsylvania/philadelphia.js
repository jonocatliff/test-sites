
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
            title="Philadelphia basement egress window replacement | We'll Take Care Of Everything" 
            desc="Philadelphia basement egress window replacement: t r"
            canonical={`${props.website}/philadelphia-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia basement egress window replacement" //KW
            />
            <Header
            title="Philadelphia basement egress window replacement" //KW
            subtitle="t r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  o"
            image="/window-installation.jpg"
            alt="Philadelphia basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Philadelphia basement egress window replacement" //KW
            desc="d   v  "
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="l"
            cardDesc3="w"
            />
            <Approach
            title="Philadelphia basement egress window replacement" //KW
            desc="i f t t"
            />
            <Intro
            subtitle="Exceptional Philadelphia basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="a  "
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="l"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        