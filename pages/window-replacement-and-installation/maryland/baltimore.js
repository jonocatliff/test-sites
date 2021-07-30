
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
            title="Baltimore window replacement and installation | We'll Take Care Of Everything" 
            desc="Baltimore window replacement and installation: i t"
            canonical={`${props.website}/baltimore-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore window replacement and installation" //KW
            />
            <Header
            title="Baltimore window replacement and installation" //KW
            subtitle="i t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="m b"
            image="/window-washing.jpg"
            alt="Baltimore window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Baltimore window replacement and installation" //KW
            desc="  n   s"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="O"
            cardDesc2="w"
            cardDesc3="t"
            />
            <Approach
            title="Baltimore window replacement and installation" //KW
            desc="o r i  "
            />
            <Intro
            subtitle="Exceptional Baltimore window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="g w"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="l"
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
        