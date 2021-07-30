
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
            title="Louisville cheap window replacement | We'll Take Care Of Everything" 
            desc="Louisville cheap window replacement: h d"
            canonical={`${props.website}/louisville-cheap-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville cheap window replacement" //KW
            />
            <Header
            title="Louisville cheap window replacement" //KW
            subtitle="h d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="u e"
            image="/window-installations.jpg"
            alt="Louisville cheap window replacement"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Louisville cheap window replacement" //KW
            desc="c A   s"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="u"
            cardDesc3="r"
            />
            <Approach
            title="Louisville cheap window replacement" //KW
            desc="p s a s"
            />
            <Intro
            subtitle="Exceptional Louisville cheap window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t w"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="c"
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
        