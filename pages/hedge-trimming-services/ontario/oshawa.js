
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
            title="Oshawa hedge trimming services | We'll Take Care Of Everything" 
            desc="Oshawa hedge trimming services: n p"
            canonical={`${props.website}/oshawa-hedge-trimming-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa hedge trimming services" //KW
            />
            <Header
            title="Oshawa hedge trimming services" //KW
            subtitle="n p"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r e"
            image="/contractor.jpg"
            alt="Oshawa hedge trimming services"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oshawa hedge trimming services" //KW
            desc="o l a e"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="s"
            cardDesc3="f"
            />
            <Approach
            title="Oshawa hedge trimming services" //KW
            desc="i f d e"
            />
            <Intro
            subtitle="Exceptional Oshawa hedge trimming services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="r n"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="a"
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
        