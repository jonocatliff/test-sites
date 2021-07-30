
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
            title="Las Vegas basement egress window replacement | We'll Take Care Of Everything" 
            desc="Las Vegas basement egress window replacement: o v"
            canonical={`${props.website}/las-vegas-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas basement egress window replacement" //KW
            />
            <Header
            title="Las Vegas basement egress window replacement" //KW
            subtitle="o v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r i"
            image="/window-installations.jpg"
            alt="Las Vegas basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Las Vegas basement egress window replacement" //KW
            desc="o s t  "
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="w"
            cardDesc3="f"
            />
            <Approach
            title="Las Vegas basement egress window replacement" //KW
            desc="h v i t"
            />
            <Intro
            subtitle="Exceptional Las Vegas basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t n"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="f"
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
        