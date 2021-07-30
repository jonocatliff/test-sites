
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
            title="Calgary patio construction | We'll Take Care Of Everything" 
            desc="Calgary patio construction: c y"
            canonical={`${props.website}/calgary-patio-construction`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary patio construction" //KW
            />
            <Header
            title="Calgary patio construction" //KW
            subtitle="c y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="d i"
            image="/window-installations.jpg"
            alt="Calgary patio construction"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Calgary patio construction" //KW
            desc="a l l undefined"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="i"
            cardDesc3="t"
            />
            <Approach
            title="Calgary patio construction" //KW
            desc="e   u e"
            />
            <Intro
            subtitle="Exceptional Calgary patio construction" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="r undefined"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="j"
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
        