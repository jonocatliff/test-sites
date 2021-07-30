
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
            title="Boston backyard landscape design | We'll Take Care Of Everything" 
            desc="Boston backyard landscape design: w o"
            canonical={`${props.website}/boston-backyard-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston backyard landscape design" //KW
            />
            <Header
            title="Boston backyard landscape design" //KW
            subtitle="w o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  n"
            image="/window-installation.jpg"
            alt="Boston backyard landscape design"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Boston backyard landscape design" //KW
            desc="e   o u"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="v"
            cardDesc3="u"
            />
            <Approach
            title="Boston backyard landscape design" //KW
            desc="u w a n"
            />
            <Intro
            subtitle="Exceptional Boston backyard landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="n r"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="a"
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
        