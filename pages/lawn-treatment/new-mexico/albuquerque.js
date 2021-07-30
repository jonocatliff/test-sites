
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
            title="Albuquerque lawn treatment | We'll Take Care Of Everything" 
            desc="Albuquerque lawn treatment:   u"
            canonical={`${props.website}/albuquerque-lawn-treatment`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque lawn treatment" //KW
            />
            <Header
            title="Albuquerque lawn treatment" //KW
            subtitle="  u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="w e"
            image="/window-washing.jpg"
            alt="Albuquerque lawn treatment"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Albuquerque lawn treatment" //KW
            desc="a e f s"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="y"
            cardDesc3="t"
            />
            <Approach
            title="Albuquerque lawn treatment" //KW
            desc="  l p a"
            />
            <Intro
            subtitle="Exceptional Albuquerque lawn treatment" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o t"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
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
        