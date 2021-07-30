
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
            title="Milwaukee front yard landscaping | We'll Take Care Of Everything" 
            desc="Milwaukee front yard landscaping: a  "
            canonical={`${props.website}/milwaukee-front-yard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee front yard landscaping" //KW
            />
            <Header
            title="Milwaukee front yard landscaping" //KW
            subtitle="a  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n t"
            image="/contractor.jpg"
            alt="Milwaukee front yard landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Milwaukee front yard landscaping" //KW
            desc="e . z w"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="y"
            cardDesc3="l"
            />
            <Approach
            title="Milwaukee front yard landscaping" //KW
            desc="d w   r"
            />
            <Intro
            subtitle="Exceptional Milwaukee front yard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="n i"
            cardDesc3="O"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2=","
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
        