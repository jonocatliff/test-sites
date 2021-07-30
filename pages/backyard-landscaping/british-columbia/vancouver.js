
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
            title="Vancouver backyard landscaping | We'll Take Care Of Everything" 
            desc="Vancouver backyard landscaping: a s"
            canonical={`${props.website}/vancouver-backyard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver backyard landscaping" //KW
            />
            <Header
            title="Vancouver backyard landscaping" //KW
            subtitle="a s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a W"
            image="/window-washing.jpg"
            alt="Vancouver backyard landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Vancouver backyard landscaping" //KW
            desc="s o   p"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Vancouver backyard landscaping" //KW
            desc="w o   e"
            />
            <Intro
            subtitle="Exceptional Vancouver backyard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="t  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="u"
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
        