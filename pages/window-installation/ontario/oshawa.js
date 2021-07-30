
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
            title="Oshawa window installation | We'll Take Care Of Everything" 
            desc="Oshawa window installation: n r"
            canonical={`${props.website}/oshawa-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa window installation" //KW
            />
            <Header
            title="Oshawa window installation" //KW
            subtitle="n r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="y i"
            image="/contractor.jpg"
            alt="Oshawa window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oshawa window installation" //KW
            desc="t n m u"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="d"
            cardDesc3="e"
            />
            <Approach
            title="Oshawa window installation" //KW
            desc="W r i  "
            />
            <Intro
            subtitle="Exceptional Oshawa window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="  i"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="o"
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
        