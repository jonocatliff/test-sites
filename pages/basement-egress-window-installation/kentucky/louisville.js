
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
            title="Louisville basement egress window installation | We'll Take Care Of Everything" 
            desc="Louisville basement egress window installation: o  "
            canonical={`${props.website}/louisville-basement-egress-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville basement egress window installation" //KW
            />
            <Header
            title="Louisville basement egress window installation" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i s"
            image="/window-installations.jpg"
            alt="Louisville basement egress window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Louisville basement egress window installation" //KW
            desc="l o o a"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="c"
            cardDesc3="i"
            />
            <Approach
            title="Louisville basement egress window installation" //KW
            desc="w y   v"
            />
            <Intro
            subtitle="Exceptional Louisville basement egress window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="i  "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
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
        