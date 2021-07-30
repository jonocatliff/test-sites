
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
            title="Baltimore cheap window replacement | We'll Take Care Of Everything" 
            desc="Baltimore cheap window replacement:   a"
            canonical={`${props.website}/baltimore-cheap-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore cheap window replacement" //KW
            />
            <Header
            title="Baltimore cheap window replacement" //KW
            subtitle="  a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  t"
            image="/window-installations.jpg"
            alt="Baltimore cheap window replacement"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Baltimore cheap window replacement" //KW
            desc="a ! l t"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="y"
            cardDesc3="t"
            />
            <Approach
            title="Baltimore cheap window replacement" //KW
            desc="e c , a"
            />
            <Intro
            subtitle="Exceptional Baltimore cheap window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="a u"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="j"
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
        