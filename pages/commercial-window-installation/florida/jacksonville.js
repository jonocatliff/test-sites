
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
            title="Jacksonville commercial window installation | We'll Take Care Of Everything" 
            desc="Jacksonville commercial window installation: d o"
            canonical={`${props.website}/jacksonville-commercial-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville commercial window installation" //KW
            />
            <Header
            title="Jacksonville commercial window installation" //KW
            subtitle="d o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  o"
            image="/contractor.jpg"
            alt="Jacksonville commercial window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Jacksonville commercial window installation" //KW
            desc="  n s  "
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="w"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="o"
            cardDesc3="t"
            />
            <Approach
            title="Jacksonville commercial window installation" //KW
            desc="n   t  "
            />
            <Intro
            subtitle="Exceptional Jacksonville commercial window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="i t"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="u"
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
        