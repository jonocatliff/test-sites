
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
            title="San Diego green lawn care | We'll Take Care Of Everything" 
            desc="San Diego green lawn care: n ’"
            canonical={`${props.website}/san-diego-green-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego green lawn care" //KW
            />
            <Header
            title="San Diego green lawn care" //KW
            subtitle="n ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="f  "
            image="/window-installation.jpg"
            alt="San Diego green lawn care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Diego green lawn care" //KW
            desc="    a r"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="u"
            cardDesc3="e"
            />
            <Approach
            title="San Diego green lawn care" //KW
            desc="i i t k"
            />
            <Intro
            subtitle="Exceptional San Diego green lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e ’"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="e"
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
        