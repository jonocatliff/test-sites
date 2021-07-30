
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
            title="San Jose lawn and landscape | We'll Take Care Of Everything" 
            desc="San Jose lawn and landscape: c  "
            canonical={`${props.website}/san-jose-lawn-and-landscape`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose lawn and landscape" //KW
            />
            <Header
            title="San Jose lawn and landscape" //KW
            subtitle="c  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  f"
            image="/window-washing.jpg"
            alt="San Jose lawn and landscape"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Jose lawn and landscape" //KW
            desc="  p n O"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="o"
            cardDesc3="f"
            />
            <Approach
            title="San Jose lawn and landscape" //KW
            desc="s l n l"
            />
            <Intro
            subtitle="Exceptional San Jose lawn and landscape" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="p p"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="k"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        