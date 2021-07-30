
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
            title="Charlotte lawn spray service | We'll Take Care Of Everything" 
            desc="Charlotte lawn spray service: n w"
            canonical={`${props.website}/charlotte-lawn-spray-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte lawn spray service" //KW
            />
            <Header
            title="Charlotte lawn spray service" //KW
            subtitle="n w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="t  "
            image="/window-installation.jpg"
            alt="Charlotte lawn spray service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Charlotte lawn spray service" //KW
            desc="d a   o"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="c"
            cardDesc3="t"
            />
            <Approach
            title="Charlotte lawn spray service" //KW
            desc=", n e  "
            />
            <Intro
            subtitle="Exceptional Charlotte lawn spray service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="i e"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="l"
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
        