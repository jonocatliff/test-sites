
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
            title="Denver backyard garden design | We'll Take Care Of Everything" 
            desc="Denver backyard garden design: l y"
            canonical={`${props.website}/denver-backyard-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver backyard garden design" //KW
            />
            <Header
            title="Denver backyard garden design" //KW
            subtitle="l y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a v"
            image="/window-installations.jpg"
            alt="Denver backyard garden design"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Denver backyard garden design" //KW
            desc="f i s s"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="r"
            cardDesc3="l"
            />
            <Approach
            title="Denver backyard garden design" //KW
            desc="n t h e"
            />
            <Intro
            subtitle="Exceptional Denver backyard garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="h i"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="c"
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
        