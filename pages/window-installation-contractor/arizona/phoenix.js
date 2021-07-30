
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
            title="Phoenix window installation contractor | We'll Take Care Of Everything" 
            desc="Phoenix window installation contractor: n s"
            canonical={`${props.website}/phoenix-window-installation-contractor`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix window installation contractor" //KW
            />
            <Header
            title="Phoenix window installation contractor" //KW
            subtitle="n s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  n"
            image="/window-installation.jpg"
            alt="Phoenix window installation contractor"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Phoenix window installation contractor" //KW
            desc="e b l e"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="u"
            cardDesc3="i"
            />
            <Approach
            title="Phoenix window installation contractor" //KW
            desc="m x   ,"
            />
            <Intro
            subtitle="Exceptional Phoenix window installation contractor" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="   "
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="l"
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
        