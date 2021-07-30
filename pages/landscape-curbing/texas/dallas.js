
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
            title="Dallas landscape curbing | We'll Take Care Of Everything" 
            desc="Dallas landscape curbing: o o"
            canonical={`${props.website}/dallas-landscape-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas landscape curbing" //KW
            />
            <Header
            title="Dallas landscape curbing" //KW
            subtitle="o o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  e"
            image="/contractor.jpg"
            alt="Dallas landscape curbing"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Dallas landscape curbing" //KW
            desc="e v s  "
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="s"
            cardDesc3="i"
            />
            <Approach
            title="Dallas landscape curbing" //KW
            desc="o r i r"
            />
            <Intro
            subtitle="Exceptional Dallas landscape curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="n n"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="m"
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
        