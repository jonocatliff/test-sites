
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
            title="San Jose window cleaning | We'll Take Care Of Everything" 
            desc="San Jose window cleaning: i e"
            canonical={`${props.website}/san-jose-window-cleaning`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose window cleaning" //KW
            />
            <Header
            title="San Jose window cleaning" //KW
            subtitle="i e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="v t"
            image="/window-installations.jpg"
            alt="San Jose window cleaning"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Jose window cleaning" //KW
            desc="d o m n"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="n"
            cardDesc3="o"
            />
            <Approach
            title="San Jose window cleaning" //KW
            desc="u   j  "
            />
            <Intro
            subtitle="Exceptional San Jose window cleaning" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="i F"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="o"
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
        