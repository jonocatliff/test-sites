
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
            title="San Jose backyard garden design | We'll Take Care Of Everything" 
            desc="San Jose backyard garden design: d e"
            canonical={`${props.website}/san-jose-backyard-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose backyard garden design" //KW
            />
            <Header
            title="San Jose backyard garden design" //KW
            subtitle="d e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s r"
            image="/window-washing.jpg"
            alt="San Jose backyard garden design"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Jose backyard garden design" //KW
            desc="e I c e"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="w"
            cardDesc3="a"
            />
            <Approach
            title="San Jose backyard garden design" //KW
            desc="  t   c"
            />
            <Intro
            subtitle="Exceptional San Jose backyard garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="n r"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="c"
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
        