
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
            title="Victoria landscape curbing | We'll Take Care Of Everything" 
            desc="Victoria landscape curbing: n W"
            canonical={`${props.website}/victoria-landscape-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria landscape curbing" //KW
            />
            <Header
            title="Victoria landscape curbing" //KW
            subtitle="n W"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  o"
            image="/window-washing.jpg"
            alt="Victoria landscape curbing"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Victoria landscape curbing" //KW
            desc="n   d s"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="n"
            cardDesc3="A"
            />
            <Approach
            title="Victoria landscape curbing" //KW
            desc="W c i o"
            />
            <Intro
            subtitle="Exceptional Victoria landscape curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="y n"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="r"
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
        