
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
            title="Houston landscape rocks | We'll Take Care Of Everything" 
            desc="Houston landscape rocks: l l"
            canonical={`${props.website}/houston-landscape-rocks`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston landscape rocks" //KW
            />
            <Header
            title="Houston landscape rocks" //KW
            subtitle="l l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="l d"
            image="/contractor.jpg"
            alt="Houston landscape rocks"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Houston landscape rocks" //KW
            desc="P h t a"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Houston landscape rocks" //KW
            desc="o w d o"
            />
            <Intro
            subtitle="Exceptional Houston landscape rocks" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="   "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="t"
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
        