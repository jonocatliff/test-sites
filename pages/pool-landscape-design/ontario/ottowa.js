
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
            title="Ottowa pool landscape design | We'll Take Care Of Everything" 
            desc="Ottowa pool landscape design: p  "
            canonical={`${props.website}/ottowa-pool-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa pool landscape design" //KW
            />
            <Header
            title="Ottowa pool landscape design" //KW
            subtitle="p  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r e"
            image="/window-installation.jpg"
            alt="Ottowa pool landscape design"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Ottowa pool landscape design" //KW
            desc="p W r undefined"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=" "
            cardDesc3="w"
            />
            <Approach
            title="Ottowa pool landscape design" //KW
            desc="  f t e"
            />
            <Intro
            subtitle="Exceptional Ottowa pool landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="t undefined"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="f" //KW
            desc2="i"
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
        