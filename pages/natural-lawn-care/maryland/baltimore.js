
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
            title="Baltimore natural lawn care | We'll Take Care Of Everything" 
            desc="Baltimore natural lawn care: o o"
            canonical={`${props.website}/baltimore-natural-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore natural lawn care" //KW
            />
            <Header
            title="Baltimore natural lawn care" //KW
            subtitle="o o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a t"
            image="/contractor.jpg"
            alt="Baltimore natural lawn care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Baltimore natural lawn care" //KW
            desc="h e i undefined"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="i"
            cardDesc3="i"
            />
            <Approach
            title="Baltimore natural lawn care" //KW
            desc="t i   s"
            />
            <Intro
            subtitle="Exceptional Baltimore natural lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e undefined"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="t"
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
        