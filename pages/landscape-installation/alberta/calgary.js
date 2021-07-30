
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
            title="Calgary landscape installation | We'll Take Care Of Everything" 
            desc="Calgary landscape installation: y d"
            canonical={`${props.website}/calgary-landscape-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary landscape installation" //KW
            />
            <Header
            title="Calgary landscape installation" //KW
            subtitle="y d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a i"
            image="/window-installation.jpg"
            alt="Calgary landscape installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Calgary landscape installation" //KW
            desc="c   e f"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2=" "
            cardDesc3="a"
            />
            <Approach
            title="Calgary landscape installation" //KW
            desc="  s c u"
            />
            <Intro
            subtitle="Exceptional Calgary landscape installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="s  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="d"
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
        