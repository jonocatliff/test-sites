
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
            title="Houston basement egress window replacement | We'll Take Care Of Everything" 
            desc="Houston basement egress window replacement: i f"
            canonical={`${props.website}/houston-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston basement egress window replacement" //KW
            />
            <Header
            title="Houston basement egress window replacement" //KW
            subtitle="i f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="y e"
            image="/window-installations.jpg"
            alt="Houston basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Houston basement egress window replacement" //KW
            desc="n t o u"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="l"
            cardDesc3=" "
            />
            <Approach
            title="Houston basement egress window replacement" //KW
            desc="  f   i"
            />
            <Intro
            subtitle="Exceptional Houston basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="f a"
            cardDesc3="l"
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
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        