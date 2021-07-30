
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
            title="Columbus backyard landscape design | We'll Take Care Of Everything" 
            desc="Columbus backyard landscape design:   r"
            canonical={`${props.website}/columbus-backyard-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus backyard landscape design" //KW
            />
            <Header
            title="Columbus backyard landscape design" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o a"
            image="/contractor.jpg"
            alt="Columbus backyard landscape design"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Columbus backyard landscape design" //KW
            desc="s i a l"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="n"
            cardDesc3="u"
            />
            <Approach
            title="Columbus backyard landscape design" //KW
            desc="n   a i"
            />
            <Intro
            subtitle="Exceptional Columbus backyard landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="p e"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="n"
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
        