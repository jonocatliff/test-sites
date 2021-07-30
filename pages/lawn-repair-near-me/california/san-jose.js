
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
            title="San Jose lawn repair near me | We'll Take Care Of Everything" 
            desc="San Jose lawn repair near me: s l"
            canonical={`${props.website}/san-jose-lawn-repair-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose lawn repair near me" //KW
            />
            <Header
            title="San Jose lawn repair near me" //KW
            subtitle="s l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="t n"
            image="/window-installation.jpg"
            alt="San Jose lawn repair near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Jose lawn repair near me" //KW
            desc="o a s f"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="San Jose lawn repair near me" //KW
            desc="t o k ,"
            />
            <Intro
            subtitle="Exceptional San Jose lawn repair near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="c o"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="w"
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
        