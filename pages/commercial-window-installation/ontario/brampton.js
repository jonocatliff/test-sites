
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
            title="Brampton commercial window installation | We'll Take Care Of Everything" 
            desc="Brampton commercial window installation: d w"
            canonical={`${props.website}/brampton-commercial-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton commercial window installation" //KW
            />
            <Header
            title="Brampton commercial window installation" //KW
            subtitle="d w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o  "
            image="/window-installations.jpg"
            alt="Brampton commercial window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Brampton commercial window installation" //KW
            desc="l p o p"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2=" "
            cardDesc3="w"
            />
            <Approach
            title="Brampton commercial window installation" //KW
            desc="e      "
            />
            <Intro
            subtitle="Exceptional Brampton commercial window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="l"
            cardDesc2="r r"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="r"
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
        