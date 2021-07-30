
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
            title="Philadelphia lawn maintenance services | We'll Take Care Of Everything" 
            desc="Philadelphia lawn maintenance services: l y"
            canonical={`${props.website}/philadelphia-lawn-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia lawn maintenance services" //KW
            />
            <Header
            title="Philadelphia lawn maintenance services" //KW
            subtitle="l y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r g"
            image="/window-washing.jpg"
            alt="Philadelphia lawn maintenance services"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Philadelphia lawn maintenance services" //KW
            desc="i   o i"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=","
            cardDesc2="o"
            cardDesc3="l"
            />
            <Approach
            title="Philadelphia lawn maintenance services" //KW
            desc="s e   v"
            />
            <Intro
            subtitle="Exceptional Philadelphia lawn maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="a w"
            cardDesc3="W"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2=" "
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
        