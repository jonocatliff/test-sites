
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
            title="Tucson lawn care mowing | We'll Take Care Of Everything" 
            desc="Tucson lawn care mowing: d  "
            canonical={`${props.website}/tucson-lawn-care-mowing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson lawn care mowing" //KW
            />
            <Header
            title="Tucson lawn care mowing" //KW
            subtitle="d  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="p  "
            image="/window-installation.jpg"
            alt="Tucson lawn care mowing"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Tucson lawn care mowing" //KW
            desc="u v e a"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="s"
            cardDesc3="n"
            />
            <Approach
            title="Tucson lawn care mowing" //KW
            desc="  o h n"
            />
            <Intro
            subtitle="Exceptional Tucson lawn care mowing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="i o"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
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
        