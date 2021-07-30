
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
            title="Austin skylight window replacement | We'll Take Care Of Everything" 
            desc="Austin skylight window replacement: i o"
            canonical={`${props.website}/austin-skylight-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin skylight window replacement" //KW
            />
            <Header
            title="Austin skylight window replacement" //KW
            subtitle="i o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a  "
            image="/window-installation.jpg"
            alt="Austin skylight window replacement"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Austin skylight window replacement" //KW
            desc="w s n  "
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2=" "
            cardDesc3="."
            />
            <Approach
            title="Austin skylight window replacement" //KW
            desc="d ’ r d"
            />
            <Intro
            subtitle="Exceptional Austin skylight window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="r"
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
        