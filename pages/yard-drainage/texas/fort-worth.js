
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
            title="Fort Worth yard drainage | We'll Take Care Of Everything" 
            desc="Fort Worth yard drainage: v t"
            canonical={`${props.website}/fort-worth-yard-drainage`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth yard drainage" //KW
            />
            <Header
            title="Fort Worth yard drainage" //KW
            subtitle="v t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  i"
            image="/contractor.jpg"
            alt="Fort Worth yard drainage"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Fort Worth yard drainage" //KW
            desc="y u o undefined"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="Fort Worth yard drainage" //KW
            desc="s m y k"
            />
            <Intro
            subtitle="Exceptional Fort Worth yard drainage" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="r undefined"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="p"
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
        