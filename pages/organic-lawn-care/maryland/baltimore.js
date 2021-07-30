
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
            title="Baltimore organic lawn care | We'll Take Care Of Everything" 
            desc="Baltimore organic lawn care: a l"
            canonical={`${props.website}/baltimore-organic-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore organic lawn care" //KW
            />
            <Header
            title="Baltimore organic lawn care" //KW
            subtitle="a l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a b"
            image="/window-installations.jpg"
            alt="Baltimore organic lawn care"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Baltimore organic lawn care" //KW
            desc="r c   undefined"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="c"
            cardDesc3=" "
            />
            <Approach
            title="Baltimore organic lawn care" //KW
            desc="d d s s"
            />
            <Intro
            subtitle="Exceptional Baltimore organic lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="t undefined"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="t"
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
        