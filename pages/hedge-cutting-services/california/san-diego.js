
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
            title="San Diego hedge cutting services | We'll Take Care Of Everything" 
            desc="San Diego hedge cutting services: f o"
            canonical={`${props.website}/san-diego-hedge-cutting-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego hedge cutting services" //KW
            />
            <Header
            title="San Diego hedge cutting services" //KW
            subtitle="f o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s  "
            image="/window-installations.jpg"
            alt="San Diego hedge cutting services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Diego hedge cutting services" //KW
            desc="    O e"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="San Diego hedge cutting services" //KW
            desc="e O a  "
            />
            <Intro
            subtitle="Exceptional San Diego hedge cutting services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="c o"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="O" //KW
            desc2="e"
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
        