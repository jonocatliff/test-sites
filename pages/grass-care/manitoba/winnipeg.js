
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
            title="Winnipeg grass care | We'll Take Care Of Everything" 
            desc="Winnipeg grass care:   r"
            canonical={`${props.website}/winnipeg-grass-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg grass care" //KW
            />
            <Header
            title="Winnipeg grass care" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="c  "
            image="/window-installations.jpg"
            alt="Winnipeg grass care"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Winnipeg grass care" //KW
            desc="  a u m"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="o"
            cardDesc3="o"
            />
            <Approach
            title="Winnipeg grass care" //KW
            desc="w t e r"
            />
            <Intro
            subtitle="Exceptional Winnipeg grass care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="a y"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="l"
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
        