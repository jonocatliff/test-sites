
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
            title="Calgary lawn spray service | We'll Take Care Of Everything" 
            desc="Calgary lawn spray service: a s"
            canonical={`${props.website}/calgary-lawn-spray-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary lawn spray service" //KW
            />
            <Header
            title="Calgary lawn spray service" //KW
            subtitle="a s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc=",  "
            image="/window-washing.jpg"
            alt="Calgary lawn spray service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Calgary lawn spray service" //KW
            desc="W e f i"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="r"
            cardDesc3="l"
            />
            <Approach
            title="Calgary lawn spray service" //KW
            desc="t e   u"
            />
            <Intro
            subtitle="Exceptional Calgary lawn spray service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="   "
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
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
        