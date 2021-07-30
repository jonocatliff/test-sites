
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
            title="Ottowa bush trimming | We'll Take Care Of Everything" 
            desc="Ottowa bush trimming: I o"
            canonical={`${props.website}/ottowa-bush-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa bush trimming" //KW
            />
            <Header
            title="Ottowa bush trimming" //KW
            subtitle="I o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e t"
            image="/window-installations.jpg"
            alt="Ottowa bush trimming"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Ottowa bush trimming" //KW
            desc="f e s t"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="w"
            cardDesc3="w"
            />
            <Approach
            title="Ottowa bush trimming" //KW
            desc="l r r s"
            />
            <Intro
            subtitle="Exceptional Ottowa bush trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="h w"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="r"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        