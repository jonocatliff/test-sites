
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
            title="Halifax window replacement | We'll Take Care Of Everything" 
            desc="Halifax window replacement:   t"
            canonical={`${props.website}/halifax-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax window replacement" //KW
            />
            <Header
            title="Halifax window replacement" //KW
            subtitle="  t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o s"
            image="/window-installations.jpg"
            alt="Halifax window replacement"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Halifax window replacement" //KW
            desc="  r t w"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="g"
            cardDesc3="i"
            />
            <Approach
            title="Halifax window replacement" //KW
            desc="w h v n"
            />
            <Intro
            subtitle="Exceptional Halifax window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="a  "
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="y"
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
        