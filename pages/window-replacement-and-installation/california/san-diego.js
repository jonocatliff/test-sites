
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
            title="San Diego window replacement and installation | We'll Take Care Of Everything" 
            desc="San Diego window replacement and installation: v e"
            canonical={`${props.website}/san-diego-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego window replacement and installation" //KW
            />
            <Header
            title="San Diego window replacement and installation" //KW
            subtitle="v e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="u  "
            image="/window-washing.jpg"
            alt="San Diego window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Diego window replacement and installation" //KW
            desc="s t k u"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="f"
            cardDesc3="w"
            />
            <Approach
            title="San Diego window replacement and installation" //KW
            desc="  f   s"
            />
            <Intro
            subtitle="Exceptional San Diego window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="  c"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
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
        