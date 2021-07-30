
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
            title="Jacksonville lawn care weed control | We'll Take Care Of Everything" 
            desc="Jacksonville lawn care weed control: t o"
            canonical={`${props.website}/jacksonville-lawn-care-weed-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville lawn care weed control" //KW
            />
            <Header
            title="Jacksonville lawn care weed control" //KW
            subtitle="t o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e e"
            image="/window-installation.jpg"
            alt="Jacksonville lawn care weed control"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Jacksonville lawn care weed control" //KW
            desc="e .   t"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="i"
            cardDesc3="i"
            />
            <Approach
            title="Jacksonville lawn care weed control" //KW
            desc="d y s s"
            />
            <Intro
            subtitle="Exceptional Jacksonville lawn care weed control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="w"
            cardDesc2="t c"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="r"
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
        