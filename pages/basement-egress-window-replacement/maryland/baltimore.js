
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
            title="Baltimore basement egress window replacement | We'll Take Care Of Everything" 
            desc="Baltimore basement egress window replacement: i l"
            canonical={`${props.website}/baltimore-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore basement egress window replacement" //KW
            />
            <Header
            title="Baltimore basement egress window replacement" //KW
            subtitle="i l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i d"
            image="/contractor.jpg"
            alt="Baltimore basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Baltimore basement egress window replacement" //KW
            desc="r a m o"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="s"
            cardDesc3="o"
            />
            <Approach
            title="Baltimore basement egress window replacement" //KW
            desc="  d   t"
            />
            <Intro
            subtitle="Exceptional Baltimore basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="e  "
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="w"
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
        