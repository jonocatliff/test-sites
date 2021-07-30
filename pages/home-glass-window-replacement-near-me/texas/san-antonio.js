
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
            title="San Antonio home glass window replacement near me | We'll Take Care Of Everything" 
            desc="San Antonio home glass window replacement near me: i w"
            canonical={`${props.website}/san-antonio-home-glass-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio home glass window replacement near me" //KW
            />
            <Header
            title="San Antonio home glass window replacement near me" //KW
            subtitle="i w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="p t"
            image="/contractor.jpg"
            alt="San Antonio home glass window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Antonio home glass window replacement near me" //KW
            desc="h s e  "
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="San Antonio home glass window replacement near me" //KW
            desc="w s x e"
            />
            <Intro
            subtitle="Exceptional San Antonio home glass window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="u n"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="W" //KW
            desc2="m"
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
        