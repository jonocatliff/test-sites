
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
            title="Houston window replacement and installation | We'll Take Care Of Everything" 
            desc="Houston window replacement and installation: o s"
            canonical={`${props.website}/houston-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston window replacement and installation" //KW
            />
            <Header
            title="Houston window replacement and installation" //KW
            subtitle="o s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t t"
            image="/window-washing.jpg"
            alt="Houston window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Houston window replacement and installation" //KW
            desc="i o   l"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3="k"
            />
            <Approach
            title="Houston window replacement and installation" //KW
            desc="    h e"
            />
            <Intro
            subtitle="Exceptional Houston window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="o i"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="s"
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
        