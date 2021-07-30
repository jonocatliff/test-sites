
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
            title="Kitchener outdoor landscape design | We'll Take Care Of Everything" 
            desc="Kitchener outdoor landscape design: i n"
            canonical={`${props.website}/kitchener-outdoor-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener outdoor landscape design" //KW
            />
            <Header
            title="Kitchener outdoor landscape design" //KW
            subtitle="i n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="v i"
            image="/contractor.jpg"
            alt="Kitchener outdoor landscape design"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Kitchener outdoor landscape design" //KW
            desc="v t n undefined"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3="m"
            />
            <Approach
            title="Kitchener outdoor landscape design" //KW
            desc="e t l w"
            />
            <Intro
            subtitle="Exceptional Kitchener outdoor landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="e undefined"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="i"
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
        