
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
            title="Charlotte backyard landscaping | We'll Take Care Of Everything" 
            desc="Charlotte backyard landscaping: n r"
            canonical={`${props.website}/charlotte-backyard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte backyard landscaping" //KW
            />
            <Header
            title="Charlotte backyard landscaping" //KW
            subtitle="n r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="I  "
            image="/window-washing.jpg"
            alt="Charlotte backyard landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Charlotte backyard landscaping" //KW
            desc="  i n e"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="w"
            cardDesc3=" "
            />
            <Approach
            title="Charlotte backyard landscaping" //KW
            desc="  l s s"
            />
            <Intro
            subtitle="Exceptional Charlotte backyard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="h t"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="a"
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
        