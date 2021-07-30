
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
            title="Victoria natural lawn care | We'll Take Care Of Everything" 
            desc="Victoria natural lawn care: i  "
            canonical={`${props.website}/victoria-natural-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria natural lawn care" //KW
            />
            <Header
            title="Victoria natural lawn care" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r i"
            image="/window-washing.jpg"
            alt="Victoria natural lawn care"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Victoria natural lawn care" //KW
            desc="n r d y"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="y"
            cardDesc3=" "
            />
            <Approach
            title="Victoria natural lawn care" //KW
            desc="  w   r"
            />
            <Intro
            subtitle="Exceptional Victoria natural lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="d undefined"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="i"
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
        