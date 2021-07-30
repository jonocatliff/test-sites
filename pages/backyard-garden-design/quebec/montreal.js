
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
            title="Montreal backyard garden design | We'll Take Care Of Everything" 
            desc="Montreal backyard garden design: a v"
            canonical={`${props.website}/montreal-backyard-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal backyard garden design" //KW
            />
            <Header
            title="Montreal backyard garden design" //KW
            subtitle="a v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="c  "
            image="/contractor.jpg"
            alt="Montreal backyard garden design"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Montreal backyard garden design" //KW
            desc="  o p a"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="s"
            cardDesc3="t"
            />
            <Approach
            title="Montreal backyard garden design" //KW
            desc="e e   s"
            />
            <Intro
            subtitle="Exceptional Montreal backyard garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="  y"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="P" //KW
            desc2="w"
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
        