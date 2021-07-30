
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
            title="Ottowa home window installation | We'll Take Care Of Everything" 
            desc="Ottowa home window installation: l  "
            canonical={`${props.website}/ottowa-home-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa home window installation" //KW
            />
            <Header
            title="Ottowa home window installation" //KW
            subtitle="l  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i t"
            image="/contractor.jpg"
            alt="Ottowa home window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Ottowa home window installation" //KW
            desc="i l n a"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="u"
            cardDesc3="o"
            />
            <Approach
            title="Ottowa home window installation" //KW
            desc="s d   t"
            />
            <Intro
            subtitle="Exceptional Ottowa home window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="s w"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="o"
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
        