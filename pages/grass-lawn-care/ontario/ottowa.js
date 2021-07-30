
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
            title="Ottowa grass lawn care | We'll Take Care Of Everything" 
            desc="Ottowa grass lawn care: o  "
            canonical={`${props.website}/ottowa-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa grass lawn care" //KW
            />
            <Header
            title="Ottowa grass lawn care" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s l"
            image="/window-washing.jpg"
            alt="Ottowa grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Ottowa grass lawn care" //KW
            desc="l l o u"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="i"
            cardDesc3="y"
            />
            <Approach
            title="Ottowa grass lawn care" //KW
            desc="p t l  "
            />
            <Intro
            subtitle="Exceptional Ottowa grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="t r"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="e"
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
        