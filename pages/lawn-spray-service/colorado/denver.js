
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
            title="Denver lawn spray service | We'll Take Care Of Everything" 
            desc="Denver lawn spray service: s l"
            canonical={`${props.website}/denver-lawn-spray-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver lawn spray service" //KW
            />
            <Header
            title="Denver lawn spray service" //KW
            subtitle="s l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="y n"
            image="/window-washing.jpg"
            alt="Denver lawn spray service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Denver lawn spray service" //KW
            desc="w i e  "
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="o"
            cardDesc3="k"
            />
            <Approach
            title="Denver lawn spray service" //KW
            desc="a d t u"
            />
            <Intro
            subtitle="Exceptional Denver lawn spray service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="  y"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="-"
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
        